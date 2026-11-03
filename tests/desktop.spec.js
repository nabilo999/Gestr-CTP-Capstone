import { test, expect, _electron as electron } from '@playwright/test';
import path from 'node:path';

test('desktop prototype: navigation, local controls, scrolling, resizing, and inert actions', async () => {
  const env = { ...process.env };
  delete env.ELECTRON_RUN_AS_NODE;
  delete env.GESTR_DEV_URL;
  const packagedExecutable = process.env.GESTR_TEST_EXECUTABLE;
  const app = await electron.launch({
    executablePath: packagedExecutable || undefined,
    args: packagedExecutable ? [] : [path.resolve('.')],
    env,
  });
  try {
    const page = await app.firstWindow();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await expect(page.getByRole('tab', { name: 'Home', exact: true })).toHaveAttribute('aria-selected', 'true');
    expect(page.url()).toMatch(/^file:/);
    await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].setSize(1440, 900));
    await expect(page.getByLabel('Mapping summary')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Add Mapping' })).toHaveCount(0);
    const summary = page.getByLabel('Mapping summary');
    expect(await summary.evaluate((el) => el.scrollHeight > el.clientHeight)).toBe(true);
    await summary.evaluate((el) => { el.scrollTop = el.scrollHeight; });
    expect(await summary.evaluate((el) => el.scrollTop)).toBeGreaterThan(0);
    await summary.evaluate((el) => { el.scrollTop = 0; });
    await page.screenshot({ path: 'test-results/home.png' });

    await page.getByRole('tab', { name: 'Mappings', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Add Mapping' })).toBeVisible();
    await expect(page.getByRole('combobox')).toHaveCount(28);
    await page.screenshot({ path: 'test-results/mappings.png' });
    await page.getByLabel('Gesture for W', { exact: true }).selectOption('Open Palm');
    await page.getByRole('tab', { name: 'Home', exact: true }).click();
    await expect(page.locator('.mapping-row').first()).toContainText('Open Palm');

    await page.getByRole('tab', { name: 'Gesture Settings', exact: true }).click();
    await page.screenshot({ path: 'test-results/gesture-settings.png' });
    const confidence = page.getByRole('slider', { name: 'Confidence Threshold', exact: true });
    await confidence.fill('0.82');
    await expect(page.getByRole('spinbutton', { name: 'Confidence Threshold value', exact: true })).toHaveValue('0.82');
    const background = page.getByRole('switch', { name: 'Run in Background', exact: true });
    await expect(background).not.toBeChecked();
    await background.click();
    await expect(background).toBeChecked();
    await page.getByRole('button', { name: 'Reset to Defaults', exact: true }).click();
    await expect(confidence).toHaveValue('0.82');

    await page.getByRole('tab', { name: 'Camera', exact: true }).click();
    await page.screenshot({ path: 'test-results/camera.png' });
    await expect(page.getByRole('img', { name: 'Static camera placeholder with a hand silhouette' })).toBeVisible();
    await expect(page.locator('video')).toHaveCount(0);
    await page.getByRole('button', { name: 'Start / Stop Camera', exact: true }).click();
    await page.getByRole('button', { name: 'Calibrate', exact: true }).click();
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await page.getByRole('button', { name: 'Test', exact: true }).click();
    expect(app.windows()).toHaveLength(1);
    expect(await page.evaluate(() => Object.keys(localStorage))).toHaveLength(0);

    await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].setSize(960, 640));
    for (const name of ['Home', 'Mappings', 'Gesture Settings', 'Camera']) {
      await page.getByRole('tab', { name, exact: true }).click();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      expect(await page.locator('.workspace').evaluate((el) => el.scrollWidth <= el.clientWidth)).toBe(true);
      expect(await page.locator('.slider-row label').evaluateAll((labels) => labels.every((label) => label.scrollWidth <= label.clientWidth + 1))).toBe(true);
      await page.screenshot({ path: `test-results/small-${name.toLowerCase().replaceAll(' ', '-')}.png` });
    }
    await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].maximize());
    await expect.poll(() => app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].isMaximized())).toBe(true);
    await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].unmaximize());
    await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].minimize());
    await expect.poll(() => app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].isMinimized())).toBe(true);
    await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].restore());
    await page.getByRole('tab', { name: 'Camera', exact: true }).focus();
    await page.keyboard.press('ArrowLeft');
    await expect(page.getByRole('tab', { name: 'Gesture Settings', exact: true })).toHaveAttribute('aria-selected', 'true');
    expect(errors).toEqual([]);
  } finally {
    await app.close();
  }
});

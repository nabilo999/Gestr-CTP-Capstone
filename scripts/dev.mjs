import { createServer } from 'vite';
import { spawn } from 'node:child_process';
import electron from 'electron';

const server = await createServer();
await server.listen();
const env = { ...process.env, GESTR_DEV_URL: server.resolvedUrls.local[0] };
delete env.ELECTRON_RUN_AS_NODE;
const child = spawn(electron, ['.'], { stdio: 'inherit', env });
child.on('error', async (error) => { console.error(error); await server.close(); process.exitCode = 1; });
child.on('exit', async (code) => { await server.close(); process.exitCode = code ?? 0; });

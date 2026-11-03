
# Gestr

**A CTP Capstone Project — Webcam-Based Game Controls**

Gestr is a desktop app concept that uses a webcam to recognize hand gestures and translate them into keyboard inputs chosen by the player. The project explores whether hand gestures can provide a usable alternative way to control games, which gestures are easiest to recognize, and what challenges arise during gameplay.

The goal is to experiment with gesture-based game control and learn how gesture recognition works. Gestr is not intended to replace a keyboard or connect directly to a specific game.

## Desktop UI Prototype

The current implementation is a **Windows desktop UI prototype** built with Electron and React. It includes Home, Mappings, Gesture Settings, and Camera, styled after the four supplied design references.

### Quick start(Windows)

Install Node.js 22.12 or newer, then open a terminal in your existing project folder and run:

```powershell
git pull
npm ci
npm start
```

`npm start` builds the interface and opens GESTR in its own desktop window. No browser or hosted service is needed. For development with automatic UI updates, run `npm run dev` instead.

### build a Windows executable

After completing `npm ci`, you can build your own executable instead of using `npm start`:

```powershell
npm run package
```

Open `release/win-unpacked/GESTR.exe`. Keep this executable with the other files in its folder

### What works in this version

- All four tabs, including keyboard navigation with the arrow keys.
- Dropdowns, sliders, numeric fields, and switches with temporary visual state.
- Mapping edits reflected in the Home overview.
- Mapping list scrolling and resizable, minimizable, maximizable windows.

All values reset when the app closes. Save, Test, Add Mapping, Reset to Defaults, Start / Stop Camera, and Calibrate are intentionally visual placeholders. The hand illustration, Camera Active label, and status badges are static mockup content. There is **no webcam access, recognition, input injection, calibration, configuration persistence, or backend connection**.

The initial Home mouse-axis summaries use “Swipe Left / Right” and “Swipe Up / Down” as shown in the reference. Their dropdown defaults use “Swipe Right” and “Swipe Up” from the Mappings specification. Editing either gesture replaces the overview summary with the selected value.

### Structure and checks

- `electron/main.cjs`: desktop window and native Windows title-bar controls.
- `src/pages/`: the four pages.
- `src/components/`: reusable panels, controls, mappings, and static preview artwork.
- `src/data.js`: mapping defaults and option lists.
- `src/styles.css` and `src/theme.css`: shared layout and appearance.
- `tests/desktop.spec.js`: Electron smoke test for navigation, controls, scrolling, resizing, and placeholder actions.

Run `npm test` to build and test the actual Electron window. Screenshots are written to the ignored `test-results/` folder. Run the tests in an interactive Windows desktop session. The app icon is included in `build/`; `scripts/generate-icon.ps1` regenerates it using Windows drawing APIs.

## Project Goals

- **Recognize hand gestures:** Explore whether the app can reliably recognize a small set of selected gestures.
- **Customize controls:** Let players assign recognized gestures to keyboard keys.
- **Test different play conditions:** Explore how games, gestures, camera placement, and lighting affect the experience.
- **Evaluate reliability:** Record missed or misread gestures, incorrect inputs, and delays during gameplay.

## How It Will Work

1. **Open the app** and turn on the webcam.
2. **Check the camera** to see whether the app can detect and follow the player's hand.
3. **Choose controls** by assigning gestures to keyboard keys.
4. **Try a game** and test the mapped controls.
5. **Pause or stop** gesture controls at any time.

## Planned Features

### Core Project

- Webcam status and hand tracking feedback
- A small set of hand gestures
- User-configurable gesture-to-key mappings
- Controls to start, pause, and stop gesture input
- Testing in one or more selected games

### Stretch Goals

- Additional gestures
- Movement-based gestures
- Saved control configurations

### Out of Scope

- Modifying game source code
- Supporting every game or computer setup
- Replacing conventional keyboard controls
- Recording and saving webcam video as a normal part of use

## Technical Approach

The team plans to build its own model to recognize the selected gestures.

The technical work is expected to include three main parts:

1. **Hand detection and key points:** Explore using an existing hand-landmark model or training a point-finding model, depending on time and instructor guidance.
2. **Gesture recognition:** Collect and label examples of the selected gestures, then train a model to recognize gestures from hand information.
3. **Keyboard input:** Connect recognized gestures to the keyboard keys selected by the player and test the controls on the chosen computer setup.

The approach to hand-landmark detection is still undecided. The team plans to seek instructor guidance before making that choice.

## Testing and Evaluation

The team will collect examples of selected gestures and use them to train the gesture-recognition model. The model will then be tested on new attempts and, if possible, with different people and room conditions.

During testing, the team will evaluate:

- Which gestures are recognized correctly or confused with others
- Missed gestures and unintended inputs
- Response delays and consistency during gameplay
- How camera placement and lighting affect detection

## Project Roadmap

See [ROADMAP.md](ROADMAP.md) for the project checklist and available tasks.


## Team

Nabil Said  |  Suliman Alabili  |  Bienbendo Angeles   |  Mohamed Awad


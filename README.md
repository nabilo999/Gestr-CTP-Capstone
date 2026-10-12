
# Gestr

**A CTP Capstone Project — Webcam-Based Game Controls**

Gestr is a desktop app concept that uses a webcam to recognize hand gestures and translate them into keyboard inputs chosen by the player. The project explores whether hand gestures can provide a usable alternative way to control games, which gestures are easiest to recognize, and what challenges arise during gameplay.

The goal is to experiment with gesture-based game control and learn how gesture recognition works. Gestr is not intended to replace a keyboard or connect directly to a specific game.

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

1. **Choose the first test:** Select a small set of gestures, one or two games, and the computer setup for the demo.
2. **Test the camera:** Build a basic demo that displays the webcam and indicates whether a hand can be tracked.
3. **Test gesture recognition:** Collect and label gesture examples, train the model, and evaluate recognition results.
4. **Add game controls:** Allow players to map gestures to keys and test the mappings in selected games.
5. **Share the results:** Document the tests, challenges, findings, and next steps in the capstone presentation and repository.


## Team

Nabil Said  |  Suliman Alabili  |  Bienbendo Angeles   |  Mohamed Awad


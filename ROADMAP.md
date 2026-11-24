# GESTR Roadmap

Gestr uses MediaPipe to find hand landmarks, a classifier to recognize eight poses, and gesture mappings to control a game. The capstone measures which poses the classifier recognizes reliably and what happens when those predictions become game inputs.

Pick a workstream, add your name beside it, and check off each deliverable when it is done.

## Complete

- [x] Build the Electron UI prototype with Home, Mappings, Gesture Settings, and Camera tabs.
- [x] Choose the initial gestures, controls, and game for the demo.
- [x] Build the webcam collector. MediaPipe finds 21 landmarks, the preview draws the skeleton, and each save records the 63 coordinates with the gesture selected in the dropdown.
- [x] Collect the first team dataset. The four committed CSVs contain 857 samples from four people, one session each. Every person recorded all eight gestures, including open palm for neutral.
- [x] Merge the team dataset into [gestures_master.csv](data/gestures_master.csv) and prepare fixed [training](data/gestures_train.csv) and [test](data/gestures_test.csv) files. The test set contains about 20% of each person's samples for each gesture. The split contains 686 training rows and 171 test rows.
- [x] Preserve [Suliman's earlier webcam and Random Forest demo](deprecated/README.md) as a starting point for live prediction and training.

## 1. Train and evaluate the classifier

- [ ] Load the training and test CSVs. Use the 63 landmark columns as inputs and the `gesture` column as the answer the model learns. Use participant and session IDs for reporting.
- [ ] Train a first Random Forest on the training CSV using the pattern in [the original training script](deprecated/old-gesture-demo/train_model.py). Evaluate the trained model on the test CSV.
- [ ] Record the number correct out of all test samples and the number correct for each gesture. Use a confusion matrix to show which gestures were mistaken for each other. The CSV score measures new samples from the same contributors and sessions. Use a fresh volunteer to check how the model does with a new person.
- [ ] Save the model used for the demo and write down which data it was trained on, the input order, and how to reproduce the reported evaluation.

## 2. Run the new model on the webcam

- [ ] Reuse the collector's MediaPipe tracking and the earlier demo's live prediction flow. Feed the classifier the same 63 values in the same order with the same mirrored-camera convention used in collection. Show the predicted gesture and a clear no-hand state in a Python webcam preview.
- [ ] Have a volunteer try each of the eight poses several times. Record correct, missed, or incorrect predictions by gesture. Test holding a pose, switching poses, and taking the hand out of frame.
- [ ] Hand off the live prediction to the desktop workstream with a consistent gesture label and a no-hand state.

## 3. Connect the Windows app and finish the demo

- [ ] Show the real camera preview and predicted gesture in Electron. Connect the existing mappings to the agreed demo actions. The collector uses open palm as neutral, so update the prototype's Open Palm → E mapping to match.
- [ ] Wire start, pause, and stop. Release held controls on neutral, hand loss, pause, or stop.
- [ ] Run a short round in the chosen game. Write down the intended action, what happened, and whether any input was missed, triggered accidentally, or felt delayed. Check that the controls release when the hand disappears.
- [ ] Package the Windows build and prepare the demo and presentation. Show the dataset counts, the held-out test results, and one gameplay finding that explains what worked or what needs improvement.

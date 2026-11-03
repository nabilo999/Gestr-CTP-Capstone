# GESTR Roadmap

Pick a task, add your name beside it, and check it off when it is finished.

- [x] Build the desktop UI prototype with Home, Mappings, Gesture Settings, and Camera tabs.
- [x] Choose the first gestures, keyboard controls, and game for the demo.
- [ ] Set up Python and MediaPipe to find hands and their finger and joint points.
- [ ] Build a webcam preview that shows the hand points from MediaPipe.
- [ ] Collect labeled pictures or short clips of each gesture from different people and lighting conditions.
- [ ] Turn the hand points into labeled training data and include examples of no intended gesture.
- [ ] Split the data into training, validation, and test sets, keeping people or recording sessions separate.
- [ ] Train our own model to recognize gestures from the hand points.
- [ ] Use the validation set to improve the model and choose confidence and timing settings.
- [ ] Run the model on live webcam frames and show the predicted gesture.
- [ ] Connect the camera preview, predictions, and settings to the desktop UI.
- [ ] Connect recognized gestures to the selected keyboard controls and add mouse controls if needed for the demo.
- [ ] Add working start, pause, and stop controls, including a way to release held keys safely.
- [ ] Package the Windows app and prepare the demo, instructions, and presentation.
- [ ] Test and evaluate the final model and app on held-out data and gameplay, recording accuracy, false inputs, missed gestures, and delay.

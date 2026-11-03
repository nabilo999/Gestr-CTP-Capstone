export const keyboardOptions = [
  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', ...'0123456789', 'Space', 'Enter', 'Escape',
  'Tab', 'Backspace', 'Shift', 'Ctrl', 'Alt', 'Arrow Up', 'Arrow Down', 'Arrow Left', 'Arrow Right',
];
export const mouseOptions = ['Left Click', 'Right Click', 'Middle Click', 'Mouse Move X', 'Mouse Move Y', 'Scroll Up', 'Scroll Down'];
export const gestureOptions = ['Point Up', 'Point Down', 'Point Left', 'Point Right', 'Closed Fist', 'Pinch', 'Thumbs Up', 'Open Palm', 'Two Fingers', 'Swipe Left', 'Swipe Right', 'Swipe Up', 'Swipe Down'];
// Shared initial mappings keep the Home overview and Mappings page consistent.
// The axis summaries describe the eventual bidirectional movement controls.
export const initialMappings = [
  { id: 'up', action: 'W', gesture: 'Point Up' },
  { id: 'down', action: 'S', gesture: 'Point Down' },
  { id: 'left', action: 'A', gesture: 'Point Left' },
  { id: 'right', action: 'D', gesture: 'Point Right' },
  { id: 'jump', action: 'Space', gesture: 'Two Fingers' },
  { id: 'primary', action: 'Left Click', gesture: 'Closed Fist' },
  { id: 'secondary', action: 'Right Click', gesture: 'Pinch' },
  { id: 'reload', action: 'R', gesture: 'Thumbs Up' },
  { id: 'interact', action: 'E', gesture: 'Open Palm' },
  { id: 'escape', action: 'Escape', gesture: 'Swipe Left' },
  { id: 'mouse-x', action: 'Mouse Move X', gesture: 'Swipe Right', summary: 'Swipe Left / Right' },
  { id: 'mouse-y', action: 'Mouse Move Y', gesture: 'Swipe Up', summary: 'Swipe Up / Down' },
  { id: 'scroll-up', action: 'Scroll Up', gesture: 'Swipe Up' },
  { id: 'scroll-down', action: 'Scroll Down', gesture: 'Swipe Down' },
];
export const homeOrder = ['up', 'down', 'left', 'right', 'jump', 'primary', 'secondary', 'reload', 'mouse-x', 'mouse-y', 'interact', 'escape', 'scroll-up', 'scroll-down'];
export const cameraSources = ['Integrated Camera', 'USB Webcam', 'Virtual Camera', 'No Camera'];
export const handOptions = ['Right Hand', 'Left Hand', 'Both Hands'];
export const regionOptions = ['Full Frame', 'Center Only'];

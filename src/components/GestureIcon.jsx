import { Hand, Pointer, Grab, ThumbsUp, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, MoveHorizontal, MoveVertical } from 'lucide-react';

export default function GestureIcon({ gesture }) {
  let Icon = Pointer;
  if (gesture === 'Open Palm') Icon = Hand;
  if (gesture === 'Closed Fist') Icon = Grab;
  if (gesture === 'Thumbs Up') Icon = ThumbsUp;
  const Direction = gesture.includes('/') ? (gesture.includes('Left') ? MoveHorizontal : MoveVertical)
    : gesture.includes('Up') && gesture !== 'Thumbs Up' ? ArrowUp
    : gesture.includes('Down') ? ArrowDown
    : gesture.includes('Left') ? ArrowLeft
    : gesture.includes('Right') ? ArrowRight : null;
  return <span className="gesture-icon" aria-hidden="true">
    {Direction && <Direction className="gesture-direction" />}
    {gesture === 'Two Fingers' ? <svg viewBox="0 0 32 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19 8 6 Q7 1 10 1 Q12 1 13 5 L17 17 20 4 Q21 0 24 2 Q26 3 24 8 L21 21 Q27 18 28 22 L27 29 Q25 34 20 35 H13 Q8 33 7 29 L3 22 Q2 18 5 18 L10 23" /></svg>
      : gesture === 'Pinch' ? <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m32 31-7-12-10-9 Q12 7 10 9 L5 14 Q3 16 5 18 Q7 20 9 17 L12 14 18 20 12 19 Q7 18 7 21 Q7 24 13 25 L20 27 25 33 M3 6l-2-3 M7 4V1 M2 11H0" /></svg>
      : <Icon className={gesture === 'Point Left' ? 'point-left' : gesture === 'Point Right' ? 'point-right' : ''} />}
  </span>;
}

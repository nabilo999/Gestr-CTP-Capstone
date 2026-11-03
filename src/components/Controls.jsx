import { useId } from 'react';
import { ChevronDown } from 'lucide-react';

export function Button({ icon: Icon, children, className = '', ...props }) {
  return <button type="button" className={`button ${className}`} {...props}>{Icon && <Icon aria-hidden="true" />}{children}</button>;
}

export function Select({ label, value, options, onChange, children, className = '' }) {
  const id = useId();
  return <div className={`control-row select-row ${className}`}>
    {label && <label htmlFor={id}>{label}:</label>}
    <div className="select-wrap">
      <select id={id} aria-label={label || 'Select option'} value={value} onChange={(event) => onChange(event.target.value)}>
        {children || options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
      <ChevronDown aria-hidden="true" />
    </div>
  </div>;
}

export function Slider({ label, value, onChange, min = 0, max = 1, step = 0.01 }) {
  const id = useId();
  const digits = step < 1 ? 2 : 0;
  const change = (raw) => {
    if (raw === '') return;
    const next = Number(raw);
    if (Number.isFinite(next)) onChange(Math.min(max, Math.max(min, next)));
  };
  return <div className="control-row slider-row">
    <label htmlFor={id}>{label}:</label>
    <input id={id} aria-label={label} type="range" min={min} max={max} step={step} value={value}
      style={{ '--fill': `${((value - min) / (max - min)) * 100}%` }} onChange={(event) => change(event.target.value)} />
    <input className="number-input" aria-label={`${label} value`} type="number" min={min} max={max} step={step}
      value={Number(value).toFixed(digits)} onChange={(event) => change(event.target.value)} />
  </div>;
}

export function Toggle({ label, value, onChange }) {
  const id = useId();
  return <div className="control-row toggle-row">
    <label htmlFor={id}>{label}:</label>
    <button id={id} type="button" className={`toggle ${value ? 'is-on' : ''}`} role="switch" aria-checked={value}
      aria-label={label} onClick={() => onChange(!value)}><span /></button>
  </div>;
}

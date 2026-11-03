import { Select } from './Controls.jsx';
import GestureIcon from './GestureIcon.jsx';
import { keyboardOptions, mouseOptions, gestureOptions } from '../data.js';

export function MappingHead() {
  return <div className="mapping-head" aria-hidden="true"><span>Input Action</span><span>Gesture</span></div>;
}

export function MappingRow({ mapping, editable = false, onChange }) {
  const gesture = editable ? mapping.gesture : (mapping.summary || mapping.gesture);
  return <div className={`mapping-row ${editable ? 'editable' : ''}`}>
    <div className="mapping-cell action-cell">{editable ? <Select label={`Input action for ${mapping.action}`} value={mapping.action} onChange={(action) => onChange({ ...mapping, action })}>
      <optgroup label="Keyboard">{keyboardOptions.map((key) => <option key={key} value={key}>{key === 'Escape' ? 'Esc' : key}</option>)}</optgroup>
      <optgroup label="Mouse">{mouseOptions.map((key) => <option key={key}>{key}</option>)}</optgroup>
    </Select> : <span>{mapping.action === 'Escape' ? 'Esc' : mapping.action}</span>}</div>
    <div className="mapping-cell gesture-cell">{editable ? <Select label={`Gesture for ${mapping.action}`} value={mapping.gesture} options={gestureOptions}
      onChange={(next) => onChange({ ...mapping, gesture: next, summary: undefined })} /> : <span>{gesture}</span>}
      <GestureIcon gesture={gesture} />
    </div>
  </div>;
}

import { Plus } from 'lucide-react';
import { Panel } from '../components/Panels.jsx';
import { Button } from '../components/Controls.jsx';
import { MappingHead, MappingRow } from '../components/Mappings.jsx';

export default function Mappings({ mappings, onChange }) {
  return <Panel title="Gesture Mappings" blue className="mappings-panel"
    extra={<Button icon={Plus} title="UI preview only">Add Mapping</Button>}>
    <div className="mapping-columns">
      {[mappings.slice(0, 6), mappings.slice(6)].map((group, index) => <div className="mapping-group" key={index}>
        <MappingHead />
        <div className="mapping-scroll" tabIndex={0} aria-label={`${index === 0 ? 'Left' : 'Right'} mapping list`}>
          {group.map((mapping) => <MappingRow key={mapping.id} mapping={mapping} editable onChange={onChange} />)}
        </div>
      </div>)}
    </div>
  </Panel>;
}

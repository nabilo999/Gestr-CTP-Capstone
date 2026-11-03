import { Camera, Mouse, Target } from 'lucide-react';
import { Panel } from '../components/Panels.jsx';
import { Slider, Select, Toggle } from '../components/Controls.jsx';
import CameraPreview from '../components/CameraPreview.jsx';
import { MappingHead, MappingRow } from '../components/Mappings.jsx';
import { cameraSources, homeOrder } from '../data.js';

export default function Home({ mappings, settings, set }) {
  return <div className="home-layout">
    <Panel title="Gesture Mappings" blue className="home-mappings">
      <MappingHead />
      <div className="mapping-scroll" tabIndex={0} aria-label="Mapping summary">
        {homeOrder.map((id) => <MappingRow key={id} mapping={mappings.find((mapping) => mapping.id === id)} />)}
      </div>
    </Panel>
    <div className="home-settings">
      <Panel title="Recognition" icon={Target}>
        <Slider label="Confidence Threshold" value={settings.confidence} onChange={set('confidence')} />
        <Slider label="Smoothing" value={settings.smoothing} onChange={set('smoothing')} />
      </Panel>
      <Panel title="Camera" icon={Camera} className="home-camera">
        <div className="camera-mini-controls">
          <Select className="stacked" label="Webcam Source" value={settings.source} options={cameraSources} onChange={set('source')} />
          <Toggle label="Mirror Camera" value={settings.mirror} onChange={set('mirror')} />
        </div>
        <CameraPreview />
      </Panel>
      <Panel title="Mouse Control" icon={Mouse}>
        <Slider label="Cursor Speed" value={settings.cursorSpeed} min={0.1} max={3} onChange={set('cursorSpeed')} />
        <Slider label="Dead Zone" value={settings.deadZone} onChange={set('deadZone')} />
      </Panel>
    </div>
  </div>;
}

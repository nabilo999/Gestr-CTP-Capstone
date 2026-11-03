import { Camera as CameraIcon, Monitor, Settings, SlidersHorizontal, Scan, ChartNoAxesColumnIncreasing, Video, Crosshair } from 'lucide-react';
import { Panel, PageBanner } from '../components/Panels.jsx';
import { Slider, Select, Toggle, Button } from '../components/Controls.jsx';
import CameraPreview from '../components/CameraPreview.jsx';
import { cameraSources, handOptions, regionOptions } from '../data.js';

export default function Camera({ settings: s, set }) {
  return <div className="camera-page">
    <PageBanner title="Camera" subtitle="Configure your webcam and preview hand tracking." icon={CameraIcon} />
    <div className="camera-columns">
      <Panel title="Camera Preview" icon={Monitor} className="camera-preview-panel"
        extra={<span className="camera-status" title="Static mockup status; no camera is connected"><i />Camera Active</span>}>
        <CameraPreview className="large-preview" />
        <div className="camera-actions">
          <Button icon={Video} className="primary-button" title="UI preview only">Start / Stop Camera</Button>
          <Button icon={Crosshair} title="UI preview only">Calibrate</Button>
        </div>
      </Panel>
      <div className="camera-settings">
        <Panel title="Source" icon={Settings}>
          <Select label="Webcam Source" value={s.source} options={cameraSources} onChange={set('source')} />
          <Select label="Resolution" value={s.resolution} options={['640 × 480', '1280 × 720', '1920 × 1080']} onChange={set('resolution')} />
          <Select label="FPS" value={s.cameraFps} options={['15', '30', '60']} onChange={set('cameraFps')} />
        </Panel>
        <Panel title="Preview" icon={SlidersHorizontal}>
          <Toggle label="Mirror Camera" value={s.mirror} onChange={set('mirror')} />
          <Toggle label="Show Landmarks" value={s.landmarks} onChange={set('landmarks')} />
          <Toggle label="Show Detection Box" value={s.detectionBox} onChange={set('detectionBox')} />
          <Slider label="Preview Brightness" value={s.brightness} min={0.5} max={2} onChange={set('brightness')} />
        </Panel>
        <Panel title="Detection Area" icon={Scan}>
          <Select label="Active Region" value={s.region} options={regionOptions} onChange={set('region')} />
          <Slider label="Zoom" value={s.zoom} min={1} max={3} onChange={set('zoom')} />
          <Select label="Hand Orientation" value={s.hand} options={handOptions} onChange={set('hand')} />
        </Panel>
        <Panel title="Status" icon={ChartNoAxesColumnIncreasing} className="status-panel">
          <div><span>Lighting:</span><span className="status-badge">Good</span></div>
          <div><span>Tracking:</span><span className="status-badge">Stable</span></div>
          <div><span>Background Noise:</span><span className="status-badge">Low</span></div>
        </Panel>
      </div>
    </div>
  </div>;
}

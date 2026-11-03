import { Target, Hand, Zap, Settings, SlidersHorizontal, RefreshCw } from 'lucide-react';
import { Panel, PageBanner } from '../components/Panels.jsx';
import { Slider, Select, Toggle, Button } from '../components/Controls.jsx';
import CameraPreview from '../components/CameraPreview.jsx';
import { handOptions, regionOptions } from '../data.js';

export default function GestureSettings({ settings: s, set }) {
  return <div className="settings-page">
    <PageBanner title="Gesture Settings" subtitle="Configure how gestures are detected and recognized." icon={SlidersHorizontal} />
    <div className="settings-columns">
      <div className="settings-column">
        <Panel title="Recognition" icon={Target}>
          <Slider label="Confidence Threshold" value={s.confidence} onChange={set('confidence')} />
          <Slider label="Smoothing" value={s.smoothing} onChange={set('smoothing')} />
          <Slider label="Cooldown (ms)" value={s.cooldown} max={2000} step={50} onChange={set('cooldown')} />
        </Panel>
        <Panel title="Gesture Detection" icon={Hand} className="detection-panel">
          <div>
            <Select label="Detection Mode" value={s.hand} options={handOptions} onChange={set('hand')} />
            <Select label="Active Region" value={s.region} options={regionOptions} onChange={set('region')} />
            <Toggle label="Show Detection Box" value={s.detectionBox} onChange={set('detectionBox')} />
          </div>
          <CameraPreview />
        </Panel>
        <Panel title="Performance" icon={Zap}>
          <Select label="Processing Quality" value={s.quality} options={['Performance', 'Balanced', 'Accuracy']} onChange={set('quality')} />
          <Select label="Frame Rate (FPS)" value={s.processingFps} options={['15', '30', '60']} onChange={set('processingFps')} />
        </Panel>
      </div>
      <div className="settings-column">
        <Panel title="General" icon={Settings} className="general-panel">
          <Toggle label="Start on Launch" value={s.startOnLaunch} onChange={set('startOnLaunch')} />
          <Toggle label="Run in Background" value={s.background} onChange={set('background')} />
          <Toggle label="Play Feedback Sound" value={s.sound} onChange={set('sound')} />
          <Toggle label="Show On-Screen Gesture" value={s.overlay} onChange={set('overlay')} />
        </Panel>
        <Panel title="Sensitivity" icon={SlidersHorizontal}>
          <Slider label="Movement Sensitivity" value={s.sensitivity} min={0.1} max={3} onChange={set('sensitivity')} />
          <Slider label="Gesture Hold Time (ms)" value={s.holdTime} max={2000} step={50} onChange={set('holdTime')} />
          <Slider label="Min Gesture Size" value={s.minSize} onChange={set('minSize')} />
        </Panel>
        <Panel title="Reset" icon={RefreshCw} className="reset-panel">
          <p>Restore gesture settings to default values.</p>
          <Button icon={RefreshCw} title="UI preview only">Reset to Defaults</Button>
        </Panel>
      </div>
    </div>
  </div>;
}

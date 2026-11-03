import { useState } from 'react';
import { Home as HomeIcon, Keyboard, SlidersHorizontal, Camera as CameraIcon, Save, Play, Hand } from 'lucide-react';
import { Button } from './components/Controls.jsx';
import Home from './pages/Home.jsx';
import Mappings from './pages/Mappings.jsx';
import GestureSettings from './pages/GestureSettings.jsx';
import Camera from './pages/Camera.jsx';
import { initialMappings } from './data.js';

const tabs = [
  { name: 'Home', icon: HomeIcon }, { name: 'Mappings', icon: Keyboard },
  { name: 'Gesture Settings', icon: SlidersHorizontal }, { name: 'Camera', icon: CameraIcon },
];
const defaults = {
  confidence: 0.7, smoothing: 0.25, cooldown: 300, source: 'Integrated Camera', mirror: true,
  cursorSpeed: 1, deadZone: 0.1, hand: 'Right Hand', region: 'Full Frame', detectionBox: true,
  quality: 'Balanced', processingFps: '30', startOnLaunch: false, background: false, sound: true,
  overlay: true, sensitivity: 1, holdTime: 500, minSize: 0.2, resolution: '1280 × 720',
  cameraFps: '30', landmarks: false, brightness: 1, zoom: 1,
};

export default function App() {
  const [tab, setTab] = useState('Home');
  // All changes exist only in React memory and disappear when the window closes.
  const [settings, setSettings] = useState(defaults);
  const [mappings, setMappings] = useState(initialMappings);
  const set = (key) => (value) => setSettings((current) => ({ ...current, [key]: value }));
  const updateMapping = (updated) => setMappings((current) => current.map((mapping) => mapping.id === updated.id ? updated : mapping));
  const selectTabByKey = (event, index) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      setTab(tabs[next].name);
      document.getElementById(`tab-${next}`).focus();
    }
  };
  return <div className="app-shell">
    <header className="titlebar"><span className="app-logo"><Hand aria-hidden="true" /></span><span>GESTR</span></header>
    <nav className="navigation" aria-label="Main navigation">
      <div className="tabs" role="tablist" aria-label="GESTR pages">
        {tabs.map(({ name, icon: Icon }, index) => <button key={name} id={`tab-${index}`} className={`tab ${tab === name ? 'active' : ''}`}
          role="tab" aria-selected={tab === name} aria-controls="page-content" tabIndex={tab === name ? 0 : -1}
          onClick={() => setTab(name)} onKeyDown={(event) => selectTabByKey(event, index)}><Icon aria-hidden="true" /><span>{name}</span></button>)}
      </div>
      <div className="nav-actions"><Button icon={Save} title="UI preview only">Save</Button><Button icon={Play} title="UI preview only">Test</Button></div>
    </nav>
    <main className="workspace" id="page-content" role="tabpanel" aria-labelledby={`tab-${tabs.findIndex((item) => item.name === tab)}`}>
      {tab === 'Home' && <Home mappings={mappings} settings={settings} set={set} />}
      {tab === 'Mappings' && <Mappings mappings={mappings} onChange={updateMapping} />}
      {tab === 'Gesture Settings' && <GestureSettings settings={settings} set={set} />}
      {tab === 'Camera' && <Camera settings={settings} set={set} />}
    </main>
  </div>;
}

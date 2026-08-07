import React, { useState } from 'react';
import { 
  Sliders, Shield, Volume2, Lightbulb, Tv, Truck, Flame, 
  RefreshCw, Zap, AlertCircle, Play, Info
} from 'lucide-react';
import { sound } from '../utils/sound';

export default function StageVisualizer() {
  // Stage Configuration Toggles
  const [stageConfig, setStageConfig] = useState({
    trussRig: true,
    highClimbers: true,
    audioArrays: true,
    subwoofers: true,
    intelligentLighting: true,
    stageLasers: true,
    ledWalls: true,
    heavyMachines: true,
    pyroFog: true
  });

  const toggleConfig = (key) => {
    sound.playLaserBeep();
    setStageConfig(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const resetStage = () => {
    sound.playPowerChord();
    setStageConfig({
      trussRig: true,
      highClimbers: true,
      audioArrays: true,
      subwoofers: true,
      intelligentLighting: true,
      stageLasers: true,
      ledWalls: true,
      heavyMachines: true,
      pyroFog: true
    });
  };

  // Dynamic Metric Calculations based on active elements
  const calculateMetrics = () => {
    let weightTons = 2; // base stage deck
    let riggersNeeded = 2;
    let machineOpsNeeded = 1;
    let stagehandsNeeded = 6;
    let powerAmps = 100;
    let setupHours = 3;

    if (stageConfig.trussRig) {
      weightTons += 8;
      riggersNeeded += 4;
      setupHours += 2;
    }
    if (stageConfig.highClimbers) {
      riggersNeeded += 2;
    }
    if (stageConfig.audioArrays) {
      weightTons += 6;
      riggersNeeded += 2;
      stagehandsNeeded += 4;
      powerAmps += 250;
      setupHours += 1.5;
    }
    if (stageConfig.subwoofers) {
      weightTons += 3;
      stagehandsNeeded += 2;
      powerAmps += 150;
    }
    if (stageConfig.intelligentLighting) {
      weightTons += 4;
      riggersNeeded += 2;
      stagehandsNeeded += 4;
      powerAmps += 400;
      setupHours += 2;
    }
    if (stageConfig.stageLasers) {
      powerAmps += 100;
    }
    if (stageConfig.ledWalls) {
      weightTons += 7;
      riggersNeeded += 3;
      stagehandsNeeded += 4;
      powerAmps += 350;
      setupHours += 2.5;
    }
    if (stageConfig.heavyMachines) {
      machineOpsNeeded += 3;
      setupHours += 1;
    }
    if (stageConfig.pyroFog) {
      powerAmps += 80;
    }

    return { weightTons, riggersNeeded, machineOpsNeeded, stagehandsNeeded, powerAmps, setupHours };
  };

  const metrics = calculateMetrics();

  return (
    <section id="stage-simulator" className="py-24 bg-[#0a0a0d] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>INTERACTIVE STAGE & CREW RIGGING SIMULATOR</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl text-white font-extrabold tracking-wider uppercase">
              DESIGN YOUR <span className="text-amber-400 gold-glow-text">CONCERT STAGE</span> LIVE
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-2">
              Toggle stage elements to simulate rigging load, audio line arrays, video screens, laser systems, and machine operator requirements in real-time.
            </p>
          </div>

          <button
            onClick={resetStage}
            className="self-start md:self-auto px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-amber-500/30 font-heading text-lg tracking-wider transition-all flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>RESET ALL RIGGING</span>
          </button>
        </div>

        {/* Visualizer Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Stage View Canvas (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-zinc-950 border border-zinc-800 p-6 relative overflow-hidden flex flex-col justify-between min-h-[460px] shadow-2xl glass-panel">
            
            {/* Top Status Bar inside Stage */}
            <div className="flex justify-between items-center z-20 pb-4 border-b border-zinc-800 font-mono text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>SIMULATOR STATUS: ONLINE</span>
              </div>
              <div className="text-zinc-500 uppercase tracking-widest">
                NASHVILLE STAGE MODEL • 3D RIG VIEW
              </div>
            </div>

            {/* Stage Canvas Area */}
            <div className="relative my-6 h-72 rounded-xl bg-gradient-to-b from-[#08080c] via-[#0c0c14] to-[#14141e] border border-zinc-800 flex flex-col justify-between p-4 overflow-hidden">
              
              {/* Overhead Truss Rig */}
              {stageConfig.trussRig ? (
                <div className="relative z-10 w-full flex items-center justify-between border-b-4 border-zinc-500 bg-zinc-800/80 p-2 shadow-lg animate-fadeIn">
                  <div className="text-[10px] font-mono text-amber-400 uppercase font-bold flex items-center gap-1">
                    <Shield className="w-3 h-3" /> STEEL OVERHEAD TRUSS RIG [FLOWN]
                  </div>
                  {stageConfig.highClimbers && (
                    <div className="flex items-center gap-3 animate-pulse">
                      <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono text-[9px] font-bold">
                        🧗 HIGH CLIMBERS ACTIVE
                      </span>
                      <span className="px-2 py-0.5 rounded bg-amber-500 text-black font-mono text-[9px] font-bold">
                        ETCP LEAD
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full text-center text-xs font-mono text-zinc-600 py-2 border-b border-dashed border-zinc-800">
                  [ OVERHEAD TRUSS UNMOUNTED ]
                </div>
              )}

              {/* Fog / Laser Layer */}
              {stageConfig.pyroFog && (
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 via-amber-500/5 to-transparent pointer-events-none animate-pulse"></div>
              )}
              {stageConfig.stageLasers && (
                <>
                  <div className="absolute top-0 left-10 w-1 h-full bg-cyan-400 opacity-60 blur-[1px] transform -rotate-45 transform-origin-top"></div>
                  <div className="absolute top-0 right-10 w-1 h-full bg-red-500 opacity-60 blur-[1px] transform rotate-45 transform-origin-top"></div>
                  <div className="absolute top-0 left-1/2 w-1 h-full bg-amber-400 opacity-50 blur-[1px]"></div>
                </>
              )}

              {/* Middle Stage Content: Video Screens & Audio Arrays */}
              <div className="relative z-10 flex justify-between items-center my-auto px-2">
                
                {/* Left Line Array */}
                {stageConfig.audioArrays ? (
                  <div className="flex flex-col items-center space-y-1 animate-fadeIn">
                    <div className="w-8 h-24 rounded bg-zinc-900 border-2 border-cyan-400 flex flex-col justify-around p-1 shadow-lg shadow-cyan-500/20">
                      <div className="w-full h-2 bg-cyan-500 rounded"></div>
                      <div className="w-full h-2 bg-cyan-500 rounded"></div>
                      <div className="w-full h-2 bg-cyan-500 rounded"></div>
                      <div className="w-full h-2 bg-cyan-500 rounded"></div>
                    </div>
                    <span className="text-[9px] font-mono text-cyan-400">ARRAY L</span>
                  </div>
                ) : <div className="w-8"></div>}

                {/* Center Backstage LED Screen */}
                {stageConfig.ledWalls ? (
                  <div className="w-64 h-32 rounded-lg bg-gradient-to-br from-amber-500/20 via-zinc-900 to-red-500/20 border-2 border-amber-500/50 flex flex-col items-center justify-center p-3 text-center shadow-2xl relative overflow-hidden animate-fadeIn">
                    <div className="font-heading text-2xl text-amber-400 tracking-widest font-extrabold gold-glow-text">
                      PIRATE STAGE
                    </div>
                    <span className="text-[10px] font-mono text-zinc-300">4K LED BACKSCREEN • ROE VISUAL</span>
                    {stageConfig.intelligentLighting && (
                      <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-amber-400 animate-ping"></div>
                    )}
                  </div>
                ) : (
                  <div className="w-64 h-32 rounded-lg border border-dashed border-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-600">
                    [ NO LED VIDEO BACKSCREEN ]
                  </div>
                )}

                {/* Right Line Array */}
                {stageConfig.audioArrays ? (
                  <div className="flex flex-col items-center space-y-1 animate-fadeIn">
                    <div className="w-8 h-24 rounded bg-zinc-900 border-2 border-cyan-400 flex flex-col justify-around p-1 shadow-lg shadow-cyan-500/20">
                      <div className="w-full h-2 bg-cyan-500 rounded"></div>
                      <div className="w-full h-2 bg-cyan-500 rounded"></div>
                      <div className="w-full h-2 bg-cyan-500 rounded"></div>
                      <div className="w-full h-2 bg-cyan-500 rounded"></div>
                    </div>
                    <span className="text-[9px] font-mono text-cyan-400">ARRAY R</span>
                  </div>
                ) : <div className="w-8"></div>}
              </div>

              {/* Deck Level: Subwoofers & Heavy Machines */}
              <div className="relative z-10 w-full bg-zinc-900 border-t-2 border-zinc-700 p-2 flex justify-between items-center rounded-b-lg">
                {/* Heavy Lulls on stage wing */}
                {stageConfig.heavyMachines ? (
                  <span className="px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-500/40 text-[10px] font-mono font-bold flex items-center gap-1">
                    🚜 LULL / BOOM LIFT
                  </span>
                ) : <span className="text-[10px] font-mono text-zinc-600">STAGE WING L</span>}

                {/* Subwoofers */}
                {stageConfig.subwoofers ? (
                  <div className="flex gap-1">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-6 h-4 bg-zinc-950 border border-amber-500/40 rounded flex items-center justify-center text-[8px] text-amber-400 font-mono">
                        SUB
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="text-[10px] font-mono text-zinc-600">STAGE DECK</span>
                )}

                {stageConfig.heavyMachines ? (
                  <span className="px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-500/40 text-[10px] font-mono font-bold flex items-center gap-1">
                    🚜 SCISSOR LIFT
                  </span>
                ) : <span className="text-[10px] font-mono text-zinc-600">STAGE WING R</span>}
              </div>
            </div>

            {/* Calculated Real-Time Metrics Display */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-4 border-t border-zinc-800 text-center font-mono">
              <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] text-zinc-400">TOTAL WEIGHT</div>
                <div className="text-lg font-bold text-amber-400">{metrics.weightTons} TONS</div>
              </div>
              <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] text-zinc-400">ETCP RIGGERS</div>
                <div className="text-lg font-bold text-white">{metrics.riggersNeeded} CREW</div>
              </div>
              <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] text-zinc-400">MACHINE OPS</div>
                <div className="text-lg font-bold text-red-400">{metrics.machineOpsNeeded} CREW</div>
              </div>
              <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] text-zinc-400">STAGEHANDS</div>
                <div className="text-lg font-bold text-amber-400">{metrics.stagehandsNeeded} CREW</div>
              </div>
              <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] text-zinc-400">POWER LOAD</div>
                <div className="text-lg font-bold text-cyan-400">{metrics.powerAmps}A</div>
              </div>
              <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] text-zinc-400">LOAD-IN TIME</div>
                <div className="text-lg font-bold text-emerald-400">{metrics.setupHours} HRS</div>
              </div>
            </div>
          </div>

          {/* Right Column: Toggle Controls Panel (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 p-6 space-y-4 shadow-xl glass-panel">
            <h3 className="font-heading text-2xl text-white tracking-wider flex items-center gap-2 border-b border-zinc-800 pb-3">
              <Sliders className="w-5 h-5 text-amber-400" />
              <span>RIGGING & PRODUCTION MODULE TOGGLES</span>
            </h3>

            <div className="space-y-3 max-h-[440px] overflow-y-auto pr-1">
              {/* Truss Rig */}
              <div 
                onClick={() => toggleConfig('trussRig')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  stageConfig.trussRig 
                    ? 'bg-amber-500/10 border-amber-500/60 text-amber-300' 
                    : 'bg-zinc-950 border-zinc-800 text-zinc-500 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="font-heading text-lg tracking-wider text-white">OVERHEAD STEEL TRUSS RIG</div>
                    <div className="text-xs font-mono text-zinc-400">CM Lodestar Hoists & Heavy Trussing</div>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${stageConfig.trussRig ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-500'}`}>
                  {stageConfig.trussRig ? 'ON' : 'OFF'}
                </div>
              </div>

              {/* High Climbers */}
              <div 
                onClick={() => toggleConfig('highClimbers')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  stageConfig.highClimbers 
                    ? 'bg-amber-500/10 border-amber-500/60 text-amber-300' 
                    : 'bg-zinc-950 border-zinc-800 text-zinc-500 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-red-400" />
                  <div>
                    <div className="font-heading text-lg tracking-wider text-white">HIGH STEEL CLIMBERS</div>
                    <div className="text-xs font-mono text-zinc-400">ETCP Arena High Steel Crew</div>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${stageConfig.highClimbers ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-500'}`}>
                  {stageConfig.highClimbers ? 'ON' : 'OFF'}
                </div>
              </div>

              {/* Audio Line Arrays */}
              <div 
                onClick={() => toggleConfig('audioArrays')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  stageConfig.audioArrays 
                    ? 'bg-cyan-500/10 border-cyan-500/60 text-cyan-300' 
                    : 'bg-zinc-950 border-zinc-800 text-zinc-500 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="font-heading text-lg tracking-wider text-white">HANGING LINE ARRAY AUDIO</div>
                    <div className="text-xs font-mono text-zinc-400">L-Acoustics / d&b Stadium Mains</div>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${stageConfig.audioArrays ? 'bg-cyan-400 text-black' : 'bg-zinc-800 text-zinc-500'}`}>
                  {stageConfig.audioArrays ? 'ON' : 'OFF'}
                </div>
              </div>

              {/* LED Video Walls */}
              <div 
                onClick={() => toggleConfig('ledWalls')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  stageConfig.ledWalls 
                    ? 'bg-purple-500/10 border-purple-500/60 text-purple-300' 
                    : 'bg-zinc-950 border-zinc-800 text-zinc-500 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Tv className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="font-heading text-lg tracking-wider text-white">4K LED BACKSCREEN & IMAG</div>
                    <div className="text-xs font-mono text-zinc-400">Roe Visual Panels & Video Techs</div>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${stageConfig.ledWalls ? 'bg-purple-500 text-white' : 'bg-zinc-800 text-zinc-500'}`}>
                  {stageConfig.ledWalls ? 'ON' : 'OFF'}
                </div>
              </div>

              {/* Heavy Machinery */}
              <div 
                onClick={() => toggleConfig('heavyMachines')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  stageConfig.heavyMachines 
                    ? 'bg-red-500/10 border-red-500/60 text-red-300' 
                    : 'bg-zinc-950 border-zinc-800 text-zinc-500 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-red-400" />
                  <div>
                    <div className="font-heading text-lg tracking-wider text-white">HEAVY MACHINERY & LIFTS</div>
                    <div className="text-xs font-mono text-zinc-400">Scissor Lifts, Lulls & Boom Lift Ops</div>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${stageConfig.heavyMachines ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-500'}`}>
                  {stageConfig.heavyMachines ? 'ON' : 'OFF'}
                </div>
              </div>

              {/* Stage Lasers & Fog */}
              <div 
                onClick={() => toggleConfig('stageLasers')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  stageConfig.stageLasers 
                    ? 'bg-amber-500/10 border-amber-500/60 text-amber-300' 
                    : 'bg-zinc-950 border-zinc-800 text-zinc-500 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Flame className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="font-heading text-lg tracking-wider text-white">STAGE LASERS & ATMOSPHERICS</div>
                    <div className="text-xs font-mono text-zinc-400">High Output Fog & Laser Pyrotechnics</div>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${stageConfig.stageLasers ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-500'}`}>
                  {stageConfig.stageLasers ? 'ON' : 'OFF'}
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <a
              href="#crew-calculator"
              onClick={() => sound.playPowerChord()}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-heading text-xl font-bold tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>TRANSFER SIMULATOR CREW TO QUOTE ESTIMATOR</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { 
  Radio, Volume2, Flame, Zap, Truck, Disc, Play, Sparkles 
} from 'lucide-react';
import { sound } from '../utils/sound';

export default function RockSoundboard() {
  const [activePad, setActivePad] = useState(null);

  const triggerSound = (id, fn) => {
    setActivePad(id);
    fn();
    setTimeout(() => setActivePad(null), 600);
  };

  const soundPads = [
    {
      id: 'guitar',
      label: 'HEAVY POWER CHORD',
      sub: 'DISTORTION GUITAR',
      icon: Radio,
      color: 'from-amber-500 to-amber-600',
      action: () => sound.playPowerChord()
    },
    {
      id: 'drums',
      label: 'DRUM ROLL FILL',
      sub: 'ARENA KICK & SNARE',
      icon: Disc,
      color: 'from-red-600 to-amber-600',
      action: () => sound.playDrumFill()
    },
    {
      id: 'airhorn',
      label: 'CONCERT AIRHORN',
      sub: 'HYPE SOUND FX',
      icon: Volume2,
      color: 'from-cyan-500 to-blue-600',
      action: () => sound.playAirhorn()
    },
    {
      id: 'motor',
      label: 'LULL ENGINE REV',
      sub: 'HEAVY MACHINERY',
      icon: Truck,
      color: 'from-amber-600 to-red-700',
      action: () => sound.playMotorRev()
    },
    {
      id: 'pyro',
      label: 'PYRO BLAST BOOM',
      sub: 'STAGE FIREWORKS',
      icon: Flame,
      color: 'from-red-600 to-red-700',
      action: () => sound.playPyroExplosion()
    },
    {
      id: 'laser',
      label: 'LASER BEAM SWEEP',
      sub: 'DMX LIGHTING SFX',
      icon: Zap,
      color: 'from-cyan-400 to-purple-600',
      action: () => sound.playLaserBeep()
    },
    {
      id: 'crowd',
      label: 'STADIUM CROWD ROAR',
      sub: '50,000 FANS CHEERING',
      icon: Sparkles,
      color: 'from-emerald-500 to-amber-500',
      action: () => sound.playCrowdRoar()
    }
  ];

  return (
    <section className="py-20 bg-[#070709] border-t border-zinc-800/80 relative overflow-hidden">
      {/* Laser Light Background Lines */}
      <div className="absolute inset-0 bg-rock-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Radio className="w-3.5 h-3.5" />
              <span>LIVE CONCERT SOUNDBOARD & FX DECK</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl text-white font-extrabold tracking-wider uppercase">
              ROCK & ROLL <span className="text-amber-400 gold-glow-text">STAGE SOUNDBOARD</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-2">
              Tap the production trigger pads below to unleash live concert audio synthesis, stadium crowd roars, pyro booms, and machine engine revs!
            </p>
          </div>

          {/* Equalizer Visualizer Bars */}
          <div className="flex items-end gap-1.5 h-12 bg-zinc-950 p-2.5 rounded-xl border border-zinc-800">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((bar) => (
              <div 
                key={bar}
                className={`w-2 rounded-t transition-all duration-300 ${
                  activePad 
                    ? 'bg-amber-400 animate-pulse shadow-lg shadow-amber-500/50' 
                    : 'bg-zinc-800'
                }`}
                style={{
                  height: activePad ? `${Math.floor(Math.random() * 80) + 20}%` : '25%'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Sound Pads Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {soundPads.map((pad) => {
            const Icon = pad.icon;
            const isActive = activePad === pad.id;
            return (
              <button
                key={pad.id}
                onClick={() => triggerSound(pad.id, pad.action)}
                className={`p-5 rounded-2xl border text-left transition-all transform active:scale-95 flex flex-col justify-between h-44 relative overflow-hidden group ${
                  isActive 
                    ? 'bg-gradient-to-br ' + pad.color + ' text-black border-amber-300 shadow-2xl scale-105' 
                    : 'bg-zinc-900/80 border-zinc-800 hover:border-amber-500/50 text-white hover:bg-zinc-800/90'
                }`}
              >
                <div className="flex items-center justify-between z-10">
                  <div className={`p-2.5 rounded-xl ${isActive ? 'bg-black/30 text-white' : 'bg-amber-500/10 text-amber-400'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <Play className={`w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity ${isActive ? 'text-black' : 'text-amber-400'}`} />
                </div>

                <div className="z-10 mt-auto">
                  <div className={`font-heading text-lg tracking-wider leading-snug ${isActive ? 'text-black font-extrabold' : 'text-white'}`}>
                    {pad.label}
                  </div>
                  <div className={`text-[10px] font-mono uppercase tracking-wider ${isActive ? 'text-black/80' : 'text-zinc-400'}`}>
                    {pad.sub}
                  </div>
                </div>

                {/* Subtle pulse ring on hover */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}

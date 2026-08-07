import React, { useState } from 'react';
import { 
  Award, QrCode, Sparkles, CheckCircle2, Shield, Download, Zap, Users 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';

export default function BackstagePassGenerator() {
  const [passData, setPassData] = useState({
    name: 'KEFFER',
    tour: 'STADIUM WORLD TOUR 2026',
    role: 'ETCP MASTER RIGGER',
    passType: 'ALL ACCESS'
  });

  const [generated, setGenerated] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    sound.playPowerChord();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.7 }
    });
    setGenerated(true);
  };

  return (
    <section className="py-24 bg-[#070709] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>DIGITAL CREW LANYARD GENERATOR</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white font-extrabold tracking-wider uppercase">
            CREATE YOUR <span className="text-amber-500 gold-glow-text">ALL ACCESS PASS</span>
          </h2>
          <p className="max-w-3xl mx-auto text-zinc-400 text-base sm:text-lg">
            Generate an official Pirate Productions digital crew credential pass with holographic metal finishes and live dispatch verification.
          </p>
        </div>

        {/* Form and Pass Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Form Side (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 space-y-5 glass-panel">
            <h3 className="font-heading text-2xl text-white tracking-wider border-b border-zinc-800 pb-3">
              CREW CREDENTIAL BUILDER
            </h3>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">CREW MEMBER NAME</label>
                <input 
                  type="text"
                  required
                  value={passData.name}
                  onChange={(e) => setPassData({ ...passData, name: e.target.value.toUpperCase() })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-amber-400 font-heading text-xl focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">TOUR / SHOW NAME</label>
                <input 
                  type="text"
                  required
                  value={passData.tour}
                  onChange={(e) => setPassData({ ...passData, tour: e.target.value.toUpperCase() })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-white font-body text-sm focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">PRODUCTION TRADE ROLE</label>
                  <select
                    value={passData.role}
                    onChange={(e) => setPassData({ ...passData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-white font-body text-sm focus:border-amber-400 focus:outline-none"
                  >
                    <option value="ETCP MASTER RIGGER">ETCP Master Rigger</option>
                    <option value="HIGH STEEL CLIMBER">High Steel Climber</option>
                    <option value="FOH AUDIO ENGINEER">FOH Audio Engineer</option>
                    <option value="GRANDMA3 LIGHTING TECH">GrandMA3 Lighting Tech</option>
                    <option value="4K LED VIDEO DIRECTOR">4K LED Video Director</option>
                    <option value="LULL & BOOM MACHINE OP">Lull & Boom Machine Op</option>
                    <option value="MASTER STAGE CARPENTER">Master Stage Carpenter</option>
                    <option value="NASHVILLE STAGEHAND LEAD">Nashville Stagehand Lead</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">PASS CLEARANCE TYPE</label>
                  <select
                    value={passData.passType}
                    onChange={(e) => setPassData({ ...passData, passType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-white font-body text-sm focus:border-amber-400 focus:outline-none"
                  >
                    <option value="ALL ACCESS">ALL ACCESS (VIP GOLD)</option>
                    <option value="STAGE RIGHT & DECK">STAGE RIGHT & DECK</option>
                    <option value="FOH & MIX POSITION">FOH & MIX POSITION</option>
                    <option value="HIGH RIGGING CLEARANCE">HIGH RIGGING CLEARANCE</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 hover:from-amber-400 text-black font-heading text-2xl font-bold tracking-wider transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 fill-black" />
                <span>GENERATE CREW PASS BADGE</span>
              </button>
            </form>
          </div>

          {/* Badge Preview Side (6 cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-80 sm:w-96 rounded-3xl bg-gradient-to-b from-[#181822] via-[#0f0f14] to-[#08080b] border-2 border-amber-500/60 p-6 shadow-2xl shadow-amber-500/20 text-center space-y-5 overflow-hidden group hover:rotate-1 transition-transform duration-500">
              
              {/* Lanyard Hole at top */}
              <div className="w-12 h-3 mx-auto rounded-full bg-zinc-900 border border-zinc-700 shadow-inner"></div>

              {/* Top Pirate Header */}
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl">🏴‍☠️</span>
                  <span className="font-heading text-3xl text-white tracking-widest font-black">
                    PIRATE <span className="text-amber-500">PRODUCTIONS</span>
                  </span>
                </div>
                <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                  NASHVILLE, TN • LIVE EVENT CREW
                </div>
              </div>

              {/* Pass Access Clearance Banner */}
              <div className="py-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-heading text-3xl font-black tracking-widest uppercase shadow-md rounded-lg gold-glow-text">
                {passData.passType}
              </div>

              {/* Crew Name & Role */}
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-1">
                <div className="text-[10px] font-mono text-zinc-500 uppercase">AUTHORIZED CREW MEMBER</div>
                <div className="font-heading text-4xl text-white tracking-wider text-amber-400 font-extrabold">
                  {passData.name || 'CREW MEMBER'}
                </div>
                <div className="text-xs font-mono text-amber-300 font-bold border-t border-zinc-800 pt-1 mt-1">
                  {passData.role}
                </div>
                <div className="text-[10px] font-mono text-zinc-400 pt-1">
                  {passData.tour}
                </div>
              </div>

              {/* QR Code & Hologram Stamp */}
              <div className="flex items-center justify-between pt-2 px-2 font-mono text-[10px] text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-700">
                    <QrCode className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold">ID: PIRATE-9942</div>
                    <div className="text-emerald-400">VERIFIED ACTIVE</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="px-2 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold">
                    ETCP / OSHA
                  </div>
                  <div className="mt-1">VALID 2026/27</div>
                </div>
              </div>

              {/* Bottom Metallic Edge */}
              <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest pt-2">
                NOT TRANSFERABLE • MUST BE WORN ON STAGE
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

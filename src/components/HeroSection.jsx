import React, { useState } from 'react';
import { Flame, ShieldCheck, ArrowRight, Zap, Layers } from 'lucide-react';
import { sound } from '../utils/sound';

export default function HeroSection({ onOpenSos }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a0d] py-16 px-4"
    >
      {/* Background Stage Image with Dynamic Parallax & Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/assets/hero_rock_concert.jpg" 
          alt="Pirate Productions Rock Concert Stage Nashville" 
          className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-1000 ease-out filter brightness-75 contrast-125"
          style={{
            transform: `translate(${(mousePos.x - 50) * -0.05}px, ${(mousePos.y - 50) * -0.05}px) scale(1.05)`
          }}
        />
        {/* Interactive Mouse Spotlight Tracking */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(245, 158, 11, 0.15), rgba(220, 38, 38, 0.08) 40%, rgba(10, 10, 13, 0.85) 80%)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-[#0a0a0d]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0d] via-transparent to-[#0a0a0d]"></div>
      </div>

      {/* Floating Animated Stage Light Beams */}
      <div className="absolute top-0 left-1/4 w-32 h-full bg-gradient-to-b from-amber-500/20 via-amber-500/5 to-transparent blur-xl transform -rotate-12 animate-laser-sweep pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-32 h-full bg-gradient-to-b from-red-500/20 via-red-500/5 to-transparent blur-xl transform rotate-12 animate-laser-sweep pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        {/* Top Nashville Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md shadow-lg shadow-amber-500/10 animate-bounce">
          <Flame className="w-4 h-4 text-red-500 animate-pulse" />
          <span>MUSIC CITY'S PREMIER LIVE EVENT PRODUCTION STAFFING</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-300">NASHVILLE, TN</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black tracking-wider uppercase leading-none text-white">
            WE BUILD THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-red-500 gold-glow-text">STAGES.</span>
            <br />
            YOU ROCK THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-500 to-amber-300 crimson-glow-text">WORLD.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-zinc-300 text-base sm:text-xl font-body font-light leading-relaxed">
            Full-service live concert, festival & corporate production staffing. From <strong className="text-amber-400">High Steel Climbers & ETCP Riggers</strong> to <strong className="text-amber-400">Dante Audio Engineers, GrandMA Lighting, LED Video, Master Stagehands & Heavy Machine Operators</strong> (Forklifts, Lulls, Scissor & Boom Lifts).
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
          <a
            href="#crew-calculator"
            onClick={() => sound.playPowerChord()}
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-heading text-2xl tracking-wider shadow-xl shadow-amber-500/30 hover:shadow-amber-500/60 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-3 border border-amber-300/40"
          >
            <Zap className="w-6 h-6 fill-black" />
            <span>BUILD CREW ROSTER</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#services"
            onClick={() => sound.playLaserBeep()}
            className="px-8 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white font-heading text-2xl tracking-wider border border-amber-500/30 hover:border-amber-500/80 transition-all shadow-lg backdrop-blur-md flex items-center gap-3"
          >
            <Layers className="w-6 h-6 text-amber-400" />
            <span>EXPLORE CREW TRADES</span>
          </a>

          <button
            onClick={() => {
              sound.playCrowdRoar();
              onOpenSos();
            }}
            className="px-6 py-4 rounded-xl bg-red-950/80 hover:bg-red-900 text-red-400 hover:text-white font-heading text-2xl tracking-wider border border-red-600/50 transition-all shadow-lg flex items-center gap-2"
          >
            <ShieldCheck className="w-6 h-6 text-red-500" />
            <span>SOS CREW HOTLINE</span>
          </button>
        </div>

        {/* Stats Grid Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10 border-t border-zinc-800/80">
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm hover:border-amber-500/40 transition-colors">
            <div className="font-heading text-4xl text-amber-400 gold-glow-text">2,850+</div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">Shows & Festivals Staffed</div>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm hover:border-amber-500/40 transition-colors">
            <div className="font-heading text-4xl text-red-500 crimson-glow-text">100%</div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">ETCP & OSHA Certified Leads</div>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm hover:border-amber-500/40 transition-colors">
            <div className="font-heading text-4xl text-amber-400 gold-glow-text">15,000+</div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">Tons Steel Rigging Flown</div>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm hover:border-amber-500/40 transition-colors">
            <div className="font-heading text-4xl text-cyan-400">24 / 7</div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">Nashville Dispatch Hotline</div>
          </div>
        </div>
      </div>
    </section>
  );
}

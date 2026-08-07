import React, { useState } from 'react';
import { Anchor, ShieldAlert, Volume2, VolumeX, Menu, X, PhoneCall, Zap, Compass, HardHat } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Navbar({ onOpenSos }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [muted, setMuted] = useState(false);

  const toggleMute = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    sound.muted = nextMuted;
    if (!nextMuted) {
      sound.playLaserBeep();
    }
  };

  const handleNavClick = () => {
    sound.playLaserBeep();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0d]/90 backdrop-blur-md border-b border-amber-500/20 transition-all duration-300">
      {/* Live Stage Status Bar */}
      <div className="bg-gradient-to-r from-amber-950 via-zinc-900 to-red-950 px-4 py-1.5 border-b border-amber-500/30 text-xs font-mono text-amber-300 flex justify-between items-center overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="font-bold text-amber-400">NASHVILLE DISPATCH:</span>
          <span className="text-zinc-300">142 Crew Active • Bridgestone Arena & Nissan Stadium Tours</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-zinc-400">
          <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-400" /> ETCP Certified Riggers</span>
          <span>•</span>
          <span className="flex items-center gap-1"><HardHat className="w-3 h-3 text-red-400" /> Heavy Equipment Operators</span>
          <span>•</span>
          <span className="text-amber-400 font-bold">24/7 Hotline: (615) 555-PIRATE</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#" 
            onClick={() => sound.playPowerChord()} 
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 via-amber-600 to-red-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0a0a0d] rounded-[7px] flex items-center justify-center border border-amber-400/40">
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🏴‍☠️</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-wider text-white group-hover:text-amber-400 transition-colors gold-glow-text">
                  PIRATE
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-wider text-amber-500">
                  PRODUCTIONS
                </span>
              </div>
              <p className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase -mt-1 flex items-center gap-1">
                <Compass className="w-3 h-3 text-amber-500 inline" /> Nashville, TN • Live Event Crew
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 font-heading text-lg tracking-wider">
            <a 
              href="#services" 
              onClick={handleNavClick} 
              className="text-zinc-300 hover:text-amber-400 transition-colors hover:scale-105 transform"
            >
              CREW ROSTER
            </a>
            <a 
              href="#crew-calculator" 
              onClick={handleNavClick} 
              className="text-zinc-300 hover:text-amber-400 transition-colors hover:scale-105 transform"
            >
              RATE ESTIMATOR
            </a>
            <a 
              href="#timeline" 
              onClick={handleNavClick} 
              className="text-zinc-300 hover:text-amber-400 transition-colors hover:scale-105 transform"
            >
              LOAD-IN TIMELINE
            </a>
            <a 
              href="#gallery" 
              onClick={handleNavClick} 
              className="text-zinc-300 hover:text-amber-400 transition-colors hover:scale-105 transform"
            >
              SHOWCASE
            </a>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Audio Synth Toggle */}
            <button
              onClick={toggleMute}
              title={muted ? "Unmute Sound FX" : "Mute Sound FX"}
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-amber-400 hover:border-amber-500/50 transition-all focus:outline-none"
            >
              {muted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-amber-400" />}
            </button>

            {/* Emergency SOS Staffing Button */}
            <button
              onClick={() => {
                sound.playPowerChord();
                onOpenSos();
              }}
              className="relative group overflow-hidden px-4 py-2.5 rounded-lg bg-gradient-to-r from-red-600 via-red-700 to-amber-600 text-white font-heading text-lg tracking-wider shadow-lg shadow-red-600/30 hover:shadow-red-600/60 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 border border-red-400/30"
            >
              <ShieldAlert className="w-5 h-5 animate-pulse" />
              <span>SOS CREW DISPATCH</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-amber-400 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0e12] border-b border-amber-500/30 px-4 pt-3 pb-6 space-y-4 font-heading text-xl tracking-wider animate-fadeIn">
          <a 
            href="#services" 
            onClick={handleNavClick} 
            className="block py-2 text-zinc-200 hover:text-amber-400 border-b border-zinc-800"
          >
            CREW ROSTER & ROLES
          </a>
          <a 
            href="#crew-calculator" 
            onClick={handleNavClick} 
            className="block py-2 text-zinc-200 hover:text-amber-400 border-b border-zinc-800"
          >
            RATE ESTIMATOR & CREW BUILDER
          </a>
          <a 
            href="#timeline" 
            onClick={handleNavClick} 
            className="block py-2 text-zinc-200 hover:text-amber-400 border-b border-zinc-800"
          >
            LOAD-IN TIMELINE
          </a>
          <a 
            href="#gallery" 
            onClick={handleNavClick} 
            className="block py-2 text-zinc-200 hover:text-amber-400"
          >
            SHOWCASE & CERTIFICATIONS
          </a>
        </div>
      )}
    </header>
  );
}

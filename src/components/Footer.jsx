import React from 'react';
import { Compass, PhoneCall, MapPin } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Footer({ onOpenSos }) {
  return (
    <footer className="bg-[#060608] border-t border-amber-500/20 pt-16 pb-12 text-zinc-400 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-amber-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-xl">
                🏴‍☠️
              </div>
              <div className="font-heading text-3xl text-white font-extrabold tracking-wider">
                PIRATE <span className="text-amber-500">PRODUCTIONS</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-body">
              Music City's premier live concert, festival & corporate event staffing titan. Certified production specialists for arena tours and stadium productions.
            </p>
            <div className="text-xs font-mono text-amber-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Music Row & Broadway Hub • Nashville, TN</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 font-heading text-lg tracking-wider">
            <div className="text-white text-xl border-b border-zinc-800 pb-2">NAVIGATION</div>
            <ul className="space-y-2 text-sm font-body">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Crew Roster & Trades</a></li>
              <li><a href="#crew-calculator" className="hover:text-amber-400 transition-colors">Rate Estimator & Builder</a></li>
              <li><a href="#timeline" className="hover:text-amber-400 transition-colors">Load-In Execution Timeline</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Showcase & Portfolio</a></li>
            </ul>
          </div>

          {/* Key Operations */}
          <div className="space-y-3 font-heading text-lg tracking-wider">
            <div className="text-white text-xl border-b border-zinc-800 pb-2">KEY OPERATIONS</div>
            <ul className="space-y-2 text-sm font-body text-zinc-400">
              <li>• Stadium High Steel Rigging</li>
              <li>• Audio & FOH Mix Engineering</li>
              <li>• Intelligent Lighting & DMX</li>
              <li>• Heavy Machinery & Lift Ops</li>
              <li>• 4K LED Screen Broadcast</li>
            </ul>
          </div>

          {/* Dispatch Hotline Card */}
          <div className="p-5 rounded-2xl bg-zinc-900 border border-amber-500/30 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-heading text-lg">
              <PhoneCall className="w-5 h-5 animate-pulse text-red-500" />
              <span>24/7 NASHVILLE DISPATCH</span>
            </div>
            <div className="font-mono text-xl font-bold text-white">
              (615) 555-PIRATE
            </div>
            <p className="text-[11px] font-mono text-zinc-400">
              Immediate on-call dispatch for Bridgestone Arena, Nissan Stadium, & Nationwide Tours.
            </p>
            <button
              onClick={() => {
                sound.playPowerChord();
                onOpenSos();
              }}
              className="w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-heading text-lg tracking-wider transition-colors shadow-md"
            >
              TRIGGER SOS DISPATCH
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div>
            © {new Date().getFullYear()} Pirate Productions Nashville LLC. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-amber-400 cursor-pointer">OSHA 30 Certified</span>
            <span>•</span>
            <span className="hover:text-amber-400 cursor-pointer">ETCP Arena Rigging</span>
            <span>•</span>
            <span className="hover:text-amber-400 cursor-pointer">Nashville, TN</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

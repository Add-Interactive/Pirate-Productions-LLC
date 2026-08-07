import React, { useState, useEffect } from 'react';
import { Sparkles, Volume2, X, MessageSquare, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';

export default function PeekABooPirate() {
  const [isPoppedOut, setIsPoppedOut] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const pirateQuotes = [
    "ARRRR! STAGE RIGHT IS CLEAR & READY TO ROCK! 🏴‍☠️⚡",
    "ETCP RIGGERS IN THE HIGH STEEL! HANG THAT TRUSS! 🧗",
    "MORE GUITAR IN THE MONITORS, MATEY! 🎸",
    "100% OSHA CERTIFIED PIRATES ON DECK! 👷",
    "NASHVILLE DISPATCH READY FOR BRIDGESTONE & NISSAN! 🏟️",
    "LULL TELEHANDLERS UNLOADIN' LED WALLS AT DAWN! 🚜"
  ];

  // Auto peek-a-boo animation trigger every 12 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPoppedOut) {
        setIsPoppedOut(true);
        sound.playLaserBeep();
        setTimeout(() => setIsPoppedOut(false), 5000);
      }
    }, 12000);
    return () => clearInterval(interval);
  }, [isPoppedOut]);

  const handlePirateClick = () => {
    sound.playPowerChord();
    setQuoteIndex((prev) => (prev + 1) % pirateQuotes.length);
    setIsPoppedOut(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { x: 0.1, y: 0.8 }
    });
  };

  return (
    <div className="fixed left-0 bottom-20 z-40 flex items-center pointer-events-auto select-none">
      {/* Peek-A-Boo Character Container */}
      <div 
        onClick={handlePirateClick}
        className={`group relative cursor-pointer transition-transform duration-500 ease-out flex items-center ${
          isPoppedOut ? 'translate-x-0' : '-translate-x-24 hover:-translate-x-12'
        }`}
      >
        {/* Tab / Badge hint on left edge when hidden */}
        <div className="w-10 h-28 bg-gradient-to-r from-amber-500 to-amber-600 rounded-r-2xl border-y-2 border-r-2 border-amber-300 flex flex-col items-center justify-center p-1 shadow-2xl animate-pulse">
          <span className="text-xl">🏴‍☠️</span>
          <span className="text-[10px] font-heading font-black text-black -rotate-90 tracking-widest mt-3 whitespace-nowrap">
            PEEK-A-BOO
          </span>
        </div>

        {/* Pirate Mascot Visual Card */}
        <div className="relative w-28 sm:w-36 h-36 rounded-r-3xl bg-gradient-to-br from-[#1c1c28] via-[#121218] to-[#0a0a0d] border-2 border-amber-400 p-2 shadow-2xl shadow-amber-500/30 flex flex-col items-center justify-center overflow-hidden">
          <img 
            src="/assets/rock_pirate.jpg" 
            alt="Pirate Productions Rock Mascot"
            className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-300 brightness-110 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-1 text-center">
            <span className="px-2 py-0.5 rounded bg-amber-500 text-black font-heading text-xs font-bold shadow-md">
              CAP'N ROCK ⚡
            </span>
          </div>
        </div>

        {/* Interactive Speech Bubble */}
        {isPoppedOut && (
          <div className="ml-3 p-3.5 rounded-2xl bg-zinc-950 border-2 border-amber-400 text-white shadow-2xl max-w-xs font-heading text-lg tracking-wider relative animate-fadeIn flex items-start gap-2">
            <div className="space-y-1">
              <div className="text-amber-400 text-sm font-mono font-bold flex items-center gap-1">
                <span>🏴‍☠️ STAGE DIRECTOR SAYS:</span>
              </div>
              <p className="text-zinc-100 font-body text-xs sm:text-sm font-semibold leading-snug">
                "{pirateQuotes[quoteIndex]}"
              </p>
              <div className="pt-1 flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePirateClick();
                  }}
                  className="px-2.5 py-1 rounded bg-amber-500 hover:bg-amber-400 text-black font-heading text-xs font-bold flex items-center gap-1"
                >
                  <Flame className="w-3 h-3 fill-black" />
                  <span>FIRE CANNON!</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPoppedOut(false);
                  }}
                  className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 text-[10px] font-mono"
                >
                  TUCK AWAY
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

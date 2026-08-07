import React, { useState } from 'react';
import { Shield, Zap, ArrowDown, ArrowUp } from 'lucide-react';
import { sound } from '../utils/sound';

export default function HangingChainMotors() {
  const [motorLeftHeight, setMotorLeftHeight] = useState(120); // px chain length
  const [motorRightHeight, setMotorRightHeight] = useState(140);
  const [isHoisting, setIsHoisting] = useState(false);

  const toggleLeftMotor = () => {
    sound.playMotorRev();
    sound.playChainClink();
    setIsHoisting(true);
    setMotorLeftHeight(prev => prev === 120 ? 220 : 120);
    setTimeout(() => setIsHoisting(false), 800);
  };

  const toggleRightMotor = () => {
    sound.playMotorRev();
    sound.playChainClink();
    setIsHoisting(true);
    setMotorRightHeight(prev => prev === 140 ? 240 : 140);
    setTimeout(() => setIsHoisting(false), 800);
  };

  return (
    <>
      {/* Stage Spotlight Flash effect when hoisting */}
      {isHoisting && (
        <div className="fixed top-0 inset-x-0 h-96 bg-gradient-to-b from-amber-500/20 via-red-500/10 to-transparent pointer-events-none z-30 animate-pulse"></div>
      )}

      {/* Left Stage Chain Motor Hoist */}
      <div className="fixed top-0 left-6 sm:left-16 z-30 flex flex-col items-center pointer-events-auto select-none group">
        {/* Steel Mounting Plate */}
        <div className="w-12 h-3 bg-zinc-800 border-x border-b border-zinc-600 rounded-b shadow-md"></div>

        {/* Dynamic Steel Chain Links */}
        <div 
          className="flex flex-col items-center transition-all duration-700 ease-in-out cursor-pointer"
          style={{ height: `${motorLeftHeight}px` }}
          onClick={toggleLeftMotor}
          title="Click to hoist / lower CM Lodestar motor"
        >
          {Array.from({ length: Math.floor(motorLeftHeight / 16) }).map((_, i) => (
            <div key={i} className="w-2.5 h-4 border-2 border-zinc-400 bg-zinc-700 rounded-full my-[-2px] shadow-sm group-hover:border-amber-400"></div>
          ))}
        </div>

        {/* Chain Motor Hoist Box */}
        <div 
          onClick={toggleLeftMotor}
          className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-zinc-900 border-2 border-amber-500 p-1 shadow-2xl hover:scale-110 transition-transform cursor-pointer overflow-hidden glass-panel"
        >
          <img 
            src="/assets/chain_motor.jpg" 
            alt="CM Lodestar Stage Rigging Chain Motor"
            className="w-full h-full object-cover rounded-lg brightness-110" 
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-1">
            <span className="text-[9px] font-mono text-amber-400 font-bold bg-black/80 px-1 rounded">
              CM 1-TON
            </span>
          </div>
        </div>

        {/* Hover Tooltip */}
        <div className="mt-1 px-2 py-0.5 rounded bg-zinc-950 border border-amber-500/40 text-[9px] font-mono text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
          CLICK TO HOIST
        </div>
      </div>

      {/* Right Stage Chain Motor Hoist */}
      <div className="fixed top-0 right-6 sm:right-16 z-30 flex flex-col items-center pointer-events-auto select-none group">
        {/* Steel Mounting Plate */}
        <div className="w-12 h-3 bg-zinc-800 border-x border-b border-zinc-600 rounded-b shadow-md"></div>

        {/* Dynamic Steel Chain Links */}
        <div 
          className="flex flex-col items-center transition-all duration-700 ease-in-out cursor-pointer"
          style={{ height: `${motorRightHeight}px` }}
          onClick={toggleRightMotor}
          title="Click to hoist / lower CM Lodestar motor"
        >
          {Array.from({ length: Math.floor(motorRightHeight / 16) }).map((_, i) => (
            <div key={i} className="w-2.5 h-4 border-2 border-zinc-400 bg-zinc-700 rounded-full my-[-2px] shadow-sm group-hover:border-amber-400"></div>
          ))}
        </div>

        {/* Chain Motor Hoist Box */}
        <div 
          onClick={toggleRightMotor}
          className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-zinc-900 border-2 border-amber-500 p-1 shadow-2xl hover:scale-110 transition-transform cursor-pointer overflow-hidden glass-panel"
        >
          <img 
            src="/assets/chain_motor.jpg" 
            alt="CM Lodestar Stage Rigging Chain Motor"
            className="w-full h-full object-cover rounded-lg brightness-110" 
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-1">
            <span className="text-[9px] font-mono text-amber-400 font-bold bg-black/80 px-1 rounded">
              CM 2-TON
            </span>
          </div>
        </div>

        {/* Hover Tooltip */}
        <div className="mt-1 px-2 py-0.5 rounded bg-zinc-950 border border-amber-500/40 text-[9px] font-mono text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
          CLICK TO HOIST
        </div>
      </div>
    </>
  );
}

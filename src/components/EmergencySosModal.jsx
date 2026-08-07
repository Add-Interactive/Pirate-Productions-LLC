import React, { useState } from 'react';
import { 
  ShieldAlert, PhoneCall, Clock, CheckCircle2, AlertTriangle, 
  MapPin, Send, X, Zap 
} from 'lucide-react';
import { sound } from '../utils/sound';

export default function EmergencySosModal({ isOpen, onClose }) {
  const [sosSubmitted, setSosSubmitted] = useState(false);
  const [sosData, setSosData] = useState({
    venue: 'Bridgestone Arena',
    roleNeeded: 'High Steel Riggers & Climbers',
    quantity: '4 Crew Members',
    timeframe: 'Immediate (Within 2 Hours)',
    contactPhone: ''
  });

  if (!isOpen) return null;

  const handleSubmitSos = (e) => {
    e.preventDefault();
    sound.playPowerChord();
    sound.playCrowdRoar();
    setSosSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#121217] border-2 border-red-500/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl shadow-red-600/30 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-red-500/30 pb-4">
          <div className="p-3 rounded-xl bg-red-600 text-white animate-pulse">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-red-400 font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span>NASHVILLE 24/7 RAPID CREW DISPATCH</span>
            </div>
            <h3 className="font-heading text-3xl text-white tracking-wider">
              EMERGENCY STAGE STAFFING SOS
            </h3>
          </div>
        </div>

        {!sosSubmitted ? (
          <form onSubmit={handleSubmitSos} className="space-y-4">
            <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs font-mono text-red-200 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              <span>Need last-minute riggers, machine ops, or stagehands in Nashville? Dispatch response under 15 minutes!</span>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">SELECT VENUE / LOCATION</label>
              <select
                value={sosData.venue}
                onChange={(e) => setSosData({ ...sosData, venue: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-body text-sm focus:border-red-500 focus:outline-none"
              >
                <option value="Bridgestone Arena">Bridgestone Arena (Downtown Nashville)</option>
                <option value="Nissan Stadium">Nissan Stadium (East Bank)</option>
                <option value="Geodis Park">Geodis Park (Fairgrounds)</option>
                <option value="Ascend Amphitheater">Ascend Amphitheater</option>
                <option value="Ryman Auditorium">Ryman Auditorium</option>
                <option value="Municipal Auditorium">Nashville Municipal Auditorium</option>
                <option value="Other Nashville Venue">Other Nashville / TN Venue</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1">CREW NEEDED</label>
                <select
                  value={sosData.roleNeeded}
                  onChange={(e) => setSosData({ ...sosData, roleNeeded: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-body text-sm focus:border-red-500 focus:outline-none"
                >
                  <option value="High Steel Riggers & Climbers">ETCP Riggers & Climbers</option>
                  <option value="Scissor Lift / Lull Machine Operators">Scissor & Lull Machine Ops</option>
                  <option value="Audio A1/A2 Techs">Audio A1/A2 Techs</option>
                  <option value="Lighting & GrandMA Programmers">Lighting Programmers</option>
                  <option value="LED Video Screen Techs">LED Video Techs</option>
                  <option value="Emergency Stagehands (10+ Hands)">Stagehand Hands (10+ Hands)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1">TIMEFRAME</label>
                <select
                  value={sosData.timeframe}
                  onChange={(e) => setSosData({ ...sosData, timeframe: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-body text-sm focus:border-red-500 focus:outline-none"
                >
                  <option value="Immediate (Within 2 Hours)">Immediate (Within 2 Hours)</option>
                  <option value="Tonight's Show (4-6 Hours)">Tonight's Show (4-6 Hours)</option>
                  <option value="Tomorrow Morning Load-In">Tomorrow Morning Load-In</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">PRODUCER PHONE NUMBER (FOR IMMEDIATE CALLBACK)</label>
              <input 
                type="tel" 
                required
                placeholder="(615) 555-0199"
                value={sosData.contactPhone}
                onChange={(e) => setSosData({ ...sosData, contactPhone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-red-500/50 text-white font-mono text-base focus:border-red-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-700 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-heading text-2xl font-bold tracking-wider transition-all shadow-xl shadow-red-600/40 flex items-center justify-center gap-3 border border-red-400/40"
            >
              <PhoneCall className="w-6 h-6 animate-bounce" />
              <span>DISPATCH EMERGENCY CREW NOW</span>
            </button>
          </form>
        ) : (
          <div className="p-6 rounded-xl bg-red-950/60 border border-red-500 text-center space-y-4 animate-fadeIn">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
            <h4 className="font-heading text-3xl text-white">EMERGENCY DISPATCH TRIGGERED!</h4>
            <p className="text-sm font-mono text-zinc-200">
              Pirate Productions On-Call Lead Supervisor is dialing <strong>{sosData.contactPhone || 'your contact line'}</strong> right now. Crew unit assigned for {sosData.venue}.
            </p>
            <div className="p-3 rounded bg-zinc-900 border border-zinc-800 font-mono text-xs text-amber-400">
              24/7 Direct Backup Line: (615) 555-PIRATE
            </div>
            <button
              onClick={() => {
                setSosSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-lg bg-zinc-800 text-white font-heading text-lg"
            >
              RETURN TO MAIN SITE
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

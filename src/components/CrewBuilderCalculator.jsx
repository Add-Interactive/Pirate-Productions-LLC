import React, { useState } from 'react';
import { 
  Calculator, Users, Shield, Volume2, Lightbulb, Tv, Truck, Hammer, 
  Sparkles, Download, CheckCircle, ArrowRight, DollarSign, Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';

export default function CrewBuilderCalculator() {
  const [eventType, setEventType] = useState('stadium');
  const [eventDays, setEventDays] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Crew Role Quantities & Day Rates
  const [crewCounts, setCrewCounts] = useState({
    riggers: 4,
    climbers: 2,
    audioFoh: 2,
    audioTechs: 3,
    lightingDesigners: 2,
    videoTechs: 3,
    lullOps: 2,
    scissorOps: 2,
    carpenters: 2,
    stagehands: 12
  });

  const rateTable = {
    riggers: { label: 'ETCP Lead Riggers', rate: 650, icon: Shield, dept: 'Rigging' },
    climbers: { label: 'High Steel Climbers', rate: 750, icon: Shield, dept: 'Rigging' },
    audioFoh: { label: 'FOH Audio / A1 Engineers', rate: 600, icon: Volume2, dept: 'Audio' },
    audioTechs: { label: 'A2 Systems & Cable Crew', rate: 450, icon: Volume2, dept: 'Audio' },
    lightingDesigners: { label: 'GrandMA3 Lighting Techs', rate: 550, icon: Lightbulb, dept: 'Lighting' },
    videoTechs: { label: 'V1 Video & LED Wall Techs', rate: 550, icon: Tv, dept: 'Video' },
    lullOps: { label: 'Lull / Telehandler Machine Ops', rate: 500, icon: Truck, dept: 'Heavy Machinery' },
    scissorOps: { label: 'Scissor & Boom Lift Ops', rate: 480, icon: Truck, dept: 'Heavy Machinery' },
    carpenters: { label: 'Master Stage Carpenters', rate: 500, icon: Hammer, dept: 'Scenic Props' },
    stagehands: { label: 'Stagehands & Loaders', rate: 350, icon: Users, dept: 'Ground Crew' }
  };

  const handleCountChange = (key, delta) => {
    sound.playLaserBeep();
    setCrewCounts(prev => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta)
    }));
  };

  // Calculate Subtotal per day and grand total
  const calculateTotals = () => {
    let totalCrewCount = 0;
    let dailyCost = 0;

    Object.keys(crewCounts).forEach(key => {
      const count = crewCounts[key];
      totalCrewCount += count;
      dailyCost += count * rateTable[key].rate;
    });

    const eventMultiplier = eventType === 'festival' ? 1.15 : eventType === 'tour' ? 0.9 : 1.0;
    const estimatedTotal = Math.round(dailyCost * eventDays * eventMultiplier);

    return { totalCrewCount, dailyCost, estimatedTotal };
  };

  const totals = calculateTotals();

  const handleSubmitEstimate = (e) => {
    e.preventDefault();
    sound.playPowerChord();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setSubmitted(true);
  };

  return (
    <section id="crew-calculator" className="py-24 bg-[#0d0d12] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>INSTANT CREW BUILDER & RATE ESTIMATOR</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white font-extrabold tracking-wider uppercase">
            BUILD YOUR <span className="text-amber-500 gold-glow-text">CREW ROSTER</span> & GET INSTANT RATES
          </h2>
          <p className="max-w-3xl mx-auto text-zinc-400 text-base sm:text-lg">
            Configure your custom live event crew headcount across all trades. Get transparent day-rate calculations and instant booking dispatch quotes for Nashville & Nationwide tours.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Selectors & Roster List (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Event Type & Days Config */}
            <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4 glass-panel">
              <h3 className="font-heading text-2xl text-white tracking-wider flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-400" />
                <span>1. SELECT EVENT TYPE & DURATION</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'stadium', label: 'Stadium Concert' },
                  { id: 'festival', label: 'Music Festival' },
                  { id: 'arena', label: 'Arena Tour' },
                  { id: 'corporate', label: 'Corporate Event' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      sound.playLaserBeep();
                      setEventType(item.id);
                    }}
                    className={`py-3 px-3 rounded-xl font-heading text-lg tracking-wider transition-all border ${
                      eventType === item.id 
                        ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-lg shadow-amber-500/20' 
                        : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Event Days Counter Slider */}
              <div className="pt-2 flex items-center justify-between font-mono text-sm">
                <span className="text-zinc-400">DURATION (DAYS):</span>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 5, 7, 14].map(day => (
                    <button
                      key={day}
                      onClick={() => {
                        sound.playLaserBeep();
                        setEventDays(day);
                      }}
                      className={`w-8 h-8 rounded-lg font-bold transition-all ${
                        eventDays === day ? 'bg-amber-400 text-black' : 'bg-zinc-800 text-zinc-300'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Crew Position Selectors */}
            <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4 glass-panel">
              <h3 className="font-heading text-2xl text-white tracking-wider flex items-center gap-2 border-b border-zinc-800 pb-3">
                <Users className="w-5 h-5 text-amber-400" />
                <span>2. CONFIGURE CREW HEADCOUNT BY TRADE</span>
              </h3>

              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                {Object.keys(crewCounts).map((key) => {
                  const item = rateTable[key];
                  const Icon = item.icon;
                  const count = crewCounts[key];
                  return (
                    <div 
                      key={key}
                      className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-between hover:border-amber-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-heading text-lg text-white tracking-wider">{item.label}</div>
                          <div className="text-xs font-mono text-zinc-400">
                            ${item.rate} / day • <span className="text-amber-400/80">{item.dept}</span>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Counter */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleCountChange(key, -1)}
                          className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-lg transition-colors flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-heading text-2xl text-amber-400">
                          {count}
                        </span>
                        <button
                          onClick={() => handleCountChange(key, 1)}
                          className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-300 font-bold text-lg transition-colors flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Quote Summary Box (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-6 sm:p-8 rounded-2xl bg-zinc-950 border-2 border-amber-500/40 space-y-6 shadow-2xl glass-panel">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">NASHVILLE DISPATCH QUOTE</span>
                  <h3 className="font-heading text-3xl text-white tracking-wider">CREW RATE SUMMARY</h3>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
              </div>

              {/* Roster Breakdown Pills */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>SELECTED EVENT:</span>
                  <span className="text-amber-400 font-bold uppercase">{eventType} ({eventDays} Day{eventDays > 1 ? 's' : ''})</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>TOTAL HEADCOUNT:</span>
                  <span className="text-white font-bold text-sm">{totals.totalCrewCount} CREW MEMBERS</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>EST. DAILY DAY-RATE:</span>
                  <span className="text-amber-400 font-bold">${totals.dailyCost.toLocaleString()} / DAY</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>WORKMAN'S COMP & INSURANCE:</span>
                  <span className="text-emerald-400 font-bold">INCLUDED ($0.00)</span>
                </div>
              </div>

              {/* Total Cost Display Card */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500/20 via-zinc-900 to-red-500/20 border border-amber-500/50 text-center space-y-1">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">ESTIMATED PRODUCTION CREW TOTAL</div>
                <div className="font-heading text-5xl text-amber-400 font-black tracking-wider gold-glow-text">
                  ${totals.estimatedTotal.toLocaleString()}
                </div>
                <p className="text-[11px] font-mono text-zinc-400">Includes 10-hr Standard Shifts, ETCP Certs & Safety Supervision</p>
              </div>

              {/* Request Form or Submission Confirmation */}
              {!submitted ? (
                <form onSubmit={handleSubmitEstimate} className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">PRODUCER / VENUE NAME</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Bridgestone Arena Tour / Live Nation" 
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-body text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">CONTACT EMAIL / PHONE</label>
                    <input 
                      type="email" 
                      required
                      placeholder="production@tour.com" 
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-body text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 hover:from-amber-400 hover:to-red-500 text-black font-heading text-2xl font-bold tracking-wider transition-all shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2"
                  >
                    <span>SUBMIT ROSTER & LOCK DISPATCH</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <div className="p-6 rounded-xl bg-emerald-950/80 border border-emerald-500/60 text-center space-y-3 animate-fadeIn">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-heading text-2xl text-white">ROSTER LOCK CONFIRMED!</h4>
                  <p className="text-xs text-zinc-300 font-mono">
                    Pirate Productions Nashville dispatch has received your request. A lead production coordinator will call within 15 minutes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-zinc-900 text-amber-400 font-heading text-sm"
                  >
                    EDIT CREW ROSTER
                  </button>
                </div>
              )}

              <div className="text-[11px] font-mono text-zinc-500 text-center flex items-center justify-center gap-1">
                <span>🏴‍☠️ Pirate Productions Nashville HQ</span>
                <span>•</span>
                <span>Dispatch: (615) 555-PIRATE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

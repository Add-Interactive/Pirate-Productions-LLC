import React, { useState } from 'react';
import { 
  MapPin, Shield, Truck, Users, Zap, ExternalLink, Info, CheckCircle2 
} from 'lucide-react';
import { sound } from '../utils/sound';

export default function NashvilleVenueMap() {
  const [selectedVenue, setSelectedVenue] = useState('bridgestone');

  const venues = [
    {
      id: 'bridgestone',
      name: 'BRIDGESTONE ARENA',
      location: '501 Broadway, Downtown Nashville',
      type: 'ARENA TOUR / CONCERT',
      capacity: '20,000 Seats',
      maxRiggingTons: '65 Tons Flown',
      trimHeight: '72 Feet',
      machinesRequired: '4 JLG Scissor Lifts, 2 Caterpillar Forklifts',
      typicalPirateCrew: '48 Crew (12 Riggers, 6 Audio, 6 Lighting, 8 Video, 16 Hands)',
      notes: 'Downtown Broadway access requires coordinated truck staging and 24/7 load-in supervision.'
    },
    {
      id: 'nissan',
      name: 'NISSAN STADIUM',
      location: '1 Titan Way, East Bank Nashville',
      type: 'STADIUM MEGA TOUR',
      capacity: '69,143 Seats',
      maxRiggingTons: '95 Tons Flown',
      trimHeight: '110 Feet',
      machinesRequired: '6 Lull Telehandlers, 8 High-Reach Boom Lifts',
      typicalPirateCrew: '85 Crew (24 Riggers, 10 Audio, 12 Lighting, 14 Video, 25 Hands)',
      notes: 'Full field protection matting and high-wind outdoor rigging safety protocols enforced.'
    },
    {
      id: 'geodis',
      name: 'GEODIS PARK',
      location: '501 Benton Ave, Fairgrounds Nashville',
      type: 'STADIUM FESTIVAL',
      capacity: '30,000 Seats',
      maxRiggingTons: '60 Tons Flown',
      trimHeight: '85 Feet',
      machinesRequired: '3 Lull Telehandlers, 4 All-Terrain Lifts',
      typicalPirateCrew: '44 Crew (10 Riggers, 6 Audio, 8 Lighting, 6 Video, 14 Hands)',
      notes: 'Rapid load-in access via Fairgrounds logistics corridor.'
    },
    {
      id: 'ascend',
      name: 'ASCEND AMPHITHEATER',
      location: '310 1st Ave S, Riverfront Park',
      type: 'OUTDOOR AMPHITHEATER',
      capacity: '6,800 Capacity',
      maxRiggingTons: '40 Tons Flown',
      trimHeight: '55 Feet',
      machinesRequired: '2 Scissor Lifts, 2 Forklifts',
      typicalPirateCrew: '28 Crew (6 Riggers, 4 Audio, 4 Lighting, 4 Video, 10 Hands)',
      notes: 'Riverfront load-in ramp requiring specialized dock management.'
    },
    {
      id: 'ryman',
      name: 'RYMAN AUDITORIUM',
      location: '116 5th Ave N, Downtown Nashville',
      type: 'HISTORIC CONCERT HALL',
      capacity: '2,362 Seats',
      maxRiggingTons: '25 Tons Flown (Historic Truss Specs)',
      trimHeight: '42 Feet',
      machinesRequired: 'Low-profile electric scissor lifts',
      typicalPirateCrew: '18 Specialized Historic Stagehand Leads',
      notes: 'Pew protection deck covers and acoustic resonance compliance required.'
    }
  ];

  const current = venues.find(v => v.id === selectedVenue) || venues[0];

  return (
    <section className="py-24 bg-[#0a0a0d] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>NASHVILLE VENUE SPECIFICATIONS & CREW MATRICES</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white font-extrabold tracking-wider uppercase">
            MUSIC CITY <span className="text-amber-500 gold-glow-text">VENUE DISPATCH HUB</span>
          </h2>
          <p className="max-w-3xl mx-auto text-zinc-400 text-base sm:text-lg">
            Pirate Productions maintains pre-rigged blueprints, trim specs, and dedicated crew dispatch units for all major Nashville venues.
          </p>
        </div>

        {/* Venue Selector Tabs & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Venue List Tabs (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            {venues.map((v) => {
              const isSelected = v.id === selectedVenue;
              return (
                <div
                  key={v.id}
                  onClick={() => {
                    sound.playLaserBeep();
                    setSelectedVenue(v.id);
                  }}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    isSelected 
                      ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-xl shadow-amber-500/20 scale-102' 
                      : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-amber-500/40 hover:text-white'
                  }`}
                >
                  <div>
                    <div className="font-heading text-xl tracking-wider">{v.name}</div>
                    <div className={`text-xs font-mono ${isSelected ? 'text-black/80' : 'text-zinc-400'}`}>
                      {v.type} • {v.capacity}
                    </div>
                  </div>
                  <MapPin className={`w-5 h-5 ${isSelected ? 'text-black' : 'text-amber-400'}`} />
                </div>
              );
            })}
          </div>

          {/* Right Side: Selected Venue Details Panel (8 cols) */}
          <div className="lg:col-span-8 rounded-3xl bg-zinc-950 border border-amber-500/40 p-6 sm:p-8 space-y-6 shadow-2xl glass-panel relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-4 gap-2">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">{current.type}</span>
                <h3 className="font-heading text-4xl text-white tracking-wider">{current.name}</h3>
                <p className="text-xs font-mono text-zinc-400 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-red-400" /> {current.location}
                </p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-sm font-bold">
                CAPACITY: {current.capacity}
              </div>
            </div>

            {/* Spec Matrix Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase font-bold">
                  <Shield className="w-4 h-4" /> MAX FLOWN RIGGING LOAD
                </div>
                <div className="font-heading text-3xl text-white">{current.maxRiggingTons}</div>
                <div className="text-xs font-mono text-zinc-400">Trim Height: {current.trimHeight}</div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase font-bold">
                  <Truck className="w-4 h-4" /> MACHINERY REQUIRED
                </div>
                <div className="font-body text-sm font-bold text-zinc-200 mt-1">{current.machinesRequired}</div>
                <div className="text-xs font-mono text-zinc-400">Carded Operators Mandatory</div>
              </div>
            </div>

            {/* Standard Crew Roster Card */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-heading text-xl">
                <Users className="w-5 h-5" />
                <span>PIRATE PRODUCTIONS STANDARD CREW DISPATCH</span>
              </div>
              <p className="font-mono text-sm text-zinc-200 font-bold">
                ⚡ {current.typicalPirateCrew}
              </p>
            </div>

            {/* Logistics Notes */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-start gap-2">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Logistics Protocol:</strong> {current.notes}</span>
            </div>

            {/* Dispatch Action */}
            <a
              href="#crew-calculator"
              onClick={() => sound.playPowerChord()}
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading text-xl font-bold tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <span>BOOK CREW DISPATCH FOR {current.name}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { 
  Clock, Play, Pause, ChevronRight, CheckCircle2, Shield, 
  Volume2, Lightbulb, Tv, Truck, Hammer, Zap, Flame
} from 'lucide-react';
import { sound } from '../utils/sound';

export default function TimelineSimulator() {
  const [activeStep, setActiveStep] = useState(0);

  const timelineSteps = [
    {
      time: '00:00 HR',
      title: 'HIGH STEEL RIGGING & MOTOR FLY',
      leadTrade: 'ETCP Lead Riggers & High Climbers',
      icon: Shield,
      color: 'amber',
      desc: 'Climbers scale stadium high steel to drop chalk lines and hang CM Lodestar hoists. Laser inclinometers verify structural load points.',
      checklist: ['Chalk line placement & beam attachment', 'Hoist motor power run & safety secondary wraps', 'Motor weight load cell verification']
    },
    {
      time: '02:00 HR',
      title: 'HEAVY MACHINERY & LED VIDEO ASSEMBLY',
      leadTrade: 'Lull Operators & V1 Video Techs',
      icon: Truck,
      color: 'red',
      desc: 'Telehandler Lulls and Forklifts unload video frame trucks. V1 crew locks Roe Visual LED panels onto ground support towers.',
      checklist: ['Lull telehandler stage wing positioning', 'LED screen frame latching & signal check', 'Scissor lift high border alignment']
    },
    {
      time: '03:30 HR',
      title: 'LINE ARRAY AUDIO FLY & NETWORKING',
      leadTrade: 'A1 Systems Tech & Audio Crew',
      icon: Volume2,
      color: 'cyan',
      desc: 'Stadium line array speakers are pinned, lifted to 45ft, and angled via SMAART acoustic software. Dante primary/secondary fiber runs to FOH.',
      checklist: ['L-Acoustics K1 array rigging pin check', 'Subwoofer ground arc array placement', 'FOH console snake & network patch']
    },
    {
      time: '05:00 HR',
      title: 'INTELLIGENT LIGHTING & LASER ALIGNMENT',
      leadTrade: 'GrandMA3 Programmers & L1 Techs',
      icon: Lightbulb,
      color: 'amber',
      desc: 'Trusses fly to trim height. 120+ moving head fixtures, strobe bars, and Class 4 lasers undergo DMX Universe patching and focus.',
      checklist: ['Fixture DMX addressing & power distro test', 'Followspot operator headset check', 'FDA Laser safety zone mapping']
    },
    {
      time: '07:00 HR',
      title: 'SCENIC PROPS & STAGE CARPENTRY',
      leadTrade: 'Master Carpenters & Stagehands',
      icon: Hammer,
      color: 'purple',
      desc: 'Stage deck skirts, automated band risers, set props, and staircases are bolted in place by master concert carpenters.',
      checklist: ['Rolling drum riser motor test', 'Stage deck leveling & edge safety tape', 'Set props flame retardant check']
    },
    {
      time: '09:30 HR',
      title: 'ARTIST SOUNDCHECK & FINAL RUN-THROUGH',
      leadTrade: 'Production Lead & Technical Directors',
      icon: Zap,
      color: 'emerald',
      desc: 'Headliner soundcheck, wireless mic frequency sweep, video playback sync test, and full pyrotechnic safety walkthrough.',
      checklist: ['RF wireless spectrum scan & IEM check', 'Lighting cue & video timecode sync', 'Pyro hazard radius clear']
    },
    {
      time: '12:00 HR',
      title: 'SHOWTIME: ROCK & ROLL LIVE!',
      leadTrade: 'Full Crew Active (FOH, Spot, Deckhands)',
      icon: Flame,
      color: 'red',
      desc: 'Lights go down, crowd roars! Pirate Productions crew controls FOH mix, moving spotlights, video IMAG, and deck transitions.',
      checklist: ['FOH Audio & Lighting live control', 'Spotlight operators tracking artists', 'Stagehand deck changeovers between sets']
    },
    {
      time: '15:00 HR',
      title: 'STRIKE, LOAD-OUT & SITE CLEAR',
      leadTrade: 'All Hands On Deck & Truck Loaders',
      icon: Clock,
      color: 'zinc',
      desc: 'Record-breaking strike speed! Rigging lowered, video packed in road cases, heavy equipment loading semi-trucks, venue cleared.',
      checklist: ['Motor rig lower & cable coil', 'Road case packing & truck tie-down', 'Venue floor sweep & final supervisor sign-off']
    }
  ];

  const handleNextStep = () => {
    sound.playLaserBeep();
    setActiveStep((prev) => (prev + 1) % timelineSteps.length);
  };

  const step = timelineSteps[activeStep];
  const StepIcon = step.icon;

  return (
    <section id="timeline" className="py-24 bg-[#0a0a0d] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>LOAD-IN TO STRIKE EXECUTION TIMELINE</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl text-white font-extrabold tracking-wider uppercase">
              THE <span className="text-amber-500 gold-glow-text">PIRATE TIMELINE:</span> LOAD-IN TO STRIKE
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-2">
              See how our synchronized crew of riggers, audio engineers, video tech leads, and heavy machine operators execute flaw-free arena productions.
            </p>
          </div>

          {/* Timeline Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleNextStep}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading text-xl font-bold tracking-wider transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
            >
              <span>ADVANCE TIMELINE ({activeStep + 1}/8)</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Timeline Progress Bar */}
        <div className="w-full bg-zinc-900 h-3 rounded-full overflow-hidden border border-zinc-800 mb-10 flex">
          {timelineSteps.map((s, idx) => (
            <div
              key={idx}
              onClick={() => {
                sound.playLaserBeep();
                setActiveStep(idx);
              }}
              className={`h-full flex-1 cursor-pointer transition-all border-r border-zinc-950 ${
                idx <= activeStep ? 'bg-gradient-to-r from-amber-500 to-amber-400 shadow-md' : 'bg-zinc-800 hover:bg-zinc-700'
              }`}
              title={s.title}
            ></div>
          ))}
        </div>

        {/* Timeline Interactive Card & Steps Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Active Step Detail Display (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-zinc-950 border border-amber-500/40 p-6 sm:p-8 space-y-6 shadow-2xl glass-panel relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-8xl font-heading text-zinc-800/40 font-black select-none pointer-events-none">
              {step.time}
            </div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3.5 rounded-xl bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20">
                <StepIcon className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">{step.leadTrade}</span>
                <h3 className="font-heading text-3xl sm:text-4xl text-white tracking-wider">{step.title}</h3>
              </div>
            </div>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed relative z-10">
              {step.desc}
            </p>

            <div className="space-y-3 pt-4 border-t border-zinc-800 relative z-10">
              <h4 className="font-heading text-xl text-amber-400 uppercase">SYNCHRONIZED EXECUTION CHECKLIST:</h4>
              <div className="space-y-2">
                {step.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Step Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
            {timelineSteps.map((s, idx) => {
              const Icon = s.icon;
              const isActive = idx === activeStep;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    sound.playLaserBeep();
                    setActiveStep(idx);
                  }}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    isActive 
                      ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg' 
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs px-2 py-1 rounded bg-zinc-950 font-bold text-amber-400">
                      {s.time}
                    </span>
                    <div>
                      <div className="font-heading text-lg tracking-wider">{s.title}</div>
                      <div className="text-[11px] font-mono text-zinc-500">{s.leadTrade}</div>
                    </div>
                  </div>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-amber-400' : 'text-zinc-600'}`} />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

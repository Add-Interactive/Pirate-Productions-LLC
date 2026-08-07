import React, { useState } from 'react';
import { 
  Volume2, Lightbulb, Tv, Shield, Hammer, Truck, Users, 
  ChevronRight, CheckCircle2, Award, Zap, AlertTriangle, X
} from 'lucide-react';
import { sound } from '../utils/sound';

export default function ServicesGrid({ onAddCrewToCalculator }) {
  const [selectedRole, setSelectedRole] = useState(null);

  const rolesData = [
    {
      id: 'rigging',
      title: 'STRUCTURE, RIGGERS & HIGH CLIMBERS',
      category: 'HIGH STEEL & RIGGING',
      icon: Shield,
      color: 'amber',
      badge: 'ETCP CERTIFIED',
      image: '/assets/rigger_high_climb.jpg',
      shortDesc: 'Master arena riggers and high steel climbers. We hang heavy stadium trusses, line arrays, LED walls, and pyrotechnics safely and flawlessly.',
      rolesIncluded: ['ETCP Master Lead Rigger', 'High Steel Climber', 'Ground Rigger', 'Motor Technician', 'Bridle & Truss Specialist'],
      gearUsed: ['CM Lodestar Motors', 'Kito Manual Hoists', 'Petzl Harness Systems', 'Laser Inclinometers', 'Load Cell Controllers'],
      safetyStandard: '100% OSHA 30 & ETCP Certified, Fall Protection Compliant (ANSI Z359)',
    },
    {
      id: 'audio',
      title: 'CONCERT AUDIO & SOUND ENGINEERING',
      category: 'AUDIO DEPT',
      icon: Volume2,
      color: 'cyan',
      badge: 'DANTE LEVEL 3',
      image: '/assets/audio_video_foh.jpg',
      shortDesc: 'Front of House (FOH) mix engineers, A1/A2 audio technicians, Dante network managers, wireless RF coordinators & line array specialists.',
      rolesIncluded: ['FOH Mix Engineer', 'Monitor Engineer (A1)', 'Audio Tech (A2)', 'RF / Wireless Coordinator', 'System Systems Tech / Tuning'],
      gearUsed: ['DiGiCo SD/Quantum', 'SSL Live', 'L-Acoustics K1/K2', 'd&b audiotechnik GSL', 'Shure Axient Digital'],
      safetyStandard: 'Hearing Conservation Compliant, Dante Level 3 Network Certified',
    },
    {
      id: 'lighting',
      title: 'INTELLIGENT LIGHTING & LASERS',
      category: 'LIGHTING DEPT',
      icon: Lightbulb,
      color: 'amber',
      badge: 'GRANDMA3 EXPERTS',
      image: '/assets/hero_rock_concert.jpg',
      shortDesc: 'Lighting Designers, GrandMA3 console programmers, L1/L2 lighting techs, followspot operators, and licensed pyrotechnic/laser techs.',
      rolesIncluded: ['Lighting Programmer (L1)', 'Lighting Tech (L2)', 'Robotic Moving Light Specialist', 'Followspot Operator', 'Laser Safety Officer'],
      gearUsed: ['MA Lighting GrandMA3 Full-Size', 'Robe Megapointe', 'Martin MAC Ultra', 'Chauvet Strike Array', 'Pangolin Laser Systems'],
      safetyStandard: 'FDA Licensed Laser Safety Officers, Class 4 Laser Certification',
    },
    {
      id: 'video',
      title: 'LED VIDEO & BROADCAST PRODUCTION',
      category: 'VIDEO DEPT',
      icon: Tv,
      color: 'purple',
      badge: '4K BROADCAST',
      image: '/assets/audio_video_foh.jpg',
      shortDesc: 'V1 video directors, LED wall tech leads, camera operators, media server operators (Disguise/Resolume) & broadcast engineers.',
      rolesIncluded: ['Video Director (V1)', 'LED Wall Master Tech', 'Camera Operator (IMAG)', 'Media Server Tech', 'Playback Engineer'],
      gearUsed: ['Roe Visual Carbon LED Panels', 'Disguise d3 Media Servers', 'Blackmagic Broadcast Studio', 'Barco E2 Event Processors'],
      safetyStandard: 'High Definition Signal Routing & Structural LED Frame Certification',
    },
    {
      id: 'machines',
      title: 'HEAVY MACHINERY & OPERATORS',
      category: 'LIFTS & OPERATORS',
      icon: Truck,
      color: 'red',
      badge: 'OSHA OPERATOR CERT',
      image: '/assets/crew_heavy_equipment.jpg',
      shortDesc: 'Certified operators for all concert lift equipment: Scissor Lifts, Lowes/Genie Boom Lifts, Lulls, Telehandlers, and All-Terrain Forklifts.',
      rolesIncluded: ['Telehandler / Lull Operator', 'Industrial Forklift Operator', 'High-Reach Boom Lift Operator', 'Scissor Lift Specialist', 'Spotter & Logistics Lead'],
      gearUsed: ['JLG 1350SJP Boom Lift', 'Genie GS-1930 Scissor Lift', 'Caterpillar Telehandlers', 'Toyota 10K Forklifts'],
      safetyStandard: '100% Licensed & Carded Operators, Daily Pre-Shift Inspection Verified',
    },
    {
      id: 'scenic',
      title: 'SCENIC PROPS & CARPENTRY',
      category: 'CARPENTRY & STAGE',
      icon: Hammer,
      color: 'amber',
      badge: 'MASTER CARPENTERS',
      image: '/assets/rigger_high_climb.jpg',
      shortDesc: 'Stage construction carpenters, set designers, automation winch technicians, props masters, set dressers, and deck hands.',
      rolesIncluded: ['Head Stage Carpenter', 'Stage Automation Tech', 'Props Master & Scenic Set Dresser', 'Deck Hand & Turntable Tech', 'Staging Deck Builder'],
      gearUsed: ['Staging Concepts Decks', 'TAIT Stage Automation', 'Precision Power Tools', 'Rigging Winches'],
      safetyStandard: 'Structural Load Calculation Compliant, Flame Retardant Certified Props',
    },
    {
      id: 'stagehands',
      title: 'STAGEHANDS & HEAVY LOAD-IN',
      category: 'GROUND CREW',
      icon: Users,
      color: 'zinc',
      badge: 'LOCAL 142 EXPERIENCE',
      image: '/assets/crew_heavy_equipment.jpg',
      shortDesc: 'Battle-tested stagehand crews for arena load-in, cable paging, backline setup, truck packing, quick stage changes, and rapid strike.',
      rolesIncluded: ['Crew Lead / Steward', 'General Stagehand', 'Cable Pager / Utility', 'Backline Tech Assistant', 'Truck Loader Specialist'],
      gearUsed: ['Heavy Duty Steel-Toe Gear', 'Work Light Arrays', 'Ramp & Stage Dolly Systems', 'Protective Armor'],
      safetyStandard: 'PPE Enforced (Hard Hats, Steel-Toes, High-Vis), Drug & Alcohol Screened',
    }
  ];

  const handleOpenDetails = (role) => {
    sound.playLaserBeep();
    setSelectedRole(role);
  };

  return (
    <section id="services" className="py-24 bg-[#0d0d12] border-t border-zinc-800/80 relative">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>FULL PRODUCTION CREW ROSTER</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white font-extrabold tracking-wider uppercase">
            THE WORKS: <span className="text-amber-500 gold-glow-text">EVERY ROLE.</span> EVERY CONCERT.
          </h2>
          <p className="max-w-3xl mx-auto text-zinc-400 text-base sm:text-lg">
            We staff every single trade required for stadium concerts, multi-stage festivals, arena tours, and high-impact corporate productions across Nashville and North America.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rolesData.map((role) => {
            const Icon = role.icon;
            return (
              <div 
                key={role.id}
                className="group relative rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col overflow-hidden glass-panel"
              >
                {/* Top Image Banner */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={role.image} 
                    alt={role.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md bg-amber-500 text-black font-heading text-sm tracking-wider font-bold shadow-md">
                      {role.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-md bg-black/80 text-amber-400 border border-amber-500/40 font-mono text-xs tracking-wider">
                      {role.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading text-2xl text-white tracking-wider group-hover:text-amber-400 transition-colors">
                        {role.title}
                      </h3>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                      {role.shortDesc}
                    </p>
                  </div>

                  {/* Included Roles Pill List */}
                  <div className="pt-3 border-t border-zinc-800">
                    <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Key Positions Staffed:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {role.rolesIncluded.slice(0, 3).map((pos, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-xs font-mono">
                          • {pos}
                        </span>
                      ))}
                      {role.rolesIncluded.length > 3 && (
                        <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-xs font-mono">
                          +{role.rolesIncluded.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <button
                    onClick={() => handleOpenDetails(role)}
                    className="w-full py-2.5 rounded-lg bg-zinc-800 hover:bg-amber-500 text-zinc-200 hover:text-black font-heading text-lg tracking-wider transition-all flex items-center justify-center gap-2 border border-zinc-700 hover:border-amber-400"
                  >
                    <span>VIEW SPECIFICATIONS & GEAR</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Role Specifications Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#121217] border border-amber-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 border-b border-zinc-800 pb-4">
              <div className="p-3 rounded-xl bg-amber-500 text-black font-bold">
                {React.createElement(selectedRole.icon, { className: "w-8 h-8" })}
              </div>
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">{selectedRole.category}</span>
                <h3 className="font-heading text-3xl text-white tracking-wider">{selectedRole.title}</h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="space-y-6 text-sm text-zinc-300">
              <p className="text-base text-zinc-200">{selectedRole.shortDesc}</p>

              <div>
                <h4 className="font-heading text-xl text-amber-400 mb-2 uppercase">Full Positions Available:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedRole.rolesIncluded.map((r, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded bg-zinc-900 border border-zinc-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-mono text-xs">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-heading text-xl text-amber-400 mb-2 uppercase">Hardware & Gear Standards:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRole.gearUsed.map((g, idx) => (
                    <span key={idx} className="px-3 py-1 rounded bg-zinc-800 text-amber-300 font-mono text-xs border border-amber-500/20">
                      ⚙️ {g}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-heading text-lg">
                  <Award className="w-5 h-5" />
                  <span>SAFETY & CERTIFICATION STANDARD</span>
                </div>
                <p className="font-mono text-xs text-zinc-300">{selectedRole.safetyStandard}</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-zinc-800">
              <button
                onClick={() => setSelectedRole(null)}
                className="px-5 py-2.5 rounded-lg bg-zinc-800 text-zinc-300 font-heading text-lg"
              >
                CLOSE
              </button>
              <a
                href="#crew-calculator"
                onClick={() => {
                  sound.playPowerChord();
                  setSelectedRole(null);
                }}
                className="px-6 py-2.5 rounded-lg bg-amber-500 text-black font-heading text-lg font-bold hover:bg-amber-400 transition-colors shadow-lg"
              >
                ADD TO RATE ESTIMATOR
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

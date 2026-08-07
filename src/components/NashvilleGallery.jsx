import React, { useState } from 'react';
import { 
  Award, ShieldCheck, MapPin, ZoomIn, CheckCircle2, 
  ExternalLink, Sparkles, X, ChevronRight 
} from 'lucide-react';
import { sound } from '../utils/sound';

export default function NashvilleGallery() {
  const [activeModalImage, setActiveModalImage] = useState(null);

  const galleryItems = [
    {
      title: 'Stadium Rock Tour Main Stage',
      location: 'Nissan Stadium • Nashville, TN',
      image: '/assets/hero_rock_concert.jpg',
      category: 'CONCERT TOUR',
      crewStaffed: '64 Crew Members (Riggers, Audio A1, Lighting L1, LED Video, Heavy Equipment Ops)'
    },
    {
      title: 'High Steel Rigging & Motor Flying',
      location: 'Bridgestone Arena • Nashville, TN',
      image: '/assets/rigger_high_climb.jpg',
      category: 'HIGH RIGGING',
      crewStaffed: '18 ETCP Certified Arena Riggers & High Steel Climbers'
    },
    {
      title: 'Heavy Lift & LED Wall Rigging',
      location: 'Ascend Amphitheater • Nashville, TN',
      image: '/assets/crew_heavy_equipment.jpg',
      category: 'HEAVY MACHINERY',
      crewStaffed: '12 Licensed Lull Telehandler & Scissor Lift Machine Operators'
    },
    {
      title: 'Front of House Audio & Video Mix',
      location: 'Geodis Park • Nashville, TN',
      image: '/assets/audio_video_foh.jpg',
      category: 'AUDIO & VIDEO',
      crewStaffed: '14 FOH Engineers, Dante Specialists & Broadcast Camera Operators'
    }
  ];

  const certificationsList = [
    {
      title: 'ETCP CERTIFIED ARENA RIGGERS',
      desc: 'Entertainment Technician Certification Program (ETCP) Arena Rigging Credentials & High Steel Specialist Certifications.',
      badge: 'ETCP ARENA RIGGING'
    },
    {
      title: 'OSHA 30 & 10 SAFETY LEADERSHIP',
      desc: '100% of Lead Riggers and Production Supervisors carry OSHA 30-Hour Construction Safety credentials.',
      badge: 'OSHA 30 COMPLIANT'
    },
    {
      title: 'HEAVY MACHINERY OPERATOR LICENSES',
      desc: 'Certified cards for Telehandlers (Lulls), Forklifts (Class 4/5/7), Scissor Lifts (Type 3a), and High Boom Lifts (Type 3b).',
      badge: 'JLG & GENIE CARDED'
    },
    {
      title: 'DANTE LEVEL 3 AUDIO NETWORKING',
      desc: 'Audinate Dante Level 3 Certification for complex multi-channel stadium digital audio distribution.',
      badge: 'AUDINATE DANTE L3'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0d0d12] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>NASHVILLE & STADIUM SHOWCASE</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white font-extrabold tracking-wider uppercase">
            MUSIC CITY'S <span className="text-amber-500 gold-glow-text">LIVE PRODUCTION</span> TITAN
          </h2>
          <p className="max-w-3xl mx-auto text-zinc-400 text-base sm:text-lg">
            From Nissan Stadium to Bridgestone Arena, see Pirate Productions in action powering North America's largest stadium tours, festivals, and live events.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl glass-panel"
            >
              <div className="h-80 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-md bg-amber-500 text-black font-heading text-sm tracking-wider font-bold">
                    {item.category}
                  </span>
                </div>

                <button
                  onClick={() => {
                    sound.playLaserBeep();
                    setActiveModalImage(item);
                  }}
                  className="absolute top-4 right-4 p-2.5 rounded-lg bg-black/80 text-amber-400 hover:text-white border border-amber-500/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-400 font-mono text-xs">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-heading text-3xl text-white tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-300">
                    ⚡ {item.crewStaffed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Industry Compliance Block */}
        <div className="p-8 rounded-3xl bg-zinc-950 border border-amber-500/40 space-y-8 glass-panel shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
            <div>
              <div className="flex items-center gap-2 text-amber-400 font-heading text-xl">
                <ShieldCheck className="w-6 h-6" />
                <span>SAFETY & CERTIFICATION COMPLIANCE</span>
              </div>
              <h3 className="font-heading text-4xl text-white tracking-wider">
                100% CERTIFIED CREW LEADERSHIP
              </h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs">
              ⚡ ZERO SAFETY INCIDENTS IN 2,800+ SHOWS
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationsList.map((cert, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between">
                  <Award className="w-6 h-6 text-amber-400" />
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono text-[10px] font-bold">
                    {cert.badge}
                  </span>
                </div>
                <h4 className="font-heading text-xl text-white tracking-wider">{cert.title}</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Image Modal Preview */}
      {activeModalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-[#121217] border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white z-20"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="h-[60vh] relative">
              <img src={activeModalImage.image} alt={activeModalImage.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 bg-zinc-950 space-y-2">
              <div className="text-xs font-mono text-amber-400">{activeModalImage.location}</div>
              <h3 className="font-heading text-3xl text-white">{activeModalImage.title}</h3>
              <p className="text-sm font-mono text-zinc-300">{activeModalImage.crewStaffed}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

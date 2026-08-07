import React, { useState } from 'react';
import { MapPin, ZoomIn, X, Camera } from 'lucide-react';
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
      crewStaffed: '14 FOH Mixers, Dante Specialists & Broadcast Camera Operators'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0d0d12] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5" />
            <span>PRODUCTION ACTION SHOWCASE</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white font-extrabold tracking-wider uppercase">
            STAGE & RIGGING <span className="text-amber-500 gold-glow-text">PORTFOLIO</span>
          </h2>
          <p className="max-w-3xl mx-auto text-zinc-400 text-base sm:text-lg">
            A visual glimpse into Pirate Productions executing arena load-ins, high steel rigging, line array audio setups, and stadium stage strikes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

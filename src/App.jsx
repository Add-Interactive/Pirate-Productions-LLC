import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import CrewBuilderCalculator from './components/CrewBuilderCalculator';
import NashvilleVenueMap from './components/NashvilleVenueMap';
import TimelineSimulator from './components/TimelineSimulator';
import BackstagePassGenerator from './components/BackstagePassGenerator';
import NashvilleGallery from './components/NashvilleGallery';
import EmergencySosModal from './components/EmergencySosModal';
import PeekABooPirate from './components/PeekABooPirate';
import Footer from './components/Footer';

export default function App() {
  const [sosModalOpen, setSosModalOpen] = useState(false);

  const handleOpenSos = () => {
    setSosModalOpen(true);
  };

  const handleCloseSos = () => {
    setSosModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0d] text-slate-100 font-body antialiased selection:bg-amber-500 selection:text-black relative overflow-x-hidden">
      {/* Interactive Pop-Out Peek-A-Boo Rock Pirate (Left Side Screen/Mobile) */}
      <PeekABooPirate />

      {/* Navigation Bar */}
      <Navbar onOpenSos={handleOpenSos} />

      {/* Main Content Sections */}
      <main>
        {/* Parallax Hero Section */}
        <HeroSection onOpenSos={handleOpenSos} />

        {/* Roles & Services Grid ("The Works") */}
        <ServicesGrid />

        {/* Crew Headcount Builder & Instant Rate Calculator */}
        <CrewBuilderCalculator />

        {/* Nashville Arenas & Stadium Specs Dispatch Hub */}
        <NashvilleVenueMap />

        {/* Load-In to Strike Timeline Simulator */}
        <TimelineSimulator />

        {/* Digital VIP Backstage Pass Generator */}
        <BackstagePassGenerator />

        {/* Nashville Stadium Showcase & ETCP Certifications */}
        <NashvilleGallery />
      </main>

      {/* Footer */}
      <Footer onOpenSos={handleOpenSos} />

      {/* Emergency SOS Rapid Dispatch Modal */}
      <EmergencySosModal 
        isOpen={sosModalOpen} 
        onClose={handleCloseSos} 
      />
    </div>
  );
}

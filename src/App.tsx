import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { ExamResultsModal } from './components/ExamResultsModal';
import { AppointmentModal } from './components/AppointmentModal';
import { EmergencyModal } from './components/EmergencyModal';
import { SearchModal } from './components/SearchModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';

export default function App() {
  const [examResultsOpen, setExamResultsOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);

  const handleTopBarSearch = (term: string) => {
    setSearchQuery(term);
    setSearchOpen(true);
  };

  const handleSelectSearchAction = (action: string) => {
    if (action === 'emergency') {
      setEmergencyOpen(true);
    } else if (action === 'appointment') {
      setAppointmentOpen(true);
    } else if (action === 'exams') {
      setExamResultsOpen(true);
    } else if (action === 'bloodbank' || action === 'specialties' || action === 'services' || action.startsWith('location')) {
      const footer = document.getElementById('main-footer');
      footer?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const footer = document.getElementById('main-footer');
      footer?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#282828] selection:bg-[#FAAE00] selection:text-[#282828] font-sans">
      {/* Top Bar with contacts, 24h title, exam results link and search form */}
      <TopBar
        onOpenExamResults={() => setExamResultsOpen(true)}
        onSearch={handleTopBarSearch}
        onOpenEmergency={() => setEmergencyOpen(true)}
      />

      {/* Main Header & Navbar with Logo and menu links */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onNavigateSection={handleNavigateSection}
        onOpenAppointment={() => setAppointmentOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section matching model with gradient #541E87 to #A400EB & 6-image Slideshow */}
        <Hero
          onOpenAppointment={() => setAppointmentOpen(true)}
          onOpenEmergency={() => setEmergencyOpen(true)}
        />

        {/* Nossas especialidades Section */}
        <SpecialtiesSection
          onOpenAppointment={() => setAppointmentOpen(true)}
        />

        {/* Nossa equipe especializada Section matching model */}
        <TeamSection
          onOpenAppointment={() => setAppointmentOpen(true)}
        />
      </main>

      {/* Footer matching model with background #FAAE00 */}
      <Footer onOpenPrivacyPolicy={() => setPrivacyPolicyOpen(true)} />

      {/* Modals & Floating Components */}
      <ExamResultsModal
        isOpen={examResultsOpen}
        onClose={() => setExamResultsOpen(false)}
      />

      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />

      <EmergencyModal
        isOpen={emergencyOpen}
        onClose={() => setEmergencyOpen(false)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        initialQuery={searchQuery}
        onSelectAction={handleSelectSearchAction}
      />

      <PrivacyPolicyModal
        isOpen={privacyPolicyOpen}
        onClose={() => setPrivacyPolicyOpen(false)}
      />
    </div>
  );
}

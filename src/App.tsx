import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { TeamSection } from './components/TeamSection';
import { LocationSection } from './components/LocationSection';
import { BlogSection } from './components/BlogSection';
import { BlogPage } from './components/BlogPage';
import { VetsPage } from './components/VetsPage';
import { Footer } from './components/Footer';
import { ExamResultsModal } from './components/ExamResultsModal';
import { AppointmentModal } from './components/AppointmentModal';
import { EmergencyModal } from './components/EmergencyModal';
import { SearchModal } from './components/SearchModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'blog' | 'vets'>('home');
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<string | null>(null);
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
    } else if (action === 'vets' || action === 'equipe') {
      setCurrentView('vets');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action === 'blog') {
      setSelectedBlogPostId(null);
      setCurrentView('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action.startsWith('blog:')) {
      const slug = action.replace('blog:', '');
      setSelectedBlogPostId(slug);
      setCurrentView('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (
      action === 'bloodbank' ||
      action === 'specialties' ||
      action === 'services' ||
      action.startsWith('location')
    ) {
      if (currentView !== 'home') {
        setCurrentView('home');
      }
      setTimeout(() => {
        const footer = document.getElementById('main-footer');
        footer?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === 'blog') {
      setSelectedBlogPostId(null);
      setCurrentView('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'vets' || sectionId === 'equipe') {
      setCurrentView('vets');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'home') {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          const footer = document.getElementById('main-footer');
          footer?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

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
        activeSection={
          currentView === 'blog'
            ? 'blog'
            : currentView === 'vets'
            ? 'vets'
            : undefined
        }
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'blog' ? (
          <BlogPage
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAppointment={() => setAppointmentOpen(true)}
            onOpenEmergency={() => setEmergencyOpen(true)}
            initialPostId={selectedBlogPostId}
          />
        ) : currentView === 'vets' ? (
          <VetsPage
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAppointment={() => setAppointmentOpen(true)}
          />
        ) : (
          <>
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
              onOpenVetsPage={() => {
                setCurrentView('vets');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Em Sorocaba para você - Location Section matching model */}
            <LocationSection />

            {/* Dicas Inova - Blog Section matching model */}
            <BlogSection
              onOpenAppointment={() => setAppointmentOpen(true)}
              onOpenBlogPage={() => {
                setSelectedBlogPostId(null);
                setCurrentView('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}
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

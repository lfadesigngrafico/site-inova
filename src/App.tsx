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
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import { BloodBankPage } from './components/BloodBankPage';
import { TestimonialsPage } from './components/TestimonialsPage';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ServicesPage } from './components/ServicesPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { SERVICES_DATA } from './data/servicesData';
import { SpecialtiesPage } from './components/SpecialtiesPage';
import { SpecialtyDetailPage } from './components/SpecialtyDetailPage';
import { SPECIALTIES_DATA } from './data/specialtiesData';
import { Footer } from './components/Footer';
import { ExamResultsModal } from './components/ExamResultsModal';
import { AppointmentModal } from './components/AppointmentModal';
import { EmergencyModal } from './components/EmergencyModal';
import { SearchModal } from './components/SearchModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';

export default function App() {
  const [currentView, setCurrentView] = useState<
    'home' | 'blog' | 'vets' | 'contact' | 'about' | 'bloodbank' | 'testimonials' | 'services' | 'service-detail' | 'specialties' | 'specialty-detail'
  >('home');
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string | null>(null);
  const [examResultsOpen, setExamResultsOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);

  const currentService =
    SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const currentSpecialty =
    SPECIALTIES_DATA.find((s) => s.id === selectedSpecialtyId) || SPECIALTIES_DATA[0];

  const handleTopBarSearch = (term: string) => {
    setSearchQuery(term);
    setSearchOpen(true);
  };

  const handleOpenAppointment = () => {
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSearchAction = (action: string) => {
    if (action === 'emergency') {
      setEmergencyOpen(true);
    } else if (action === 'appointment') {
      handleOpenAppointment();
    } else if (action === 'exams') {
      setExamResultsOpen(true);
    } else if (action === 'about' || action === 'a-inova' || action === 'sobre') {
      setCurrentView('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action === 'vets' || action === 'equipe') {
      setCurrentView('vets');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action === 'contact' || action === 'contatos' || action === 'contato') {
      setCurrentView('contact');
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
    } else if (action === 'bloodbank' || action === 'banco-sangue' || action === 'hemocentro' || action === 'banco-de-sangue') {
      setCurrentView('bloodbank');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action === 'depoimentos' || action === 'testimonials') {
      setCurrentView('testimonials');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action === 'inova-vida' || action === 'inovavida') {
      window.open('https://materiais.inovaveterinaria.com.br/conversao-inova-vida-planos', '_blank', 'noopener,noreferrer');
    } else if (action === 'services' || action === 'servicos') {
      setSelectedServiceId(null);
      setCurrentView('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action.startsWith('service:') || action.startsWith('servico:')) {
      const slug = action.replace(/^(service:|servico:)/, '');
      setSelectedServiceId(slug);
      setCurrentView('service-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action === 'specialties' || action === 'especialidades') {
      setSelectedSpecialtyId(null);
      setCurrentView('specialties');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action.startsWith('specialty:') || action.startsWith('especialidade:')) {
      const slug = action.replace(/^(specialty:|especialidade:)/, '');
      setSelectedSpecialtyId(slug);
      setCurrentView('specialty-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action.startsWith('location')) {
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
    if (sectionId === 'sobre' || sectionId === 'a-inova' || sectionId === 'inova') {
      setCurrentView('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'servicos' || sectionId === 'services') {
      setSelectedServiceId(null);
      setCurrentView('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId.startsWith('service:') || sectionId.startsWith('servico:')) {
      const slug = sectionId.replace(/^(service:|servico:)/, '');
      setSelectedServiceId(slug);
      setCurrentView('service-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'especialidades' || sectionId === 'specialties') {
      setSelectedSpecialtyId(null);
      setCurrentView('specialties');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      sectionId === 'inova-vida' ||
      sectionId === 'inovavida' ||
      sectionId === 'https://materiais.inovaveterinaria.com.br/conversao-inova-vida-planos'
    ) {
      window.open('https://materiais.inovaveterinaria.com.br/conversao-inova-vida-planos', '_blank', 'noopener,noreferrer');
      return;
    }

    if (sectionId.startsWith('specialty:') || sectionId.startsWith('especialidade:')) {
      const slug = sectionId.replace(/^(specialty:|especialidade:)/, '');
      setSelectedSpecialtyId(slug);
      setCurrentView('specialty-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      sectionId === 'banco-sangue' ||
      sectionId === 'banco-de-sangue' ||
      sectionId === 'hemocentro' ||
      sectionId === 'bloodbank'
    ) {
      setCurrentView('bloodbank');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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

    if (sectionId === 'contatos' || sectionId === 'contact' || sectionId === 'contato') {
      setCurrentView('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'depoimentos' || sectionId === 'testimonials') {
      setCurrentView('testimonials');
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
        onOpenAppointment={handleOpenAppointment}
        activeSection={
          currentView === 'about'
            ? 'sobre'
            : currentView === 'bloodbank'
            ? 'banco-sangue'
            : currentView === 'blog'
            ? 'blog'
            : currentView === 'vets'
            ? 'vets'
            : currentView === 'contact'
            ? 'contatos'
            : currentView === 'testimonials'
            ? 'depoimentos'
            : currentView === 'services' || currentView === 'service-detail'
            ? 'servicos'
            : currentView === 'specialties' || currentView === 'specialty-detail'
            ? 'especialidades'
            : undefined
        }
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'bloodbank' ? (
          <BloodBankPage
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAppointment={handleOpenAppointment}
            onOpenEmergency={() => setEmergencyOpen(true)}
          />
        ) : currentView === 'services' ? (
          <ServicesPage
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectService={(serviceId) => {
              setSelectedServiceId(serviceId);
              setCurrentView('service-detail');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAppointment={handleOpenAppointment}
            onOpenEmergency={() => setEmergencyOpen(true)}
          />
        ) : currentView === 'service-detail' && currentService ? (
          <ServiceDetailPage
            service={currentService}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToServices={() => {
              setSelectedServiceId(null);
              setCurrentView('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectService={(serviceId) => {
              setSelectedServiceId(serviceId);
              setCurrentView('service-detail');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAppointment={handleOpenAppointment}
            onOpenEmergency={() => setEmergencyOpen(true)}
          />
        ) : currentView === 'specialties' ? (
          <SpecialtiesPage
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectSpecialty={(specialtyId) => {
              setSelectedSpecialtyId(specialtyId);
              setCurrentView('specialty-detail');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAppointment={handleOpenAppointment}
            onOpenEmergency={() => setEmergencyOpen(true)}
          />
        ) : currentView === 'specialty-detail' ? (
          <SpecialtyDetailPage
            specialty={currentSpecialty}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToSpecialties={() => {
              setSelectedSpecialtyId(null);
              setCurrentView('specialties');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectSpecialty={(specialtyId) => {
              setSelectedSpecialtyId(specialtyId);
              setCurrentView('specialty-detail');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAppointment={handleOpenAppointment}
            onOpenEmergency={() => setEmergencyOpen(true)}
          />
        ) : currentView === 'about' ? (
          <AboutPage
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAppointment={handleOpenAppointment}
            onOpenEmergency={() => setEmergencyOpen(true)}
            onNavigateToVets={() => {
              setCurrentView('vets');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToContact={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentView === 'blog' ? (
          <BlogPage
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAppointment={handleOpenAppointment}
            onOpenEmergency={() => setEmergencyOpen(true)}
            initialPostId={selectedBlogPostId}
          />
        ) : currentView === 'vets' ? (
          <VetsPage
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAppointment={handleOpenAppointment}
            onNavigateToContact={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentView === 'contact' ? (
          <ContactPage
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAppointment={handleOpenAppointment}
            onOpenEmergency={() => setEmergencyOpen(true)}
          />
        ) : currentView === 'testimonials' ? (
          <TestimonialsPage
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAppointment={handleOpenAppointment}
            onOpenEmergency={() => setEmergencyOpen(true)}
          />
        ) : (
          <>
            {/* Hero Section matching model with gradient #541E87 to #A400EB & 6-image Slideshow */}
            <Hero
              onOpenAppointment={handleOpenAppointment}
              onOpenEmergency={() => setEmergencyOpen(true)}
            />

            {/* Nossas especialidades Section */}
            <SpecialtiesSection
              onOpenAppointment={handleOpenAppointment}
              onOpenSpecialtiesPage={() => {
                setSelectedSpecialtyId(null);
                setCurrentView('specialties');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectSpecialtyDetail={(id) => {
                setSelectedSpecialtyId(id);
                setCurrentView('specialty-detail');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Nossa equipe especializada Section matching model */}
            <TeamSection
              onOpenAppointment={handleOpenAppointment}
              onOpenVetsPage={() => {
                setCurrentView('vets');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Em Sorocaba para você - Location Section matching model */}
            <LocationSection />

            {/* Dicas Inova - Blog Section matching model */}
            <BlogSection
              onOpenAppointment={handleOpenAppointment}
              onOpenBlogPage={() => {
                setSelectedBlogPostId(null);
                setCurrentView('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Depoimentos Section matching visual mockup before Footer */}
            <TestimonialsSection
              onOpenTestimonialsPage={() => {
                setCurrentView('testimonials');
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

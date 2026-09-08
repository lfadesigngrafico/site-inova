import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onNavigateSection?: (sectionId: string) => void;
  onOpenAppointment: () => void;
  activeSection?: string;
}

const NAV_ITEMS = [
  { label: 'A INOVA', href: '#sobre' },
  { label: 'VETS', href: '#vets' },
  { label: 'BANCO DE SANGUE', href: '#banco-sangue' },
  { label: 'SERVIÇOS', href: '#servicos' },
  { label: 'ESPECIALIDADES', href: '#especialidades' },
  { label: 'INOVA VIDA', href: '#inova-vida' },
  { label: 'BLOG', href: '#blog' },
  { label: 'DEPOIMENTOS', href: '#depoimentos' },
  { label: 'CONTATOS', href: '#contatos' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onNavigateSection,
  onOpenAppointment,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleItemClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(href.replace('#', ''));
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header id="main-header" className="bg-white border-b border-slate-100 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 py-2">
            <a
              id="header-logo-link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateSection) {
                  onNavigateSection('home');
                }
              }}
              className="inline-block transition-transform hover:opacity-95"
              aria-label="Inova Hospital Veterinário 24h"
            >
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/147009/1788886402/$gldhisbuhkr"
                alt="Inova Hospital Veterinário 24H"
                className="h-14 sm:h-16 md:h-18 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Desktop Nav Links spaced equally from logo to search icon */}
          <nav
            id="desktop-navigation"
            className="hidden xl:flex flex-1 items-center justify-evenly mx-3 2xl:mx-6"
            aria-label="Menu Principal"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                activeSection === item.href.replace('#', '') ||
                (activeSection === 'home' && item.href === '#sobre');
              return (
                <a
                  key={item.label}
                  id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={item.href}
                  onClick={(e) => handleItemClick(e, item.href)}
                  className={`font-['Dosis',sans-serif] font-[300] text-[15px] 2xl:text-[16px] tracking-wider transition-colors duration-150 px-3 py-1.5 uppercase whitespace-nowrap ${
                    isActive
                      ? 'bg-[#282828] text-white font-semibold'
                      : 'text-[#282828] hover:bg-[#282828] hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Magnifying Search Icon on Desktop */}
          <div className="hidden xl:flex flex-shrink-0 items-center">
            <button
              id="nav-search-button"
              type="button"
              onClick={onOpenSearch}
              className="text-[#282828] hover:text-[#541E87] transition-colors p-2 rounded-full hover:bg-slate-100 cursor-pointer"
              title="Pesquisar"
              aria-label="Pesquisar no site"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Medium Screens (lg) Compact Navigation */}
          <div className="hidden lg:flex xl:hidden flex-1 items-center justify-evenly mx-2">
            <div className="flex items-center space-x-2 font-['Dosis',sans-serif] font-[300] text-[14px] text-[#282828] uppercase">
              <a href="#sobre" onClick={(e) => handleItemClick(e, '#sobre')} className="px-2.5 py-1.5 hover:bg-[#282828] hover:text-white transition-colors">A INOVA</a>
              <a href="#vets" onClick={(e) => handleItemClick(e, '#vets')} className={`px-2.5 py-1.5 transition-colors ${activeSection === 'vets' ? 'bg-[#282828] text-white' : 'hover:bg-[#282828] hover:text-white'}`}>VETS</a>
              <a href="#servicos" onClick={(e) => handleItemClick(e, '#servicos')} className="px-2.5 py-1.5 hover:bg-[#282828] hover:text-white transition-colors">SERVIÇOS</a>
              <a href="#especialidades" onClick={(e) => handleItemClick(e, '#especialidades')} className="px-2.5 py-1.5 hover:bg-[#282828] hover:text-white transition-colors">ESPECIALIDADES</a>
              <a href="#blog" onClick={(e) => handleItemClick(e, '#blog')} className={`px-2.5 py-1.5 transition-colors ${activeSection === 'blog' ? 'bg-[#282828] text-white' : 'hover:bg-[#282828] hover:text-white'}`}>BLOG</a>
              <a href="#contatos" onClick={(e) => handleItemClick(e, '#contatos')} className={`px-2.5 py-1.5 transition-colors ${activeSection === 'contatos' ? 'bg-[#282828] text-white' : 'hover:bg-[#282828] hover:text-white'}`}>CONTATOS</a>
            </div>
            <button
              type="button"
              onClick={onOpenSearch}
              className="text-[#282828] hover:text-[#541E87] p-1.5 rounded-full hover:bg-slate-100"
              aria-label="Pesquisar"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              id="mobile-menu-toggle-lg"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#282828] hover:text-[#541E87]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-search-button"
              type="button"
              onClick={onOpenSearch}
              className="p-2 text-[#282828] hover:text-[#541E87]"
              aria-label="Pesquisar"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#282828] hover:text-[#541E87] hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-dropdown"
          className="lg:hidden bg-white border-b border-slate-200 px-5 py-4 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleItemClick(e, item.href)}
                className="font-['Dosis',sans-serif] font-[300] text-base text-[#282828] hover:bg-[#282828] hover:text-white px-3 py-2 transition-colors uppercase border-b border-slate-100"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full bg-[#FAAE00] hover:bg-[#e69f00] text-[#282828] font-bold text-center py-2.5 rounded-lg text-sm transition-colors"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

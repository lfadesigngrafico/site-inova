import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface TopBarProps {
  onOpenExamResults: () => void;
  onSearch: (term: string) => void;
  onOpenEmergency: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  onOpenExamResults,
  onSearch,
  onOpenEmergency,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <div
      id="top-bar"
      className="bg-[#340b54] text-white text-xs md:text-[13px] py-2 px-4 sm:px-6 lg:px-8 tracking-wide select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        {/* Left Side: Contact Numbers */}
        <div className="flex items-center flex-wrap justify-center gap-4 text-white/95 font-medium">
          <a
            id="topbar-phone-link"
            href="tel:1533332300"
            className="flex items-center gap-1.5 hover:text-[#FAAE00] transition-colors"
            title="Ligar para Inova Hospital Veterinário"
          >
            <Phone className="w-3.5 h-3.5 text-white/80" />
            <span>(15) 3333-2300</span>
          </a>

          <a
            id="topbar-whatsapp-link"
            href="https://wa.me/551533332300?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20na%20Inova."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#FAAE00] transition-colors"
            title="Contato WhatsApp Inova"
          >
            <MessageCircle className="w-3.5 h-3.5 text-green-400" />
            <span>(15) 3333-2300</span>
          </a>
        </div>

        {/* Center: 24h Title */}
        <div className="hidden lg:block font-bold tracking-wider text-white text-[13px]">
          HOSPITAL VETERINÁRIO 24H
        </div>

        {/* Right Side: Exam Results & Search Bar */}
        <div className="flex items-center flex-wrap justify-center gap-3 md:gap-4">
          <button
            id="btn-resultados-exames"
            type="button"
            onClick={onOpenExamResults}
            className="text-[11px] md:text-xs font-semibold tracking-wider hover:text-[#FAAE00] transition-colors uppercase cursor-pointer"
          >
            RESULTADOS DE EXAMES
          </button>

          {/* Search form matching model with white box + yellow OK button */}
          <form
            id="topbar-search-form"
            onSubmit={handleSearchSubmit}
            className="flex items-stretch h-6.5 rounded-sm overflow-hidden shadow-xs"
          >
            <input
              id="topbar-search-input"
              type="text"
              placeholder=""
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white text-[#282828] text-xs px-2 w-28 sm:w-36 focus:outline-none"
              aria-label="Buscar no site"
            />
            <button
              id="topbar-search-submit-btn"
              type="submit"
              className="bg-[#FAAE00] hover:bg-[#e09d00] text-[#282828] font-bold text-[11px] px-2.5 flex items-center justify-center transition-colors cursor-pointer"
              title="Buscar"
            >
              OK
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<'nogueira' | 'campolim'>('nogueira');

  const unitMapUrls = {
    nogueira:
      'https://maps.google.com/maps?q=Inova+Hospital+Veterin%C3%A1rio+Rua+Coronel+Nogueira+Padilha+1770+Sorocaba+SP&t=&z=15&ie=UTF8&iwloc=&output=embed',
    campolim:
      'https://maps.google.com/maps?q=Inova+Veterin%C3%A1ria+Avenida+Gisele+Constantino+1495+Sorocaba+SP&t=&z=15&ie=UTF8&iwloc=&output=embed',
  };

  const unitDirectionsUrls = {
    nogueira:
      'https://maps.google.com/?q=Inova+Hospital+Veterin%C3%A1rio+24h,+Rua+Coronel+Nogueira+Padilha,+1770+-+Vila+Hort%C3%AAncia,+Sorocaba+-+SP',
    campolim:
      'https://maps.google.com/?q=Inova+Veterin%C3%A1ria,+Av.+Gisele+Constantino,+1495+-+Parque+Campolim,+Sorocaba+-+SP',
  };

  return (
    <section id="contatos" className="py-12 sm:py-16 lg:py-20 bg-[#FBFBFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container with large rounded corners matching attachment */}
        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-slate-100/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            {/* Title */}
            <h2 className="text-3xl sm:text-[34px] lg:text-4xl font-extrabold text-[#282828] tracking-tight mb-2.5">
              Em Sorocaba para você
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-[15px] text-[#282828]/85 leading-relaxed mb-6 sm:mb-7">
              Localização estratégica no coração de
              <br className="hidden sm:inline" /> Sorocaba, com fácil acesso para toda a região.
            </p>

            {/* Box 1: Unidade Nogueira Padilha */}
            <div
              onClick={() => setSelectedUnit('nogueira')}
              className={`border rounded-2xl p-4 sm:p-4.5 mb-3.5 transition-all cursor-pointer ${
                selectedUnit === 'nogueira'
                  ? 'border-[#E5A823] bg-[#FEFBF2]/40 shadow-xs'
                  : 'border-[#E5A823]/60 bg-white hover:border-[#E5A823]'
              }`}
            >
              <h3 className="font-bold text-[#E5A823] text-sm sm:text-[15px] mb-1 leading-snug">
                Inova Unidade Nogueira Padilha (Hospital 24h):
              </h3>
              <p className="text-xs sm:text-[13px] text-[#282828] leading-normal">
                <span className="font-bold">Clínica de Seg a Sex:</span> 08h às 21h |{' '}
                <span className="font-bold">Sáb:</span> 08h às 18h
              </p>
              <p className="text-xs sm:text-[13px] text-[#282828] leading-normal mt-0.5">
                <span className="font-bold">Pronto Atendimento:</span> Todos os dias, 24h
              </p>
            </div>

            {/* Box 2: Unidade Campolim */}
            <div
              onClick={() => setSelectedUnit('campolim')}
              className={`border rounded-2xl p-4 sm:p-4.5 mb-4 sm:mb-5 transition-all cursor-pointer ${
                selectedUnit === 'campolim'
                  ? 'border-[#E5A823] bg-[#FEFBF2]/40 shadow-xs'
                  : 'border-[#E5A823]/60 bg-white hover:border-[#E5A823]'
              }`}
            >
              <h3 className="font-bold text-[#E5A823] text-sm sm:text-[15px] mb-1 leading-snug">
                Inova Unidade Campolim (Especialidades e Vacinas):
              </h3>
              <p className="text-xs sm:text-[13px] text-[#282828] leading-normal">
                <span className="font-bold">Seg a Sex:</span> 08h às 20h |{' '}
                <span className="font-bold">Sáb:</span> 08h às 13h
              </p>
            </div>

            {/* Phone Contact Line */}
            <div className="mb-6 sm:mb-7 flex items-center gap-1.5 text-sm sm:text-base text-[#282828]">
              <span className="font-bold">Contato:</span>
              <a
                href="tel:1533332300"
                className="hover:text-[#E5A823] font-semibold transition-colors"
              >
                (15) 3333-2300
              </a>
            </div>

            {/* 2 Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Button 1: Ver no mapa */}
              <a
                id="btn-ver-no-mapa"
                href={unitDirectionsUrls[selectedUnit]}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E5A823] hover:bg-[#d49918] active:scale-95 text-white font-bold text-sm sm:text-[15px] px-5 sm:px-6 py-3 rounded-xl shadow-xs hover:shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-white" />
                <span>Ver no mapa</span>
              </a>

              {/* Button 2: Ligar agora */}
              <a
                id="btn-ligar-agora"
                href="tel:1533332300"
                className="bg-[#E5A823] hover:bg-[#d49918] active:scale-95 text-white font-bold text-sm sm:text-[15px] px-5 sm:px-6 py-3 rounded-xl shadow-xs hover:shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-white fill-current" />
                <span>Ligar agora</span>
              </a>
            </div>
          </div>

          {/* Right Column: Map with matching boundary and marker */}
          <div className="lg:col-span-6 relative min-h-[350px] sm:min-h-[420px] lg:min-h-[480px] bg-slate-100 flex flex-col">
            {/* Live Interactive Google Maps Iframe */}
            <iframe
              title={`Mapa ${
                selectedUnit === 'nogueira'
                  ? 'Inova Hospital Veterinário Unidade Nogueira Padilha'
                  : 'Inova Veterinária Unidade Campolim'
              }`}
              src={unitMapUrls[selectedUnit]}
              className="w-full h-full min-h-[350px] sm:min-h-[420px] lg:min-h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Header Overlay */}
            <div className="absolute top-4 right-4 pointer-events-none">
              <a
                href={unitDirectionsUrls[selectedUnit]}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/95 backdrop-blur-xs hover:bg-white text-[#282828] hover:text-[#E5A823] text-xs font-semibold px-2.5 py-1.5 rounded-lg shadow-md border border-slate-200/80 pointer-events-auto flex items-center gap-1 transition-colors"
                title="Abrir no Google Maps"
              >
                <span>Rotas</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

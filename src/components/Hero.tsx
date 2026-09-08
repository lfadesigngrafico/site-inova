import React from 'react';
import { Phone, Heart, BriefcaseMedical, ShieldCheck } from 'lucide-react';
import { HeroSlideshow } from './HeroSlideshow';

interface HeroProps {
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAppointment,
  onOpenEmergency,
}) => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-r from-[#541E87] via-[#7B10B8] to-[#A400EB] text-white py-12 md:py-16 lg:py-20"
      style={{
        background: 'linear-gradient(110deg, #541E87 0%, #7B10B8 45%, #A400EB 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text, Pillars & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Main Headline */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold text-white leading-[1.06] tracking-tight"
            >
              Cuidado profissional
              <br />
              para seu pet
            </h1>

            {/* Subtitle */}
            <p
              id="hero-subtitle"
              className="text-xl sm:text-2xl font-bold text-white mt-4 sm:mt-5"
            >
              Estamos aqui quando você precisar!
            </p>

            {/* Secondary bold location badge/tagline */}
            <p
              id="hero-location-tagline"
              className="text-base sm:text-lg lg:text-xl font-bold text-white mt-2.5"
            >
              Hospital &amp; Clínica Veterinária 24h em Sorocaba.
            </p>

            {/* Descriptive paragraph */}
            <p
              id="hero-description"
              className="text-white/95 text-sm sm:text-base lg:text-[17px] mt-2 max-w-xl font-normal leading-relaxed"
            >
              Equipe especializada, tecnologia avançada e o carinho que seu pet merece.
            </p>

            {/* 3 Pills: Carinho, Atenção, Segurança */}
            <div
              id="hero-value-pills"
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-7 sm:mt-8 w-full"
            >
              {/* Pill 1: Carinho (Heart) */}
              <div
                id="pill-carinho"
                className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-5 py-2.5 shadow-sm flex items-center gap-2 transition-transform hover:-translate-y-0.5"
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#10B981]">
                  <Heart className="w-4 h-4 fill-[#10B981] text-[#10B981]" />
                </div>
                <span className="font-bold text-sm sm:text-base text-[#10B981]">
                  Carinho
                </span>
              </div>

              {/* Pill 2: Atenção (Medical Kit / Care) */}
              <div
                id="pill-atencao"
                className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-5 py-2.5 shadow-sm flex items-center gap-2 transition-transform hover:-translate-y-0.5"
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#EC4899]">
                  <BriefcaseMedical className="w-4 h-4 text-[#EC4899]" />
                </div>
                <span className="font-bold text-sm sm:text-base text-[#EC4899]">
                  Atenção
                </span>
              </div>

              {/* Pill 3: Segurança (Shield) */}
              <div
                id="pill-seguranca"
                className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-5 py-2.5 shadow-sm flex items-center gap-2 transition-transform hover:-translate-y-0.5"
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#84CC16]">
                  <ShieldCheck className="w-4 h-4 text-[#84CC16]" />
                </div>
                <span className="font-bold text-sm sm:text-base text-[#84CC16]">
                  Segurança
                </span>
              </div>
            </div>

            {/* 2 CTA Buttons */}
            <div
              id="hero-cta-buttons"
              className="flex flex-wrap items-center gap-3 sm:gap-4 mt-7 sm:mt-8"
            >
              {/* Button 1: Emergência 24h */}
              <button
                id="hero-btn-emergencia"
                type="button"
                onClick={onOpenEmergency}
                className="bg-[#FAAE00] hover:bg-[#e89f00] active:scale-95 text-[#282828] font-extrabold px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2.5 text-sm sm:text-base transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-[#282828] text-[#282828] stroke-[2.5]" />
                <span>Emergência 24h</span>
              </button>

              {/* Button 2: Agendar consulta */}
              <button
                id="hero-btn-agendar"
                type="button"
                onClick={onOpenAppointment}
                className="bg-[#FAAE00] hover:bg-[#e89f00] active:scale-95 text-[#282828] font-extrabold px-6 py-3.5 rounded-xl shadow-md flex items-center justify-center text-sm sm:text-base transition-all cursor-pointer"
              >
                <span>Agendar consulta</span>
              </button>
            </div>
          </div>

          {/* Right Column: Slideshow */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <HeroSlideshow />
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  pet: string;
  avatar: string;
  rating: number;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Mariana Silveira',
    role: 'Tutora do Thor',
    pet: 'Golden Retriever',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'O atendimento de emergência na madrugada salvou a vida do Thor. A equipe de plantão da UTI foi extremamente ágil, transparente e cuidadosa durante todo o período de internação. Não confio a saúde do meu pet a nenhum outro lugar em Sorocaba!',
  },
  {
    id: 2,
    name: 'Carlos Eduardo Mendes',
    role: 'Tutor da Luna',
    pet: 'SRD',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'A estrutura do Inova Hospital Veterinário é de primeiro mundo. Passamos por consulta com a especialista em cardiologia e realizamos todos os exames no mesmo dia, sem estresse para a Luna. Equipe acolhedora e muito competente.',
  },
  {
    id: 3,
    name: 'Beatriz Alencar',
    role: 'Tutora do Mingau',
    pet: 'Gato Siamês',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Como tutora de gatos, sempre tive receio de levá-los a hospitais. Na Inova, o manejo e o carinho com felinos fizeram toda a diferença. O Mingau se sentiu seguro e o diagnóstico oftalmológico foi certeiro. Gratidão a todos os veterinários!',
  },
  {
    id: 4,
    name: 'Rodrigo Santana',
    role: 'Tutor do Pipoca',
    pet: 'Shih Tzu',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Meu cachorro precisou de uma transfusão urgente e o Hemocentro da Inova foi decisivo. Saber que Sorocaba conta com um hospital 24h desse porte, com especialistas de prontidão e UTI completa, traz uma tranquilidade indescritível.',
  },
  {
    id: 5,
    name: 'Fernanda Vasconcelos',
    role: 'Tutora da Meg',
    pet: 'Buldogue Francês',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Realizamos a cirurgia ortopédica da Meg com a equipe cirúrgica da Inova. A anestesia foi super segura e o acompanhamento pós-operatório diário foi impecável. Hoje ela corre e brinca perfeitamente sem nenhuma dor.',
  },
];

interface TestimonialsSectionProps {
  onOpenTestimonialsPage?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenTestimonialsPage,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="depoimentos"
      className="bg-gradient-to-r from-[#541E87] via-[#63249E] to-[#7B1FA2] text-white py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#FAAE00]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 text-left">
            <h2 className="font-['Dosis',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4 tracking-tight [text-wrap:balance]">
              Depoimentos
            </h2>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-md font-normal [text-wrap:balance]">
              O carinho, a dedicação e a excelência técnica que transformam vidas todos os dias. Veja o que os tutores relatam sobre a experiência e o cuidado no Inova Hospital&nbsp;Veterinário.
            </p>

            {onOpenTestimonialsPage && (
              <button
                type="button"
                onClick={onOpenTestimonialsPage}
                className="mt-5 inline-flex items-center gap-2 bg-[#FAAE00] hover:bg-[#d99500] text-[#282828] text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer uppercase tracking-wider"
              >
                Ver todos os depoimentos
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right Column: White Testimonial Card */}
          <div
            className="lg:col-span-7"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="bg-white text-[#282828] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative border border-white/20 transition-all">
              {/* Card Header: Avatar, Name & Rating */}
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div className="flex items-center gap-3.5">
                  {/* Avatar Circle */}
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#541E87]/20 shadow-xs"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200';
                    }}
                  />
                  <div>
                    <h3 className="font-['Dosis',sans-serif] font-bold text-base sm:text-lg text-[#282828] leading-tight">
                      {current.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {current.role} &bull; {current.pet}
                    </p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-0.5 text-[#FAAE00]">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FAAE00]" />
                  ))}
                </div>
              </div>

              {/* Card Body: Left Arrow + Testimonial Text + Right Arrow */}
              <div className="flex items-center gap-2 sm:gap-4 my-2">
                {/* Previous Button */}
                <button
                  type="button"
                  id="btn-depoimento-prev"
                  onClick={handlePrev}
                  aria-label="Depoimento anterior"
                  className="p-1.5 sm:p-2 rounded-full text-[#541E87] hover:bg-slate-100 active:scale-90 transition-all shrink-0 cursor-pointer"
                >
                  <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
                </button>

                {/* Text Content */}
                <div className="flex-1 min-h-[120px] sm:min-h-[100px] flex items-center">
                  <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed italic">
                    "{current.text}"
                  </p>
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  id="btn-depoimento-next"
                  onClick={handleNext}
                  aria-label="Próximo depoimento"
                  className="p-1.5 sm:p-2 rounded-full text-[#541E87] hover:bg-slate-100 active:scale-90 transition-all shrink-0 cursor-pointer"
                >
                  <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex items-center justify-center gap-1.5 mt-5">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ir para depoimento ${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx
                        ? 'w-6 bg-[#541E87]'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface AboutPageProps {
  onBackToHome?: () => void;
  onOpenAppointment?: () => void;
  onOpenEmergency?: () => void;
  onNavigateToVets?: () => void;
  onNavigateToContact?: () => void;
}

const CAROUSEL_IMAGES = [
  {
    url: 'https://inovaveterinaria.com.br/wp-content/uploads/2020/11/5.png',
    alt: '5',
  },
  {
    url: 'https://inovaveterinaria.com.br/wp-content/uploads/2020/11/6.png',
    alt: '6',
  },
  {
    url: 'https://inovaveterinaria.com.br/wp-content/uploads/2020/11/7.png',
    alt: '7',
  },
  {
    url: 'https://inovaveterinaria.com.br/wp-content/uploads/2020/11/8.png',
    alt: '8',
  },
  {
    url: 'https://inovaveterinaria.com.br/wp-content/uploads/2020/11/10.png',
    alt: '10',
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onBackToHome }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <article className="bg-white min-h-screen text-[#54595F] font-['Raleway',sans-serif]">
      {/* Top Breadcrumb Header Bar padronizado com o estilo do Blog */}
      {onBackToHome && (
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-slate-500 font-['Dosis',sans-serif]">
              <button
                type="button"
                onClick={onBackToHome}
                className="hover:text-[#541E87] font-semibold transition-colors cursor-pointer"
              >
                Início
              </button>
              <span>/</span>
              <span className="text-[#541E87] font-bold">A Inova</span>
            </nav>

            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#541E87] hover:text-[#A400EB] transition-colors cursor-pointer py-1 px-3 rounded-md hover:bg-purple-50"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o site principal
            </button>
          </div>
        </div>
      )}

      {/* Hero Header Section padronizado com fundo roxo, traço verde fino e fonte branca */}
      <section className="bg-gradient-to-r from-[#541E87] via-[#63249E] to-[#3B1260] text-white py-12 md:py-16 relative overflow-hidden shadow-inner">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#FAAE00]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-['Dosis',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide mb-2 [text-wrap:balance]">
              A INOVA
            </h1>

            <h2 className="font-['Dosis',sans-serif] font-bold text-xl sm:text-2xl text-[#FAAE00] uppercase tracking-wide mb-4">
              Quem somos
            </h2>

            <p className="text-white/95 text-base sm:text-lg leading-relaxed font-normal text-justify text-left [text-wrap:balance]">
              Nascemos com a missão de promover a <strong>saúde</strong> e{' '}
              <strong>bem-estar</strong> para nossos <strong>pacientes</strong>, transmitindo
              segurança aos <strong>tutores.</strong> Oferecemos a mais elevada{' '}
              <strong>competência técnica</strong> do corpo clínico e corpo de apoio. Um{' '}
              <strong>atendimento de excelência</strong> e <strong>medicina humanizada</strong>{' '}
              aos pacientes e tutores.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="py-10 md:py-14">
        {/* Section 2: Unidades de atendimento e Mídia (Vídeo e Carrossel) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Unidades de atendimento */}
            <div className="lg:col-span-6 space-y-6 text-[#54595F] text-base leading-[2.2em] text-justify text-left">
              <p className="text-base sm:text-lg font-medium text-[#282828] text-left">
                Contamos com 2 unidades para atendimento:
              </p>

              <div className="space-y-2 pt-1 text-left">
                <h4 className="text-lg font-bold text-[#282828] text-left">
                  🚩 Unidade Nogueira Padilha:
                </h4>
                <h5 className="text-base font-bold text-[#541E87] text-left">
                  &gt; Hospital 24h e Clínica de Especialidades
                </h5>
                <p className="text-justify text-left pt-1">
                  Consultórios disponíveis para atendimento emergencial e de rotina, centro
                  cirurgico geral, odontológico e centro de videocirurgia e endoscopia, internação
                  e UTI, laboratório, centro de reabilitação e exames de imagem (raio-x e
                  ultrassonografia).
                </p>
              </div>

              <div className="space-y-2 pt-2 text-left">
                <h4 className="text-lg font-bold text-[#282828] text-left">
                  🚩 Unidade Campolim:
                </h4>
                <h5 className="text-base font-bold text-[#541E87] text-left">
                  &gt; Clínica de Vacinas e Especialidades
                </h5>
                <p className="text-justify text-left pt-1">
                  A 1ª clínica veterinária de Sorocaba especializada em vacinas, consultórios para
                  atendimento de consultas de rotina com Clínico Geral e Especialidades, exames de
                  imagem, exames cardiológicos, centro de reabilitação e muito mais.
                </p>
              </div>
            </div>

            {/* Right Column: Video & Image Carousel */}
            <div className="lg:col-span-6 space-y-8">
              {/* YouTube Video Player */}
              <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md bg-black">
                <iframe
                  src="https://www.youtube.com/embed/1Bj6N_XLl30"
                  title="Inova Hospital Veterinário 24h"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Image Carousel */}
              <div className="relative w-full rounded-lg overflow-hidden shadow-md bg-slate-100 group">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                  {CAROUSEL_IMAGES.map((img, idx) => (
                    <div
                      key={img.url}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>

                {/* Carousel Prev Button */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Slide anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-all opacity-80 hover:opacity-100 cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Carousel Next Button */}
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Próximo slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-all opacity-80 hover:opacity-100 cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Carousel Dots Pagination */}
                <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-2">
                  {CAROUSEL_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Ir para slide ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === currentSlide ? 'w-8 bg-[#541E87]' : 'w-2.5 bg-white/80 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Banner "Nossos valores guiam nossas ações" */}
        <section className="bg-[#541E87] py-8 my-10 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
              Nossos valores guiam nossas ações
            </h2>
          </div>
        </section>

        {/* Section 4: Image of Valores */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 text-center">
          <img
            src="https://inovaveterinaria.com.br/wp-content/uploads/elementor/thumbs/Untitled-design-2-p076vmryqc111fqusm656yrbvb3vqiz3cm92at92ng.png"
            title="Valores Inova"
            alt="Valores Inova"
            loading="lazy"
            className="mx-auto max-w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* Section 5: Banner "Equipe" */}
        <section className="bg-[#541E87] py-8 my-10 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
              Equipe
            </h2>
          </div>
        </section>

        {/* Section 6: Atendimento e Recepção */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 text-left">
          <h2 className="font-['Dosis',sans-serif] text-2xl sm:text-3xl font-bold text-[#541E87] mb-4 text-left">
            Atendimento e Recepção
          </h2>
          <p className="text-[#7A7A7A] leading-relaxed text-base font-normal text-justify text-left">
            Aqui na INOVA, contamos com um time de atendimento e recepção 24 horas. Nossa equipe
            é qualificada para receber você e seu pet, garantindo sempre o melhor atendimento com
            agilidade e carinho.
          </p>
        </section>

        {/* Section 7: Enfermagem e Auxiliar Veterinário */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 text-left">
          <h2 className="font-['Dosis',sans-serif] text-2xl sm:text-3xl font-bold text-[#541E87] mb-4 text-left">
            Enfermagem e Auxiliar Veterinário
          </h2>
          <p className="text-[#7A7A7A] leading-relaxed text-base font-normal text-justify text-left">
            Nossa equipe de enfermagem e auxiliar veterinário é altamente capacitada para dar
            apoio nos setores de Internação, Centro Cirúrgico, Laboratório e Exames de Imagem.
            Além disso, estão à frente do nosso Ambulatório Central, trazendo mais agilidade e
            conforto nas coletas, aplicações e curativos mais rotineiros.
          </p>
        </section>

        {/* Section 8: Laboratório */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 text-left">
          <h2 className="font-['Dosis',sans-serif] text-2xl sm:text-3xl font-bold text-[#541E87] mb-4 text-left">
            Laboratório
          </h2>
          <p className="text-[#7A7A7A] leading-relaxed text-base font-normal text-justify text-left">
            Em nosso laboratório, contamos a equipe de análises clínicas focada em laudar os exames
            bioquímicos dos nossos pacientes, oferecendo um maior conforto e velocidade ao entregar
            os resultados.
          </p>
        </section>

        {/* Section 9: Estagiários de Veterinária */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 text-left">
          <h2 className="font-['Dosis',sans-serif] text-2xl sm:text-3xl font-bold text-[#541E87] mb-4 text-left">
            Estagiários de Veterinária
          </h2>
          <div className="space-y-4 text-[#7A7A7A] leading-relaxed text-base font-normal text-justify text-left">
            <p className="text-justify text-left">
              Nosso time de estagiários tem como objetivo auxiliar na rotina geral do Hospital e
              da Clínica, interagindo com os mais diversos profissionais da área de Medicina
              Veterinária e contribuindo para uma melhor experiência do tutor e seu pet.
            </p>
            <p className="text-justify text-left">
              O estágio contribui para a formação dos alunos, que têm a oportunidade de colocar em
              prática o aprendizado teórico da sala de aula sob a supervisão técnica e profissional
              de uma equipe de destaque. Toda essa vivência na prática agrega maiores
              conhecimentos sobre a profissão e auxilia na escolha da área que desejam seguir no
              futuro.
            </p>
          </div>
        </section>

        {/* Section 10: Organização e limpeza */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 text-left">
          <h2 className="font-['Dosis',sans-serif] text-2xl sm:text-3xl font-bold text-[#541E87] mb-4 text-left">
            Organização e limpeza
          </h2>
          <p className="text-[#7A7A7A] leading-relaxed text-base font-normal text-justify text-left">
            Para garantir um ambiente sempre agradável, nossa equipe de organização e limpeza está
            presente em nossa Clínica e Hospital todos os dias, mantendo as nossas Recepções,
            Consultórios, Internação, Centro Cirúrgico e todos os ambientes sempre impecáveis.
          </p>
        </section>

        {/* Section 11: Administrativo */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 mb-16 text-left">
          <h2 className="font-['Dosis',sans-serif] text-2xl sm:text-3xl font-bold text-[#541E87] mb-4 text-left">
            Administrativo
          </h2>
          <p className="text-[#7A7A7A] leading-relaxed text-base font-normal text-justify text-left">
            Nossa equipe administrativa está presente em nosso Hospital e Clínica, dando suporte a
            todos os departamentos, sendo responsáveis por Compras, Manutenção, Financeiro,
            Recursos Humanos, Comunicação e Estoque.
          </p>
        </section>
      </div>
    </article>
  );
};

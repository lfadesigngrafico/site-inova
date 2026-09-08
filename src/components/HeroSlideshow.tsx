import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SLIDE_IMAGES = [
  {
    id: 'slide-1',
    url: 'https://d335luupugsy2.cloudfront.net/cms/files/147009/1788886402/$p8ynhyu5g8j',
    alt: 'Equipe de Médicos Veterinários Inova Sorocaba',
  },
  {
    id: 'slide-2',
    url: 'https://d335luupugsy2.cloudfront.net/cms/files/147009/1788886402/$vnruarz50h',
    alt: 'Atendimento Veterinário Especializado Inova',
  },
  {
    id: 'slide-3',
    url: 'https://d335luupugsy2.cloudfront.net/cms/files/147009/1788886402/$vgddp96bip',
    alt: 'Estrutura e Tecnologia Hospitalar Inova',
  },
  {
    id: 'slide-4',
    url: 'https://d335luupugsy2.cloudfront.net/cms/files/147009/1788886402/$rk4u7j8g8l',
    alt: 'Cuidado e Carinho com Cães e Gatos',
  },
  {
    id: 'slide-5',
    url: 'https://d335luupugsy2.cloudfront.net/cms/files/147009/1788886402/$hesx5soke74',
    alt: 'Centro Cirúrgico e Diagnóstico Inova',
  },
  {
    id: 'slide-6',
    url: 'https://d335luupugsy2.cloudfront.net/cms/files/147009/1788886402/$bvgslytv4m6',
    alt: 'Hospital Veterinário 24 Horas em Sorocaba',
  },
];

export const HeroSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((nextIdx: number) => {
    setCurrentIndex((current) => {
      if (current === nextIdx) return current;
      setPrevIndex(current);
      return nextIdx;
    });
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) => {
      const nextIdx = (current + 1) % SLIDE_IMAGES.length;
      setPrevIndex(current);
      return nextIdx;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((current) => {
      const prevIdx = (current - 1 + SLIDE_IMAGES.length) % SLIDE_IMAGES.length;
      setPrevIndex(current);
      return prevIdx;
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <div
      id="hero-slideshow-container"
      className="relative w-full max-w-[560px] mx-auto lg:mx-0 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer Card with Rounded Corners without any borders */}
      <div className="relative aspect-[4/4.8] sm:aspect-[4/4.5] md:aspect-[4/4.7] lg:aspect-[4/4.8] w-full rounded-[2.2rem] md:rounded-[2.6rem] overflow-hidden shadow-2xl">
        {SLIDE_IMAGES.map((slide, idx) => {
          const isCurrent = idx === currentIndex;
          const isPrev = idx === prevIndex;

          return (
            <motion.img
              key={slide.id}
              src={slide.url}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
              style={{
                zIndex: isCurrent ? 2 : isPrev ? 1 : 0,
              }}
              referrerPolicy="no-referrer"
              initial={false}
              animate={{
                opacity: isCurrent ? 1 : isPrev ? 1 : 0,
              }}
              transition={{
                duration: 1.0,
                ease: 'easeInOut',
              }}
            />
          );
        })}

        {/* Subtle dark gradient overlay at bottom for dots contrast */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />

        {/* Next / Prev subtle arrows */}
        <button
          id="slideshow-prev-btn"
          type="button"
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs cursor-pointer z-20"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          id="slideshow-next-btn"
          type="button"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs cursor-pointer z-20"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots pagination */}
        <div
          id="slideshow-dots"
          className="absolute bottom-5 inset-x-0 flex items-center justify-center gap-2.5 z-20"
        >
          {SLIDE_IMAGES.map((slide, idx) => (
            <button
              key={slide.id}
              id={`slide-dot-${idx}`}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? 'w-3 h-3 bg-white shadow-md scale-110'
                  : 'w-2.5 h-2.5 bg-white/45 hover:bg-white/70'
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

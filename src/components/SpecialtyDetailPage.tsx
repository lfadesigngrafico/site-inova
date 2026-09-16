import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  HeartPulse,
  Share2,
  Stethoscope
} from 'lucide-react';
import { SpecialtyItem, SPECIALTIES_DATA } from '../data/specialtiesData';

interface SpecialtyDetailPageProps {
  specialty: SpecialtyItem;
  onBackToHome: () => void;
  onBackToSpecialties: () => void;
  onSelectSpecialty: (specialtyId: string) => void;
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
}

export const SpecialtyDetailPage: React.FC<SpecialtyDetailPageProps> = ({
  specialty,
  onBackToHome,
  onBackToSpecialties,
  onSelectSpecialty,
  onOpenAppointment,
  onOpenEmergency: _onOpenEmergency,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [specialty.id]);

  const otherSpecialties = SPECIALTIES_DATA.filter((s) => s.id !== specialty.id);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${specialty.title} | Inova Hospital Veterinário 24h`,
          text: specialty.excerpt,
          url: window.location.href,
        });
      } catch {
        // Ignored if cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  const formatContentHtml = (rawHtml: string) => {
    if (!rawHtml) return '';
    const cleaned = rawHtml
      // Remove any navigation, header, or elementor menu artifacts
      .replace(/<nav[\s\S]*?<\/nav>/gi, '')
      .replace(/<header[\s\S]*?<\/header>/gi, '')
      .replace(/<div[^>]*class="[^"]*elementor-menu-toggle[^"]*"[\s\S]*?<\/div>/gi, '')
      .replace(/<ul[^>]*class="[^"]*elementor-icon-list-items[^"]*"[\s\S]*?<\/ul>/gi, '')
      .replace(/<link\s+[^>]*>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .trim();

    return cleaned
      .replace(
        /<a\s+href="([^"]+)"/gi,
        '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-[#541E87] underline font-semibold hover:text-[#FAAE00] transition-colors"'
      )
      .replace(
        /<img\s+([^>]*?)>/gi,
        '<img $1 loading="lazy" referrerpolicy="no-referrer" class="max-w-full h-auto mx-auto rounded-xl shadow-xs my-4" />'
      )
      .replace(
        /<ul\s*([^>]*)>/gi,
        '<ul class="list-disc pl-6 space-y-2 my-4 text-[#54595F]" $1>'
      )
      .replace(
        /<ol\s*([^>]*)>/gi,
        '<ol class="list-decimal pl-6 space-y-2 my-4 text-[#54595F]" $1>'
      )
      .replace(
        /<h2\s*([^>]*)>/gi,
        '<h2 class="font-[\'Dosis\',sans-serif] font-bold text-2xl sm:text-3xl text-[#282828] uppercase mt-8 mb-4 tracking-wide" $1>'
      )
      .replace(
        /<h3\s*([^>]*)>/gi,
        '<h3 class="font-[\'Dosis\',sans-serif] font-bold text-xl sm:text-2xl text-[#282828] uppercase mt-6 mb-3 tracking-wide" $1>'
      )
      .replace(
        /<h4\s*([^>]*)>/gi,
        '<h4 class="font-[\'Dosis\',sans-serif] font-bold text-lg text-[#282828] uppercase mt-5 mb-2" $1>'
      )
      .replace(
        /<p\s*([^>]*)>/gi,
        '<p class="text-[#54595F] leading-relaxed mb-4" $1>'
      )
      .replace(
        /<div class="wp-block-embed__wrapper">/gi,
        '<div class="wp-block-embed__wrapper w-full max-w-full aspect-video rounded-2xl overflow-hidden shadow-sm my-6">'
      )
      .replace(
        /<iframe\s+([^>]*?)>/gi,
        '<iframe $1 class="w-full h-full border-0 rounded-2xl" style="width:100%!important;max-width:100%!important;aspect-ratio:16/9;height:auto!important;" loading="lazy">'
      );
  };

  return (
    <article className="bg-[#FAF9F6] min-h-screen text-[#54595F] font-['Raleway',sans-serif]">
      {/* Top Breadcrumbs & Back Bar */}
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
            <button
              type="button"
              onClick={onBackToSpecialties}
              className="hover:text-[#541E87] font-semibold transition-colors cursor-pointer"
            >
              Especialidades
            </button>
            <span>/</span>
            <span className="text-[#541E87] font-bold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
              {specialty.title}
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#541E87] transition-colors cursor-pointer py-1 px-2.5 rounded-md hover:bg-slate-100"
              title="Compartilhar página"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Compartilhar</span>
            </button>

            <button
              type="button"
              onClick={onBackToSpecialties}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#541E87] hover:text-[#A400EB] transition-colors cursor-pointer py-1 px-3 rounded-md hover:bg-purple-50"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para todas as especialidades
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header Section unificado com a página de especialidades */}
      <section className="bg-gradient-to-r from-[#541E87] via-[#63249E] to-[#3B1260] text-white py-14 md:py-18 relative overflow-hidden shadow-inner">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#FAAE00]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-['Dosis',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide mb-2 [text-wrap:balance]">
              NOSSAS ESPECIALIDADES
            </h1>

            <p className="font-['Dosis',sans-serif] font-semibold text-xl sm:text-2xl text-[#FAAE00] uppercase tracking-wider mb-4">
              Medicina Veterinária Especializada
            </p>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed font-normal [text-wrap:balance]">
              Corpo clínico multidisciplinar altamente capacitado com mais de 20 especialidades médicas dedicadas ao cuidado preventivo, diagnóstico e tratamento de excelência para seu pet.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout (Conteúdo original completo + Barra lateral) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Article Content (8 cols) */}
          <main className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-xs min-w-0 overflow-hidden">
            {/* Visual Header Inside Card */}
            <div className="flex items-center gap-4 pb-6 mb-6 border-b border-slate-100">
              {specialty.icon ? (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#541E87]/5 border border-[#541E87]/15 flex items-center justify-center p-2.5 shrink-0">
                  <img
                    src={specialty.icon}
                    alt={specialty.title}
                    className="w-full h-full object-contain mix-blend-multiply"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#541E87]/10 flex items-center justify-center text-[#541E87] shrink-0">
                  <Stethoscope className="w-8 h-8" />
                </div>
              )}
              <div>
                <h2 className="font-['Dosis',sans-serif] font-bold text-2xl sm:text-3xl text-[#282828] uppercase">
                  {specialty.title}
                </h2>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                  Inova Hospital Veterinário 24h & Clínica de Especialidades
                </p>
              </div>
            </div>

            {/* Verbatim Content Rendered with Refined Typography matching site */}
            <div
              className="specialty-raw-content text-[#54595F] text-[15px] sm:text-base leading-relaxed space-y-4
                [&_p]:mb-4 [&_p]:leading-relaxed
                [&_h2]:font-['Dosis',sans-serif] [&_h2]:font-bold [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:text-[#282828] [&_h2]:uppercase [&_h2]:mt-8 [&_h2]:mb-3
                [&_h3]:font-['Dosis',sans-serif] [&_h3]:font-bold [&_h3]:text-xl sm:[&_h3]:text-2xl [&_h3]:text-[#282828] [&_h3]:uppercase [&_h3]:mt-6 [&_h3]:mb-2
                [&_h4]:font-['Dosis',sans-serif] [&_h4]:font-bold [&_h4]:text-lg [&_h4]:text-[#282828] [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:mb-2
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:my-4
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:my-4
                [&_li]:text-[#54595F]
                [&_strong]:text-[#282828] [&_strong]:font-semibold
                [&_a]:text-[#541E87] [&_a]:font-semibold [&_a]:underline hover:[&_a]:text-[#FAAE00]
                [&_figure]:my-6 [&_figure]:mx-auto [&_figure]:max-w-full
                [&_img]:max-w-full [&_img]:h-auto [&_img]:mx-auto [&_img]:rounded-xl [&_img]:shadow-xs
                [&_.wp-block-embed]:w-full [&_.wp-block-embed]:max-w-full [&_.wp-block-embed]:my-6 [&_.wp-block-embed]:overflow-hidden
                [&_.wp-block-embed__wrapper]:w-full [&_.wp-block-embed__wrapper]:max-w-full [&_.wp-block-embed__wrapper]:aspect-video [&_.wp-block-embed__wrapper]:overflow-hidden [&_.wp-block-embed__wrapper]:rounded-2xl
                [&_iframe]:w-full [&_iframe]:max-w-full [&_iframe]:aspect-video [&_iframe]:h-auto [&_iframe]:rounded-2xl [&_iframe]:shadow-sm
                [&_.wp-block-spacer]:h-4"
              dangerouslySetInnerHTML={{ __html: formatContentHtml(specialty.contentHtml) }}
            />

            {/* Bottom Callout Inside Article */}
            <div className="mt-10 pt-8 border-t border-slate-100 bg-[#541E87]/5 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-['Dosis',sans-serif] font-bold text-lg text-[#282828] uppercase">
                  Precisa de consulta em {specialty.title}?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Atendimento com especialistas com hora marcada em nossas clínicas em Sorocaba.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenAppointment}
                className="shrink-0 bg-[#FAAE00] hover:bg-[#e69f00] text-[#282828] font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Agendar Consulta
              </button>
            </div>
          </main>

          {/* Sidebar (4 cols) - Mantendo a lista limpa das especialidades */}
          <aside className="lg:col-span-4 space-y-6">
            {/* All Specialties Navigation List */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
              <h3 className="font-['Dosis',sans-serif] font-bold text-lg uppercase tracking-wide text-[#282828] mb-4 pb-2 border-b border-slate-100">
                Todas as Especialidades Inova
              </h3>
              <ul className="space-y-1.5 max-h-[750px] overflow-y-auto pr-1">
                {SPECIALTIES_DATA.map((item) => {
                  const isActive = item.id === specialty.id;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => onSelectSpecialty(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center justify-between group cursor-pointer ${
                          isActive
                            ? 'bg-[#541E87] text-white font-bold shadow-xs'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-[#541E87]'
                        }`}
                      >
                        <span className="truncate pr-2">{item.title}</span>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isActive ? 'text-[#FAAE00]' : 'text-slate-400 group-hover:translate-x-1 group-hover:text-[#541E87]'
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>

        {/* Section: Outras Especialidades */}
        <section className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <h3 className="font-['Dosis',sans-serif] font-bold text-2xl sm:text-3xl text-[#282828] uppercase tracking-wide">
                Outras Especialidades
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Conheça outras áreas do nosso corpo clínico veterinário multidisciplinar
              </p>
            </div>
            <button
              type="button"
              onClick={onBackToSpecialties}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#541E87] hover:text-[#A400EB] transition-colors cursor-pointer"
            >
              <span>Ver todas as {SPECIALTIES_DATA.length} especialidades</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherSpecialties.slice(0, 6).map((other) => (
              <div
                key={other.id}
                onClick={() => onSelectSpecialty(other.id)}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:border-[#541E87]/40 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-lg bg-[#541E87]/5 border border-[#541E87]/10 flex items-center justify-center p-2 mb-4 group-hover:bg-[#541E87]/10 transition-colors">
                    {other.icon ? (
                      <img
                        src={other.icon}
                        alt={other.title}
                        className="w-full h-full object-contain filter group-hover:scale-105 transition-transform mix-blend-multiply"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <HeartPulse className="w-6 h-6 text-[#541E87]" />
                    )}
                  </div>
                  <h4 className="font-['Dosis',sans-serif] font-bold text-lg text-[#282828] group-hover:text-[#541E87] transition-colors uppercase">
                    {other.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {other.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#541E87]">
                  <span className="uppercase tracking-wider font-['Dosis',sans-serif] group-hover:text-[#A400EB] group-hover:translate-x-1 transition-all">
                    VER DETALHES DA ESPECIALIDADE &gt;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};

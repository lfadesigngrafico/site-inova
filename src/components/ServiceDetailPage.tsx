import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  HeartPulse,
  Share2
} from 'lucide-react';
import { ServiceItem, SERVICES_DATA } from '../data/servicesData';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onBackToHome: () => void;
  onBackToServices: () => void;
  onSelectService: (serviceId: string) => void;
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBackToHome,
  onBackToServices,
  onSelectService,
  onOpenAppointment,
  onOpenEmergency,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [service.id]);

  // Clean and enhance content HTML to ensure images load safely and styles look unified
  const formatContentHtml = (rawHtml: string) => {
    return rawHtml
      .replace(/<img /g, '<img referrerpolicy="no-referrer" loading="lazy" class="rounded-xl shadow-xs mx-auto my-6 max-w-full h-auto" ')
      .replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" class="text-[#541E87] hover:text-[#A400EB] underline font-medium" ');
  };

  const otherServices = SERVICES_DATA.filter((s) => s.id !== service.id);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${service.title} - Inova Hospital Veterinário 24h`,
          text: `Conheça o serviço de ${service.title} na Inova Hospital Veterinário 24h em Sorocaba.`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <article className="bg-[#FAF9F6] min-h-screen text-[#54595F] font-['Raleway',sans-serif]">
      {/* Top Breadcrumb Header Bar */}
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
              onClick={onBackToServices}
              className="hover:text-[#541E87] font-semibold transition-colors cursor-pointer"
            >
              Serviços
            </button>
            <span>/</span>
            <span className="text-[#541E87] font-bold">{service.title}</span>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#541E87] transition-colors cursor-pointer py-1 px-2.5 rounded-md hover:bg-slate-100"
              title="Compartilhar serviço"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Compartilhar</span>
            </button>

            <button
              type="button"
              onClick={onBackToServices}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#541E87] hover:text-[#A400EB] transition-colors cursor-pointer py-1 px-3 rounded-md hover:bg-purple-50"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para todos os serviços
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header Section unificado com a página de serviços */}
      <section className="bg-gradient-to-r from-[#541E87] via-[#63249E] to-[#3B1260] text-white py-14 md:py-18 relative overflow-hidden shadow-inner">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#FAAE00]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-['Dosis',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide mb-2 [text-wrap:balance]">
              SERVIÇOS UNIDADE INOVA
            </h1>

            <p className="font-['Dosis',sans-serif] font-semibold text-xl sm:text-2xl text-[#FAAE00] uppercase tracking-wider mb-4">
              Medicina Avançada
            </p>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed font-normal [text-wrap:balance]">
              Com infraestrutura hospitalar de alta complexidade e equipe veterinária multidisciplinar, a Inova reúne soluções diagnósticas, cirúrgicas, terapêuticas e preventivas para a saúde integral de cães e gatos.
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
              {service.icon ? (
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain p-2 rounded-xl bg-[#541E87]/5 border border-[#541E87]/15"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-16 h-16 rounded-xl bg-[#541E87]/10 flex items-center justify-center text-[#541E87]">
                  <HeartPulse className="w-8 h-8" />
                </div>
              )}
              <div>
                <h2 className="font-['Dosis',sans-serif] font-bold text-2xl sm:text-3xl text-[#282828] uppercase">
                  {service.title}
                </h2>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                  Inova Hospital Veterinário 24h & Clínica de Especialidades
                </p>
              </div>
            </div>

            {/* Verbatim Content Rendered with Refined Typography matching site */}
            <div
              className="service-raw-content text-[#54595F] text-[15px] sm:text-base leading-relaxed space-y-4
                [&_.wp-block-heading]:font-['Dosis',sans-serif] [&_.wp-block-heading]:font-bold [&_.wp-block-heading]:text-[#541E87] [&_.wp-block-heading]:mt-8 [&_.wp-block-heading]:mb-3 [&_.wp-block-heading]:uppercase [&_.wp-block-heading]:tracking-wide
                [&_h2]:text-2xl [&_h2]:font-['Dosis',sans-serif] [&_h2]:font-bold [&_h2]:text-[#541E87] [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:uppercase [&_h2]:tracking-wide
                [&_h3]:text-xl [&_h3]:font-['Dosis',sans-serif] [&_h3]:font-bold [&_h3]:text-[#282828] [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:uppercase
                [&_.wp-block-paragraph]:mb-3.5 [&_.wp-block-paragraph]:leading-relaxed
                [&_p]:mb-3.5 [&_p]:leading-relaxed
                [&_strong]:text-[#282828] [&_strong]:font-bold
                [&_.wp-block-list]:list-disc [&_.wp-block-list]:pl-6 [&_.wp-block-list]:space-y-2 [&_.wp-block-list]:my-4 [&_.wp-block-list]:text-slate-700
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:my-4 [&_ul]:text-slate-700
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:my-4 [&_ol]:text-slate-700
                [&_li]:pl-1 [&_li::marker]:text-[#541E87]
                [&_figure]:my-6 [&_figure]:mx-auto [&_figure]:text-center [&_figure]:max-w-full
                [&_img]:max-w-full [&_img]:h-auto [&_img]:mx-auto [&_img]:rounded-xl [&_img]:shadow-xs
                [&_.wp-block-embed]:w-full [&_.wp-block-embed]:max-w-full [&_.wp-block-embed]:my-6 [&_.wp-block-embed]:overflow-hidden
                [&_.wp-block-embed__wrapper]:w-full [&_.wp-block-embed__wrapper]:max-w-full [&_.wp-block-embed__wrapper]:aspect-video [&_.wp-block-embed__wrapper]:overflow-hidden [&_.wp-block-embed__wrapper]:rounded-2xl
                [&_iframe]:w-full [&_iframe]:max-w-full [&_iframe]:aspect-video [&_iframe]:h-auto [&_iframe]:rounded-2xl [&_iframe]:shadow-sm
                [&_.wp-block-spacer]:h-4"
              dangerouslySetInnerHTML={{ __html: formatContentHtml(service.contentHtml) }}
            />

            {/* Bottom Callout Inside Article */}
            <div className="mt-10 pt-8 border-t border-slate-100 bg-[#541E87]/5 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-['Dosis',sans-serif] font-bold text-lg text-[#282828] uppercase">
                  Precisa de agendamento para {service.title}?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Atendimento de emergência 24h na Unidade Nogueira Padilha e consultas com hora marcada no Campolim.
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

          {/* Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* All Services Navigation List */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
              <h3 className="font-['Dosis',sans-serif] font-bold text-lg uppercase tracking-wide text-[#282828] mb-4 pb-2 border-b border-slate-100">
                Todos os Serviços Inova
              </h3>
              <ul className="space-y-1.5">
                {SERVICES_DATA.map((item) => {
                  const isActive = item.id === service.id;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => onSelectService(item.id)}
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

        {/* Section: Outros Serviços (matching original Elementor "Outros Serviços" block) */}
        <section className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <h3 className="font-['Dosis',sans-serif] font-bold text-2xl sm:text-3xl text-[#282828] uppercase tracking-wide">
                Outros Serviços
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Conheça a gama completa de soluções veterinárias de excelência da Inova
              </p>
            </div>
            <button
              type="button"
              onClick={onBackToServices}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#541E87] hover:text-[#A400EB] transition-colors cursor-pointer"
            >
              <span>Ver todos os 12 serviços</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.slice(0, 6).map((other) => (
              <div
                key={other.id}
                onClick={() => onSelectService(other.id)}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:border-[#541E87]/40 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-lg bg-[#541E87]/5 border border-[#541E87]/10 flex items-center justify-center p-2 mb-4 group-hover:bg-[#541E87]/10 transition-colors">
                    {other.icon ? (
                      <img
                        src={other.icon}
                        alt={other.title}
                        className="w-full h-full object-contain filter group-hover:scale-105 transition-transform"
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
                  <span className="uppercase tracking-wider font-['Dosis',sans-serif]">Saiba mais</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#FAAE00]" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};

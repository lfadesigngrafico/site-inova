import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  ChevronRight,
  HeartPulse,
  Calendar,
  Clock,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  Phone
} from 'lucide-react';
import { ServiceItem, SERVICES_DATA } from '../data/servicesData';

interface ServicesPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceId: string) => void;
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onBackToHome,
  onSelectService,
  onOpenAppointment,
  onOpenEmergency,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = SERVICES_DATA.filter((service) => {
    const term = searchTerm.toLowerCase();
    return (
      service.title.toLowerCase().includes(term) ||
      service.excerpt.toLowerCase().includes(term)
    );
  });

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
            <span className="text-[#541E87] font-bold">Serviços</span>
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

      {/* Hero Header Section padronizado com o site oficial da Inova e a identidade visual */}
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

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-xs mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="font-['Dosis',sans-serif] font-bold text-xl sm:text-2xl text-[#282828] uppercase tracking-wide">
                Nossos Serviços ({filteredServices.length})
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Clique em qualquer serviço para acessar a subpágina completa com detalhes e orientações
              </p>
            </div>

            <div className="w-full md:w-80 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por serviço ou exame..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-[#541E87] focus:border-[#541E87] outline-hidden transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 12 Services Grid (Matching https://inovaveterinaria.com.br/servicos/) */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-xs">
            <HeartPulse className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="font-['Dosis',sans-serif] font-bold text-xl text-[#282828] uppercase">
              Nenhum serviço encontrado
            </h3>
            <p className="text-sm text-slate-600 mt-1 mb-4">
              Não encontramos nenhum serviço com o termo "{searchTerm}".
            </p>
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="bg-[#FAAE00] text-[#282828] font-bold text-xs px-5 py-2.5 rounded-lg uppercase tracking-wider"
            >
              Ver todos os serviços
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service.id)}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#541E87]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
              >
                <div className="p-6 sm:p-7">
                  {/* Top row with Service Icon and category tag */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-20 h-20 rounded-xl bg-[#541E87]/5 border border-[#541E87]/10 flex items-center justify-center p-3 group-hover:bg-[#541E87]/10 group-hover:scale-105 transition-all duration-300">
                      {service.icon ? (
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <HeartPulse className="w-10 h-10 text-[#541E87]" />
                      )}
                    </div>
                    <span className="text-[11px] font-bold text-[#541E87] bg-purple-50 px-2.5 py-1 rounded-full uppercase tracking-wider font-['Dosis',sans-serif]">
                      Unidade Inova
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Dosis',sans-serif] font-bold text-xl sm:text-2xl text-[#282828] group-hover:text-[#541E87] transition-colors uppercase leading-snug">
                    {service.title}
                  </h3>

                  {/* Excerpt text verbatim from original site */}
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed font-['Raleway',sans-serif]">
                    {service.excerpt}
                  </p>
                </div>

                {/* Card Footer with Saiba mais button in #FAAE00 */}
                <div className="px-6 sm:px-7 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between group-hover:bg-purple-50/30 transition-colors">
                  <span className="text-xs font-bold text-slate-700 group-hover:text-[#541E87] uppercase tracking-wider font-['Dosis',sans-serif]">
                    Ver detalhes do serviço
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.id);
                    }}
                    className="bg-[#FAAE00] group-hover:bg-[#e69f00] text-[#282828] font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-xs flex items-center gap-1.5 transition-all uppercase tracking-wider cursor-pointer"
                  >
                    <span>Saiba mais</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Hospital 24h & Especialidades Information Banner */}
        <section className="mt-16 bg-gradient-to-br from-[#541E87] to-[#3B1260] text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <h2 className="font-['Dosis',sans-serif] font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide mb-3">
                Estrutura Completa para Cuidar do Seu Pet
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl">
                O Hospital Veterinário Inova opera 24 horas por dia na Unidade Nogueira Padilha com centro cirúrgico completo, UTI, diagnóstico por imagem e laboratório próprio. Consultas especializadas com hora marcada acontecem em nossa Clínica Campolim.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs sm:text-sm text-white/90">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#A7CD4E] shrink-0 mt-0.5" />
                  <span>Equipe veterinária e de enfermagem com supervisão constante</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#FAAE00] shrink-0 mt-0.5" />
                  <span>Pronto atendimento e emergência ininterruptos 24 horas</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="w-full bg-[#FAAE00] hover:bg-[#e69f00] text-[#282828] font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-md transition-all uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Agendar Consulta ou Exame
              </button>
              <button
                type="button"
                onClick={onOpenEmergency}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl transition-all uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <HeartPulse className="w-4 h-4 text-[#A7CD4E]" />
                Emergência Veterinária 24h
              </button>
              <a
                href="tel:1533332300"
                className="text-center text-xs text-white/80 hover:text-[#FAAE00] font-semibold mt-1 transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#FAAE00]" />
                Central Telefônica: (15) 3333-2300
              </a>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

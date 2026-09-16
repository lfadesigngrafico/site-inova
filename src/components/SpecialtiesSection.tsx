import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface SpecialtiesSectionProps {
  onOpenAppointment: () => void;
  onOpenSpecialtiesPage?: () => void;
  onSelectSpecialtyDetail?: (id: string) => void;
}

interface Specialty {
  id: string;
  name: string;
  borderColor: string;
  textColor: string;
  icon: string;
  description: string;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onOpenAppointment,
  onOpenSpecialtiesPage,
  onSelectSpecialtyDetail,
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const SPECIALTIES: Specialty[] = [
    {
      id: 'gastroenterologia',
      name: 'Gastroenterologia',
      borderColor: 'border-[#9B51E0]',
      textColor: 'text-[#9B51E0]',
      description:
        'Diagnóstico e tratamento de patologias do trato gastrointestinal em cães e gatos, incluindo esôfago, estômago, intestinos, fígado e pâncreas.',
      icon: 'https://inovaveterinaria.com.br/wp-content/uploads/2022/04/Especialidade-de-Gastroenterologia-Inova-Hospital-Veterinario.png',
    },
    {
      id: 'cardiologia',
      name: 'Cardiologia',
      borderColor: 'border-[#9B51E0]',
      textColor: 'text-[#9B51E0]',
      description:
        'Diagnóstico precoce e tratamento de cardiopatias congênitas ou adquiridas, ecocardiograma, eletrocardiograma e acompanhamento contínuo.',
      icon: 'https://inovaveterinaria.com.br/wp-content/uploads/2020/09/cardiologia_.png',
    },
    {
      id: 'oftalmologia',
      name: 'Oftalmologia',
      borderColor: 'border-[#00BFA5]',
      textColor: 'text-[#00BFA5]',
      description:
        'Exames detalhados da visão, cirurgias de catarata, tratamento de úlceras de córnea, glaucoma e preservação da saúde ocular dos pets.',
      icon: 'https://inovaveterinaria.com.br/wp-content/uploads/2020/09/oftalmologia.png',
    },
    {
      id: 'odontologia',
      name: 'Odontologia',
      borderColor: 'border-[#00BFA5]',
      textColor: 'text-[#00BFA5]',
      description:
        'Prevenção de tártaro, extrações cirúrgicas, tratamento periodontal e correção ortodôntica para garantir a saúde bucal e digestiva.',
      icon: 'https://inovaveterinaria.com.br/wp-content/uploads/2020/09/odontologia.png',
    },
    {
      id: 'ortopedia-2',
      name: 'Ortopedia',
      borderColor: 'border-[#8BC34A]',
      textColor: 'text-[#8BC34A]',
      description:
        'Tratamento de fraturas, luxações articulares, displasias e lesões de ligamento com suporte cirúrgico e tecnologia de ponta.',
      icon: 'https://inovaveterinaria.com.br/wp-content/uploads/2020/09/ortopedia.png',
    },
    {
      id: 'fisioterapia',
      name: 'Fisioterapia',
      borderColor: 'border-[#00BFA5]',
      textColor: 'text-[#00BFA5]',
      description:
        'Reabilitação física integrada, hidroterapia, laserterapia, alívio de dores crônicas e recuperação pós-operatória para devolver a mobilidade.',
      icon: 'https://inovaveterinaria.com.br/wp-content/uploads/2020/09/716_INOVA_SITE_PICTOGRAMA_FISIOTERAPIA.png',
    },
  ];

  const ALL_OTHER_SPECIALTIES = [
    'Neurologia e Neurocirurgia',
    'Dermatologia e Alergologia',
    'Endocrinologia',
    'Oncologia Clínica e Cirúrgica',
    'Nefrologia e Urologia',
    'Animais Silvestres e Exóticos',
    'Cirurgia Geral e Tecidos Moles',
    'Anestesiologia Veterinária',
    'Medicina Felina Especializada',
    'Nutrição e Nutrologia Pet',
    'Infectologia Veterinária',
    'Hematologia e Transfusões',
  ];

  return (
    <section id="especialidades" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching model */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282828] text-center mb-12 sm:mb-16 tracking-tight [text-wrap:balance] uppercase">
          Nossas especialidades
        </h2>

        {/* 6 Specialty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SPECIALTIES.map((item) => (
            <div
              key={item.id}
              id={`specialty-card-${item.id}`}
              onClick={() => {
                if (onSelectSpecialtyDetail) {
                  onSelectSpecialtyDetail(item.id);
                } else if (onOpenSpecialtiesPage) {
                  onOpenSpecialtiesPage();
                } else {
                  setSelectedSpecialty(item);
                }
              }}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100/80 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] hover:-translate-y-1 group cursor-pointer"
            >
              {/* Specialty icon without outer circular border and enlarged */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Specialty Name with Dosis font matching Especialidades page */}
              <h3 className="font-['Dosis',sans-serif] font-bold text-lg sm:text-xl text-[#282828] group-hover:text-[#541E87] mb-2 tracking-tight transition-colors uppercase">
                {item.name}
              </h3>

              {/* "Saiba mais →" Action */}
              <div className="text-xs sm:text-sm text-slate-500 group-hover:text-[#541E87] transition-colors flex items-center gap-1 font-medium mt-1">
                <span>Saiba mais</span>
                <span className="text-base leading-none transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button: Veja todas as especialidades */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            id="btn-veja-todas-especialidades"
            type="button"
            onClick={() => {
              if (onOpenSpecialtiesPage) {
                onOpenSpecialtiesPage();
              } else {
                setShowAllModal(true);
              }
            }}
            className="bg-[#E5A823] hover:bg-[#d49918] active:scale-95 text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            Veja todas as especialidades
          </button>
        </div>
      </div>

      {/* Specialty Detail Modal */}
      {selectedSpecialty && (
        <div
          id="specialty-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedSpecialty(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedSpecialty(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                <img
                  src={selectedSpecialty.icon}
                  alt={selectedSpecialty.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#E5A823] uppercase tracking-wider font-['Dosis',sans-serif]">
                  Especialidade Inova
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#282828] font-['Dosis',sans-serif]">
                  {selectedSpecialty.name}
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {selectedSpecialty.description}
            </p>

            <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold text-[#282828] uppercase mb-1">
                <CheckCircle className="w-4 h-4 text-[#10B981]" />
                Atendimento Especializado 24 Horas
              </div>
              <p className="text-xs text-slate-500">
                Corpo clínico altamente capacitado e suporte hospitalar completo com equipamentos de última geração.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedSpecialty(null);
                  onOpenAppointment();
                }}
                className="flex-1 bg-[#FAAE00] hover:bg-[#e09d00] text-[#282828] font-bold text-center py-3 rounded-xl text-sm transition-colors cursor-pointer"
              >
                Agendar Consulta
              </button>
              <button
                type="button"
                onClick={() => setSelectedSpecialty(null)}
                className="px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* All Specialties Modal */}
      {showAllModal && (
        <div
          id="all-specialties-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowAllModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowAllModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-[#282828] mb-2">
              Todas as Especialidades Veterinárias
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              A Inova Hospital Veterinário conta com uma equipe multidisciplinar completa em Sorocaba para cuidar do seu pet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {SPECIALTIES.map((s) => (
                <div
                  key={s.id}
                  onClick={() => {
                    setShowAllModal(false);
                    if (onSelectSpecialtyDetail) {
                      onSelectSpecialtyDetail(s.id);
                    }
                  }}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <img
                      src={s.icon}
                      alt={s.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-sm font-bold text-[#282828] font-['Dosis',sans-serif]">{s.name}</span>
                </div>
              ))}
              {ALL_OTHER_SPECIALTIES.map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#282828]">{name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowAllModal(false);
                  onOpenAppointment();
                }}
                className="flex-1 bg-[#FAAE00] hover:bg-[#e09d00] text-[#282828] font-bold text-center py-3 rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Agendar com Especialista</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setShowAllModal(false)}
                className="px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

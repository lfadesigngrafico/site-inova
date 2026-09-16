import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  Calendar,
  Award,
  GraduationCap,
  ArrowLeft,
  Filter,
} from 'lucide-react';
import { VETS_DATA, Vet } from '../data/vetsData';

interface VetsPageProps {
  onBackToHome: () => void;
  onOpenAppointment: () => void;
  onNavigateToContact?: () => void;
}

export const VetsPage: React.FC<VetsPageProps> = ({
  onBackToHome,
  onOpenAppointment,
  onNavigateToContact,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('Todos');
  const [selectedVet, setSelectedVet] = useState<Vet | null>(null);

  // Extract unique high-level specialties for filter buttons
  const specialtyFilters = [
    'Todos',
    'Cirurgia',
    'Oftalmologia',
    'Anestesiologia',
    'Ortopedia',
    'Clínica Geral',
    'Cardiologia',
    'Medicina Felina',
    'Diagnóstico por Imagem',
    'Dermatologia',
    'Intensivismo',
  ];

  const filteredVets = useMemo(() => {
    return VETS_DATA.filter((vet) => {
      const matchesSearch =
        searchTerm.trim() === '' ||
        vet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vet.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vet.crmv.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vet.curriculum.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesSpecialty =
        selectedSpecialty === 'Todos' ||
        vet.position.toLowerCase().includes(selectedSpecialty.toLowerCase()) ||
        vet.curriculum.some((c) => c.toLowerCase().includes(selectedSpecialty.toLowerCase()));

      return matchesSearch && matchesSpecialty;
    });
  }, [searchTerm, selectedSpecialty]);

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#282828] pb-16">
      {/* Top Breadcrumb Header Bar padronizado com o estilo do Blog */}
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
            <span className="text-[#541E87] font-bold">Nossos Vets</span>
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

      {/* Hero Header Section */}
      <section className="bg-gradient-to-r from-[#541E87] via-[#63249E] to-[#3B1260] text-white py-12 md:py-16 relative overflow-hidden shadow-inner">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#FAAE00]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-['Dosis',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide mb-3 [text-wrap:balance]">
              Nossos VETS
            </h1>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-normal max-w-2xl text-balance [text-wrap:balance]">
              Corpo clínico altamente qualificado do Inova Hospital Veterinário 24h. Profissionais com residência, mestrado e especializações dedicados ao melhor cuidado para seu&nbsp;pet.
            </p>

            {/* Search Input Bar */}
            <div className="relative max-w-xl">
              <input
                id="search-vets-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar veterinário por nome, especialidade ou CRMV..."
                className="w-full bg-white text-slate-800 placeholder-slate-400 pl-11 pr-10 py-3.5 rounded-xl shadow-md border-0 focus:ring-2 focus:ring-[#FAAE00] outline-hidden text-sm"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
                  aria-label="Limpar busca"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        {/* Specialty Filter Pills */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3 text-slate-600 text-xs font-semibold uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-[#541E87]" />
            Filtrar por Especialidade:
          </div>
          <div className="flex flex-wrap gap-2">
            {specialtyFilters.map((spec) => {
              const active = selectedSpecialty === spec;
              return (
                <button
                  key={spec}
                  type="button"
                  onClick={() => setSelectedSpecialty(spec)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#541E87] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/70'
                  }`}
                >
                  {spec}
                </button>
              );
            })}
          </div>
        </div>

        {/* Counter Info */}
        <div className="flex items-center justify-between mb-6 text-sm text-slate-500 border-b border-slate-200 pb-3">
          <span>
            Exibindo <strong>{filteredVets.length}</strong> veterinários
            {selectedSpecialty !== 'Todos' && ` em ${selectedSpecialty}`}
            {searchTerm && ` para "${searchTerm}"`}
          </span>
          {(searchTerm || selectedSpecialty !== 'Todos') && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedSpecialty('Todos');
              }}
              className="text-xs text-[#541E87] hover:underline font-semibold cursor-pointer"
            >
              Limpar filtros
            </button>
          )}
        </div>

        {/* Vets Grid: 4 vets por linha (grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4) */}
        {filteredVets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredVets.map((vet) => (
              <div
                key={vet.id}
                id={`vet-card-${vet.id}`}
                onClick={() => setSelectedVet(vet)}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 overflow-hidden flex flex-col justify-between group cursor-pointer"
              >
                {/* Vet Image - dimensão quadrada, sem hover e sem corte da foto */}
                <div className="relative bg-white overflow-hidden aspect-square flex items-center justify-center p-3 sm:p-4">
                  <img
                    src={vet.image}
                    alt={vet.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600';
                    }}
                  />
                </div>

                {/* Card Content - Exibidas até o final do CRMV-SP */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                  <div className="flex flex-col">
                    <h3 className="font-['Dosis',sans-serif] font-bold text-base sm:text-[17px] text-[#282828] group-hover:text-[#541E87] transition-colors uppercase leading-tight mb-1.5">
                      {vet.name}
                    </h3>

                    {/* Specialty / Position */}
                    <p className="text-xs sm:text-[13px] text-[#541E87] font-semibold mb-2 line-clamp-2">
                      {vet.position}
                    </p>

                    {/* CRMV-SP */}
                    <div className="text-[12px] text-slate-500 font-medium">
                      {vet.crmv}
                    </div>
                  </div>
                </div>

                {/* Card Footer with discreet clickable link to curriculum matching services/specialties */}
                <div className="px-4 sm:px-5 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between group-hover:bg-purple-50/30 transition-colors">
                  <span
                    id={`btn-curriculo-${vet.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVet(vet);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#541E87] hover:text-[#A400EB] uppercase tracking-wider font-['Dosis',sans-serif] group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    VER CURRÍCULO &gt;
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 max-w-md mx-auto">
            <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-bold text-lg text-slate-700 mb-1">Nenhum veterinário encontrado</h3>
            <p className="text-sm text-slate-500 mb-4">
              Tente buscar por outro termo ou limpe os filtros para ver toda a equipe.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedSpecialty('Todos');
              }}
              className="bg-[#541E87] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#43166d] transition-colors"
            >
              Ver todos os veterinários
            </button>
          </div>
        )}
      </div>

      {/* Pop-up Modal com imagem e informações completas do Vet */}
      {selectedVet && (
        <div
          id="vet-curriculo-popup"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setSelectedVet(null)}
        >
          <div
            className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#541E87] to-[#3B1260] text-white px-6 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#FAAE00]" />
                <h2 className="font-['Dosis',sans-serif] font-bold text-lg sm:text-xl uppercase tracking-wide">
                  Currículo do Veterinário
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedVet(null)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Profile Top: Image and basic details */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-5 border-b border-slate-100">
                <img
                  src={selectedVet.image}
                  alt={selectedVet.name}
                  referrerPolicy="no-referrer"
                  className="w-32 h-32 sm:w-36 sm:h-36 object-contain shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600';
                  }}
                />
                <div className="text-center sm:text-left flex-1">
                  <h3 className="font-['Dosis',sans-serif] font-bold text-2xl text-[#282828] uppercase leading-tight mb-1">
                    {selectedVet.name}
                  </h3>
                  <div className="inline-block bg-[#FDF3D6] text-[#B78103] font-bold text-xs px-3 py-1 rounded-sm mb-2">
                    {selectedVet.position}
                  </div>
                  <div className="text-sm font-semibold text-slate-600 mb-1">
                    {selectedVet.crmv}
                  </div>
                </div>
              </div>

              {/* Formação e Currículo Completo */}
              <div>
                <h4 className="font-['Dosis',sans-serif] font-bold text-base text-[#541E87] uppercase tracking-wide mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#541E87]" />
                  Formação Acadêmica & Especializações
                </h4>

                {selectedVet.curriculum && selectedVet.curriculum.length > 0 ? (
                  <ul className="space-y-2.5">
                    {selectedVet.curriculum.map((item, index) => (
                      <li
                        key={index}
                        className="text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-2 bg-[#FAF9F6] p-3 rounded-lg border border-slate-100"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5A823] mt-2 shrink-0" />
                        <span>{item.replace(/^[–\-]\s*/, '')}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-600 bg-[#FAF9F6] p-4 rounded-lg border border-slate-100">
                    Médico(a) veterinário(a) integrante do corpo clínico especializado. Registro ativo sob {selectedVet.crmv}.
                  </p>
                )}
              </div>
            </div>

            {/* Modal Footer: Agendar Consulta no canto esquerdo e Fechar no canto direito */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                id="modal-btn-agendar-consulta"
                onClick={() => {
                  setSelectedVet(null);
                  if (onNavigateToContact) {
                    onNavigateToContact();
                  } else {
                    onOpenAppointment();
                  }
                }}
                className="bg-[#FAAE00] hover:bg-[#e69f00] text-[#282828] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Agendar Consulta
              </button>
              <button
                type="button"
                id="modal-btn-fechar"
                onClick={() => setSelectedVet(null)}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

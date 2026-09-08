import React, { useState, useEffect } from 'react';
import { X, Search, ChevronRight, Sparkles } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  onSelectAction: (action: string) => void;
}

const SEARCH_DATABASE = [
  {
    title: 'Hospital Veterinário & Emergência 24h',
    category: 'Pronto Atendimento',
    desc: 'Unidade Campolim com atendimento ininterrupto 24 horas todos os dias da semana.',
    action: 'emergency',
  },
  {
    title: 'Banco de Sangue Veterinário',
    category: 'Serviços Especiais',
    desc: 'Coleta, fracionamento e transfusão de hemoderivados para cães e gatos em situações críticas.',
    action: 'bloodbank',
  },
  {
    title: 'Resultados e Laudos de Exames',
    category: 'Exames',
    desc: 'Acesse laudos de exames laboratoriais, raio-X digital e ultrassonografia do seu pet.',
    action: 'exams',
  },
  {
    title: 'Agendamento de Consultas & Vacinas',
    category: 'Atendimento Clínico',
    desc: 'Agende consultas de rotina, imunizações e avaliações com médicos veterinários especialistas.',
    action: 'appointment',
  },
  {
    title: 'Especialidades Veterinárias',
    category: 'Especialidades',
    desc: 'Cardiologia, Ortopedia, Dermatologia, Oftalmologia, Odontologia e Medicina Felina.',
    action: 'specialties',
  },
  {
    title: 'Unidade Campolim',
    category: 'Endereços',
    desc: 'Avenida Gisele Constantino, 1495 – Parque Campolim, Sorocaba/SP. Tel: (15) 3333-2300.',
    action: 'location-campolim',
  },
  {
    title: 'Unidade Nogueira Padilha',
    category: 'Endereços',
    desc: 'Avenida Nogueira Padilha, 1770 – Vila Hortência, Sorocaba/SP. Tel: (15) 3333-2300.',
    action: 'location-nogueira',
  },
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  initialQuery = '',
  onSelectAction,
}) => {
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  if (!isOpen) return null;

  const filteredItems = SEARCH_DATABASE.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      id="site-search-modal"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-[#541E87]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por serviços, especialidades, exames, unidades..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results */}
        <div className="p-4 max-h-96 overflow-y-auto divide-y divide-slate-100">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => {
                  onClose();
                  onSelectAction(item.action);
                }}
                className="w-full text-left py-3 px-2 rounded-xl hover:bg-purple-50 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#541E87] bg-purple-100 px-2 py-0.5 rounded-md">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1 group-hover:text-[#541E87] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{item.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#541E87] group-hover:translate-x-0.5 transition-all" />
              </button>
            ))
          ) : (
            <div className="py-8 text-center text-slate-500 text-sm">
              <Sparkles className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p>Nenhum resultado encontrado para "{query}".</p>
              <p className="text-xs text-slate-400 mt-1">
                Tente buscar por termos como: emergência, vacinas, exames, campolim.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

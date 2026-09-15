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
    title: 'A Inova - Nossa História, Estrutura e Valores',
    category: 'Institucional',
    desc: 'Conheça a história de mais de 13 anos da Inova, fundadores da UNESP Botucatu, equipe multidisciplinar, vídeo institucional e instalações 24h.',
    action: 'about',
  },
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
    title: 'Inova Vida - Planos Preventivos',
    category: 'Planos de Saúde Preventiva',
    desc: 'Conheça os planos Inova Vida com acompanhamento e medicina preventiva personalizada para cães e gatos.',
    action: 'inova-vida',
  },
  {
    title: 'Serviços Unidade Inova - Medicina Avançada',
    category: 'Serviços',
    desc: 'Conheça todos os 12 serviços do Hospital Veterinário Inova: ambulatório, cirurgia, diagnóstico por imagem, UTI, internação, laboratório e mais.',
    action: 'services',
  },
  {
    title: 'Ambulatório Central',
    category: 'Serviços',
    desc: 'Localizado na Clínica de Especialidades, com enfermagem capacitada para coletas, aplicações e curativos rotineiros.',
    action: 'service:ambulatorio-central',
  },
  {
    title: 'Cirurgia Geral e Especializada',
    category: 'Serviços',
    desc: 'Dois centros cirúrgicos completos, anestesia inalatória, ventilação mecânica e anestesista dedicado.',
    action: 'service:cirurgia-geral-e-especializada',
  },
  {
    title: 'Clínica Médica e Medicina Preventiva',
    category: 'Serviços',
    desc: 'Consultas rotineiras, vacinação preventiva, check-up anual e saúde preventiva integral.',
    action: 'service:clinica-medica-e-medicina-preventiva',
  },
  {
    title: 'Diagnóstico por Imagem - Raio-X Digital e Ultrassom',
    category: 'Serviços',
    desc: 'Raio-x computadorizado e ultrassonografia veterinária de alta resolução para cães e gatos.',
    action: 'service:diagnostico-por-imagem',
  },
  {
    title: 'Emergência e Pronto Atendimento 24h',
    category: 'Serviços',
    desc: 'Atendimento emergencial 24 horas todos os dias com médico veterinário de plantão presencial.',
    action: 'service:emergencia-e-pronto-atendimento',
  },
  {
    title: 'Espaço de Reabilitação - Fisioterapia Veterinária',
    category: 'Serviços',
    desc: 'Hidroterapia, esteira aquática, acupuntura, laserterapia e reabilitação pós-cirúrgica.',
    action: 'service:espaco-de-reabilitacao',
  },
  {
    title: 'Exame Cardiológico em Cães e Gatos',
    category: 'Serviços',
    desc: 'Eletrocardiografia, ecocardiograma, aferição de pressão arterial e avaliação de risco cirúrgico.',
    action: 'service:exame-cardiologico-cachorro',
  },
  {
    title: 'Inoscope - Endoscopia e Vídeo-Cirurgia',
    category: 'Serviços',
    desc: 'Endoscopia diagnóstica e retirada minimamente invasiva de corpos estranhos no esôfago e estômago.',
    action: 'service:inoscope',
  },
  {
    title: 'Internação e UTI Veterinária',
    category: 'Serviços',
    desc: 'Baias individualizadas, monitoramento intensivo, bombas de infusão contínua e oxigenoterapia.',
    action: 'service:internacao',
  },
  {
    title: 'Laboratório Veterinário Próprio',
    category: 'Serviços',
    desc: 'Hematologia, bioquímica sérica, hemostasia, urinálise e parasitologia com laudos rápidos todos os dias.',
    action: 'service:laboratorio',
  },
  {
    title: 'Microchipagem Animal',
    category: 'Serviços',
    desc: 'Identificação eletrônica definitiva, segura e indolor para viagens e segurança do seu pet.',
    action: 'service:microchipagem',
  },
  {
    title: 'Oftalmologia Cachorro e Gato',
    category: 'Serviços',
    desc: 'Avaliação completa da visão, tonometria, teste de lágrima, ultrassom ocular e cirurgias de catarata.',
    action: 'service:oftalmologia-cachorro',
  },
  {
    title: 'Nossas Especialidades - Inova Hospital Veterinário',
    category: 'Especialidades',
    desc: 'Corpo clínico multidisciplinar com mais de 20 especialidades veterinárias dedicadas ao cuidado integral do seu pet.',
    action: 'specialties',
  },
  {
    title: 'Anestesiologia Veterinária',
    category: 'Especialidades',
    desc: 'Sedação e anestesia geral conduzidas por anestesista especializado com monitoração contínua.',
    action: 'specialty:anestesiologia',
  },
  {
    title: 'Cardiologia Veterinária',
    category: 'Especialidades',
    desc: 'Diagnóstico e tratamento de doenças cardíacas em pets, ecocardiograma e eletrocardiografia.',
    action: 'specialty:cardiologia',
  },
  {
    title: 'Cirurgia Geral e Especializada',
    category: 'Especialidades',
    desc: 'Centros cirúrgicos equipados para procedimentos em tecidos moles, ortopedia e neurocirurgias.',
    action: 'specialty:cirurgia',
  },
  {
    title: 'Cirurgia Veterinária e Videocirurgia',
    category: 'Especialidades',
    desc: 'Técnicas cirúrgicas minimamente invasivas com menor tempo de recuperação e menor dor pós-operatória.',
    action: 'specialty:cirurgia-veterinaria',
  },
  {
    title: 'Clínico Geral Veterinário',
    category: 'Especialidades',
    desc: 'Consultas de rotina, check-up preventivo, imunização e triagem clínica especializada.',
    action: 'specialty:clinico-geral',
  },
  {
    title: 'Dermatologia Veterinária',
    category: 'Especialidades',
    desc: 'Tratamento de alergias, dermatites atópicas, infecções de pele, sarnas e otites em cães e gatos.',
    action: 'specialty:dermatologia-veterinaria',
  },
  {
    title: 'Endocrinologia Veterinária',
    category: 'Especialidades',
    desc: 'Diagnóstico e controle de diabetes mellitus, hiperadrenocorticismo (Cushing), hipotireoidismo e obesidade.',
    action: 'specialty:endocrinologia-de-cachorro',
  },
  {
    title: 'Fisioterapia Veterinária',
    category: 'Especialidades',
    desc: 'Reabilitação física, hidroterapia, laserterapia, ozonioterapia e alívio de dor ortopédica e neurológica.',
    action: 'specialty:fisioterapia',
  },
  {
    title: 'Gastroenterologia Veterinária',
    category: 'Especialidades',
    desc: 'Diagnóstico e tratamento de afecções gastrointestinais, esôfago, estômago, intestinos, fígado e pâncreas.',
    action: 'specialty:gastroenterologia',
  },
  {
    title: 'Hematologia Veterinária',
    category: 'Especialidades',
    desc: 'Tratamento de anemias, alterações de coagulação, doenças transmitidas por carrapatos e suporte transfusional.',
    action: 'specialty:hematologia-veterinaria',
  },
  {
    title: 'Medicina de Felinos',
    category: 'Especialidades',
    desc: 'Atendimento exclusivo Cat Friendly, consultório específico e manejo sem estresse para gatos.',
    action: 'specialty:medicina-de-felinos',
  },
  {
    title: 'Medicina Integrativa Veterinária',
    category: 'Especialidades',
    desc: 'Abordagem terapêutica global aliando acupuntura, fitoterapia, homeopatia e bem-estar físico e emocional.',
    action: 'specialty:medicina-integrativa-veterinaria',
  },
  {
    title: 'Nefrologia Veterinária',
    category: 'Especialidades',
    desc: 'Diagnóstico precoce e manejo da Doença Renal Crônica, cálculo renal e infecções do trato urinário.',
    action: 'specialty:nefrologia',
  },
  {
    title: 'Neurologia Veterinária',
    category: 'Especialidades',
    desc: 'Tratamento de convulsões, epilepsia, hérnia de disco, perda de locomoção e distúrbios neurológicos.',
    action: 'specialty:neurologia',
  },
  {
    title: 'Nutrologia Veterinária',
    category: 'Especialidades',
    desc: 'Dietas personalizadas, alimentação natural balanceada, manejo nutricional de pets obesos e nefropatas.',
    action: 'specialty:nutrologia',
  },
  {
    title: 'Odontologia Veterinária',
    category: 'Especialidades',
    desc: 'Tratamento periodontal, extrações seguras, profilaxia dentária e alívio do mau hálito e dor bucal.',
    action: 'specialty:odontologia',
  },
  {
    title: 'Oftalmologia Veterinária',
    category: 'Especialidades',
    desc: 'Avaliação da visão, cirurgia de catarata, úlcera de córnea, glaucoma, olho seco e ceratoconjuntivite.',
    action: 'specialty:oftalmologia',
  },
  {
    title: 'Oncologia Veterinária',
    category: 'Especialidades',
    desc: 'Diagnóstico precoce de neoplasias, estadiamento tumoral, quimioterapia e cirurgia oncológica com qualidade de vida.',
    action: 'specialty:oncologia',
  },
  {
    title: 'Ortopedia Veterinária',
    category: 'Especialidades',
    desc: 'Cirurgias ortopédicas, fraturas, luxação de patela, ruptura do ligamento cruzado e artrose.',
    action: 'specialty:ortopedia-2',
  },
  {
    title: 'Psiquiatria Veterinária',
    category: 'Especialidades',
    desc: 'Tratamento de ansiedade de separação, agressividade, fobias a ruídos, lambedura psicogênica e estresse.',
    action: 'specialty:psiquiatria',
  },
  {
    title: 'Medicina de Animais Silvestres e Exóticos',
    category: 'Especialidades',
    desc: 'Atendimento clínico e cirúrgico especializado para aves, répteis, roedores, coelhos e pequenos mamíferos.',
    action: 'specialty:silvestres',
  },
  {
    title: 'Tomografia Computadorizada Veterinária',
    category: 'Especialidades',
    desc: 'Exame de imagem de alta precisão anatômica para crânio, coluna, tórax, abdômen e planejamento cirúrgico.',
    action: 'specialty:tomografia-veterinaria',
  },
  {
    title: 'Nossos Vets - Corpo Clínico Especializado',
    category: 'Equipe',
    desc: 'Conheça todos os médicos veterinários da Inova, suas especialidades e currículos completos.',
    action: 'vets',
  },
  {
    title: 'Depoimentos de Clientes e Avaliações 5 Estrelas',
    category: 'Depoimentos',
    desc: 'Veja o que os tutores de cães e gatos relatam sobre suas experiências e o cuidado no Inova Hospital Veterinário.',
    action: 'depoimentos',
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
  {
    title: 'Blog Inova - Artigos & Dicas Veterinárias',
    category: 'Blog',
    desc: 'Artigos sobre giárdia, parvovirose, cinomose, leishmaniose, carrapato e saúde do pet.',
    action: 'blog',
  },
  {
    title: 'Giárdia em cães: sintomas e prevenção',
    category: 'Blog',
    desc: 'Entenda os sintomas da giárdia e como proteger seu cão de reinfecções.',
    action: 'blog:giardia-canina',
  },
  {
    title: 'Leishmaniose em cães: sintomas e transmissão',
    category: 'Blog',
    desc: 'Saiba como identificar leishmaniose canina e os cuidados preventivos.',
    action: 'blog:leishmaniose',
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

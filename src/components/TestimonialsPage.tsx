import React from 'react';
import { ArrowLeft, Star, Calendar, Phone } from 'lucide-react';

interface TestimonialsPageProps {
  onBackToHome?: () => void;
  onOpenAppointment?: () => void;
  onOpenEmergency?: () => void;
}

interface ClientTestimonial {
  id: number;
  name: string;
  location: string;
  petName: string;
  petSpecies: string;
  avatar: string;
  rating: number;
  service: string;
  date: string;
  text: string;
}

const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 1,
    name: 'Mariana Silveira',
    location: 'Sorocaba / SP',
    petName: 'Thor',
    petSpecies: 'Golden Retriever',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=240',
    rating: 5,
    service: 'Pronto Atendimento 24h & UTI',
    date: 'Atendimento recente',
    text: 'O atendimento de emergência na madrugada salvou a vida do Thor. A equipe de plantão da UTI foi extremamente ágil, transparente e cuidadosa durante todo o período de internação. Recebíamos boletins detalhados a cada poucas horas, o que nos trouxe muita paz. Não confio a saúde do meu pet a nenhum outro lugar em Sorocaba!',
  },
  {
    id: 2,
    name: 'Carlos Eduardo Mendes',
    location: 'Sorocaba / SP',
    petName: 'Luna',
    petSpecies: 'SRD (Vira-lata)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=240',
    rating: 5,
    service: 'Cardiologia & Ecodoppler',
    date: 'Atendimento recente',
    text: 'A estrutura do Inova Hospital Veterinário é simplesmente de primeiro mundo. Passamos por consulta com a médica especialista em cardiologia e realizamos todos os exames no mesmo dia, sem estresse para a Luna. Toda a equipe é acolhedora, pontual e muito competente. Recomendo de olhos fechados.',
  },
  {
    id: 3,
    name: 'Beatriz Alencar',
    location: 'Votorantim / SP',
    petName: 'Mingau',
    petSpecies: 'Gato Siamês',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=240',
    rating: 5,
    service: 'Medicina Felina & Oftalmologia',
    date: 'Atendimento recente',
    text: 'Como tutora de gatos, sempre tive receio de levá-los a hospitais veterinários pelo nível de estresse. Na Inova, o manejo Cat Friendly e o carinho com felinos fizeram toda a diferença. O Mingau se sentiu seguro e o diagnóstico oftalmológico foi certeiro. Gratidão imensa a todos os veterinários!',
  },
  {
    id: 4,
    name: 'Rodrigo Santana',
    location: 'Sorocaba / SP',
    petName: 'Pipoca',
    petSpecies: 'Shih Tzu',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=240',
    rating: 5,
    service: 'Hemocentro Inova & Transfusão',
    date: 'Atendimento recente',
    text: 'Meu cachorro precisou de uma transfusão de sangue urgente após uma complicação grave, e o Banco de Sangue próprio da Inova foi decisivo para que ele sobrevivesse. Saber que Sorocaba conta com um hospital 24h desse porte, com sangue triado e UTI completa de prontidão, traz uma tranquilidade indescritível.',
  },
  {
    id: 5,
    name: 'Fernanda Vasconcelos',
    location: 'Itu / SP',
    petName: 'Meg',
    petSpecies: 'Buldogue Francês',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=240',
    rating: 5,
    service: 'Cirurgia Ortopédica & Reabilitação',
    date: 'Atendimento recente',
    text: 'Realizamos a cirurgia ortopédica de coluna da Meg com a equipe cirúrgica da Inova. A anestesia inalatória foi super segura e o acompanhamento pós-operatório diário foi impecável. Hoje ela corre e brinca perfeitamente sem nenhuma dor. O profissionalismo e a dedicação aqui são exemplares!',
  },
  {
    id: 6,
    name: 'Lucas Guimarães',
    location: 'Sorocaba / SP',
    petName: 'Apollo',
    petSpecies: 'Pastor Alemão',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=240',
    rating: 5,
    service: 'Internação Intensiva 24h & Raio-X Digital',
    date: 'Atendimento recente',
    text: 'O Apollo chegou muito debilitado por uma infecção súbita. A agilidade da triagem e os exames laboratoriais rápidos no local foram vitais para iniciar a medicação certa em minutos. O carinho que os enfermeiros e veterinários tiveram com ele na internação parecia de um membro da própria família.',
  },
  {
    id: 7,
    name: 'Juliana Peixoto',
    location: 'Salto / SP',
    petName: 'Mel',
    petSpecies: 'Yorkshire Terrier',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=240',
    rating: 5,
    service: 'Dermatologia & Alergologia',
    date: 'Atendimento recente',
    text: 'A Mel sofria com dermatite atópica há meses sem diagnóstico conclusivo. Na consulta com a dermato da Inova, fizemos raspados e citologia na hora. O plano terapêutico prescrito transformou a qualidade de vida dela: parou de se coçar e os pelos voltaram a crescer fortes e brilhantes.',
  },
  {
    id: 8,
    name: 'Marcio Vinícius Toledo',
    location: 'Sorocaba / SP',
    petName: 'Simba',
    petSpecies: 'Gato Maine Coon',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=240',
    rating: 5,
    service: 'Odontologia Veterinária',
    date: 'Atendimento recente',
    text: 'Levamos o Simba para um procedimento odontológico especializado sob anestesia monitorada. Fiquei impressionado com os equipamentos modernos do centro cirúrgico e o cuidado da equipe anestésica em nos explicar cada detalhe antes do procedimento. Ele se recuperou super bem no mesmo dia.',
  },
  {
    id: 9,
    name: 'Camila Rossi Ribeiro',
    location: 'Araçoiaba da Serra / SP',
    petName: 'Frederico',
    petSpecies: 'Beagle',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=240',
    rating: 5,
    service: 'Ultrassonografia & Emergência',
    date: 'Atendimento recente',
    text: 'O Fred engoliu um brinquedo e começou a vomitar. Corremos para o pronto atendimento da Inova: o ultrassom foi feito imediatamente e a remoção foi rápida e sem complicações. O acolhimento e a calma que a equipe nos transmitiu em um momento de desespero foram impagáveis!',
  },
  {
    id: 10,
    name: 'Patrícia & Rogério Prado',
    location: 'Sorocaba / SP',
    petName: 'Amora',
    petSpecies: 'Pug',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=240',
    rating: 5,
    service: 'Clínica Geral & Vacinação Ética',
    date: 'Atendimento recente',
    text: 'Acompanhamos a Amora na Inova desde filhotinha. O protocolo vacinal ético e importado, as orientações preventivas e a gentileza de toda a recepção e médicos nos dão a total certeza de que escolhemos o melhor hospital veterinário para cuidar do amor das nossas vidas.',
  },
];

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onBackToHome,
  onOpenAppointment,
  onOpenEmergency,
}) => {
  return (
    <article className="bg-[#FAF9F6] min-h-screen text-[#54595F] font-['Raleway',sans-serif] pb-16">
      {/* Top Breadcrumb Header Bar padronizado com o estilo do Blog */}
      {onBackToHome && (
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center space-x-2 text-sm text-slate-500 font-['Dosis',sans-serif]"
            >
              <button
                type="button"
                onClick={onBackToHome}
                className="hover:text-[#541E87] font-semibold transition-colors cursor-pointer"
              >
                Início
              </button>
              <span>/</span>
              <span className="text-[#541E87] font-bold">Depoimentos</span>
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

      {/* Hero Header Section padronizado com o mesmo layout da página Banco de Sangue */}
      <section className="bg-gradient-to-r from-[#541E87] via-[#63249E] to-[#3B1260] text-white py-12 md:py-16 relative overflow-hidden shadow-inner">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#FAAE00]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-['Dosis',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide mb-4 [text-wrap:balance]">
              Depoimentos de Clientes
            </h1>

            {/* Breve descrição falando sobre os depoimentos dos clientes */}
            <p className="text-white/95 text-base sm:text-lg leading-relaxed font-normal text-justify text-left [text-wrap:balance]">
              A confiança de quem ama incondicionalmente é o que nos move todos os dias. Conheça os relatos de tutores que encontraram na Inova Hospital Veterinário a dedicação, o respeito e a precisão médica que seus pets precisavam em consultas de rotina, procedimentos complexos e emergências 24 horas.
            </p>
          </div>
        </div>
      </section>

      {/* Sequência dos 10 Depoimentos com Avaliação 5 Estrelas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CLIENT_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              id={`depoimento-${item.id}`}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars and Service Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1" aria-label="Avaliação 5 estrelas">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FAAE00] text-[#FAAE00]" />
                    ))}
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold bg-[#F3E8FF] text-[#541E87] px-2.5 py-1 rounded-md border border-[#E9D5FF]/60 line-clamp-1">
                    {item.service}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="mb-6">
                  <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal italic">
                    "{item.text}"
                  </p>
                </div>
              </div>

              {/* Client & Pet Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-100 shadow-xs shrink-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-['Dosis',sans-serif] font-bold text-base text-[#282828] uppercase tracking-wide leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#541E87] font-semibold">
                      Tutor(a) do <strong className="font-bold">{item.petName}</strong> ({item.petSpecies})
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner de Atendimento & Agendamento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-gradient-to-r from-[#541E87] to-[#3B1260] text-white rounded-2xl p-8 sm:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="font-['Dosis',sans-serif] font-bold text-2xl sm:text-3xl uppercase tracking-wide mb-2">
              Seu pet também merece o melhor cuidado 24h
            </h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Conte com especialistas de plantão, UTI completa e mais de 15 especialidades veterinárias em Sorocaba. Estamos sempre prontos para receber você e seu amigo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            {onOpenAppointment && (
              <button
                type="button"
                onClick={onOpenAppointment}
                className="w-full sm:w-auto bg-[#FAAE00] hover:bg-[#d99500] text-[#282828] font-bold text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                Agendar Consulta
              </button>
            )}

            {onOpenEmergency && (
              <button
                type="button"
                onClick={onOpenEmergency}
                className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white font-bold text-sm px-6 py-3 rounded-lg border border-white/30 transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                Emergência 24h
              </button>
            )}
          </div>
        </div>
      </section>
    </article>
  );
};

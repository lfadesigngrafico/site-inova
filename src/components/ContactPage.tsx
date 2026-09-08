import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Briefcase,
  Calendar,
  AlertCircle,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface ContactPageProps {
  onBackToHome: () => void;
  onOpenAppointment?: () => void;
  onOpenEmergency?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBackToHome,
  onOpenAppointment,
  onOpenEmergency,
}) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petType: 'Cão',
    unit: 'Nogueira Padilha (Hospital 24h)',
    subject: 'Agendamento de Consulta',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Accordion state for FAQ (initially first 2 open)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const faqItems = [
    {
      question: 'Qual o horário de funcionamento?',
      answer: (
        <div className="space-y-2 text-sm text-slate-600">
          <p>
            <strong className="text-[#541E87]">Inova Hospital Veterinário:</strong> 24h (todos os dias da semana) – Atendimento por ordem de chegada para Pronto Atendimento e Emergência.
          </p>
          <p>
            <strong className="text-[#541E87]">Inova Clínica de Especialidades (consultas agendadas):</strong>
            <br />
            • Segunda a Sexta-feira: das 08h às 21h
            <br />
            • Sábados: das 08h às 18h
          </p>
        </div>
      ),
    },
    {
      question: 'Qual o valor da consulta para Pronto Atendimento e Emergência?',
      answer: (
        <p className="text-sm text-slate-600 leading-relaxed">
          O valor da consulta para Pronto Atendimento e Emergência é o mesmo das consultas agendadas. Os valores são alterados apenas durante os horários de plantão. Para consultar os valores das consultas, entre em contato pelo WhatsApp{' '}
          <a
            href="https://wa.me/5515997976055"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#541E87] font-bold underline"
          >
            (15) 99797-6055
          </a>.
        </p>
      ),
    },
    {
      question: 'Quais são os horários de plantão?',
      answer: (
        <div className="space-y-1.5 text-sm text-slate-600">
          <p>➖ <strong>Segunda a Sexta-feira:</strong> A partir das 20h</p>
          <p>➖ <strong>Sábados:</strong> A partir das 18h</p>
          <p>➖ <strong>Domingos e feriados:</strong> O dia todo</p>
        </div>
      ),
    },
    {
      question: 'Como funciona o Pronto Atendimento e Emergência?',
      answer: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Nosso hospital funciona 24h para Pronto Atendimento e Emergência, contando sempre com um médico veterinário Clínico Geral de plantão e apoio de enfermeiros veterinários para procedimentos. O atendimento é feito por ordem de chegada, mas em casos de extrema emergência o pet é levado imediatamente para os primeiros socorros na internação/UTI.
        </p>
      ),
    },
    {
      question: 'Eu preciso agendar uma consulta para ser atendido(a)?',
      answer: (
        <div className="space-y-2 text-sm text-slate-600">
          <p>
            <strong className="text-[#541E87]">Clínico Geral:</strong> Se o seu caso não for uma Urgência ou Emergência, sempre indicamos o agendamento da consulta para um melhor atendimento e avaliação do seu pet. Porém, caso não consiga agendar previamente o atendimento ocorre por ordem de chegada.
          </p>
          <p>
            <strong className="text-[#541E87]">Especialista:</strong> As consultas com especialistas sempre acontecem mediante agendamento prévio.
          </p>
        </div>
      ),
    },
    {
      question: 'Quais vacinas são utilizadas na Inova?',
      answer: (
        <div className="space-y-2 text-sm text-slate-600">
          <p>
            <strong>Cães:</strong> VANGARD PLUS E DURAMUNE (V10), Pneumodog (Gripe canina), Nobivac (antirrábica), Giardiavax (giárdia) e Leishtec (leishmaniose).
          </p>
          <p>
            <strong>Gatos:</strong> NOBIVAC FELINE (V5), FELINE-4 (V4) e Nobivac (antirrábica).
          </p>
        </div>
      ),
    },
    {
      question: 'É necessário agendamento para aplicação de vacina?',
      answer: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Sempre indicamos o agendamento das aplicações de vacina para promover um melhor atendimento e conforto para você e seu pet. Porém, caso não consiga agendar previamente o atendimento ocorre por ordem de chegada.
        </p>
      ),
    },
    {
      question: 'A Inova realiza Cirurgia de Castração?',
      answer: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Sim, realizamos cirurgias de castração em cães, gatos e em animais silvestres em nosso hospital! O valor da cirurgia de castração é informado após a avaliação clínica com o Médico Veterinário. É de extrema importância a consulta clínica antes de qualquer procedimento cirúrgico para verificação pré-anestésica e de segurança do paciente.
        </p>
      ),
    },
    {
      question: 'Quais exames realizamos?',
      answer: (
        <div className="space-y-1.5 text-sm text-slate-600">
          <p>• <strong>Exames de Imagem:</strong> Raio-X digital e Ultrassom.</p>
          <p>• <strong>Exames Cardiovasculares:</strong> Ecodopplercardiograma, Eletrocardiograma, Holter e Pressão arterial sistólica.</p>
          <p>• <strong>Exames Oftalmológicos:</strong> Ultrassom ocular e eletrorretinografia.</p>
          <p>• <strong>Exames Laboratoriais:</strong> Hemograma, perfil renal, perfil hepático, triglicérides, colesterol, exame de urina, coproparasitológico de fezes, entre outros.</p>
        </div>
      ),
    },
    {
      question: 'Quanto tempo leva para o resultado dos exames estarem disponíveis?',
      answer: (
        <div className="space-y-1 text-sm text-slate-600">
          <p>• <strong>Exames de Imagem:</strong> 48h a partir da realização.</p>
          <p>• <strong>Exames Cardiovasculares:</strong> 48h a partir da realização.</p>
          <p>• <strong>Exames Oftalmológicos:</strong> Até 10 dias úteis.</p>
          <p>• <strong>Exames Laboratoriais:</strong> Varia de acordo com o tipo de exame, se é processado em nosso laboratório próprio interno ou encaminhado a centro de referência parceiro.</p>
        </div>
      ),
    },
    {
      question: 'Quais exames estão disponíveis para serem realizados durante os horários de plantão?',
      answer: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Durante os horários de plantão emergencial, realizamos: <strong>Ultrassom FAST</strong> (focado em trauma e abdômen agudo), <strong>Raio-X de emergência</strong> e <strong>exames laboratoriais de triagem crítica</strong>.
        </p>
      ),
    },
    {
      question: 'A Inova Hospital Veterinário realiza implantação de Microchip em pets?',
      answer: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Sim, realizamos a implantação em cães, gatos e silvestres! O microchip é um identificador vitalício que garante a correta identificação do pet e do seu tutor responsável.
        </p>
      ),
    },
    {
      question: 'Vou viajar e levarei o meu pet, devo fazer a implantação do Microchip?',
      answer: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Para viagens internacionais a implantação do microchip padrão ISO 11784/11785 é obrigatória. Também recomendamos fortemente para viagens nacionais, prevenindo qualquer risco de perda ou desencontro.
        </p>
      ),
    },
    {
      question: 'Quais os pré-requisitos para a implantação do Microchip?',
      answer: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Não existe pré-requisito ou idade mínima rígida. O microchip é inserido sob a pele de maneira rápida, indolor e segura durante uma simples consulta ambulatorial.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#282828] pb-16">
      {/* Top Breadcrumb Bar */}
      <div className="bg-[#EDEBE6] border-b border-slate-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center space-x-2 text-slate-600">
            <button
              type="button"
              onClick={onBackToHome}
              className="hover:text-[#541E87] hover:underline font-medium transition-colors cursor-pointer"
            >
              Início
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#541E87] font-semibold">Contato</span>
          </div>

          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-[#541E87] hover:text-[#3B1260] font-semibold text-xs sm:text-sm hover:underline transition-colors cursor-pointer"
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
            {/* Traço fino na cor #A7CD4E */}
            <div className="w-16 sm:w-20 h-[2px] bg-[#A7CD4E] mb-3 rounded-full" />

            <h1 className="font-['Dosis',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide mb-3">
              Contato
            </h1>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed font-normal">
              Preencha os seus dados e entramos em contato, ou fale diretamente com a equipe do Inova Hospital Veterinário 24h pelos canais de pronto atendimento.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Central Telefônica */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200/80 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#541E87]/10 flex items-center justify-center shrink-0 text-[#541E87]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">Central 24 Horas</span>
              <a
                href="tel:1533332300"
                className="font-['Dosis',sans-serif] font-bold text-lg text-[#282828] hover:text-[#541E87] transition-colors"
              >
                (15) 3333-2300
              </a>
              <p className="text-xs text-slate-500 mt-0.5">Atendimento imediato</p>
            </div>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200/80 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">WhatsApp Oficial</span>
              <a
                href="https://wa.me/5515997976055"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Dosis',sans-serif] font-bold text-lg text-[#282828] hover:text-emerald-700 transition-colors"
              >
                (15) 99797-6055
              </a>
              <p className="text-xs text-slate-500 mt-0.5">Dúvidas e agendamentos</p>
            </div>
          </div>

          {/* Card 3: Pronto Atendimento */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200/80 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FAAE00]/15 flex items-center justify-center shrink-0 text-[#B78103]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">Emergências</span>
              <span className="font-['Dosis',sans-serif] font-bold text-lg text-[#282828]">
                24h Todos os Dias
              </span>
              <p className="text-xs text-slate-500 mt-0.5">Ordem de chegada na Nogueira Padilha</p>
            </div>
          </div>

          {/* Card 4: Trabalhe Conosco */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200/80 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center shrink-0 text-purple-700">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">Trabalhe Conosco</span>
              <a
                href="mailto:hospitalinova@graphorh.com.br"
                className="font-semibold text-xs sm:text-sm text-[#541E87] hover:underline break-all block"
              >
                hospitalinova@graphorh.com.br
              </a>
              <p className="text-[11px] text-slate-400 mt-0.5">Envie seu currículo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Section: Form & Locations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-[#541E87]">
              <Calendar className="w-5 h-5 text-[#FAAE00]" />
              <h2 className="font-['Dosis',sans-serif] font-bold text-2xl uppercase tracking-wide text-[#282828]">
                Preencha os seus dados
              </h2>
            </div>
            <p className="text-sm text-slate-600 mb-6">
              Nossa equipe entrará em contato com você o mais breve possível para confirmar o agendamento ou esclarecer suas dúvidas.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-['Dosis',sans-serif] font-bold text-xl text-emerald-900 uppercase mb-1">
                  Mensagem Enviada com Sucesso!
                </h3>
                <p className="text-sm text-emerald-700 mb-5">
                  Agradecemos seu contato. Nossa equipe retornará em breve pelo telefone ou e-mail informado.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      petType: 'Cão',
                      unit: 'Nogueira Padilha (Hospital 24h)',
                      subject: 'Agendamento de Consulta',
                      message: '',
                    });
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nome */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-[#541E87] focus:border-[#541E87] outline-hidden transition-all"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      E-mail *
                    </label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-[#541E87] focus:border-[#541E87] outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      id="contact-phone"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(15) 99999-9999"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-[#541E87] focus:border-[#541E87] outline-hidden transition-all"
                    />
                  </div>
                </div>

                {/* Unidade & Assunto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-unit" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Unidade de Preferência
                    </label>
                    <select
                      id="contact-unit"
                      value={formData.unit}
                      onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#541E87] focus:border-[#541E87] outline-hidden transition-all"
                    >
                      <option value="Nogueira Padilha (Hospital 24h)">Hospital 24h – Nogueira Padilha</option>
                      <option value="Unidade Campolim">Clínica – Unidade Campolim</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Assunto
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#541E87] focus:border-[#541E87] outline-hidden transition-all"
                    >
                      <option value="Agendamento de Consulta">Agendar Consulta Preventiva / Especialista</option>
                      <option value="Vacinação">Vacinas para Cães ou Gatos</option>
                      <option value="Exames">Informações sobre Exames</option>
                      <option value="Cirurgia / Castração">Cirurgia de Castração ou Outros</option>
                      <option value="Banco de Sangue">Banco de Sangue / Doação</option>
                      <option value="Outros">Outras Dúvidas</option>
                    </select>
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mensagem / Detalhes sobre o Pet
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte-nos um pouco sobre a necessidade do seu pet..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-[#541E87] focus:border-[#541E87] outline-hidden transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-[#FAAE00] hover:bg-[#e69f00] active:scale-98 text-[#282828] font-bold text-sm px-8 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Enviando...' : 'Enviar Dados'}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Endereços e Horários detalhados (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Unidade Nogueira Padilha */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#541E87] text-white text-[11px] font-black uppercase px-2 py-0.5 rounded">
                  Hospital 24h
                </span>
                <span className="text-xs font-bold text-[#541E87]">Unidade Nogueira Padilha</span>
              </div>

              <h3 className="font-['Dosis',sans-serif] font-bold text-xl uppercase text-[#282828] mb-2">
                Hospital 24h e Especialidades
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#541E87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#282828]">Avenida Coronel Nogueira Padilha, 1770</p>
                    <p>Vila Hortência – Sorocaba/SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#541E87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#541E87]">(15) 3333-2300</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100">
                  <Clock className="w-4 h-4 text-[#FAAE00] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#282828]">Consultas Agendadas:</p>
                    <p>Segunda a Sexta-feira: 08h às 21h</p>
                    <p>Sábados: 08h às 18h</p>
                    <p className="mt-1 font-bold text-emerald-700">Pronto Atendimento & Emergência: 24h (todos os dias)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Unidade Campolim */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#FAAE00] text-[#282828] text-[11px] font-black uppercase px-2 py-0.5 rounded">
                  Clínica
                </span>
                <span className="text-xs font-bold text-slate-700">Unidade Campolim</span>
              </div>

              <h3 className="font-['Dosis',sans-serif] font-bold text-xl uppercase text-[#282828] mb-2">
                Clínica de Vacinas & Especialidades
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#541E87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#282828]">Avenida Professora Gisele Constantino, 1495</p>
                    <p>Parque Campolim – Sorocaba/SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#541E87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#541E87]">(15) 3333-2300</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100">
                  <Clock className="w-4 h-4 text-[#FAAE00] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#282828]">Atendimento:</p>
                    <p>Segunda a Sexta-feira: 09h às 20h</p>
                    <p>Sábados: 09h às 13h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section matching oficial inovaveterinaria.com.br/contato/ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block bg-[#FAAE00]/15 text-[#B78103] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              Dúvidas Frequentes
            </span>
            <h2 className="font-['Dosis',sans-serif] font-bold text-3xl sm:text-4xl uppercase tracking-wide text-[#282828]">
              FAQ & Orientações ao Tutor
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Confira as respostas para as principais dúvidas sobre atendimento, horários de plantão, exames, vacinas e procedimentos.
            </p>
          </div>

          <div className="max-w-4xl mx-auto divide-y divide-slate-200/80">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-4 sm:py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                  >
                    <span className="font-['Dosis',sans-serif] font-bold text-base sm:text-lg text-[#282828] group-hover:text-[#541E87] transition-colors">
                      {item.question}
                    </span>
                    <span className="p-1 rounded-full bg-slate-100 group-hover:bg-[#541E87]/10 text-slate-500 group-hover:text-[#541E87] transition-colors shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pl-1 pr-4 animate-in fade-in duration-150">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
          <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h3 className="font-['Dosis',sans-serif] font-bold text-lg text-[#282828] uppercase">
                Localização Hospital Inova Veterinária 24h
              </h3>
              <p className="text-xs text-slate-500">
                Av. Coronel Nogueira Padilha, 1770 - Vila Hortência, Sorocaba/SP
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Inova+Hospital+Veterinario+Sorocaba"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#541E87] hover:bg-[#3B1260] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              Abrir no Google Maps
            </a>
          </div>
          <div className="h-80 sm:h-96 w-full">
            <iframe
              title="Mapa Hospital Veterinário Inova"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0772745330364!2d-47.439775!3d-23.518933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a5e0193bb9f%3A0x86134ae424076722!2sInova%20Hospital%20Veterin%C3%A1rio!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

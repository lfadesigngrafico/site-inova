import React from 'react';
import { ArrowLeft, FileText, Download } from 'lucide-react';

interface BloodBankPageProps {
  onBackToHome?: () => void;
  onOpenAppointment?: () => void;
  onOpenEmergency?: () => void;
}

export const BloodBankPage: React.FC<BloodBankPageProps> = ({ onBackToHome }) => {
  return (
    <article className="bg-white min-h-screen text-[#54595F] font-['Raleway',sans-serif]">
      {/* Top Breadcrumb Header Bar padronizado com o estilo do Blog */}
      {onBackToHome && (
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
              <span className="text-[#541E87] font-bold">Banco de Sangue</span>
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

      {/* Hero Header Section padronizado: fundo roxo, traço verde em cima, fonte branca */}
      <section className="bg-gradient-to-r from-[#541E87] via-[#63249E] to-[#3B1260] text-white py-12 md:py-16 relative overflow-hidden shadow-inner">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#FAAE00]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-['Dosis',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide mb-4 [text-wrap:balance]">
              Hemocentro Inova
            </h1>

            {/* Breve descrição sobre o banco de sangue da Inova no primeiro parágrafo do hero */}
            <p className="text-white/95 text-base sm:text-lg leading-relaxed font-normal text-justify text-left [text-wrap:balance]">
              O Banco de Sangue Inova conta com infraestrutura de ponta, triagem rigorosa de doadores, processos especializados de coleta humanizada e armazenamento controlado de hemocomponentes, garantindo transfusões sanguíneas com velocidade, qualidade e total segurança para cães e gatos em situações de rotina e emergência.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="py-10 md:py-14">
        {/* Banner Image 1 */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <img
            src="https://inovaveterinaria.com.br/wp-content/uploads/2024/07/BANCO-DE-SANGUE-INOVA-PET.png"
            alt="Banco de Sangue Inova Pet"
            loading="lazy"
            className="w-full h-auto rounded-xl shadow-xs mx-auto"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* Seção: Você sabia que seu pet pode precisar de doação de sangue? */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 text-left">
          <h2 className="font-['Dosis',sans-serif] text-2xl sm:text-3xl font-bold text-[#541E87] mb-4 text-left uppercase">
            VOCÊ SABIA QUE SEU PET PODE PRECISAR DE DOAÇÃO DE SANGUE?
          </h2>
          <p className="text-[#54595F] leading-relaxed text-base font-normal text-justify text-left">
            Com a missão de proporcionar velocidade, agilidade, qualidade, segurança e oferecer o melhor atendimento e suporte aos pets que necessitam da transfusão sanguínea, nós inauguramos o <strong>Banco de Sangue INOVA</strong>.
          </p>
        </section>

        {/* Faixa / Título: COMO FUNCIONA O BANCO DE SANGUE INOVA? */}
        <section className="bg-[#541E87] py-8 my-10 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
              COMO FUNCIONA O BANCO DE SANGUE INOVA?
            </h2>
          </div>
        </section>

        {/* Introdução do Funcionamento */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-6 text-left">
          <p className="text-[#54595F] leading-relaxed text-base font-normal text-justify text-left">
            Entenda como funciona os processos de seleção dos doadores, coleta e armazenamento do hemocentro para pets:
          </p>
        </section>

        {/* 1. Seleção de doadores saudáveis */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 text-left">
          <h2 className="font-['Dosis',sans-serif] text-2xl sm:text-3xl font-bold text-[#541E87] mb-4 text-left">
            #Meupetherói | Seleção de doadores saudáveis:
          </h2>
          <p className="text-[#7A7A7A] leading-relaxed text-base font-normal text-justify text-left">
            Para garantir a segurança dos doadores e receptores, realizamos exames de sangue de check-up e avaliação clínica nos pets participantes, além do controle de vacinação e vermifugação de cada um dos nossos #PetHeróis (doadores).
          </p>
        </section>

        {/* 2. Cuidados na coleta de sangue */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 text-left">
          <h2 className="font-['Dosis',sans-serif] text-2xl sm:text-3xl font-bold text-[#541E87] mb-4 text-left">
            Cuidados na coleta de sangue:
          </h2>
          <p className="text-[#7A7A7A] leading-relaxed text-base font-normal text-justify text-left">
            Preparamos o ambiente para evitar o estresse e desconforto do #PetHerói (doador) durante a coleta e, se necessário, temos uma equipe qualificada e preparada para dar todo o suporte para que seja feita a sedação para segurança do #PetHerói (doador).
          </p>
        </section>

        {/* 3. Processamento */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 text-left">
          <h2 className="font-['Dosis',sans-serif] text-2xl sm:text-3xl font-bold text-[#541E87] mb-4 text-left">
            Processamento:
          </h2>
          <p className="text-[#7A7A7A] leading-relaxed text-base font-normal text-justify text-left">
            Em nosso Banco de Sangue, uma bolsa de sangue coletada pode ser separada em 3 tipos hemocomponentes: sangue total, concentrado de hemácias e plasma. Para isso, contamos com profissionais especializados e equipamentos de última geração garantindo a melhor qualidade dos hemocomponentes separados.
          </p>
        </section>

        {/* 4. O armazenamento */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 text-left">
          <h2 className="font-['Dosis',sans-serif] text-2xl sm:text-3xl font-bold text-[#541E87] mb-4 text-left">
            O armazenamento:
          </h2>
          <p className="text-[#7A7A7A] leading-relaxed text-base font-normal text-justify text-left">
            O Banco de Sangue INOVA conta com uma geladeira Hematoimuno individual e um freezer específico para armazenamento dos hemocomponentes, garantindo a melhor conservação e controle da temperatura das bolsas de sangue.
          </p>
        </section>

        {/* 5. Controle de Qualidade */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 text-left">
          <h2 className="font-['Dosis',sans-serif] text-2xl sm:text-3xl font-bold text-[#541E87] mb-4 text-left">
            Controle de Qualidade
          </h2>
          <p className="text-[#7A7A7A] leading-relaxed text-base font-normal text-justify text-left mb-6">
            A segurança dos componentes sanguíneos fornecidos pelo Banco de Sangue INOVA constitui a nossa principal preocupação a par do bem-estar dos #PetHeróis (doadores) e receptores. Conheça nossa cartilha de Controle de Qualidade.
          </p>

          <div className="pt-2">
            <a
              href="https://inovaveterinaria.com.br/wp-content/uploads/2020/09/Cartilha-Hemocentro-Inova.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#541E87] hover:bg-[#3B1260] text-white px-6 py-3 rounded-lg font-['Dosis',sans-serif] font-bold text-base uppercase tracking-wider transition-colors shadow-sm"
            >
              <FileText className="w-5 h-5 text-[#A7CD4E]" />
              <span>Baixe nossa Cartilha de Controle de Qualidade</span>
              <Download className="w-4 h-4 text-white/80" />
            </a>
          </div>
        </section>

        {/* Tirinha Informativa */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-12 text-center">
          <img
            src="https://inovaveterinaria.com.br/wp-content/uploads/2024/07/Banco-de-Sangue-Tirinha-para-site-768x225.png"
            alt="Banco de Sangue Tirinha para site"
            loading="lazy"
            className="w-full max-w-2xl mx-auto h-auto rounded-lg shadow-xs"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* Pré Requisitos para ser doador */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 text-left">
          <h2 className="font-['Dosis',sans-serif] text-2xl sm:text-3xl font-bold text-[#541E87] mb-8 text-left uppercase">
            Pré Requisitos para ser doador
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Bloco CÃES */}
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-6 shadow-xs">
              <h3 className="font-['Dosis',sans-serif] text-xl font-bold text-[#541E87] mb-4 uppercase">
                CÃES:
              </h3>
              <ul className="space-y-2.5 text-[#54595F] text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#A7CD4E] font-bold">•</span>
                  <span>Cães saudáveis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A7CD4E] font-bold">•</span>
                  <span>Machos e fêmeas*</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A7CD4E] font-bold">•</span>
                  <span>Entre 1 e 7 anos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A7CD4E] font-bold">•</span>
                  <span>A partir dos 25kg</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A7CD4E] font-bold">•</span>
                  <span>Vacinação e vermifugação em dia</span>
                </li>
              </ul>
            </div>

            {/* Bloco GATOS */}
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-6 shadow-xs">
              <h3 className="font-['Dosis',sans-serif] text-xl font-bold text-[#541E87] mb-4 uppercase">
                Gatos:
              </h3>
              <ul className="space-y-2.5 text-[#54595F] text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#A7CD4E] font-bold">•</span>
                  <span>Gatos saudáveis (FIV/FELV negativos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A7CD4E] font-bold">•</span>
                  <span>Machos e fêmeas*</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A7CD4E] font-bold">•</span>
                  <span>Entre 1 e 6 anos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A7CD4E] font-bold">•</span>
                  <span>Peso mínimo 4kg</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A7CD4E] font-bold">•</span>
                  <span>Vacinação e vermifugação atualizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A7CD4E] font-bold">•</span>
                  <span>Domiciliados (sem acesso à rua)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Notas de fêmeas */}
          <div className="space-y-1.5 text-sm text-[#7A7A7A] italic text-justify text-left pt-2">
            <p>* Fêmeas gestantes e lactantes: aguardar 30 dias após o término da amamentação</p>
            <p>* Fêmeas no cio: aguardar 30 dias após o término do período fértil</p>
          </div>
        </section>

        {/* Faixa e Seção: #MEUPETHERÓI | CADASTRE SEU PET PARA SALVAR VIDAS */}
        <section className="bg-[#541E87] py-8 my-10 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
              #MEUPETHERÓI | CADASTRE SEU PET PARA SALVAR VIDAS
            </h2>
          </div>
        </section>

        {/* Formulário Google Forms */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 my-8 text-center">
          <div className="w-full rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-white">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScKnEzu4O6k5qSmvIEs7wkCtBP7jHR9PIdzSxls507wcrkfJA/viewform?embedded=true"
              title="Cadastro de Doador - Banco de Sangue Inova"
              width="100%"
              height="1000"
              className="w-full min-h-[960px] border-0"
            >
              Carregando…
            </iframe>
          </div>
        </section>
      </div>
    </article>
  );
};

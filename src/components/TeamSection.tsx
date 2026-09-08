import React, { useState } from 'react';
import { X, Calendar, Award } from 'lucide-react';

interface TeamSectionProps {
  onOpenAppointment: () => void;
}

interface TeamMember {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  crmv?: string;
  bio?: string;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenAppointment }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [allTeamModalOpen, setAllTeamModalOpen] = useState(false);

  const TEAM_MEMBERS: TeamMember[] = [
    {
      id: 'caroline-estanislau',
      name: 'Dra. Caroline Estanislau',
      specialty: 'Clínica Geral',
      experience: '8 anos de experiência',
      image: 'https://d335luupugsy2.cloudfront.net/cms/files/147009/1788886402/$nrhxhbhg8zp',
      crmv: 'CRMV-SP 34.892',
      bio: 'Especialista em clínica médica de pequenos animais, com foco em medicina preventiva, check-ups completos e bem-estar canino e felino.',
    },
    {
      id: 'cristiane-estanislau',
      name: 'Dra. Cristiane Estanislau',
      specialty: 'Oftalmologia, Clínica e Cirurgia',
      experience: '8 anos de experiência',
      image: 'https://d335luupugsy2.cloudfront.net/cms/files/147009/1788886402/$hyrqf87op1',
      crmv: 'CRMV-SP 34.891',
      bio: 'Cirurgiã e oftalmologista veterinária, especializada em microcirurgias oculares, tratamento de catarata e preservação da visão de cães e gatos.',
    },
    {
      id: 'felipe-zanuzzo',
      name: 'Dr. Felipe Zanuzzo',
      specialty: 'Anestesiologia e Intensivismo',
      experience: '8 anos de experiência',
      image: 'https://d335luupugsy2.cloudfront.net/cms/files/147009/1788886402/$sigbh0f07z',
      crmv: 'CRMV-SP 31.420',
      bio: 'Responsável pelos protocolos anestésicos avançados e UTI veterinária, garantindo segurança cirúrgica e monitorização hemodinâmica contínua.',
    },
    {
      id: 'marina-char',
      name: 'Dra. Marina Char',
      specialty: 'Endoscopia',
      experience: '8 anos de experiência',
      image: 'https://d335luupugsy2.cloudfront.net/cms/files/147009/1788886402/$x1g104i7kp',
      crmv: 'CRMV-SP 36.115',
      bio: 'Especialista em exames endoscópicos diagnósticos e terapêuticos, remoção minimamente invasiva de corpos estranhos e biópsias gastrointestinais.',
    },
  ];

  const ADDITIONAL_TEAM: TeamMember[] = [
    {
      id: 'dr-lucas',
      name: 'Dr. Lucas Mendes',
      specialty: 'Ortopedia e Traumatologia',
      experience: '10 anos de experiência',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
      crmv: 'CRMV-SP 29.840',
      bio: 'Tratamento de fraturas complexas, cirurgias ortopédicas e alívio de lesões articulares.',
    },
    {
      id: 'dra-beatriz',
      name: 'Dra. Beatriz Santos',
      specialty: 'Cardiologia Veterinária',
      experience: '7 anos de experiência',
      image: 'https://images.unsplash.com/photo-1594824813515-d41a7516d246?auto=format&fit=crop&q=80&w=400',
      crmv: 'CRMV-SP 38.220',
      bio: 'Ecocardiografia com doppler, eletrocardiograma e acompanhamento de cardiopatas.',
    },
    {
      id: 'dr-marcelo',
      name: 'Dr. Marcelo Ribeiro',
      specialty: 'Dermatologia Veterinária',
      experience: '9 anos de experiência',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
      crmv: 'CRMV-SP 32.190',
      bio: 'Diagnóstico e controle de alergias, dermatites atópicas e infecções dermatológicas.',
    },
    {
      id: 'dra-juliana',
      name: 'Dra. Juliana Prado',
      specialty: 'Medicina Felina e Ultrassonografia',
      experience: '6 anos de experiência',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
      crmv: 'CRMV-SP 41.512',
      bio: 'Atendimento Cat Friendly especializado e diagnóstico por imagem abdominal de alta resolução.',
    },
  ];

  return (
    <section id="equipe" className="relative bg-white pt-14 sm:pt-16 pb-16 sm:pb-20">
      {/* Top Half Gradient Background matching Hero colors */}
      <div
        className="absolute top-0 inset-x-0 h-[48%] sm:h-[50%] lg:h-[52%] z-0"
        style={{
          background: 'linear-gradient(110deg, #541E87 0%, #7B10B8 45%, #A400EB 100%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Subtitle inside the purple gradient top area */}
        <div className="text-center text-white mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight mb-3">
            Nossa equipe especializada
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-normal">
            Veterinários experientes prontos para cuidar do seu pet com excelência técnica.
          </p>
        </div>

        {/* 4 Cards Grid - Straddling the purple and white backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              id={`vet-card-${member.id}`}
              onClick={() => setSelectedMember(member)}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.16)] hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Photo */}
              <div className="w-full aspect-[1/1] overflow-hidden bg-slate-50 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col items-center text-center flex-1 justify-between">
                <div className="flex flex-col items-center w-full">
                  <h3 className="font-bold text-[15px] sm:text-[16px] text-[#282828] mb-2 leading-snug">
                    {member.name}
                  </h3>

                  {/* Specialty Tag (Light Yellow Pill) */}
                  <div className="bg-[#FDF3D6] text-[#B78103] font-semibold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-sm mb-2 text-center">
                    {member.specialty}
                  </div>
                </div>

                {/* Experience */}
                <p className="text-xs sm:text-[13px] text-[#282828] font-normal mt-1">
                  {member.experience}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button: Ver toda a equipe */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            id="btn-ver-toda-equipe"
            type="button"
            onClick={() => setAllTeamModalOpen(true)}
            className="bg-[#E5A823] hover:bg-[#d49918] active:scale-95 text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            Ver toda a equipe
          </button>
        </div>
      </div>

      {/* Member Details Modal */}
      {selectedMember && (
        <div
          id="vet-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center mb-5">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-[#E5A823] shadow-md">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="text-xl font-bold text-[#282828] mb-1">
                {selectedMember.name}
              </h3>

              <div className="bg-[#FDF3D6] text-[#B78103] font-semibold text-xs px-3 py-1 rounded-sm mb-1.5">
                {selectedMember.specialty}
              </div>

              {selectedMember.crmv && (
                <span className="text-xs text-slate-500 font-medium">
                  {selectedMember.crmv}
                </span>
              )}
            </div>

            {selectedMember.bio && (
              <p className="text-sm text-slate-600 leading-relaxed text-center mb-6">
                {selectedMember.bio}
              </p>
            )}

            <div className="bg-slate-50 rounded-xl p-3.5 mb-6 flex items-center justify-center gap-2 text-xs font-semibold text-[#282828]">
              <Award className="w-4 h-4 text-[#E5A823]" />
              <span>{selectedMember.experience} em medicina veterinária</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setSelectedMember(null);
                  onOpenAppointment();
                }}
                className="flex-1 bg-[#FAAE00] hover:bg-[#e09d00] text-[#282828] font-bold text-center py-3 rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar com {selectedMember.name.split(' ')[0]}</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Team Modal */}
      {allTeamModalOpen && (
        <div
          id="all-team-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setAllTeamModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setAllTeamModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#282828] mb-2">
              Corpo Clínico Veterinário Inova
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Mais de 40 médicos veterinários especialistas de prontidão para o cuidado do seu pet em Sorocaba.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[...TEAM_MEMBERS, ...ADDITIONAL_TEAM].map((vet) => (
                <div
                  key={vet.id}
                  className="flex items-center gap-3.5 p-3 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <img
                    src={vet.image}
                    alt={vet.name}
                    className="w-14 h-14 rounded-full object-cover object-top border border-slate-200 flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#282828]">{vet.name}</h4>
                    <p className="text-xs text-[#B78103] font-semibold">{vet.specialty}</p>
                    <p className="text-[11px] text-slate-500">{vet.experience}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  setAllTeamModalOpen(false);
                  onOpenAppointment();
                }}
                className="flex-1 bg-[#FAAE00] hover:bg-[#e09d00] text-[#282828] font-bold text-center py-3 rounded-xl text-sm transition-colors cursor-pointer"
              >
                Agendar Consulta com a Equipe
              </button>
              <button
                type="button"
                onClick={() => setAllTeamModalOpen(false)}
                className="px-6 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
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

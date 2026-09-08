import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState('campolim');
  const [petType, setPetType] = useState('canino');
  const [specialty, setSpecialty] = useState('clinica-geral');
  const [tutorName, setTutorName] = useState('');
  const [petName, setPetName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [period, setPeriod] = useState('manha');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsapp = () => {
    const unitName = unit === 'campolim' ? 'Unidade Campolim' : 'Unidade Nogueira Padilha';
    const message = `Olá Inova! Gostaria de agendar uma consulta para meu pet:\n- Tutor: ${tutorName || 'Não informado'}\n- Pet: ${petName || 'Não informado'} (${petType})\n- Unidade: ${unitName}\n- Especialidade: ${specialty}\n- Data sugerida: ${preferredDate || 'A combinar'} (${period})`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/551533332300?text=${encoded}`, '_blank');
  };

  return (
    <div
      id="appointment-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#541E87] to-[#7B10B8] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-[#FAAE00]" />
            <h3 className="font-bold text-lg">Agendar Consulta Veterinária</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Unit selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#541E87]" />
                  Selecione a Unidade
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setUnit('campolim')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                      unit === 'campolim'
                        ? 'border-[#541E87] bg-purple-50 text-[#541E87]'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <p className="font-bold">Unidade Campolim</p>
                    <p className="text-[11px] opacity-80">24h / Especialidades</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setUnit('nogueira')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                      unit === 'nogueira'
                        ? 'border-[#541E87] bg-purple-50 text-[#541E87]'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <p className="font-bold">Unidade Nogueira Padilha</p>
                    <p className="text-[11px] opacity-80">Clínica Geral</p>
                  </button>
                </div>
              </div>

              {/* Specialty & Pet Species */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Especialidade Desejada
                  </label>
                  <select
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#541E87] bg-white"
                  >
                    <option value="Clínica Geral">Clínica Geral / Rotina</option>
                    <option value="Vacinas">Vacinas e Imunização</option>
                    <option value="Dermatologia">Dermatologia Veterinária</option>
                    <option value="Ortopedia">Ortopedia e Cirurgia</option>
                    <option value="Cardiologia">Cardiologia</option>
                    <option value="Oftalmologia">Oftalmologia</option>
                    <option value="Medicina Felina">Medicina Felina Exclusiva</option>
                    <option value="Odontologia">Odontologia Veterinária</option>
                    <option value="Ultrassom / Diagnóstico">Ultrassom / Diagnóstico</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Espécie do Pet
                  </label>
                  <select
                    value={petType}
                    onChange={(e) => setPetType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#541E87] bg-white"
                  >
                    <option value="Canino (Cão)">Cão</option>
                    <option value="Felino (Gato)">Gato</option>
                    <option value="Silvestre / Exótico">Silvestre / Exótico</option>
                  </select>
                </div>
              </div>

              {/* Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Nome do Tutor
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={tutorName}
                    onChange={(e) => setTutorName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#541E87]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Nome do Pet
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Mel, Bob, Luke"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#541E87]"
                  />
                </div>
              </div>

              {/* Phone and date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(15) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#541E87]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Data Desejada
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#541E87]"
                  />
                </div>
              </div>

              {/* Period */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#541E87]" />
                  Período de Preferência
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {['Manhã (08h às 12h)', 'Tarde (12h às 18h)', 'Noite (18h às 21h)'].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPeriod(p)}
                      className={`p-2 rounded-lg border text-center font-medium transition-all cursor-pointer ${
                        period === p
                          ? 'border-[#FAAE00] bg-amber-50 text-slate-900 font-bold'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#FAAE00] hover:bg-[#e09d00] text-slate-950 font-extrabold py-3 rounded-xl text-sm transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Solicitar Agendamento</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Solicitação Enviada!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Nossa equipe entrará em contato para confirmar o melhor horário para a consulta do seu pet.
              </p>

              <div className="bg-slate-50 p-4 rounded-xl text-xs text-left space-y-1.5 border border-slate-200">
                <p><span className="font-bold">Tutor:</span> {tutorName}</p>
                <p><span className="font-bold">Pet:</span> {petName}</p>
                <p><span className="font-bold">Unidade:</span> {unit === 'campolim' ? 'Campolim (24h)' : 'Nogueira Padilha'}</p>
                <p><span className="font-bold">Especialidade:</span> {specialty}</p>
                <p><span className="font-bold">Horário sugerido:</span> {preferredDate || 'Hoje/Amanhã'} - {period}</p>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleSendWhatsapp}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirmar pelo WhatsApp Agora</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

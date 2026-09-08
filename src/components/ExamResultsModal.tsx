import React, { useState } from 'react';
import { X, FileText, Search, Download, CheckCircle2, AlertCircle } from 'lucide-react';

interface ExamResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExamResultsModal: React.FC<ExamResultsModalProps> = ({ isOpen, onClose }) => {
  const [protocol, setProtocol] = useState('');
  const [cpf, setCpf] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [resultFound, setResultFound] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (protocol || cpf) {
      setHasSearched(true);
      setResultFound(true);
    }
  };

  return (
    <div
      id="exam-results-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="bg-[#340b54] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#FAAE00]" />
            <h3 className="font-bold text-lg">Portal de Resultados de Exames</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <p className="text-sm text-slate-600 mb-5">
            Consulte os laudos laboratoriais, radiografias e ultrassonografias do seu pet emitidos pelo Hospital Veterinário Inova.
          </p>

          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Número do Protocolo / Exame
              </label>
              <input
                type="text"
                value={protocol}
                onChange={(e) => setProtocol(e.target.value)}
                placeholder="Ex: INV-2026-8941"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#541E87]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                CPF do Tutor ou Telefone
              </label>
              <input
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="000.000.000-00 ou (15) 99999-9999"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#541E87]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FAAE00] hover:bg-[#e09d00] text-slate-950 font-bold py-3 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
            >
              <Search className="w-4 h-4" />
              <span>Consultar Laudos</span>
            </button>
          </form>

          {hasSearched && resultFound && (
            <div className="mt-6 border-t border-slate-200 pt-5 animate-in fade-in duration-300">
              <div className="flex items-start gap-3 p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700">
                  <p className="font-bold text-slate-900">Exame Localizado com Sucesso</p>
                  <p>Paciente: <span className="font-semibold">Thor (Canino / Golden Retriever)</span></p>
                  <p>Solicitante: Dr. Plantonista Inova • Data: Hoje</p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-800">Hemograma Completo + Bioquímico</p>
                  <p className="text-[11px] text-slate-500">Status: Laudo liberado • PDF (284 KB)</p>
                </div>
                <button
                  type="button"
                  onClick={() => alert('Download do laudo simulado com sucesso.')}
                  className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#541E87]" />
                  Baixar PDF
                </button>
              </div>
            </div>
          )}

          <div className="mt-5 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>Dúvidas sobre o resultado? Ligue para (15) 3333-2300</span>
          </div>
        </div>
      </div>
    </div>
  );
};

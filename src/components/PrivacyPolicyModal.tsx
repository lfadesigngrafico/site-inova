import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="privacy-policy-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200 max-h-[85vh] flex flex-col">
        <div className="bg-[#340b54] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#FAAE00]" />
            <h3 className="font-bold text-base">Política de Privacidade</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-xs text-slate-600 space-y-3 leading-relaxed">
          <p className="font-semibold text-slate-800">
            A Inova Hospital Veterinário tem o compromisso com a transparência, a privacidade e a segurança dos dados de seus clientes e pacientes durante todo o processo de interação em nossas unidades e canais digitais.
          </p>
          <p>
            1. <strong>Coleta de Informações:</strong> Coletamos dados estritamente necessários para o atendimento médico-veterinário, emissão de laudos de exames laboratoriais, receitas e contato de emergência com os tutores.
          </p>
          <p>
            2. <strong>Segurança e Sigilo:</strong> Os prontuários médicos e laudos diagnósticos dos pacientes são tratados com rigoroso sigilo médico-veterinário e arquivados em conformidade com as normas do Conselho Federal de Medicina Veterinária (CFMV).
          </p>
          <p>
            3. <strong>Resultados Online:</strong> O acesso aos resultados de exames via portal é protegido por protocolo de autenticação e conferência de identidade.
          </p>
          <p>
            4. <strong>Contato:</strong> Para exercer seus direitos de privacidade ou solicitar atualização de dados cadastrais, entre em contato através do telefone (15) 3333-2300 ou pelo e-mail contato@inovavet.com.br.
          </p>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#541E87] hover:bg-[#43166d] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

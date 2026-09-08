import React from 'react';
import { X, Phone, AlertTriangle, Clock, MapPin, Navigation, MessageCircle } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="emergency-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-red-200">
        {/* Header */}
        <div className="bg-red-600 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-6 h-6 text-[#FAAE00]" />
            <div>
              <h3 className="font-black text-lg">Pronto Atendimento e Emergência 24h</h3>
              <p className="text-xs text-white/90">Hospital Veterinário Inova – Sorocaba/SP</p>
            </div>
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
        <div className="p-6 space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
            <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-slate-800">
              <p className="font-bold text-red-900 text-sm">Plantão Ativo 24 Horas</p>
              <p className="mt-0.5">
                Nossa equipe médica, UTI veterinária, centro cirúrgico e laboratório estão funcionando neste momento na <strong className="text-slate-900">Unidade Campolim</strong>.
              </p>
              <p className="mt-1 text-slate-600">
                Atendimento por ordem de chegada com prioridade para casos graves e de risco iminente.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="flex items-start gap-2 text-xs text-slate-700">
              <MapPin className="w-4 h-4 text-[#541E87] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900">Unidade Campolim (Emergência 24h)</p>
                <p>Avenida Gisele Constantino, 1495 – Parque Campolim, Sorocaba/SP</p>
              </div>
            </div>
          </div>

          {/* Quick Call Buttons */}
          <div className="flex flex-col gap-2.5 pt-2">
            <a
              id="emergency-call-btn"
              href="tel:1533332300"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 rounded-xl text-center text-sm flex items-center justify-center gap-2.5 shadow-md transition-transform hover:scale-[1.01]"
            >
              <Phone className="w-5 h-5" />
              <span>Ligar Agora: (15) 3333-2300</span>
            </a>

            <a
              id="emergency-whatsapp-btn"
              href="https://wa.me/551533332300?text=EMERG%C3%8ANCIA%20VETERIN%C3%81RIA%20-%20Preciso%20de%20socorro%20urgente%20para%20meu%20pet."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl text-center text-sm flex items-center justify-center gap-2.5 shadow-md transition-transform hover:scale-[1.01]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Avisar Emergência via WhatsApp</span>
            </a>

            <a
              id="emergency-directions-btn"
              href="https://www.google.com/maps/search/?api=1&query=Avenida+Gisele+Constantino+1495+Sorocaba+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 rounded-xl text-center text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Navigation className="w-4 h-4 text-[#541E87]" />
              <span>Abrir Rota no Google Maps / Waze</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

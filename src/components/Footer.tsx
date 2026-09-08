import React from 'react';
import { Mail, Youtube, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyPolicy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyPolicy }) => {
  return (
    <footer id="main-footer" className="bg-[#FAAE00] text-[#282828] pt-0 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Column 1: White shape flush with top, rounded at bottom, matching image 2 */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div
              id="footer-logo-card"
              className="bg-white rounded-b-[2.5rem] p-6 sm:p-8 shadow-sm flex flex-col items-center justify-center w-full max-w-[280px]"
            >
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/147009/1788886402/$gldhisbuhkr"
                alt="Inova Hospital Veterinário 24H"
                className="h-28 sm:h-32 w-auto object-contain mb-5"
                referrerPolicy="no-referrer"
              />

              {/* Social Media Icons */}
              <div id="footer-social-icons" className="flex items-center justify-center gap-5 text-slate-600">
                <a
                  id="footer-email-link"
                  href="mailto:contato@inovavet.com.br"
                  className="text-slate-600 hover:text-[#541E87] transition-colors"
                  title="Enviar e-mail para Inova"
                  aria-label="Enviar e-mail"
                >
                  <Mail className="w-5 h-5" />
                </a>

                <a
                  id="footer-youtube-link"
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-red-600 transition-colors"
                  title="YouTube Inova Hospital Veterinário"
                  aria-label="Canal no YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>

                <a
                  id="footer-instagram-link"
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-pink-600 transition-colors"
                  title="Instagram Inova Hospital Veterinário"
                  aria-label="Perfil no Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  id="footer-facebook-link"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-700 transition-colors"
                  title="Facebook Inova Hospital Veterinário"
                  aria-label="Página no Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Endereços */}
          <div id="footer-enderecos-col" className="md:col-span-4 text-left pt-8 md:pt-10">
            <h2 className="font-bold text-[#282828] text-lg sm:text-xl mb-4 tracking-tight">
              Endereços
            </h2>

            <div className="space-y-5 text-[13px] sm:text-[14px] leading-relaxed text-[#282828]">
              {/* Unidade Campolim */}
              <div>
                <p className="font-extrabold text-[#282828] uppercase">
                  INOVA UNIDADE CAMPOLIM
                </p>
                <p>Avenida Gisele Constantino, 1495</p>
                <p>Parque Campolim – Sorocaba/SP</p>
                <p>
                  Contato:{' '}
                  <a
                    href="tel:1533332300"
                    className="hover:underline font-semibold"
                  >
                    (15) 3333-2300
                  </a>
                </p>
              </div>

              {/* Unidade Nogueira Padilha */}
              <div>
                <p className="font-extrabold text-[#282828] uppercase">
                  INOVA UNIDADE NOGUEIRA PADILHA
                </p>
                <p>Avenida Nogueira Padilha,</p>
                <p>1770 Vila Hortência – Sorocaba/SP</p>
                <p>
                  Contato:{' '}
                  <a
                    href="tel:1533332300"
                    className="hover:underline font-semibold"
                  >
                    (15) 3333-2300
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Horários de atendimento */}
          <div id="footer-horarios-col" className="md:col-span-4 text-left pt-8 md:pt-10">
            <h2 className="font-bold text-[#282828] text-lg sm:text-xl mb-4 tracking-tight">
              Horários de atendimento
            </h2>

            <div className="space-y-4 text-[13px] sm:text-[14px] leading-relaxed text-[#282828]">
              {/* Hospital Pronto Atendimento */}
              <div>
                <p className="font-extrabold text-[#282828]">
                  Hospital para Pronto Atendimento e Emergências:
                </p>
                <p>Todos os dias – 24h</p>
                <p className="text-[#282828]/90">Atendimento por ordem de chegada</p>
              </div>

              {/* Unidade Nogueira Padilha Clínica */}
              <div>
                <p className="font-extrabold text-[#282828] uppercase">
                  INOVA UNIDADE NOGUEIRA PADILHA (CLÍNICA)
                </p>
                <p>Segunda a Sexta-feira: das 08 às 21h</p>
                <p>Sábados das 08h às 18h</p>
              </div>

              {/* Unidade Campolim Especialidades e Vacinas */}
              <div>
                <p className="font-extrabold text-[#282828] uppercase">
                  INOVA UNIDADE CAMPOLIM (ESPECIALIDADES E VACINAS)
                </p>
                <p>Segunda a Sexta-feira: das 09h às 20h</p>
                <p>Sábados das 09h às 13h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider line matching attached model */}
        <div className="border-t border-[#282828]/30 w-full mt-10 mb-6" />

        {/* Bottom copyright notice */}
        <div
          id="footer-bottom-bar"
          className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-[13px] text-[#282828] gap-2"
        >
          <p>
            © Copyright Inova Hospital Veterinário 2020. Todos os direitos Reservados
            <span className="mx-2">•</span>
            <button
              type="button"
              onClick={onOpenPrivacyPolicy}
              className="hover:underline cursor-pointer font-medium"
            >
              Política de Privacidade
            </button>
          </p>

          <p className="text-[#282828]/90 text-[11px] sm:text-xs">
            Sorocaba / SP – Atendimento 24 horas
          </p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { X, Calendar, ArrowRight, BookOpen, Clock } from 'lucide-react';

interface BlogSectionProps {
  onOpenAppointment?: () => void;
  onOpenBlogPage?: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  readTime: string;
  content: string[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onOpenAppointment,
  onOpenBlogPage,
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [allPostsModalOpen, setAllPostsModalOpen] = useState(false);

  const BLOG_POSTS: BlogPost[] = [
    {
      id: 'cachorro-corrida',
      title: 'Cachorro de corrida: raças, características e cuidados necessários',
      date: '27 de maio de 2025',
      readTime: '4 min de leitura',
      excerpt:
        'Cachorro de corrida é aquele que possui estrutura física e comportamento voltados para alta velocidade, resistência atlética e agilidade...',
      image: '/images/blog/cachorro-corrida.jpg',
      content: [
        'Cães de corrida, como o Greyhound, Whippet, Galgo Espanhol e Saluki, destacam-se por sua anatomia aerodinâmica, coração potente e musculatura esguia e desenvolvida.',
        'No entanto, animais atletas necessitam de acompanhamento veterinário ortopédico e cardiológico rigoroso. A alimentação deve ser balanceada e rica em nutrientes específicos para proteger articulações e tendões.',
        'Além disso, é fundamental realizar aquecimento gradual, monitorar a temperatura corporal (especialmente em dias quentes) e manter as vacinas e exames preventivos sempre em dia.',
      ],
    },
    {
      id: 'papilomatose-canina',
      title: 'Papilomatose canina: o que é, causas, prevenção e tratamento',
      date: '20 de maio de 2025',
      readTime: '5 min de leitura',
      excerpt:
        'A papilomatose canina é uma infecção viral contagiosa entre cães, causada pelo papilomavírus canino, que provoca o surgimento de verrugas...',
      image: '/images/blog/papilomatose-canina.jpg',
      content: [
        'A papilomatose canina é provocada pelo papilomavírus canino (CPV-1), manifestando-se frequentemente na cavidade oral, lábios, gengivas e mucosas de filhotes e cães jovens.',
        'O contágio ocorre através do contato direto com outros pets infectados ou objetos compartilhados, como brinquedos e tigelas de água em parques ou creches.',
        'O diagnóstico deve ser feito por um médico veterinário. Em muitos casos, o sistema imunológico combate o vírus com o tempo, mas intervenções clínicas, cauterizações ou uso de imunoestimulantes podem ser necessários se houver desconforto para se alimentar.',
      ],
    },
    {
      id: 'berne-em-cachorro',
      title: 'Berne em cachorro: o que é, sintomas, tratamento e prevenção',
      date: '13 de maio de 2025',
      readTime: '4 min de leitura',
      excerpt:
        'A berne é uma infestação causada por larvas da mosca Dermatobia hominis, que se alojam sob a pele do pet e provocam dor e inflamação...',
      image: '/images/blog/berne-em-cachorro.jpg',
      content: [
        'A miíase forunculóide (popularmente chamada de berne) surge quando a larva da mosca se desenvolve no tecido subcutâneo do cão, formando um nódulo avermelhado com um orifício central por onde a larva respira.',
        'Os sinais incluem lambedura constante do local, inquietação, dor ao toque, secreção serossanguinolenta e inchaço visível.',
        'Nunca tente espremer a berne de forma caseira, pois a ruptura da larva pode causar choque anafilático ou infecções bacterianas graves. O procedimento de extração e a prescrição de antiparasitários orais ou tópicos devem ser conduzidos exclusivamente por um veterinário.',
      ],
    },
  ];

  const EXTRA_POSTS = [
    {
      id: 'cuidados-inverno',
      title: 'Cuidados com pets no inverno: como proteger cães e gatos do frio',
      date: '02 de maio de 2025',
      category: 'Saúde & Bem-estar',
    },
    {
      id: 'checkup-felino',
      title: 'A importância do check-up anual felino: prevenindo doenças silenciosas',
      date: '25 de abril de 2025',
      category: 'Medicina Felina',
    },
    {
      id: 'vacinas-essenciais',
      title: 'Calendário de vacinação pet: saiba quais são as doses indispensáveis',
      date: '18 de abril de 2025',
      category: 'Prevenção',
    },
  ];

  return (
    <section id="blog" className="relative bg-white pt-14 sm:pt-16 pb-16 sm:pb-20">
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
            Dicas Inova
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-normal">
            Saiba mais sobre o seu pet
          </p>
        </div>

        {/* 3 Cards Grid - Straddling the purple gradient and white background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              id={`blog-card-${post.id}`}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.16)] hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Card Image */}
              <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Date Badge in Yellow/Gold */}
                  <div className="inline-block bg-[#E5A823] text-white text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-md mb-3.5">
                    {post.date}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base sm:text-[17px] text-[#282828] mb-2.5 leading-snug group-hover:text-[#541E87] transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>

                {/* "Ler mais →" Action */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#282828] group-hover:text-[#541E87] transition-colors mt-2">
                  <span>Ler mais</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Action Button: Confira nosso Blog */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            id="btn-confira-nosso-blog"
            type="button"
            onClick={() => {
              if (onOpenBlogPage) {
                onOpenBlogPage();
              } else {
                setAllPostsModalOpen(true);
              }
            }}
            className="bg-[#E5A823] hover:bg-[#d49918] active:scale-95 text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            Confira nosso Blog
          </button>
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div
          id="blog-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-100">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Date and Reading Time */}
            <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
              <span className="bg-[#E5A823] text-white font-semibold px-2.5 py-0.5 rounded">
                {selectedPost.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedPost.readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#282828] mb-4 leading-snug">
              {selectedPost.title}
            </h3>

            {/* Paragraphs */}
            <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* CTA in Modal */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-[#282828] text-sm sm:text-base mb-1">
                  Tem dúvidas sobre a saúde do seu pet?
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  Agende uma consulta preventiva com nossos especialistas 24 horas.
                </p>
              </div>

              {onOpenAppointment && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPost(null);
                    onOpenAppointment();
                  }}
                  className="bg-[#FAAE00] hover:bg-[#e09d00] text-[#282828] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                >
                  Agendar Consulta
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* All Posts / Blog Overview Modal */}
      {allPostsModalOpen && (
        <div
          id="all-blog-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setAllPostsModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setAllPostsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#E5A823] font-bold text-xs uppercase mb-1">
              <BookOpen className="w-4 h-4" />
              Blog Inova Hospital Veterinário
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#282828] mb-2">
              Artigos e Dicas de Saúde Animal
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Conteúdos preparados pelo nosso corpo clínico veterinário para ajudar você a cuidar do seu melhor amigo em Sorocaba.
            </p>

            <div className="space-y-3 mb-6">
              {BLOG_POSTS.map((post) => (
                <div
                  key={post.id}
                  onClick={() => {
                    setAllPostsModalOpen(false);
                    setSelectedPost(post);
                  }}
                  className="p-4 rounded-2xl border border-slate-100 hover:border-[#E5A823] hover:bg-[#FEFBF2]/30 transition-all cursor-pointer flex items-center justify-between gap-4"
                >
                  <div>
                    <span className="text-xs text-[#E5A823] font-bold">{post.date}</span>
                    <h4 className="text-sm sm:text-base font-bold text-[#282828] mt-0.5">
                      {post.title}
                    </h4>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                </div>
              ))}

              {EXTRA_POSTS.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl border border-slate-100 bg-slate-50/70 flex items-center justify-between gap-4"
                >
                  <div>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.category} • {item.date}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-[#282828] mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-xs text-[#E5A823] font-semibold whitespace-nowrap">
                    Em breve
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setAllPostsModalOpen(false)}
                className="px-6 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

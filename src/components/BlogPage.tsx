import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Calendar,
  Clock,
  ChevronRight,
  ArrowLeft,
  Share2,
  Phone,
  CheckCircle2,
  Tag,
  AlertCircle,
  X,
  Copy,
  Check,
} from 'lucide-react';
import { ALL_BLOG_POSTS, BlogPostItem } from '../data/blogPosts';
import { WhatsAppIcon } from './WhatsAppIcon';

interface BlogPageProps {
  onBackToHome: () => void;
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
  initialPostId?: string | null;
}

const CATEGORIES = [
  'Todos',
  'Cachorros',
  'Gatos',
  'Especialidades',
  'Emergências',
  'Doenças Infecciosas',
  'Cuidados Preventivos',
];

const POSTS_PER_PAGE = 4;

export const BlogPage: React.FC<BlogPageProps> = ({
  onBackToHome,
  onOpenAppointment,
  onOpenEmergency,
  initialPostId,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState<BlogPostItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (initialPostId) {
      const found = ALL_BLOG_POSTS.find(
        (p) => p.id === initialPostId || p.slug === initialPostId
      );
      if (found) {
        setSelectedArticle(found);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [initialPostId]);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return ALL_BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'Todos' ||
        post.categories.some((cat) =>
          cat.toLowerCase().includes(selectedCategory.toLowerCase())
        );

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.some((para) => para.toLowerCase().includes(query)) ||
        post.categories.some((cat) => cat.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const displayedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const listElement = document.getElementById('blog-posts-grid');
      if (listElement) {
        listElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleShareWhatsApp = (post: BlogPostItem) => {
    const text = encodeURIComponent(
      `Confira este artigo da Inova Hospital Veterinário 24h: "${post.title}" - ${post.url || window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // Dedicated Article Subpage View
  if (selectedArticle) {
    const recommendedPosts = ALL_BLOG_POSTS.filter((p) => p.id !== selectedArticle.id).slice(0, 4);

    return (
      <article className="bg-slate-50 min-h-screen text-[#282828] pb-16 animate-in fade-in duration-200">
        {/* Breadcrumb Navigation Bar */}
        <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-xs">
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
              <button
                type="button"
                onClick={() => {
                  setSelectedArticle(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#541E87] font-semibold transition-colors cursor-pointer"
              >
                Blog
              </button>
              <span>/</span>
              <span className="text-[#541E87] font-bold line-clamp-1 max-w-[200px] sm:max-w-md">
                {selectedArticle.title}
              </span>
            </nav>

            <button
              type="button"
              onClick={() => {
                setSelectedArticle(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#541E87] hover:text-[#A400EB] transition-colors cursor-pointer py-1.5 px-3 rounded-md hover:bg-purple-50"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para todos os artigos
            </button>
          </div>
        </div>

        {/* Subpage Article Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Main Article Content (8 columns) */}
            <main className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200">
              {/* Category tags */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {selectedArticle.categories.map((cat, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#541E87] bg-purple-50 px-3 py-1 rounded-full uppercase font-['Dosis',sans-serif] tracking-wider"
                  >
                    <Tag className="w-3 h-3" />
                    {cat}
                  </span>
                ))}
              </div>

              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 mb-5">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#FAAE00]" />
                  {selectedArticle.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FAAE00]" />
                  {selectedArticle.readTime}
                </span>
              </div>

              {/* Article Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#282828] leading-tight mb-6 font-['Dosis',sans-serif]">
                {selectedArticle.title}
              </h1>

              {/* Social sharing bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleShareWhatsApp(selectedArticle)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-xl transition-all cursor-pointer shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Compartilhar no WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition-all cursor-pointer"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    {copiedLink ? 'Link copiado!' : 'Copiar link'}
                  </button>
                </div>
              </div>

              {/* Cover Image High Res */}
              <div className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-100 shadow-xs aspect-16/10 mb-8">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Medical Review Badge */}
              <div className="bg-purple-50 border-l-4 border-[#541E87] p-5 rounded-r-2xl mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#541E87] flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#541E87] leading-relaxed font-medium">
                    {selectedArticle.authorReview ||
                      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.'}
                  </p>
                </div>
              </div>

              {/* Article Content Paragraphs */}
              <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Veterinary Medical Warning & CTA */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-10">
                <h4 className="font-bold text-[#282828] text-base sm:text-lg mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#FAAE00]" />
                  Seu pet apresenta algum destes sintomas?
                </h4>
                <p className="text-sm text-slate-700 mb-5 leading-relaxed">
                  Não medique seu animal sem orientação médica. O Inova Hospital Veterinário 24h está aberto 24 horas todos os dias com equipe de especialistas e exames no local.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={onOpenEmergency}
                    className="bg-[#541E87] hover:bg-[#A400EB] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow"
                  >
                    Falar com Plantão 24h
                  </button>
                  <button
                    type="button"
                    onClick={onOpenAppointment}
                    className="bg-[#FAAE00] hover:bg-[#e69f00] text-[#282828] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow"
                  >
                    Agendar Avaliação
                  </button>
                </div>
              </div>

              {/* Bottom Back Button */}
              <div className="pt-8 mt-10 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedArticle(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-sm font-bold text-[#541E87] hover:text-[#A400EB] flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para todos os artigos do Blog
                </button>
              </div>
            </main>

            {/* Sidebar (4 columns) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Emergency Plantão Card */}
              <div className="bg-gradient-to-br from-[#541E87] to-[#7B1FA2] rounded-3xl p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold font-['Dosis',sans-serif] mb-2 uppercase">
                  Plantão 24 Horas
                </h3>
                <p className="text-white/85 text-xs sm:text-sm mb-4">
                  Pronto atendimento e UTI veterinária para emergências em qualquer dia e horário em Sorocaba.
                </p>
                <button
                  type="button"
                  onClick={onOpenEmergency}
                  className="w-full bg-[#FAAE00] hover:bg-[#e69f00] text-[#282828] font-bold text-xs sm:text-sm py-3 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow"
                >
                  Acionar Emergência
                </button>
              </div>

              {/* Recommended Articles */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
                <h3 className="font-['Dosis',sans-serif] font-bold text-lg text-[#282828] mb-4 uppercase">
                  Artigos Recomendados
                </h3>
                <div className="space-y-4">
                  {recommendedPosts.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => {
                        setSelectedArticle(post);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group flex gap-3 cursor-pointer items-start pb-4 border-b border-slate-100 last:border-b-0 last:pb-0"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <span className="text-[11px] font-semibold text-[#FAAE00] block mb-0.5">
                          {post.date}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#282828] group-hover:text-[#541E87] transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen text-[#282828] pb-16">
      {/* Breadcrumbs & Return Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-slate-500 font-['Dosis',sans-serif]">
            <button
              onClick={onBackToHome}
              className="hover:text-[#541E87] font-semibold transition-colors cursor-pointer"
            >
              Início
            </button>
            <span>/</span>
            <span className="text-[#541E87] font-bold">Blog</span>
            {selectedArticle && (
              <>
                <span>/</span>
                <span className="text-slate-800 font-medium line-clamp-1 max-w-[200px] sm:max-w-md">
                  {selectedArticle.title}
                </span>
              </>
            )}
          </nav>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#541E87] hover:text-[#A400EB] transition-colors cursor-pointer py-1 px-3 rounded-md hover:bg-purple-50"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o site principal
          </button>
        </div>
      </div>

      {/* Hero Header matching new visual identity with client exact title & curved accent */}
      <div className="bg-gradient-to-r from-[#541E87] via-[#751B9E] to-[#A400EB] text-white py-12 md:py-16 relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#FAAE00]/10 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-['Dosis',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide mb-3 [text-wrap:balance]">
              Blog Inova
            </h1>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal [text-wrap:balance]">
              Informações, orientações veterinárias e cuidados essenciais para a saúde e o bem-estar do seu pet, produzidos e revisados pela equipe médica do Inova Hospital Veterinário&nbsp;24h.
            </p>

            {/* Inova Search Bar */}
            <div className="relative max-w-xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Pesquisar por sintoma, doença, raça ou cuidados..."
                className="w-full bg-white text-[#282828] pl-11 pr-10 py-3.5 rounded-full shadow-lg text-sm sm:text-base placeholder-slate-400 focus:outline-none focus:ring-3 focus:ring-[#FAAE00] transition-all"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  aria-label="Limpar pesquisa"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills Filter Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-20 md:top-24 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all cursor-pointer font-['Dosis',sans-serif] uppercase ${
                    active
                      ? 'bg-[#541E87] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-[#282828]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Container: Articles Grid + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Main Content Column (8 cols on lg) */}
          <div className="lg:col-span-8" id="blog-posts-grid">
            
            {/* Filter status header */}
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
              <span className="text-xs sm:text-sm font-medium text-slate-500">
                Exibindo{' '}
                <strong className="text-[#282828] font-bold">
                  {filteredPosts.length}
                </strong>{' '}
                {filteredPosts.length === 1 ? 'artigo' : 'artigos'}
                {selectedCategory !== 'Todos' && (
                  <> em <span className="text-[#541E87] font-semibold">{selectedCategory}</span></>
                )}
                {searchQuery && (
                  <> para &ldquo;{searchQuery}&rdquo;</>
                )}
              </span>

              {(selectedCategory !== 'Todos' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('Todos');
                    setSearchQuery('');
                    setCurrentPage(1);
                  }}
                  className="text-xs font-semibold text-[#541E87] hover:underline"
                >
                  Limpar filtros
                </button>
              )}
            </div>

            {/* No results state */}
            {displayedPosts.length === 0 && (
              <div className="bg-white rounded-xl p-10 text-center border border-slate-200 my-6 shadow-xs">
                <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#282828] mb-1">
                  Nenhum artigo encontrado
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Não encontramos resultados para sua busca. Tente outras palavras-chave ou selecione outra categoria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('Todos');
                    setSearchQuery('');
                    setCurrentPage(1);
                  }}
                  className="bg-[#541E87] hover:bg-[#A400EB] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
                >
                  Ver todos os artigos
                </button>
              </div>
            )}

            {/* Articles Grid matching Elementor posts.classic */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
              {displayedPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col"
                >
                  {/* Thumbnail / Cover Image with hover zoom */}
                  <div
                    className="relative aspect-16/10 overflow-hidden bg-slate-100 cursor-pointer"
                    onClick={() => {
                      setSelectedArticle(post);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // fallback to hospital logo if image network error
                        (e.target as HTMLImageElement).src =
                          'https://d335luupugsy2.cloudfront.net/cms/files/147009/1788886402/$gldhisbuhkr';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Category badge */}
                    {post.categories[0] && (
                      <span className="absolute top-3 left-3 bg-[#541E87] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs font-['Dosis',sans-serif]">
                        {post.categories[0]}
                      </span>
                    )}

                    {/* Read time pill */}
                    <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#FAAE00]" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Card text content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta Date */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2.5">
                        <Calendar className="w-3.5 h-3.5 text-[#FAAE00]" />
                        <time dateTime={post.date}>{post.date}</time>
                      </div>

                      {/* Post Title */}
                      <h2
                        onClick={() => {
                          setSelectedArticle(post);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="font-bold text-[#282828] text-base sm:text-lg leading-snug group-hover:text-[#541E87] transition-colors cursor-pointer mb-2.5 line-clamp-2"
                      >
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 font-normal">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Action button */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedArticle(post);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center text-xs sm:text-sm font-bold text-[#541E87] hover:text-[#A400EB] transition-colors cursor-pointer group-hover:translate-x-0.5 duration-150"
                      >
                        Leia Mais »
                      </button>

                      <button
                        type="button"
                        onClick={() => handleShareWhatsApp(post)}
                        title="Compartilhar no WhatsApp"
                        className="text-slate-400 hover:text-emerald-600 p-1 rounded-full transition-colors cursor-pointer"
                        aria-label="Compartilhar no WhatsApp"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination matching client site */}
            {totalPages > 1 && (
              <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-colors ${
                    currentPage === 1
                      ? 'border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed'
                      : 'border-slate-300 text-[#282828] hover:bg-[#541E87] hover:text-white hover:border-[#541E87] cursor-pointer'
                  }`}
                >
                  « Anterior
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 text-xs sm:text-sm font-bold rounded-lg border transition-colors cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-[#541E87] text-white border-[#541E87] shadow-xs'
                        : 'border-slate-200 text-[#282828] hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-colors ${
                    currentPage === totalPages
                      ? 'border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed'
                      : 'border-slate-300 text-[#282828] hover:bg-[#541E87] hover:text-white hover:border-[#541E87] cursor-pointer'
                  }`}
                >
                  Próximo »
                </button>
              </div>
            )}
          </div>

          {/* Sidebar Column matching information from inovaveterinaria.com.br/blog/ (4 cols on lg) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Posts Mais Acessados */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="font-['Dosis',sans-serif] font-bold text-lg text-[#282828] uppercase tracking-wide mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#FAAE00]" />
                Mais Acessados
              </h3>

              <div className="space-y-3.5">
                {ALL_BLOG_POSTS.slice(0, 4).map((topPost) => (
                  <div
                    key={topPost.id}
                    onClick={() => setSelectedArticle(topPost)}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <img
                      src={topPost.image}
                      alt={topPost.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-16 h-12 rounded-lg object-cover flex-shrink-0 bg-slate-100"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-[#282828] group-hover:text-[#541E87] transition-colors line-clamp-2 leading-snug">
                        {topPost.title}
                      </h4>
                      <span className="text-[11px] text-slate-400">
                        {topPost.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact / Emergency Box (24 Horas Todos os dias) */}
            <div className="bg-gradient-to-br from-[#541E87] to-[#3B1260] text-white p-6 rounded-2xl shadow-md relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#FAAE00] text-[#282828] text-[11px] font-black uppercase px-2 py-0.5 rounded tracking-wider">
                  24 Horas
                </span>
                <span className="text-xs text-white/80 font-medium">Todos os dias</span>
              </div>

              <h3 className="font-['Dosis',sans-serif] font-bold text-xl uppercase mb-2">
                Pronto Atendimento & Emergências
              </h3>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-5">
                Hospital veterinário com plantão ininterrupto 24h, UTI, centro cirúrgico e exames de emergência por ordem de chegada.
              </p>

              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={onOpenEmergency}
                  className="w-full bg-[#FAAE00] hover:bg-[#e69f00] text-[#282828] font-bold text-sm py-3 rounded-xl transition-all shadow-md text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  Emergência: (15) 3333-2300
                </button>

                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors text-center cursor-pointer"
                >
                  Agendar Consulta Preventiva
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>


    </div>
  );
};

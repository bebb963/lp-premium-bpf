import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  BarChart3, 
  FlaskConical, 
  Zap, 
  Scan, 
  Menu, 
  X,
  Plus,
  Minus,
  Quote,
  Star,
  Database,
  Truck,
  ArrowUp
} from 'lucide-react';

// --- Components ---

const FloatingBadge = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (y) => {
      setIsVisible(y > 300);
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a 
          href="#inicio"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-[90] bg-accent-orange text-white p-4 rounded-full shadow-[0_0_20px_rgba(244,129,31,0.5)] hover:bg-black transition-colors flex items-center justify-center group"
          title="Voltar ao topo"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O PROPÓSITO', href: '#sobre' },
    { name: 'A ESTRUTURA', href: '#estrutura' },
    { name: 'DIFERENCIAIS', href: '#diferenciais' },
    { name: 'QUALIDADE', href: '#qualidade' },
    { name: 'DEPOIMENTOS', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav border-b border-gray-100 py-2' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-transparent'}`}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center transition-transform hover:scale-105">
          <img 
            src="/logo.png" 
            alt="Premium Ambiental" 
            className="h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-headline text-[11px] font-black uppercase tracking-[0.15em] text-primary hover:text-accent-orange transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-accent-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-black p-4 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 md:hidden flex flex-col p-8 gap-8 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-headline text-sm font-black uppercase tracking-[0.2em] text-primary border-b border-gray-50 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 flex justify-end"
      >
        <div className="w-full h-full relative">
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center md:translate-x-0"
          >
            <source src="https://res.cloudinary.com/dehvuxehx/video/upload/v1744616978/hero-section_qyhvxd.webm" type="video/webm" />
            <source src="https://res.cloudinary.com/dehvuxehx/video/upload/v1744616978/hero-section_qyhvxd.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30"></div>
        </div>
      </motion.div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 relative z-10 w-full mt-10 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full xl:max-w-[110%] 2xl:max-w-[120%] text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 shadow-sm mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse"></span>
              <span className="text-[10px] font-headline font-extrabold uppercase tracking-[0.2em] text-white">
                DISTRIBUIDORA OFICIAL · 15 ANOS DE MERCADO
              </span>
            </div>
            
            <h1 className="font-headline font-extrabold text-5xl md:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight text-white mb-8 mx-auto lg:mx-0">
              Seu combustível industrial de alta performance, <span className="text-accent-orange block mt-2">na hora certa.</span>
            </h1>
            
            
            <p className="font-body text-xl md:text-2xl lg:text-[23px] text-white/80 leading-[1.65] mx-auto lg:mx-0">
              Distribuimos óleo combustível pesado (BPF) para indústrias com operação contínua. 
            </p>

            {/* Licenses Marquee for Desktop (hidden on mobile) */}
            <div className="hidden lg:block pt-10 mt-12 border-t border-white/10 relative z-20">
              <span className="text-[10px] font-headline font-extrabold uppercase tracking-[0.2em] text-accent-orange mb-4 block">Licenças</span>
              <div className="w-full overflow-hidden flex bg-transparent relative py-4">
                <div className="whitespace-nowrap flex animate-marquee flex-nowrap items-center gap-10">
                  {[
                    'ANTT', 'Anvisa', 'Cetesb-Sao-Paulo', 'Conselho-Regional-de-Quimica', 'Ibama', 
                    'Iema-Espirito-Santo', 'Inea-Rio-de-Janeiro', 'PAE-Suatrans', 'Policia-Federal', 
                    'Prefeitura-Municipal-de-Mogi-Mirim', 'SINIR', 'Seguro-Ambiental-AIG', 'Sistema-de-Gerenciamento-On-line-de-Residuos'
                  ].map((name, i) => (
                    <img key={i} src={`/licenca-${name}.png`} alt={name} className="h-8 w-auto object-contain invert opacity-60 hover:opacity-100 transition-opacity" />
                  ))}
                  {/* Duplication for infinite effect */}
                  {[
                    'ANTT', 'Anvisa', 'Cetesb-Sao-Paulo', 'Conselho-Regional-de-Quimica', 'Ibama', 
                    'Iema-Espirito-Santo', 'Inea-Rio-de-Janeiro', 'PAE-Suatrans', 'Policia-Federal', 
                    'Prefeitura-Municipal-de-Mogi-Mirim', 'SINIR', 'Seguro-Ambiental-AIG', 'Sistema-de-Gerenciamento-On-line-de-Residuos'
                  ].map((name, i) => (
                    <img key={`dup-${i}`} src={`/licenca-${name}.png`} alt={name} className="h-8 w-auto object-contain invert opacity-60 hover:opacity-100 transition-opacity" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full relative z-20"
          >
            <div className="glass-card p-8 md:p-10 rounded-2xl w-full bg-white/90 backdrop-blur-xl border border-white shadow-2xl relative z-20 text-center lg:text-left">
              <div className="mb-8">
                <span className="inline-block px-4 py-1 bg-black text-white font-headline font-bold text-[10px] tracking-widest uppercase mb-4 rounded mx-auto lg:mx-0">
                  COTAÇÃO RÁPIDA
                </span>
                <h3 className="font-headline font-extrabold text-2xl text-primary mb-2">Solicite sua cotação agora</h3>
              </div>
              <form id="cotacao" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Nome Completo', placeholder: 'Ex: João Silva', type: 'text' },
                  { label: 'Empresa', placeholder: 'Sua Indústria', type: 'text' },
                  { label: 'Telefone', placeholder: '(00) 00000-0000', type: 'tel' },
                ].map((field, i) => (
                  <div key={i} className={`space-y-2 ${i === 2 ? 'md:col-span-2' : ''}`}>
                    <label className="font-headline font-bold text-[10px] uppercase tracking-widest text-on-surface-variant">{field.label}</label>
                    <input className="w-full bg-white border border-outline-variant/30 px-4 rounded text-primary focus:ring-1 focus:ring-accent-orange focus:border-accent-orange transition-all outline-none min-h-[48px] text-sm placeholder:text-on-surface-variant/50" placeholder={field.placeholder} type={field.type} />
                  </div>
                ))}
                
                <div className="space-y-2 md:col-span-2">
                  <label className="font-headline font-bold text-[10px] uppercase tracking-widest text-on-surface-variant">Equipamento</label>
                  <select className="w-full bg-white border border-outline-variant/30 px-4 rounded text-primary focus:ring-1 focus:ring-accent-orange focus:border-accent-orange transition-all outline-none min-h-[48px] text-sm">
                    <option>Caldeira</option>
                    <option>Forno Industrial</option>
                    <option>Secador</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="font-headline font-bold text-[10px] uppercase tracking-widest text-on-surface-variant">Volume Mensal (Litros)</label>
                  <select className="w-full bg-white border border-outline-variant/30 px-4 rounded text-primary focus:ring-1 focus:ring-accent-orange focus:border-accent-orange transition-all outline-none min-h-[48px] text-sm">
                    <option>5.000L - 10.000L</option>
                    <option>10.000L - 30.000L</option>
                    <option>30.000L+</option>
                  </select>
                </div>
                <button type="button" className="md:col-span-2 bg-black text-white font-headline font-black text-xs tracking-widest mt-4 hover:bg-accent-orange transition-all rounded min-h-[52px] w-full shadow-lg hover:shadow-accent-orange/20">
                  SOLICITAR COTAÇÃO →
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Certifications for Mobile (hidden on desktop) */}
        {/* Licenses Marquee for Mobile (hidden on desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="lg:hidden w-full pt-10 mt-12 border-t border-white/10 relative z-20"
        >
          <span className="text-[10px] font-headline font-extrabold uppercase tracking-[0.2em] text-accent-orange mb-4 block text-center">Licenças</span>
          <div className="w-full overflow-hidden flex bg-transparent relative py-2">
            <div className="whitespace-nowrap flex animate-marquee flex-nowrap items-center gap-8">
            {[
                'ANTT', 'Anvisa', 'Cetesb-Sao-Paulo', 'Conselho-Regional-de-Quimica', 'Ibama', 
                'Iema-Espirito-Santo', 'Inea-Rio-de-Janeiro', 'PAE-Suatrans', 'Policia-Federal', 
                'Prefeitura-Municipal-de-Mogi-Mirim', 'SINIR', 'Seguro-Ambiental-AIG', 'Sistema-de-Gerenciamento-On-line-de-Residuos'
              ].map((name, i) => (
                <img key={i} src={`/licenca-${name}.png`} alt={name} className="h-6 w-auto object-contain invert opacity-60" />
              ))}
              {/* Duplication for infinite effect */}
              {[
                'ANTT', 'Anvisa', 'Cetesb-Sao-Paulo', 'Conselho-Regional-de-Quimica', 'Ibama', 
                'Iema-Espirito-Santo', 'Inea-Rio-de-Janeiro', 'PAE-Suatrans', 'Policia-Federal', 
                'Prefeitura-Municipal-de-Mogi-Mirim', 'SINIR', 'Seguro-Ambiental-AIG', 'Sistema-de-Gerenciamento-On-line-de-Residuos'
              ].map((name, i) => (
                <img key={`dup-${i}`} src={`/licenca-${name}.png`} alt={name} className="h-6 w-auto object-contain invert opacity-60" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <section className="py-12 bg-white border-y border-outline-variant/10 relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-pattern"></div>
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 relative z-10 text-center mb-8">
        <p className="font-body text-xl md:text-2xl font-bold leading-[1.2] text-on-surface-variant">
          Mais de 50 indústrias já escolheram a Premium
        </p>
      </div>
      <div className="w-full overflow-hidden flex bg-transparent py-4 relative z-10">
        <div className="whitespace-nowrap flex animate-marquee flex-nowrap items-center gap-10 md:gap-16 pl-10">
          {[...Array(24)].map((_, i) => (
             <img key={i} src={`/cliente${i+1}.jpg`} className="h-8 md:h-12 w-auto max-w-[140px] md:max-w-none object-contain grayscale hover:grayscale-0 transition-all mix-blend-multiply" alt={`Cliente ${i+1}`} />
          ))}
          {[...Array(24)].map((_, i) => (
             <img key={`dup-${i}`} src={`/cliente${i+1}.jpg`} className="h-8 md:h-12 w-auto max-w-[140px] md:max-w-none object-contain grayscale hover:grayscale-0 transition-all mix-blend-multiply" alt={`Cliente ${i+1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Pillars = () => {
  const cards = [
    { title: 'CALDEIRAS', img: '/caldeira.webp' },
    { title: 'FORNOS', img: '/forno.png' },
    { title: 'Indústria\nAsfáltica', img: '/asfaltico.jpg' },
  ];

  return (
    <section id="diferenciais" className="py-16 lg:py-24 bg-surface relative">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-10 text-center md:text-left">
          <div className="max-w-4xl mx-auto md:mx-0">
            <h2 className="font-headline font-extrabold text-3xl md:text-6xl text-primary mb-6 tracking-[-0.01em] leading-[1.1]">
              Cada operação exige um produto diferente. <br /> Nós temos os dois.
            </h2>
            <p className="text-on-surface-variant text-xl lg:text-[23px] leading-[1.65] max-w-[85ch] mx-auto md:mx-0">
              <strong>BPF (óleo pesado)</strong> para geração de vapor, com pré-aquecimento a 80–90°C. <br />
              <strong>APF (óleo leve)</strong> com alta fluidez e abastecimento programado. O produto certo, na hora certa, com frota própria e documentação completa.
            </p>
          </div>
          <div className="w-20 h-1 bg-accent-orange mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group h-[400px] overflow-hidden rounded-xl shadow-lg"
            >
              <img 
                src={card.img} 
                alt={card.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:bg-black/40 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <h3 className="font-headline font-extrabold text-3xl text-white tracking-tight uppercase drop-shadow-lg">
                  {card.title.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < card.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QualitySection = () => {
  return (
    <section id="qualidade" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="relative overflow-hidden bg-black rounded-xl shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKyh5-m9j-z7071ezayt76Bgr8RuTLOhpjmJFZW9ERxSEPfhwrKSpTPu61cNuViOADODyYTPMK2xgFeH2HcOl_gg3lmVgnfEJZNm6uBvgRTYk6ASLXjvyZpBLYDDpjxu-ALD5706Zb4N9ewKkef7m5ku5B6YXdYlrPekBM1afcvmU_fbSVJb70vDfnKPGrxkH2o9DKaSPo1itmIp37tgY4BQ4p4c66kHbvb_HXqybhjZAY3oQqJn5UKmILrd_Y2NrYTlCjBGgxXyQ" 
              alt="Industrial machinery" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-20 flex flex-col lg:flex-row items-center gap-16 text-center lg:text-left">
            <div className="flex-1">
              <div className="inline-block mx-auto lg:mx-0 px-4 py-2 bg-accent-orange/20 text-accent-orange font-headline font-extrabold text-[10px] tracking-widest uppercase mb-8 border border-accent-orange/30 rounded">
                QUALIDADE DO PRODUTO
              </div>
              <h3 className="font-headline font-extrabold text-3xl md:text-5xl text-white mb-8 tracking-[-0.01em] leading-[1.1]">
                Rigor técnico <br /> em todo o ciclo
              </h3>
              <p className="text-white/70 text-xl md:text-[22px] mb-10 max-w-[65ch] leading-[1.65] mx-auto lg:mx-0">
                Do armazenamento à entrega, realizamos testes de qualidade continuamente. Cada lote sai com laudo de viscosidade, ponto de fulgor e densidade antes da entrega.
                Eliminamos o risco de contaminação, dano em equipamentos e paradas não programadas para que você tenha controle total da sua operação.
              </p>
              <div className="flex justify-center lg:justify-start gap-1.5 mt-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-6 h-6 text-accent-orange fill-accent-orange drop-shadow-md" />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full lg:max-w-md">
              {[
                { icon: <FlaskConical className="w-6 h-6 text-accent-orange" />, label: 'LABORATÓRIO', value: 'Laudo técnico' },
                { icon: <Database className="w-6 h-6 text-accent-orange" />, label: 'ARMAZENAMENTO', value: '2.000m³' },
                { icon: <Truck className="w-6 h-6 text-accent-orange" />, label: 'DISTRIBUIÇÃO', value: 'Frota própria' },
              ].map((item, i) => (
                <div key={i} className="p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between group hover:border-accent-orange/50 transition-colors">
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <span className="text-white font-headline font-bold text-lg uppercase tracking-wider">{item.label}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-accent-orange tracking-[0.2em]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const StructureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);

  useEffect(() => {
    const updateVisible = () => setVisibleSlides(window.innerWidth > 768 ? 3 : 1);
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const slides = [
    { title: 'Armazenamento em tanques térmicos', img: '/tanquesarmazenamento.jpg' },
    { title: 'ETE - Estação de Tratamento de Efluentes própria', img: '/ete.jpg' },
    { title: 'Frota própria rastreada', img: '/frota.jpg' },
    { title: 'Equipe técnica qualificada', img: '/equipe.jpg' },
    { title: 'Equipamento técnico de ponta.', img: '/Equipamentos.jpg' },
  ];

  const maxIndex = slides.length - visibleSlides;

  const next = () => setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  const prev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));

  return (
    <section id="estrutura" className="py-8 md:py-12 bg-surface overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 text-center md:text-left gap-6 md:gap-0">
          <div>
            <h2 className="font-headline font-extrabold text-3xl md:text-5xl text-primary leading-[1.1] tracking-[-0.01em]">Estrutura que garante a entrega</h2>
            <p className="font-dmsans text-xl lg:text-[23px] text-on-surface-variant mt-4 leading-[1.65] max-w-[55ch] mx-auto md:mx-0">
              Temos controle total do ciclo do óleo combustivel.<br />
              Beneficiamento, análise, armazenamento e transporte feitos por nós, a certeza de que você receberá o produto certo dentro do prazo combinado.
            </p>
          </div>
          <div className="flex gap-4">
            <button onClick={prev} className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white border border-black/10 hover:bg-accent-orange hover:text-white transition-all shadow-sm">
              <ChevronLeft />
            </button>
            <button onClick={next} className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white border border-black/10 hover:bg-accent-orange hover:text-white transition-all shadow-sm">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="relative cursor-grab active:cursor-grabbing">
          <motion.div 
            className="flex gap-6"
            drag="x"
            dragConstraints={{
              right: 0,
              left: -(slides.length - visibleSlides) * (100 / visibleSlides) + "%" // Precise limit based on indices
            }}
            animate={{ x: `-${Math.min(currentIndex, maxIndex) * (100 / visibleSlides)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="min-w-full md:min-w-[calc(33.333%-1rem)] group">
                <div className="aspect-[4/5] bg-primary relative overflow-hidden rounded-2xl shadow-xl">
                  <img src={slide.img} alt={slide.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="h-1 w-12 bg-accent-orange mb-4"></div>
                    <span className="font-headline font-extrabold text-[13px] uppercase tracking-[0.2em] text-white">{slide.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {slides.slice(0, maxIndex + 1).map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentIndex ? 'bg-accent-orange scale-125' : 'bg-outline-variant/50 hover:bg-on-surface-variant'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { val: '2.000.000L', label: 'Capacidade total em tanques térmicos', dark: false },
    { val: '3 OPERAÇÕES', label: 'Beneficiamento, distribuição e limpeza industrial', dark: true },
    { val: '15+', label: 'Anos de experiência\nno mercado de combustíveis industriais', dark: false },
    { val: '+50', label: 'Indústrias atendidas recorrentemente em todo o Brasil', dark: false },
  ];

  return (
    <section className="py-12 md:py-16 bg-white relative border-y border-outline-variant/10">
      <div className="absolute inset-0 bg-pattern"></div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={`px-6 py-10 flex flex-col justify-start items-center text-center rounded-xl shadow-lg border border-outline-variant/10 transition-all duration-300 min-h-[280px] ${stat.dark ? 'bg-black text-white' : 'bg-surface text-primary'}`}
            >
              <div className="h-20 flex items-center justify-center mb-6">
                <span className="block font-headline font-black text-[28px] tracking-tight whitespace-nowrap">{stat.val}</span>
              </div>
              <span className={`text-[13px] font-extrabold tracking-[0.15em] uppercase leading-relaxed ${stat.dark ? 'text-white/70' : 'text-on-surface-variant'}`}>
                {stat.label.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < stat.label.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstitutionalVideo = () => {
  return (
    <section id="sobre" className="py-8 md:py-12 bg-black relative">
      <div className="max-w-[1000px] mx-auto px-4 md:px-6 lg:px-12 text-center">
        <div className="inline-block px-4 py-1 bg-accent-orange/20 text-accent-orange font-headline font-bold text-[10px] tracking-widest uppercase mb-4 rounded border border-accent-orange/30">
          O NOSSO PROPÓSITO
        </div>
        <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-white mb-6">
          O óleo que alimenta a <br /> chama da indústria brasileira
        </h2>
        <p className="text-white/70 mb-12 max-w-[55ch] mx-auto text-xl md:text-[22px]">
          Há mais de quinze anos ao lado de quem acorda cedo, opera em silêncio e sustenta a economia real do país.
        </p>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-black">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/wIaCpIW-yYk?si=NiAVFIZAZ4KUrSV8" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const items = [
    { 
      text: "Trocamos o Diesel pelo BPF da Premium e reduzimos 42% no custo de energia no primeiro trimestre. A análise técnica veio antes da proposta — eles conheciam nosso equipamento melhor do que esperavam.",
      author: "Carlos Eduardo Mendonça",
      role: "Diretor de Operações | Indústria Têxtil Sudeste"
    },
    { 
      text: "Quatro anos sem um atraso. Quando o mercado apertou em 2023 e outros fornecedores ficaram sem produto, recebemos normalmente. Hoje não cogito mudar de fornecedor.",
      author: "Ricardo Oliveira",
      role: "Gerente de Supply Chain | Grupo Metalúrgico Norte"
    }
  ];

  return (
    <section id="depoimentos" className="py-8 md:py-12 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern"></div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 bg-accent-orange text-white font-headline font-bold text-[10px] tracking-widest uppercase mb-4 rounded">CLIENTES</div>
          <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-primary leading-[1.1] tracking-[-0.01em]">O que dizem nossos parceiros</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card p-8 md:p-10 rounded-2xl text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 bg-accent-orange/5 rounded-full flex items-center justify-center border border-accent-orange/10">
                  <Quote className="w-6 h-6 text-accent-orange" />
                </div>
              </div>
              <p className="font-body text-lg md:text-xl text-primary mb-6 italic leading-[1.65] font-light max-w-[65ch] mx-auto">
                "{items[active].text}"
              </p>
              <div className="font-headline border-t border-outline-variant/10 pt-10 inline-block">
                <p className="font-extrabold text-primary text-xl mb-1">{items[active].author}</p>
                <p className="text-accent-orange text-[10px] font-black uppercase tracking-[0.2em]">{items[active].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-16">
            {items.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center ${active === i ? '[&>span]:bg-accent-orange [&>span]:ring-4 [&>span]:ring-accent-orange/10' : ''}`}
              >
                <span className={`w-3 h-3 rounded-full block transition-all duration-300 ${active === i ? 'bg-accent-orange ring-4 ring-accent-orange/10' : 'bg-outline-variant'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: 'Quais estados vocês atendem com frota própria?', a: 'SP, MT, MS, RJ, MG e GO — todos com frota rastreada e documentação em conformidade estadual. Sem terceiros no caminho.' },
    { q: 'Posso substituir o Diesel pelo BPF sem adaptar meu equipamento?', a: 'Na maioria dos equipamentos com sistema de aquecimento prévio, a substituição é direta. Nossa equipe avalia seu queimador gratuitamente antes da primeira entrega.' },
    { q: 'Qual o volume mínimo para começar?', a: '5.000 litros por entrega. Para referência: outros distribuidores do mesmo porte começam em 15.000L. Você não precisa estocar o que não consome.' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-headline font-extrabold text-4xl text-center text-primary mb-20 leading-[1.1] tracking-[-0.01em]">Perguntas Frequentes</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white border border-outline-variant/20 rounded-xl overflow-hidden shadow-sm transition-all hover:border-accent-orange"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left min-h-[64px]"
              >
                <h4 className={`font-bold transition-colors ${openIndex === i ? 'text-accent-orange' : 'text-primary'}`}>{faq.q}</h4>
                {openIndex === i ? <Minus className="text-accent-orange" /> : <Plus className="text-accent-orange" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-8"
                  >
                    <p className="text-on-surface-variant leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Marquee */}
      <div className="py-10 bg-black overflow-hidden border-y border-white/5">
        <div className="whitespace-nowrap flex animate-marquee text-white/50 font-headline font-bold text-lg md:text-xl tracking-widest uppercase py-2">
          {[...Array(6)].map((_, i) => (
            <span key={i} className={`mx-6 ${i % 2 !== 0 ? 'text-accent-orange' : ''}`}>
              O ÓLEO QUE ALIMENTA A CHAMA DA INDÚSTRIA BRASILEIRA.
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 lg:gap-6 text-center md:text-left">
        <div className="space-y-8 pr-4 lg:pr-12 md:pr-8 mx-auto md:mx-0">
          <img 
            src="/logo_rodape.png" 
            alt="Premium Ambiental" 
            className="h-6 w-auto object-contain brightness-0 invert mx-auto md:mx-0"
            referrerPolicy="no-referrer"
          />
          <p className="text-sm leading-[1.65] text-on-surface-variant">Distribuição técnica de BPF e APF para caldeiras, fornos e usinas em todo o país.</p>
        </div>

        <div>
          <h5 className="font-headline font-black text-[10px] uppercase tracking-[0.2em] text-accent-orange mb-6">Soluções</h5>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li>Óleo Combustível BPF</li>
            <li>Óleo Combustível APF</li>
          </ul>
        </div>

        <div>
          <h5 className="font-headline font-black text-[10px] uppercase tracking-[0.2em] text-accent-orange mb-6">Atendimento</h5>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li>servicos@premiumambiental.com.br</li>
            <li>(19) 3804-9564</li>
          </ul>
        </div>

        <div>
          <h5 className="font-headline font-black text-[10px] uppercase tracking-[0.2em] text-accent-orange mb-6">Endereço</h5>
          <p className="text-sm leading-[1.65] text-on-surface-variant">
            Av: Geraldo Potyguara Silveira Franco, 27<br />
            Parque da Empresa - Mogi Mirim-SP<br />
            CEP: 13.803-280
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 py-10 border-t border-white/5 text-center">
        <p className="text-xs text-on-surface-variant/50 tracking-widest uppercase">© 2026 Premium Ambiental. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div id="inicio" className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Pillars />
      <StructureCarousel />
      <QualitySection />
      <StatsSection />
      <InstitutionalVideo />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingBadge />
    </div>
  );
}

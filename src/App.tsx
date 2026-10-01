import React, { useState, useEffect, useCallback, useRef } from 'react';
import { translations, Language } from './translations';
import {
  BookOpen,
  Users,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  School,
  Menu,
  X,
  Globe,
  Award,
  ChevronDown,
  Calculator,
  MessageCircle,
  FileSpreadsheet,
  Check,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Quote,
  Star,
  TrendingUp,
  Scale,
  RotateCcw
} from 'lucide-react';

/**
 * Scroll Reveal Hook for minimal, theme-aligned fade-in and slide-in animations
 */
function useScrollReveal(dependency?: any) {
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.reveal-fade-up, .reveal-slide-left, .reveal-slide-right'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    targets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        target.classList.add('is-visible');
      }
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [dependency]);
}

/**
 * Interactive Ledger Scenarios for Accounting Enthusiasts
 */
interface LedgerScenario {
  id: string;
  nameId: string;
  nameEn: string;
  assets: number;
  liabEquity: number;
  drAccount: string;
  drAmount: string;
  crAccount: string;
  crAmount: string;
  conceptBadgeId: string;
  conceptBadgeEn: string;
  analysisId: string;
  analysisEn: string;
}

const ledgerScenarios: LedgerScenario[] = [
  {
    id: 'capital',
    nameId: '1. Setoran Modal Kas',
    nameEn: '1. Capital Contribution',
    assets: 150000000,
    liabEquity: 150000000,
    drAccount: 'Kas Perusahaan (Dr)',
    drAmount: '+Rp 150.000.000',
    crAccount: 'Modal Sanidin (Cr)',
    crAmount: '+Rp 150.000.000',
    conceptBadgeId: 'Kas Masuk • Modal Naik',
    conceptBadgeEn: 'Cash In • Equity Up',
    analysisId: 'Kas bertambah di DEBIT, Modal pemilik bertambah di KREDIT. Neraca berimbang sempurna!',
    analysisEn: 'Cash increases in DEBIT, Owner equity increases in CREDIT. Balance sheet is in perfect equilibrium!',
  },
  {
    id: 'supplies',
    nameId: '2. Beli Perlengkapan Tunai',
    nameEn: '2. Cash Supplies Purchase',
    assets: 150000000,
    liabEquity: 150000000,
    drAccount: 'Perlengkapan Kantor (Dr)',
    drAmount: '+Rp 35.000.000',
    crAccount: 'Kas Perusahaan (Cr)',
    crAmount: '-Rp 35.000.000',
    conceptBadgeId: 'Mutasi Antar Aset',
    conceptBadgeEn: 'Asset Transformation',
    analysisId: 'Pertukaran internal aset: Perlengkapan bertambah (Dr), Kas berkurang (Cr). Total aset tetap seimbang!',
    analysisEn: 'Asset swap: Supplies increase (Dr), Cash decreases (Cr). Total assets stay in absolute balance!',
  },
  {
    id: 'revenue',
    nameId: '3. Pendapatan Jasa Diterima',
    nameEn: '3. Service Revenue Earned',
    assets: 195000000,
    liabEquity: 195000000,
    drAccount: 'Kas Masuk Jasa (Dr)',
    drAmount: '+Rp 45.000.000',
    crAccount: 'Pendapatan Jasa (Cr)',
    crAmount: '+Rp 45.000.000',
    conceptBadgeId: 'Kas Bertambah • Laba Naik',
    conceptBadgeEn: 'Cash Surge • Revenue Up',
    analysisId: 'Pendapatan jasa menaikkan Laba & Ekuitas (Kredit), Kas bertambah (Debit). Keduanya naik beriringan!',
    analysisEn: 'Service revenue amplifies Equity (Credit), as cash surges (Debit). Both sides expand simultaneously!',
  },
];

/**
 * Animated Counter Component
 * Triggers counting animation with smooth cubic easing once scrolled into view
 */
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  formatThousands?: boolean;
}

function AnimatedCounter({
  value,
  duration = 2000,
  prefix = '',
  suffix = '',
  formatThousands = false,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentEl = counterRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth cubic ease out curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * value);
      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, value, duration]);

  const formattedNumber = formatThousands
    ? displayValue.toLocaleString('id-ID')
    : displayValue.toString();

  return (
    <span ref={counterRef} className="tabular-nums font-black">
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}

/**
 * Custom JavaScript Hook to auto-rotate carousel cards every intervalMs (default: 5000ms / 5s)
 * Supports auto-rotation, pause-on-hover, direct navigation, and smooth progress tracking.
 */
function useCarousel(itemCount: number, intervalMs: number = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % itemCount);
    setProgress(0);
  }, [itemCount]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
    setProgress(0);
  }, [itemCount]);

  const goTo = useCallback((idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused || itemCount <= 1) return;

    const tickRate = 50;
    const increment = (tickRate / intervalMs) * 100;

    const timer = setInterval(() => {
      setProgress((curr) => {
        if (curr >= 100) {
          next();
          return 0;
        }
        return curr + increment;
      });
    }, tickRate);

    return () => clearInterval(timer);
  }, [itemCount, intervalMs, isPaused, next]);

  return {
    currentIndex,
    next,
    prev,
    goTo,
    isPaused,
    setIsPaused,
    progress,
  };
}

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Initialize minimalist scroll reveal animations for cards and sections
  useScrollReveal(lang);

  // Active ledger scenario for Anime.js interactive simulation (for accounting passionates)
  const [activeScenarioIdx, setActiveScenarioIdx] = useState<number>(0);
  const activeScenario = ledgerScenarios[activeScenarioIdx];

  // Quick WhatsApp Booking form state
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [studentLevel, setStudentLevel] = useState<'SMA' | 'Mahasiswa'>('SMA');
  const [studentTopic, setStudentTopic] = useState('');

  // Interactive Fee Estimator
  const [calcLevel, setCalcLevel] = useState<'SMA' | 'Mahasiswa'>('SMA');
  const [calcSessions, setCalcSessions] = useState<number>(4);
  const [calcMode, setCalcMode] = useState<'Online' | 'Offline'>('Online');

  const t = translations[lang];

  // JavaScript hook for interactive testimonials carousel auto-rotating every 5 seconds (5000ms)
  const carousel = useCarousel(t.testimonials.items.length, 5000);

  // Base price calculations
  const baseRatePerSession = calcLevel === 'SMA' ? 90000 : 115000;
  const modeExtra = calcMode === 'Offline' ? 25000 : 0;
  const totalEstimatedPrice = calcSessions * (baseRatePerSession + modeExtra);

  // Select ledger scenario in interactive simulator
  const handleSelectScenario = (index: number) => {
    setActiveScenarioIdx(index);
  };

  // WhatsApp generator helper
  const getWhatsAppUrl = (customMessage?: string) => {
    const phoneNumber = "6281220022026"; // Official WhatsApp contact
    const defaultMsg = lang === 'id' 
      ? `Halo Kak Sanidin! Saya tertarik untuk mendaftar bimbingan belajar akuntansi privat untuk tingkat ${studentLevel}. Mohon info jadwal dan pendaftaran.`
      : `Hello Sanidin! I am interested in enrolling for private accounting tutoring. Please share available schedules and enrollment details.`;
    
    const textToSend = customMessage || defaultMsg;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textToSend)}`;
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const greeting = lang === 'id' 
      ? `Halo Sanidin! Perkenalkan nama saya *${studentName || 'Calon Siswa'}* (${studentPhone || '-'}). Saya ingin konsultasi les privat Akuntansi untuk jenjang *${studentLevel}*. Topik/materi yang ingin dipelajari: *${studentTopic || 'Akuntansi Dasar / Ujian'}*. Mohon info ketersediaan jadwal ya kak!`
      : `Hello Sanidin! My name is *${studentName || 'Prospective Student'}* (${studentPhone || '-'}). I would like to consult private accounting tutoring for *${studentLevel}* level. Topic of interest: *${studentTopic || 'Core Accounting / Exam Prep'}*. Please inform me about schedule availability!`;
    
    window.open(`https://wa.me/6281220022026?text=${encodeURIComponent(greeting)}`, '_blank');
  };

  const handlePackageClick = (pkgType: 'SMA' | 'Mahasiswa') => {
    const msg = lang === 'id'
      ? `Halo Sanidin! Saya ingin mendaftar *Paket Belajar ${pkgType === 'SMA' ? 'Siswa SMA' : 'Mahasiswa'}*. Mohon informasi ketersediaan jadwal terdekat dan tatacara pendaftarannya.`
      : `Hello Sanidin! I would like to register for the *${pkgType === 'SMA' ? 'High School Student Package' : 'University Student Package'}*. Please share the nearest available session schedule and registration details.`;
    window.open(`https://wa.me/6281220022026?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-400 selection:text-blue-950">
      
      {/* 1. NAVBAR SECTION */}
      <header className="sticky top-0 z-50 bg-[#0037A5] text-white shadow-lg border-b border-blue-800/60 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand & Pure CSS Geometric Fibonacci Tree Logo */}
            <a href="#home" className="flex items-center gap-3.5 group focus:outline-none">
              <div 
                className="fibonacci-tree-logo" 
                title="Logo Sanidin - Segitiga Geometris Fibonacci"
                aria-label="Sanidin Geometric Fibonacci Tree Logo"
              >
                <div className="tree-spark"></div>
                {/* Fibonacci Tier 1 */}
                <div className="tree-layer-wrap tree-tier-1">
                  <div className="facet-left"></div>
                  <div className="facet-right"></div>
                </div>
                {/* Fibonacci Tier 2 */}
                <div className="tree-layer-wrap tree-tier-2">
                  <div className="facet-left"></div>
                  <div className="facet-right"></div>
                </div>
                {/* Fibonacci Tier 3 */}
                <div className="tree-layer-wrap tree-tier-3">
                  <div className="facet-left"></div>
                  <div className="facet-right"></div>
                </div>
                {/* Fibonacci Tier 4 */}
                <div className="tree-layer-wrap tree-tier-4">
                  <div className="facet-left"></div>
                  <div className="facet-right"></div>
                </div>
                {/* Pure CSS Geometric Base */}
                <div className="tree-trunk"></div>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  Sanidin
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-blue-200 font-semibold -mt-1">
                  Bimbel Akuntansi Privat
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
              <a href="#home" className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-amber-300 hover:bg-white/10 transition">
                {t.nav.home}
              </a>
              <a href="#benefit" className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-amber-300 hover:bg-white/10 transition">
                {t.nav.benefit}
              </a>
              <a href="#prestasi" className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-amber-300 hover:bg-white/10 transition">
                {t.nav.prestasi}
              </a>
              <a href="#paket" className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-amber-300 hover:bg-white/10 transition">
                {t.nav.paket}
              </a>
              <a href="#faq" className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-amber-300 hover:bg-white/10 transition">
                {t.nav.faq}
              </a>
              <a href="#kontak" className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-amber-300 hover:bg-white/10 transition">
                {t.nav.kontak}
              </a>
            </nav>

            {/* Right Tools: Bilingual Switcher & CTA */}
            <div className="hidden sm:flex items-center gap-4">
              
              {/* Bilingual Switcher (ID / EN) Toggle Button */}
              <div className="flex items-center bg-blue-900/90 p-1 rounded-full border border-blue-600/50 shadow-inner">
                <button
                  type="button"
                  onClick={() => setLang('id')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 flex items-center gap-1 ${
                    lang === 'id'
                      ? 'bg-amber-400 text-blue-950 shadow-md font-extrabold scale-105'
                      : 'text-blue-200 hover:text-white'
                  }`}
                  aria-label="Ganti ke Bahasa Indonesia"
                >
                  <span>🇮🇩</span> ID
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 flex items-center gap-1 ${
                    lang === 'en'
                      ? 'bg-amber-400 text-blue-950 shadow-md font-extrabold scale-105'
                      : 'text-blue-200 hover:text-white'
                  }`}
                  aria-label="Switch to English"
                >
                  <span>🇬🇧</span> EN
                </button>
              </div>

              {/* Free Consultation Nav CTA */}
              <a
                href={getWhatsAppUrl(lang === 'id' ? 'Halo Sanidin! Saya ingin konsultasi jadwal les akuntansi gratis.' : 'Hello Sanidin! I would like to have a free tutoring consultation.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-blue-950 font-bold px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 text-sm"
              >
                <MessageCircle className="w-4 h-4 text-blue-950" />
                <span>{t.nav.ctaButton}</span>
              </a>
            </div>

            {/* Mobile Actions: Language + Hamburger */}
            <div className="flex items-center gap-2 sm:hidden">
              <div className="flex items-center bg-blue-900/90 p-0.5 rounded-full border border-blue-600/50">
                <button
                  type="button"
                  onClick={() => setLang('id')}
                  className={`px-2 py-1 text-xs font-bold rounded-full ${lang === 'id' ? 'bg-amber-400 text-blue-950' : 'text-blue-200'}`}
                >
                  ID
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-2 py-1 text-xs font-bold rounded-full ${lang === 'en' ? 'bg-amber-400 text-blue-950' : 'text-blue-200'}`}
                >
                  EN
                </button>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:bg-blue-800 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#002e8a] border-t border-blue-700/80 px-4 pt-3 pb-6 space-y-3">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700"
            >
              {t.nav.home}
            </a>
            <a
              href="#benefit"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700"
            >
              {t.nav.benefit}
            </a>
            <a
              href="#prestasi"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700"
            >
              {t.nav.prestasi}
            </a>
            <a
              href="#paket"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700"
            >
              {t.nav.paket}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700"
            >
              {t.nav.faq}
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700"
            >
              {t.nav.kontak}
            </a>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold px-4 py-3 rounded-xl shadow text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.nav.ctaButton}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION - Clean, High-Credibility Academic Design */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#0037A5] via-[#002f8f] to-[#002266] text-white pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-amber-400/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-blue-400/20 blur-3xl"></div>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content: Authoritative Typography & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t.hero.tagline}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.14] text-white">
                {t.hero.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
                {t.hero.subtitle}
              </p>

              {/* Primary & Secondary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                {/* Yellow CTA Button with subtle hover elevation */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-blue-950 font-extrabold text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-amber-400/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 pulse-gold"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary Button */}
                <a
                  href="#paket"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-6 py-4 rounded-2xl border border-white/20 backdrop-blur-md transition hover:border-amber-400/40"
                >
                  <span>{t.hero.ctaSecondary}</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>

              {/* Social Proof & Trust Strip */}
              <div className="pt-6 border-t border-blue-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-blue-200">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-amber-400 text-blue-950 font-black flex items-center justify-center text-[10px] ring-2 ring-[#0037A5]">
                      RP
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-200 text-blue-950 font-black flex items-center justify-center text-[10px] ring-2 ring-[#0037A5]">
                      AL
                    </div>
                    <div className="w-8 h-8 rounded-full bg-amber-300 text-blue-950 font-black flex items-center justify-center text-[10px] ring-2 ring-[#0037A5]">
                      DA
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white text-blue-950 font-black flex items-center justify-center text-[9px] ring-2 ring-[#0037A5]">
                      +500
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1 text-amber-300">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                      <span className="font-extrabold text-white text-xs ml-1">4.9 / 5.0</span>
                    </div>
                    <span className="text-[11px] text-blue-200 font-medium">
                      {lang === 'id' ? '150+ Ulasan Terverifikasi Siswa' : '150+ Verified Student Reviews'}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-blue-100">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {lang === 'id' ? '1-on-1 Eksklusif' : '1-on-1 Mentorship'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-300" />
                    {lang === 'id' ? 'Bebas Tanya Tugas' : 'Assignment Help'}
                  </span>
                </div>
              </div>

              {/* Quick Stats Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-blue-800/60 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">{t.hero.stat1Val}</div>
                  <div className="text-xs sm:text-sm text-blue-200 font-medium">{t.hero.stat1Label}</div>
                </div>
                <div className="text-center lg:text-left border-x border-blue-800/80 px-2">
                  <div className="text-2xl sm:text-3xl font-black text-white">{t.hero.stat2Val}</div>
                  <div className="text-xs sm:text-sm text-blue-200 font-medium">{t.hero.stat2Label}</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">{t.hero.stat3Val}</div>
                  <div className="text-xs sm:text-sm text-blue-200 font-medium">{t.hero.stat3Label}</div>
                </div>
              </div>

            </div>

            {/* Right Hero Visual: Executive Accounting Ledger Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl text-slate-800 border-2 border-slate-100 hover:border-amber-400 transition-all duration-300">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0037A5] text-amber-300 flex items-center justify-center font-bold shadow-md">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                        {lang === 'id' ? 'Buku Besar & Neraca Akuntansi' : 'Interactive Accounting Ledger'}
                      </h2>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {lang === 'id' ? 'Konsep Double-Entry Mudah Dipahami' : 'Intuitive Double-Entry Bookkeeping'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Static Equilibrium Scale Badge */}
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-blue-950 flex items-center justify-center shadow-xs" title="Neraca Seimbang">
                    <Scale className="w-5 h-5" />
                  </div>
                </div>

                {/* Scenario Selector Tabs */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                      {lang === 'id' ? 'Pilih Contoh Transaksi:' : 'Select Sample Transaction:'}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleSelectScenario((activeScenarioIdx + 1) % ledgerScenarios.length)}
                      className="text-[10px] text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>{lang === 'id' ? 'Ganti Transaksi' : 'Next Entry'}</span>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-1.5">
                    {ledgerScenarios.map((sc, scIdx) => (
                      <button
                        key={sc.id}
                        type="button"
                        onClick={() => handleSelectScenario(scIdx)}
                        className={`px-2 py-2 rounded-xl text-[11px] font-bold transition-all text-center truncate ${
                          activeScenarioIdx === scIdx
                            ? 'bg-[#0037A5] text-white shadow-sm ring-2 ring-amber-400'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {lang === 'id' ? sc.nameId.split('.')[1] : sc.nameEn.split('.')[1]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dynamic Balance Equation Display */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 p-4 rounded-2xl border border-blue-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider">
                      {lang === 'id' ? 'Persamaan Akuntansi' : 'Accounting Equation'}
                    </span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-amber-400/20 text-amber-900 border border-amber-300">
                      {lang === 'id' ? activeScenario.conceptBadgeId : activeScenario.conceptBadgeEn}
                    </span>
                  </div>
                  
                  {/* Two Columns: Assets (Debit) & Liabilities + Equity (Credit) */}
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-white p-3 rounded-xl shadow-xs border border-blue-200/80">
                      <span className="text-[10px] font-bold text-blue-700 block uppercase">
                        {lang === 'id' ? 'Aset (Aktiva)' : 'Assets'}
                      </span>
                      <span className="text-base sm:text-lg font-black text-slate-900 block">
                        Rp {activeScenario.assets.toLocaleString('id-ID')}
                      </span>
                      <span className="text-[10px] text-emerald-600 font-bold block">Debit [Dr] [+]</span>
                    </div>

                    <div className="bg-white p-3 rounded-xl shadow-xs border border-blue-200/80">
                      <span className="text-[10px] font-bold text-amber-600 block uppercase">
                        {lang === 'id' ? 'Kewajiban + Ekuitas' : 'Liabilities + Equity'}
                      </span>
                      <span className="text-base sm:text-lg font-black text-slate-900 block">
                        Rp {activeScenario.liabEquity.toLocaleString('id-ID')}
                      </span>
                      <span className="text-[10px] text-emerald-600 font-bold block">Kredit [Cr] [+]</span>
                    </div>
                  </div>

                  {/* Double-Entry Journal Breakdown Row */}
                  <div className="bg-white/90 p-2.5 rounded-xl border border-blue-200 text-xs font-mono space-y-1">
                    <div className="text-[10px] text-slate-400 font-sans font-semibold uppercase tracking-wider">
                      {lang === 'id' ? 'Ayat Jurnal Umum (Double-Entry):' : 'General Journal Entry:'}
                    </div>
                    <div className="flex justify-between text-blue-900 font-bold">
                      <span>• {activeScenario.drAccount}</span>
                      <span className="text-emerald-700 font-extrabold">{activeScenario.drAmount}</span>
                    </div>
                    <div className="flex justify-between text-slate-700 font-bold pl-4">
                      <span>↳ {activeScenario.crAccount}</span>
                      <span className="text-amber-700 font-extrabold">{activeScenario.crAmount}</span>
                    </div>
                  </div>

                  {/* Plain Language Analysis */}
                  <div className="text-[11px] text-slate-600 bg-white/70 p-2 rounded-lg border border-blue-100">
                    <span className="font-semibold text-blue-950">💡 {lang === 'id' ? 'Penjelasan Tutor:' : 'Tutor Insight:'} </span>
                    {lang === 'id' ? activeScenario.analysisId : activeScenario.analysisEn}
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center justify-between px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold border border-emerald-200">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Status Neraca:
                    </span>
                    <span className="tracking-wide text-[11px] sm:text-xs text-emerald-700">
                      {t.hero.debitCreditBalance}
                    </span>
                  </div>
                </div>

                {/* Target Audience Badges */}
                <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap gap-2 items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-900 px-2.5 py-1 rounded-lg text-[11px] font-bold">
                      <School className="w-3 h-3 text-blue-700" />
                      SMA/SMK
                    </span>
                    <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 px-2.5 py-1 rounded-lg text-[11px] font-bold">
                      <GraduationCap className="w-3 h-3 text-amber-700" />
                      Mahasiswa
                    </span>
                  </div>
                  
                  <span className="text-[10px] text-slate-500 font-semibold">
                    100% Privat 1-on-1
                  </span>
                </div>

                {/* Instant Action inside Card */}
                <div className="mt-4">
                  <a
                    href={getWhatsAppUrl(lang === 'id' ? `Halo Sanidin! Saya ingin konsultasi les privat untuk topik materi ${activeScenario.nameId}. Mohon info ketersediaan tutor.` : `Hello Sanidin! I would like to consult private tutoring for topic ${activeScenario.nameEn}. Please share tutor availability.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#0037A5] hover:bg-blue-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition shadow-md"
                  >
                    <span>{lang === 'id' ? 'Konsultasi Topik Ini via WhatsApp' : 'Consult This Topic via WhatsApp'}</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BENEFIT SECTION (3 Kartu Wajib) */}
      <section id="benefit" className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-[#0037A5] font-bold text-xs uppercase tracking-wider mb-3">
              {t.benefits.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.benefits.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              {t.benefits.subtitle}
            </p>
          </div>

          {/* 3 Benefit Cards with Staggered Scroll Reveal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Kartu 1: Kurikulum Fleksibel */}
            <div className="reveal-fade-up bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-500 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-[#0037A5] transition-colors flex items-center justify-center text-[#0037A5] group-hover:text-amber-400 mb-6 shadow-inner">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#0037A5] transition-colors">
                  {t.benefits.card1Title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {t.benefits.card1Desc}
                </p>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                {t.benefits.card1Points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kartu 2: Pendampingan Intensif */}
            <div 
              style={{ transitionDelay: '150ms' }}
              className="reveal-fade-up bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-amber-400 relative group flex flex-col justify-between"
            >
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-blue-950 font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow">
                {lang === 'id' ? 'Favorit Siswa' : 'Student Favorite'}
              </div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-amber-400 transition-colors flex items-center justify-center text-amber-600 group-hover:text-blue-950 mb-6 shadow-inner">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#0037A5] transition-colors">
                  {t.benefits.card2Title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {t.benefits.card2Desc}
                </p>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                {t.benefits.card2Points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kartu 3: Tips & Trik Praktis */}
            <div 
              style={{ transitionDelay: '300ms' }}
              className="reveal-fade-up bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-500 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-[#0037A5] transition-colors flex items-center justify-center text-[#0037A5] group-hover:text-amber-400 mb-6 shadow-inner">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#0037A5] transition-colors">
                  {t.benefits.card3Title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {t.benefits.card3Desc}
                </p>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                {t.benefits.card3Points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Quick Learning Methodology Banner with Scroll Reveal */}
          <div className="reveal-fade-up mt-16 bg-gradient-to-r from-blue-900 to-[#0037A5] rounded-3xl p-8 sm:p-10 text-white shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300 bg-blue-950/60 px-3 py-1 rounded-full">
                {t.workflow.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-3">{t.workflow.title}</h3>
              <p className="text-sm sm:text-base text-blue-100 mt-2">{t.workflow.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="reveal-fade-up bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-sm">
                <div className="text-amber-400 font-extrabold text-xl mb-2">01</div>
                <h4 className="font-bold text-base text-white mb-2">{t.workflow.step1Title}</h4>
                <p className="text-xs text-blue-100/80 leading-relaxed">{t.workflow.step1Desc}</p>
              </div>
              <div style={{ transitionDelay: '100ms' }} className="reveal-fade-up bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-sm">
                <div className="text-amber-400 font-extrabold text-xl mb-2">02</div>
                <h4 className="font-bold text-base text-white mb-2">{t.workflow.step2Title}</h4>
                <p className="text-xs text-blue-100/80 leading-relaxed">{t.workflow.step2Desc}</p>
              </div>
              <div style={{ transitionDelay: '200ms' }} className="reveal-fade-up bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-sm">
                <div className="text-amber-400 font-extrabold text-xl mb-2">03</div>
                <h4 className="font-bold text-base text-white mb-2">{t.workflow.step3Title}</h4>
                <p className="text-xs text-blue-100/80 leading-relaxed">{t.workflow.step3Desc}</p>
              </div>
              <div style={{ transitionDelay: '300ms' }} className="reveal-fade-up bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-sm">
                <div className="text-amber-400 font-extrabold text-xl mb-2">04</div>
                <h4 className="font-bold text-base text-white mb-2">{t.workflow.step4Title}</h4>
                <p className="text-xs text-blue-100/80 leading-relaxed">{t.workflow.step4Desc}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS SECTION (Pencapaian & Statistik) with Animated Counters */}
      <section id="prestasi" className="py-20 bg-gradient-to-b from-[#002266] via-[#0037A5] to-[#001f5c] text-white relative overflow-hidden">
        {/* Subtle decorative glow circles */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/80 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-inner">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{t.achievements.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {t.achievements.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal">
              {t.achievements.subtitle}
            </p>
          </div>

          {/* 4 Animated Counter Cards Grid with Slide-in */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Card 1: Satisfied Students */}
            <div 
              style={{ transitionDelay: '80ms' }}
              className="reveal-slide-left bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-3xl p-7 border border-white/15 hover:border-amber-400/70 transition-all duration-300 group shadow-lg flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-blue-950 flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                    <Users className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-[11px] font-extrabold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/15 text-amber-300 border border-white/10">
                    {lang === 'id' ? 'Komunitas' : 'Community'}
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-white group-hover:text-amber-300 transition-colors">
                  <AnimatedCounter
                    value={t.achievements.stats.satisfiedStudents.value}
                    suffix={t.achievements.stats.satisfiedStudents.suffix}
                    formatThousands
                    duration={2000}
                  />
                </div>

                <h3 className="text-base font-bold text-amber-200 mt-2">
                  {t.achievements.stats.satisfiedStudents.label}
                </h3>
              </div>

              <p className="text-xs text-blue-100/80 leading-relaxed mt-4 pt-4 border-t border-white/10">
                {t.achievements.stats.satisfiedStudents.description}
              </p>
            </div>

            {/* Card 2: Sessions Conducted */}
            <div 
              style={{ transitionDelay: '160ms' }}
              className="reveal-slide-left bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-3xl p-7 border border-white/15 hover:border-amber-400/70 transition-all duration-300 group shadow-lg flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-amber-300 flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform border border-blue-400/40">
                    <GraduationCap className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-[11px] font-extrabold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/15 text-amber-300 border border-white/10">
                    {lang === 'id' ? 'Jam Bimbingan' : 'Study Hours'}
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-white group-hover:text-amber-300 transition-colors">
                  <AnimatedCounter
                    value={t.achievements.stats.sessionsConducted.value}
                    suffix={t.achievements.stats.sessionsConducted.suffix}
                    formatThousands
                    duration={2200}
                  />
                </div>

                <h3 className="text-base font-bold text-amber-200 mt-2">
                  {t.achievements.stats.sessionsConducted.label}
                </h3>
              </div>

              <p className="text-xs text-blue-100/80 leading-relaxed mt-4 pt-4 border-t border-white/10">
                {t.achievements.stats.sessionsConducted.description}
              </p>
            </div>

            {/* Card 3: Average Exam Score Increase */}
            <div 
              style={{ transitionDelay: '240ms' }}
              className="reveal-slide-right bg-gradient-to-b from-white/15 to-white/10 hover:from-white/20 hover:to-white/15 backdrop-blur-md rounded-3xl p-7 border-2 border-amber-400 shadow-xl group flex flex-col justify-between transform hover:-translate-y-1 relative"
            >
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-blue-950 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow">
                {lang === 'id' ? 'Hasil Teruji' : 'Proven Impact'}
              </div>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-900 flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                    <TrendingUp className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <span className="text-[11px] font-extrabold tracking-wide uppercase px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    {lang === 'id' ? 'Performa Naik' : 'Score Surge'}
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-amber-300">
                  <AnimatedCounter
                    value={t.achievements.stats.scoreIncrease.value}
                    prefix={t.achievements.stats.scoreIncrease.prefix}
                    suffix={t.achievements.stats.scoreIncrease.suffix}
                    duration={1800}
                  />
                </div>

                <h3 className="text-base font-bold text-white mt-2">
                  {t.achievements.stats.scoreIncrease.label}
                </h3>
              </div>

              <p className="text-xs text-blue-100 leading-relaxed mt-4 pt-4 border-t border-white/10">
                {t.achievements.stats.scoreIncrease.description}
              </p>
            </div>

            {/* Card 4: Satisfaction Rate */}
            <div 
              style={{ transitionDelay: '320ms' }}
              className="reveal-slide-right bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-3xl p-7 border border-white/15 hover:border-amber-400/70 transition-all duration-300 group shadow-lg flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-blue-950 flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-[11px] font-extrabold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/15 text-amber-300 border border-white/10">
                    ★ 5.0 Rating
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-white group-hover:text-amber-300 transition-colors">
                  <AnimatedCounter
                    value={t.achievements.stats.satisfactionRate.value}
                    suffix={t.achievements.stats.satisfactionRate.suffix}
                    duration={1900}
                  />
                </div>

                <h3 className="text-base font-bold text-amber-200 mt-2">
                  {t.achievements.stats.satisfactionRate.label}
                </h3>
              </div>

              <p className="text-xs text-blue-100/80 leading-relaxed mt-4 pt-4 border-t border-white/10">
                {t.achievements.stats.satisfactionRate.description}
              </p>
            </div>

          </div>

          {/* Bottom Trust Assurance & Quick Link */}
          <div className="reveal-fade-up mt-14 p-6 sm:p-8 rounded-3xl bg-blue-950/60 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-blue-950 flex items-center justify-center flex-shrink-0 shadow-md">
                <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {t.achievements.highlightBadge}
                </h4>
                <p className="text-xs sm:text-sm text-blue-200 mt-0.5">
                  {lang === 'id'
                    ? 'Kurikulum fleksibel disesuaikan dengan kebutuhan ujian sekolah, UTBK, maupun tugas kuliah Anda.'
                    : 'Personalized curriculum matched exactly with your school tests, college finals, and lab tasks.'}
                </p>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(lang === 'id' ? 'Halo Sanidin! Saya melihat statistik prestasi siswa Sanidin dan ingin konsultasi les privat untuk persiapan ujian.' : 'Hello Sanidin! I saw your tutoring achievements and would like to consult about exam preparation sessions.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-blue-950 font-extrabold px-6 py-3.5 rounded-2xl shadow-lg transition transform hover:-translate-y-0.5 text-sm flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{lang === 'id' ? 'Konsultasi Sekarang' : 'Consult Now'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* 4. PAKET BELAJAR SECTION (2 Kartu Harga: Siswa SMA & Mahasiswa) */}
      <section id="paket" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="reveal-fade-up text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-xs uppercase tracking-wider mb-3">
              {t.packages.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.packages.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              {t.packages.subtitle}
            </p>
          </div>

          {/* 2 Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            
            {/* KARTU 1: Paket Siswa SMA */}
            <div className="reveal-slide-left bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 sm:p-10 border-2 border-slate-200 hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between relative">
              <div className="absolute top-6 right-6">
                <span className="bg-blue-100 text-blue-900 text-xs font-bold px-3 py-1.5 rounded-full">
                  {t.packages.smaBadge}
                </span>
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0037A5] flex items-center justify-center mb-4">
                  <School className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{t.packages.smaTitle}</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {t.packages.smaDesc}
                </p>

                {/* Price Display */}
                <div className="bg-blue-50/70 p-4 rounded-2xl mb-6 border border-blue-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-[#0037A5]">{t.packages.smaPrice}</span>
                    <span className="text-xs text-slate-500 font-semibold">{t.packages.smaPeriod}</span>
                  </div>
                  <div className="text-[11px] text-blue-700 font-semibold mt-1">
                    {lang === 'id' ? '✓ Durasi 90 menit per sesi • Privat 1-on-1' : '✓ 90 mins per session • 1-on-1 Mentorship'}
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    {lang === 'id' ? 'Cakupan Materi Paket SMA:' : 'High School Curriculum Covered:'}
                  </span>
                  {t.packages.smaFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Yellow CTA Button */}
              <div>
                <button
                  type="button"
                  onClick={() => handlePackageClick('SMA')}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-blue-950 font-extrabold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>{t.packages.smaCta}</span>
                </button>
              </div>
            </div>

            {/* KARTU 2: Paket Mahasiswa */}
            <div className="reveal-slide-right bg-gradient-to-b from-blue-900 via-[#0037A5] to-blue-950 rounded-3xl p-8 sm:p-10 border-2 border-amber-400 text-white transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between relative">
              <div className="absolute top-6 right-6">
                <span className="bg-amber-400 text-blue-950 text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow">
                  {t.packages.mhsBadge}
                </span>
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 text-amber-300 flex items-center justify-center mb-4 border border-white/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">{t.packages.mhsTitle}</h3>
                <p className="text-sm text-blue-100/90 mb-6 leading-relaxed">
                  {t.packages.mhsDesc}
                </p>

                {/* Price Display */}
                <div className="bg-white/10 p-4 rounded-2xl mb-6 border border-white/20 backdrop-blur-sm">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-amber-400">{t.packages.mhsPrice}</span>
                    <span className="text-xs text-blue-200 font-semibold">{t.packages.mhsPeriod}</span>
                  </div>
                  <div className="text-[11px] text-amber-200 font-semibold mt-1">
                    {lang === 'id' ? '✓ Termasuk konsultasi tugas lab & bedah kisi-kisi UTS/UAS' : '✓ Includes lab assignment consults & exam revisions'}
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300/80 block">
                    {lang === 'id' ? 'Cakupan Materi Paket Mahasiswa:' : 'University Modules Covered:'}
                  </span>
                  {t.packages.mhsFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-blue-100">
                      <div className="w-4 h-4 rounded-full bg-amber-400 text-blue-950 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Yellow CTA Button */}
              <div>
                <button
                  type="button"
                  onClick={() => handlePackageClick('Mahasiswa')}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-blue-950 font-extrabold py-4 px-6 rounded-2xl shadow-lg hover:shadow-amber-400/20 transition transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>{t.packages.mhsCta}</span>
                </button>
              </div>
            </div>

          </div>

          <p className="text-center text-xs sm:text-sm text-slate-500 mt-8">
            {t.packages.monthlyNote} • <span className="font-semibold text-[#0037A5]">{t.packages.packageGuarantee}</span>
          </p>

          {/* Interactive Calculator Section with Scroll Reveal */}
          <div className="reveal-fade-up mt-16 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#0037A5] text-amber-400 flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">{t.calculator.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500">{t.calculator.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Level Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {t.calculator.levelLabel}
                </label>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setCalcLevel('SMA')}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition ${
                      calcLevel === 'SMA' ? 'bg-[#0037A5] text-white border-[#0037A5]' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {t.calculator.smaOption}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcLevel('Mahasiswa')}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition ${
                      calcLevel === 'Mahasiswa' ? 'bg-[#0037A5] text-white border-[#0037A5]' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {t.calculator.mhsOption}
                  </button>
                </div>
              </div>

              {/* Sessions Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {t.calculator.sessionLabel}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[2, 4, 8].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setCalcSessions(s)}
                      className={`py-2 rounded-xl text-xs font-bold border transition ${
                        calcSessions === s ? 'bg-amber-400 text-blue-950 border-amber-400 font-extrabold shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {s} Sesi
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t.calculator.modeLabel}
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setCalcMode('Online')}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-semibold border transition ${
                        calcMode === 'Online' ? 'bg-blue-100 text-blue-900 border-blue-300 font-bold' : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      Online
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcMode('Offline')}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-semibold border transition ${
                        calcMode === 'Offline' ? 'bg-blue-100 text-blue-900 border-blue-300 font-bold' : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      Tatap Muka
                    </button>
                  </div>
                </div>
              </div>

              {/* Total Calculation & CTA */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-medium text-slate-500 block">{t.calculator.estTotal}</span>
                  <div className="text-2xl font-black text-[#0037A5] mt-1">
                    Rp {totalEstimatedPrice.toLocaleString('id-ID')}
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-1">
                    {calcSessions} Sesi @ 90 menit ({calcMode})
                  </span>
                </div>

                <a
                  href={getWhatsAppUrl(`Halo Sanidin! Saya simulasi paket ${calcLevel} sebanyak ${calcSessions} sesi (${calcMode}) dengan estimasi biaya Rp ${totalEstimatedPrice.toLocaleString('id-ID')}. Mohon info ketersediaan slot tutornya ya!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-xs py-2.5 px-4 rounded-xl shadow transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.calculator.consultNow}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION - Interactive Carousel Auto-Rotating Every 5 Seconds */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 overflow-hidden relative">
        {/* Subtle decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="reveal-fade-up text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#0037A5] bg-blue-100 px-3 py-1 rounded-full">
              {t.testimonials.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              {t.testimonials.title}
            </h2>
            <p className="mt-2 text-base text-slate-600">
              {t.testimonials.subtitle}
            </p>
          </div>

          {/* Carousel Container with Pause-on-Hover */}
          <div
            className="reveal-fade-up max-w-4xl mx-auto relative group"
            onMouseEnter={() => carousel.setIsPaused(true)}
            onMouseLeave={() => carousel.setIsPaused(false)}
            aria-roledescription="carousel"
            aria-label="Student Testimonials Carousel"
          >
            {/* Top Carousel Status & Control Bar */}
            <div className="flex items-center justify-between mb-4 px-2 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full transition-colors ${
                    carousel.isPaused ? 'bg-amber-400 animate-pulse' : 'bg-emerald-500'
                  }`}
                ></span>
                <span>
                  {carousel.isPaused
                    ? (lang === 'id' ? 'Auto-rotasi Dijeda (Kursor di atas kartu)' : 'Auto-rotate Paused (Hovered)')
                    : (lang === 'id' ? 'Auto-rotasi aktif: berganti tiap 5 detik' : 'Auto-rotating: switches every 5s')}
                </span>
              </div>

              {/* Pause/Play Toggle & Counter */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => carousel.setIsPaused(!carousel.isPaused)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition shadow-xs text-xs font-medium"
                  aria-label={carousel.isPaused ? 'Lanjutkan auto-rotate' : 'Jeda auto-rotate'}
                  title={carousel.isPaused ? 'Play' : 'Pause'}
                >
                  {carousel.isPaused ? (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current text-[#0037A5]" />
                      <span>{lang === 'id' ? 'Lanjutkan' : 'Play'}</span>
                    </>
                  ) : (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current text-slate-600" />
                      <span>{lang === 'id' ? 'Jeda' : 'Pause'}</span>
                    </>
                  )}
                </button>
                <span className="text-slate-400 font-mono">
                  {carousel.currentIndex + 1} / {t.testimonials.items.length}
                </span>
              </div>
            </div>

            {/* Main Interactive Carousel Card */}
            <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-slate-200/90 hover:border-[#0037A5] transition-all duration-300">
              
              {/* Background decorative quote watermark */}
              <Quote className="absolute right-8 top-8 w-24 h-24 text-blue-50/90 pointer-events-none -z-0" />

              {/* Active Testimonial Content with smooth key transition */}
              <div key={carousel.currentIndex} className="relative z-10 space-y-6 animate-fadeIn">
                
                {/* Header: Stars & Grade Tag */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-500 ml-1.5">(5.0/5.0)</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-800 border border-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    {t.testimonials.items[carousel.currentIndex].grade}
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="text-slate-800 text-lg sm:text-2xl font-semibold leading-relaxed sm:leading-snug min-h-[96px] flex items-center">
                  "{t.testimonials.items[carousel.currentIndex].quote}"
                </blockquote>

                {/* Author Info */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    {/* Dynamic Avatar Badge */}
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#0037A5] to-blue-800 text-amber-300 font-extrabold text-lg flex items-center justify-center shadow-md">
                      {t.testimonials.items[carousel.currentIndex].name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
                        {t.testimonials.items[carousel.currentIndex].name}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-[#0037A5]">
                        {t.testimonials.items[carousel.currentIndex].role}
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        {t.testimonials.items[carousel.currentIndex].institution}
                      </p>
                    </div>
                  </div>

                  {/* Verified Student Badge */}
                  <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>{lang === 'id' ? 'Siswa Privat Terverifikasi' : 'Verified Private Student'}</span>
                  </div>
                </div>

              </div>

              {/* Smooth 5-Second Timer Progress Bar at the bottom of the card */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-100 rounded-b-3xl overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-amber-400 to-[#0037A5] transition-all duration-75 ease-linear ${
                    carousel.isPaused ? 'opacity-40' : 'opacity-100'
                  }`}
                  style={{ width: `${carousel.progress}%` }}
                ></div>
              </div>

            </div>

            {/* Carousel Navigation Arrow Buttons */}
            <button
              type="button"
              onClick={carousel.prev}
              className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white text-slate-800 hover:text-[#0037A5] hover:bg-amber-400 border border-slate-200 shadow-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 z-20 focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            <button
              type="button"
              onClick={carousel.next}
              className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white text-slate-800 hover:text-[#0037A5] hover:bg-amber-400 border border-slate-200 shadow-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 z-20 focus:outline-none"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Interactive Carousel Pagination Indicators (Dots / Pills) */}
            <div className="flex items-center justify-center gap-2.5 mt-6">
              {t.testimonials.items.map((_, index) => {
                const isActive = carousel.currentIndex === index;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => carousel.goTo(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                      isActive
                        ? 'w-9 bg-[#0037A5] shadow-md ring-2 ring-amber-400 ring-offset-2'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    title={`Testimonial ${index + 1}`}
                  />
                );
              })}
            </div>

            {/* Thumbnail Quick Preview Row below carousel */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mt-8">
              {t.testimonials.items.map((item, index) => {
                const isActive = carousel.currentIndex === index;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => carousel.goTo(index)}
                    className={`text-left p-2.5 rounded-2xl border transition-all text-xs ${
                      isActive
                        ? 'bg-blue-50 border-[#0037A5] shadow-xs ring-1 ring-[#0037A5]'
                        : 'bg-white/70 border-slate-200 hover:bg-white text-slate-600'
                    }`}
                  >
                    <div className="font-extrabold truncate text-slate-900">{item.name}</div>
                    <div className="text-[10px] text-slate-500 truncate">{item.institution}</div>
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal-fade-up text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#0037A5] bg-blue-100 px-3 py-1 rounded-full">
              {t.faq.tag}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
              {t.faq.title}
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              {t.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {t.faq.items.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  style={{ transitionDelay: `${index * 80}ms` }}
                  className="reveal-fade-up border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left font-bold text-slate-900 flex justify-between items-center hover:bg-slate-100/80 transition"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180 text-[#0037A5]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. KONTAK SECTION */}
      <section id="kontak" className="py-20 bg-gradient-to-b from-slate-50 to-blue-50/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal-fade-up text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#0037A5] bg-blue-100 px-3 py-1 rounded-full">
              {t.contact.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              {t.contact.title}
            </h2>
            <p className="mt-2 text-base text-slate-600">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
            
            {/* Direct Contact Cards */}
            <div className="reveal-slide-left lg:col-span-5 space-y-5">
              
              {/* WhatsApp direct card */}
              <div className="bg-[#0037A5] text-white p-6 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl"></div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400 text-blue-950 flex items-center justify-center font-bold">
                    <MessageCircle className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-white">{t.contact.directChat}</h3>
                    <p className="text-xs text-blue-200">{t.contact.chatDesc}</p>
                  </div>
                </div>
                <p className="text-xs text-blue-100 mb-5 leading-relaxed">
                  {lang === 'id' 
                    ? 'Tanyakan ketersediaan tutor, silabus sekolah/kampus, atau langsung daftar sesi privat Anda.'
                    : 'Ask about tutor availability, your school syllabus, or book your private tutoring sessions directly.'}
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-blue-950 font-extrabold py-3.5 px-4 rounded-xl text-sm shadow transition pulse-gold"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t.contact.buttonChat}</span>
                </a>
              </div>

              {/* Information List */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0037A5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">{t.contact.emailLabel}</span>
                    <span className="text-sm font-bold text-slate-800">{t.contact.emailValue}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0037A5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">{t.contact.locationLabel}</span>
                    <span className="text-sm font-bold text-slate-800">{t.contact.locationValue}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0037A5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">{t.contact.hoursLabel}</span>
                    <span className="text-sm font-bold text-slate-800">{t.contact.hoursValue}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Consultation Form */}
            <div className="reveal-slide-right lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-lg">
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">{t.contact.formTitle}</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                {lang === 'id' 
                  ? 'Isi formulir singkat ini untuk langsung terhubung ke WhatsApp tutor Sanidin dengan format pesan yang rapi.'
                  : 'Fill in this quick form to directly connect to Sanidin’s tutor on WhatsApp with an organized inquiry.'}
              </p>

              <form onSubmit={handleCustomSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.contact.formName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder={lang === 'id' ? 'Contoh: Naufal Akbar' : 'e.g. Naufal Akbar'}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0037A5] text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.formPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={studentPhone}
                      onChange={(e) => setStudentPhone(e.target.value)}
                      placeholder="0812xxxxxxxx"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0037A5] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.formLevel} *
                    </label>
                    <select
                      value={studentLevel}
                      onChange={(e) => setStudentLevel(e.target.value as 'SMA' | 'Mahasiswa')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0037A5] text-sm bg-white"
                    >
                      <option value="SMA">{lang === 'id' ? 'Siswa SMA / SMK' : 'High School Student'}</option>
                      <option value="Mahasiswa">{lang === 'id' ? 'Mahasiswa Kuliah' : 'University Undergrad'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.contact.formTopic}
                  </label>
                  <input
                    type="text"
                    value={studentTopic}
                    onChange={(e) => setStudentTopic(e.target.value)}
                    placeholder={lang === 'id' ? 'Contoh: Jurnal Penyesuaian, Laporan Laba Rugi, atau UAS AKM' : 'e.g. Adjusting Entries, Financial Statements, or Exam prep'}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0037A5] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-blue-950 font-extrabold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition text-base mt-2"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>{t.contact.formSubmit}</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#002266] text-white pt-14 pb-8 border-t-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-blue-800/80">
            
            {/* Col 1: Brand & Fibonacci CSS Logo */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="fibonacci-tree-logo" aria-hidden="true">
                  <div className="tree-spark"></div>
                  <div className="tree-layer-wrap tree-tier-1">
                    <div className="facet-left"></div>
                    <div className="facet-right"></div>
                  </div>
                  <div className="tree-layer-wrap tree-tier-2">
                    <div className="facet-left"></div>
                    <div className="facet-right"></div>
                  </div>
                  <div className="tree-layer-wrap tree-tier-3">
                    <div className="facet-left"></div>
                    <div className="facet-right"></div>
                  </div>
                  <div className="tree-layer-wrap tree-tier-4">
                    <div className="facet-left"></div>
                    <div className="facet-right"></div>
                  </div>
                  <div className="tree-trunk"></div>
                </div>

                <div>
                  <span className="text-2xl font-extrabold text-white tracking-tight">Sanidin</span>
                  <p className="text-[10px] text-amber-300 font-semibold uppercase tracking-wider">
                    Bimbel Akuntansi Privat
                  </p>
                </div>
              </div>
              <p className="text-xs text-blue-200 leading-relaxed">
                {t.footer.about}
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
                {t.footer.quickLinks}
              </h3>
              <ul className="space-y-2 text-xs text-blue-200">
                <li><a href="#home" className="hover:text-white transition">{t.nav.home}</a></li>
                <li><a href="#benefit" className="hover:text-white transition">{t.nav.benefit}</a></li>
                <li><a href="#prestasi" className="hover:text-white transition">{t.nav.prestasi}</a></li>
                <li><a href="#paket" className="hover:text-white transition">{t.nav.paket}</a></li>
                <li><a href="#faq" className="hover:text-white transition">{t.nav.faq}</a></li>
                <li><a href="#kontak" className="hover:text-white transition">{t.nav.kontak}</a></li>
              </ul>
            </div>

            {/* Col 3: Focus Levels */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
                {t.footer.learningFocus}
              </h3>
              <ul className="space-y-2 text-xs text-blue-200">
                <li>• {lang === 'id' ? 'Akuntansi Perusahaan Jasa & Dagang' : 'Service & Merchandising Accounting'}</li>
                <li>• {lang === 'id' ? 'Jurnal Penyesuaian & Kertas Kerja' : 'Adjusting Entries & Worksheets'}</li>
                <li>• {lang === 'id' ? 'Pengantar Akuntansi Kampus (I & II)' : 'Introductory Financial Accounting'}</li>
                <li>• {lang === 'id' ? 'Akuntansi Keuangan Menengah (AKM)' : 'Intermediate Financial Accounting'}</li>
                <li>• {lang === 'id' ? 'Perpajakan Dasar & Rekonsiliasi Bank' : 'Taxation Fundamentals & Bank Recon'}</li>
              </ul>
            </div>

            {/* Col 4: Contact & Social */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
                {t.footer.contactUs}
              </h3>
              <div className="space-y-2.5 text-xs text-blue-200">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+62 812-2002-2026</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>halo.sanidin@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Bandung, Jawa Barat & Online</span>
                </p>
              </div>

              {/* Language quick switcher in footer too */}
              <div className="mt-5 flex items-center gap-2">
                <span className="text-xs text-blue-300 font-medium">Bahasa:</span>
                <button
                  type="button"
                  onClick={() => setLang('id')}
                  className={`px-2.5 py-1 text-xs rounded-md font-bold ${lang === 'id' ? 'bg-amber-400 text-blue-950' : 'bg-blue-900 text-blue-300'}`}
                >
                  ID
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-2.5 py-1 text-xs rounded-md font-bold ${lang === 'en' ? 'bg-amber-400 text-blue-950' : 'bg-blue-900 text-blue-300'}`}
                >
                  EN
                </button>
              </div>
            </div>

          </div>

          {/* Copyright: Mandatory text exact match "© 2026 Sammy Krizpy. All rights reserved." */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-300/80">
            <div>
              {t.footer.copyright}
            </div>
            <div className="mt-2 sm:mt-0 text-amber-400/90 font-medium">
              Bimbingan Belajar Akuntansi Privat Terpercaya
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

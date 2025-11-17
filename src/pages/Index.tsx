import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/components/ContactForm";
import { VideoSection } from "@/components/VideoSection";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { 
  Menu,
  X,
  ChevronDown,
  Mail,
  Linkedin,
  FileText,
  MapPin,
  Phone,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Zap,
  Database,
  Shield,
  Download,
  // Additional icons for skills
  Code2,
  BarChart3,
  LineChart,
  CircuitBoard,
  FileSpreadsheet,
  Package,
  BatteryCharging,
  Thermometer,
  Flame,
  Gauge,
  Search,
  ShieldCheck,
  BadgeCheck,
  FlaskConical,
  Car,
  GitBranch,
  Braces,
  BookText,
  Activity,
  Atom,
  Link,
  AlertTriangle,
  ClipboardList,
  Wrench
} from "lucide-react";
import myHeadshot from "../assets/my_headshot.jpg";
import myAvatar from "../assets/my_avatar.png";
import myVideo from "../assets/my_video.mp4";
import myCV from "../assets/Prabhasa_Javvaji_CV.pdf";
import infineonLogo from "../assets/infineon_logo.png";
import boschLogo from "../assets/bosch_logo.png";
import amritaLogo from "../assets/amrita_logo.png";
import othLogo from "../assets/Hochschule_Amberg-Weiden_Logo.png";

// Custom Xing Icon Component
const XingIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M18.188 0c-.517 0-.573.046-1.022.591l-4.48 5.81L9.75 4.8c-.485-.621-.57-.8-1.023-.8H4.38c-.517 0-.573.046-1.022.591L.01 9.21c-.267.346-.267.8 0 1.146L3.36 15.2c.449.545.505.591 1.022.591h4.346c.453 0 .538-.179 1.023-.8l2.936-1.591 4.48 5.81c.449.545.505.591 1.022.591h4.346c.517 0 .573-.046 1.022-.591L23.99 14.79c.267-.346.267-.8 0-1.146L19.64 8.8c-.449-.545-.505-.591-1.022-.591h-4.346c-.453 0-.538.179-1.023.8l-2.936 1.591-4.48-5.81C9.761.046 9.705 0 9.188 0H4.38z"/>
  </svg>
);

const PortfolioContent = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  // Load Devicon CSS once for brand icons
  useEffect(() => {
    const href = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css";
    const already = document.querySelector(`link[href="${href}"]`);
    if (!already) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  }, []);

  const navigationItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'education', label: t('nav.education') },
    { id: 'contact', label: t('nav.contact') }
  ];

  type SkillItem = { key: string; label: string };

  const buildTechnicalSkills = (lng: 'en' | 'de') => {
    const isEn = lng === 'en';
    const S = (key: string, en: string, de: string): SkillItem => ({
      key,
      label: isEn ? en : de
    });

    return {
      semiconductor: [
        S('advanced-semiconductor-packaging', 'Advanced Semiconductor Packaging', 'Fortgeschrittene Halbleiterverpackung'),
        S('advanced-interconnection-materials-research', 'Advanced Interconnection Materials Research', 'Forschung zu fortgeschrittenen Interconnection‑Materialien'),
        S('wire-bonding-die-attach-flip-chip', 'Wire bonding, Die attach, Flip chip technology', 'Drahtbonden, Die‑Attach, Flip‑Chip‑Technologie'),
        S('transient-liquid-phase-sintering', 'Transient Liquid Phase Sintering', 'Transiente Flüssigphasensinterung'),
        S('power-electronics-prototyping', 'Power Electronics Prototyping', 'Prototyping für Leistungselektronik'),
        S('thermal-and-rheology-analysis', 'Thermal Analysis and Rheology Analysis', 'Thermische Analyse und Rheologie'),
        S('microscopy-sam-sem-edx', 'Analytical Microscopy and Imaging systems (SAM,SEM,EDX)', 'Analytische Mikroskopie und Bildgebung (SAM, SEM, EDX)'),
        S('electrical-measurement-techniques', 'Electrical measurement devices and techniques', 'Elektrische Messgeräte und -verfahren'),
      ],
      testing: [
        S('emi-emc-validation', 'EMI/EMC Validation (BCI, Radiated Emissions/Immunity, ESD)', 'EMI/EMV‑Validierung (BCI, Emissionen/Immunität, ESD)'),
        S('standards-iso17025-cispr25-iso11452', 'ISO 17025, CISPR 25, ISO 11452 -1/2/4 Compliance', 'Konformität mit ISO 17025, CISPR 25, ISO 11452‑1/2/4'),
        S('rf-interference-analysis', 'RF interference analysis and root cause investigation', 'HF‑Störungsanalyse und Ursachenfindung'),
        S('automotive-electronics-testing', 'Automotive Electronics Testing', 'Automobil‑Elektroniktests'),
        S('failure-analysis-defect-characterization', 'Failure analysis and defect characterization', 'Fehleranalyse und Defektcharakterisierung'),
        S('networking-can-flexray-ethernet', 'Networking Protocols (CAN/FlexRay/Ethernet)', 'Netzwerkprotokolle (CAN/FlexRay/Ethernet)'),
        S('signal-integrity-analysis', 'Signal Integrity Analysis', 'Signalintegritätsanalyse'),
      ],
      programming: [
        S('python', 'Python', 'Python'),
        S('vba', 'VBA Development', 'VBA‑Entwicklung'),
        S('confluence', 'Confluence', 'Confluence'),
        S('tableau', 'Tableau', 'Tableau'),
        S('kicad', 'KiCAD Design', 'KiCad‑Design'),
        S('ltspice', 'LTSpice', 'LTspice'),
        S('matlab', 'MATLAB', 'MATLAB'),
        S('labview', 'LabVIEW', 'LabVIEW'),
        S('html5', 'HTML', 'HTML'),
        S('c', 'C Programming', 'C‑Programmierung'),
      ],
      quality: [
        S('fmea', 'FMEA (Failure Mode and Effects Analysis)', 'FMEA (Fehlermöglichkeits‑ und Einflussanalyse)'),
        S('mrb', 'MRB process (Material Review Board)', 'MRB‑Prozess (Material Review Board)'),
        S('spc-control-chart', 'Statistical Process Control (SPC)', 'Statistische Prozesslenkung (SPC)'),
        S('root-cause-analysis', 'Root Cause Analysis', 'Ursachenanalyse'),
        S('technical-documentation', 'Technical Documentation', 'Technische Dokumentation'),
        S('production-defect-capa', 'Production defect analysis and corrective action processes', 'Produktionsfehleranalyse und Korrekturmaßnahmen'),
        S('quality-audits', 'Experience in Internal/External Quality and Technical Audits', 'Erfahrung mit internen/externen Qualitäts‑ und Technik‑Audits'),
      ]
    };
  };

  const technicalSkills = buildTechnicalSkills(language);

  // Helper: pick an icon for each skill
  const getSkillIcon = (category: 'semiconductor' | 'testing' | 'programming' | 'quality', skill: string) => {
    const cls = "w-4 h-4";

    if (category === 'programming') {
      if (/python/i.test(skill)) return <Code2 className={cls} />;
      if (/vba/i.test(skill)) return <FileSpreadsheet className={cls} />;
      if (/tableau/i.test(skill)) return <BarChart3 className={cls} />;
      if (/kicad/i.test(skill)) return <CircuitBoard className={cls} />;
      if (/ltspice/i.test(skill)) return <Zap className={cls} />;
      if (/matlab/i.test(skill)) return <LineChart className={cls} />;
      if (/labview/i.test(skill)) return <GitBranch className={cls} />;
      if (/html/i.test(skill)) return <Code className={cls} />;
      if (/^c(\s|$)/i.test(skill)) return <Braces className={cls} />;
      if (/confluence/i.test(skill)) return <BookText className={cls} />;
      return <Code2 className={cls} />;
    }

    if (category === 'testing') {
      if (/emi\/?emc/i.test(skill)) return <ShieldCheck className={cls} />;
      if (/iso|cispr/i.test(skill)) return <BadgeCheck className={cls} />;
      if (/RF/i.test(skill)) return <Activity className={cls} />;
      if (/automotive/i.test(skill)) return <Car className={cls} />;
      if (/failure/i.test(skill)) return <FlaskConical className={cls} />;
      if (/networking/i.test(skill)) return <GitBranch className={cls} />;
      if (/signal integrity/i.test(skill)) return <Activity className={cls} />;
      return <Shield className={cls} />;
    }

    if (category === 'semiconductor') {
      if (/packaging/i.test(skill)) return <Package className={cls} />;
      if (/interconnection|materials/i.test(skill)) return <Atom className={cls} />;
      if (/wire bonding|flip chip|die attach/i.test(skill)) return <Link className={cls} />;
      if (/sintering/i.test(skill)) return <Flame className={cls} />;
      if (/power electronics/i.test(skill)) return <BatteryCharging className={cls} />;
      if (/thermal|rheology/i.test(skill)) return <Thermometer className={cls} />;
      if (/microscop|imaging|sam|sem|edx/i.test(skill)) return <Search className={cls} />;
      if (/electrical measurement/i.test(skill)) return <Gauge className={cls} />;
      return <Zap className={cls} />;
    }

    // quality
    if (/fmea/i.test(skill)) return <AlertTriangle className={cls} />;
    if (/mrb/i.test(skill)) return <ClipboardList className={cls} />;
    if (/statistical|spc/i.test(skill)) return <BarChart3 className={cls} />;
    if (/root cause/i.test(skill)) return <Search className={cls} />;
    if (/documentation/i.test(skill)) return <FileText className={cls} />;
    if (/production defect/i.test(skill)) return <Wrench className={cls} />;
    if (/audits/i.test(skill)) return <BadgeCheck className={cls} />;
    return <Database className={cls} />;
  };

  // Helper: brand icon using Devicon when available
  const getBrandIcon = (skillRaw: string) => {
    const skill = skillRaw.trim().toLowerCase();
    const iconBaseStyle: React.CSSProperties = { fontSize: 18, lineHeight: 1 };

    if (skill.startsWith('python')) {
      return <i className="devicon-python-plain colored" style={iconBaseStyle} />;
    }
    if (skill === 'html' || skill.startsWith('html5')) {
      return <i className="devicon-html5-plain colored" style={iconBaseStyle} />;
    }
    if (skill.startsWith('c programming') || skill === 'c') {
      return <i className="devicon-c-plain colored" style={iconBaseStyle} />;
    }
    if (skill.startsWith('matlab')) {
      return <i className="devicon-matlab-plain colored" style={iconBaseStyle} />;
    }
    if (skill.startsWith('confluence')) {
      return <i className="devicon-confluence-original colored" style={iconBaseStyle} />;
    }
    if (skill.startsWith('tableau')) {
      // Tableau is available in some Devicon distributions; if missing, fallback handled by caller
      return <i className="devicon-tableau-plain colored" style={iconBaseStyle} />;
    }
    // No brand icon known
    return null;
  };

  // Load skill images (png/jpg/svg) using Vite glob import
  const skillImageMap: Record<string, string> = (() => {
    const modules = import.meta.glob('../assets/skills/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' }) as Record<string, string>;
    return modules;
  })();

  const normalizeToBase = (text: string) => {
    return text
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/\(([^)]*)\)/g, '$1') // drop parentheses
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  // Exact mapping as provided by the user (normalized key -> slug)
  const skillSlugMap: Record<string, string> = {
    // Semiconductor
    'advanced-semiconductor-packaging': 'advanced-semiconductor-packaging',
    'advanced-interconnection-materials-research': 'advanced-interconnection-materials-research',
    'wire-bonding-die-attach-flip-chip-technology': 'wire-bonding-die-attach-flip-chip',
    'transient-liquid-phase-sintering': 'transient-liquid-phase-sintering',
    'power-electronics-prototyping': 'power-electronics-prototyping',
    'thermal-analysis-and-rheology-analysis': 'thermal-and-rheology-analysis',
    'analytical-microscopy-and-imaging-systems-sam-sem-edx': 'microscopy-sam-sem-edx',
    'electrical-measurement-devices-and-techniques': 'electrical-measurement-techniques',
    // Testing
    'emi-emc-validation-bci-radiated-emissions-immunity-esd': 'emi-emc-validation',
    'iso-17025-cispr-25-iso-11452-1-2-4-compliance': 'standards-iso17025-cispr25-iso11452',
    'rf-interference-analysis-and-root-cause-investigation': 'rf-interference-analysis',
    'automotive-electronics-testing': 'automotive-electronics-testing',
    'failure-analysis-and-defect-characterization': 'failure-analysis-defect-characterization',
    'networking-protocols-can-flexray-ethernet': 'networking-can-flexray-ethernet',
    'signal-integrity-analysis': 'signal-integrity-analysis',
    // Programming
    'python': 'python',
    'vba-development': 'vba',
    'confluence': 'confluence',
    'tableau': 'tableau',
    'kicad-design': 'kicad',
    'ltspice': 'ltspice',
    'matlab': 'matlab',
    'labview': 'labview',
    'html': 'html5',
    'c-programming': 'c',
    // Quality
    'fmea-failure-mode-and-effects-analysis': 'fmea',
    'mrb-process-material-review-board': 'mrb',
    'statistical-process-control-spc': 'spc-control-chart',
    'root-cause-analysis': 'root-cause-analysis',
    'technical-documentation': 'technical-documentation',
    'production-defect-analysis-and-corrective-action-processes': 'production-defect-capa',
    'experience-in-internal-external-quality-and-technical-audits': 'quality-audits',
    // Project tech (for future use)
    'die-attach-process': 'die-attach-process',
    'materials-research': 'materials-research',
    'high-resolution-material-characterization-tools': 'material-characterization-tools',
    'dsc': 'dsc-differential-scanning-calorimetry',
    'data-analytics': 'data-analytics',
    'viscometry': 'viscometry',
    'rheology': 'rheology',
    'materials-testing': 'materials-testing',
    'power-electronics': 'power-electronics',
    'arduino': 'arduino',
    'control-systems': 'control-systems',
  };

  // When the mapped slug is missing, try these alternates in order
  const slugFallbacks: Record<string, string[]> = {
    'html5': ['html'],
    'transient-liquid-phase-sintering': ['transient-liquid-phase-sintering2'],
  };

  const getSkillImage = (skill: string): string | null => {
    const base = normalizeToBase(skill);
    const mapped = skillSlugMap[base] || base;

    const trySlugs = [mapped, ...(slugFallbacks[mapped] || [])];
    for (const candidate of trySlugs) {
      const match = Object.entries(skillImageMap).find(([path]) => {
        return new RegExp(`/${candidate}\\.(png|jpg|jpeg|svg)$`).test(path);
      });
      if (match) return match[1];
    }

    // As a last resort, try a loose contains search by important tokens
    const tokens = base.split('-').filter(Boolean);
    if (tokens.length > 0) {
      const matchLoose = Object.entries(skillImageMap).find(([path]) =>
        tokens.every(tok => path.includes(tok))
      );
      if (matchLoose) return matchLoose[1];
    }

    return null;
  };

  // Company and Institution logos
  const getCompanyLogo = (company: string): string | null => {
    if (/infineon/i.test(company)) return infineonLogo;
    if (/bosch/i.test(company)) return boschLogo;
    return null;
  };

  const getInstitutionLogo = (institution: string): string | null => {
    if (/amrita/i.test(institution)) return amritaLogo;
    if (/ostbayerische|hochschule/i.test(institution)) return othLogo;
    return null;
  };

  const renderSkillItem = (category: 'semiconductor' | 'testing' | 'programming' | 'quality', skill: string) => {
    const url = getSkillImage(skill);
    const fallback = getBrandIcon(skill) ?? getSkillIcon(category, skill);
    return (
      <div
        key={skill}
        className="flex items-center gap-3 p-2 rounded-lg bg-card/60 border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-colors"
      >
        <div className="h-10 w-10 rounded-md bg-background/60 flex items-center justify-center overflow-hidden">
          {url ? <img src={url} alt="" className="h-10 w-10 object-contain" /> : fallback}
        </div>
        <span className="text-sm">{skill}</span>
      </div>
    );
  };

  // Render a radial branch from center
  const renderBranch = (
    category: 'semiconductor' | 'testing' | 'programming' | 'quality',
    title: string,
    Icon: React.ComponentType<{ className?: string }>,
    skills: string[],
    angleDeg: number,
    length: number = 360
  ) => {
    return (
      <div
        className="absolute left-1/2 top-1/2"
        style={{ transform: `translate(-50%, -50%) rotate(${angleDeg}deg)` }}
      >
        <div className="relative" style={{ width: length, height: 1 }}>
          <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-primary/40 via-primary/60 to-primary/20 rounded-full"></div>
          {/* Cluster at branch end; rotate back for upright content */}
          <div
            className="absolute right-0 -top-4 pointer-events-auto"
            style={{ transform: `rotate(${-angleDeg}deg)` }}
          >
            <div className="rounded-xl bg-secondary/95 backdrop-blur-sm border border-primary/10 shadow-elevated px-4 py-3 max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-5 h-5 text-primary" />
                <span className="font-semibold heading-secondary">{title}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((s) => renderSkillItem(category, s))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // SVG flowchart graph-like rendering (desktop)
  const SkillsGraphSvg: React.FC = () => {
    const width = 1600;
    const height = 1200;
    const cx = width / 2;
    const cy = height / 2;

    // Category anchors in cardinal directions
    const anchors = {
      programming: { x: cx, y: cy - 200 },
      testing: { x: cx + 520, y: cy - 20 },
      semiconductor: { x: cx, y: cy + 240 },
      quality: { x: cx - 520, y: cy - 20 },
    };

    // Skill card size (logo + label) - larger for visibility
    const cardW = 170;
    const cardH = 100;

    // Layout helpers
    const layoutRow = (items: number, cols: number, centerX: number, y: number, gapX = 24) => {
      const totalW = cols * cardW + (cols - 1) * gapX;
      const startX = centerX - totalW / 2;
      const coords: { x: number; y: number }[] = [];
      for (let i = 0; i < items; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = startX + col * (cardW + gapX);
        const yy = y + row * (cardH + 24);
        coords.push({ x, y: yy });
      }
      return coords;
    };
    const layoutColumn = (items: number, centerY: number, x: number, rowsPerCol = 5, gapY = 18, gapCol = 30) => {
      const cols = Math.ceil(items / rowsPerCol);
      const totalW = cols * cardW + (cols - 1) * gapCol;
      const startX = x - totalW / 2;
      const coords: { x: number; y: number }[] = [];
      for (let i = 0; i < items; i++) {
        const col = Math.floor(i / rowsPerCol);
        const row = i % rowsPerCol;
        const xi = startX + col * (cardW + gapCol);
        const topY = centerY - ((rowsPerCol * cardH + (rowsPerCol - 1) * gapY) / 2);
        const yi = topY + row * (cardH + gapY);
        coords.push({ x: xi, y: yi });
      }
      return coords;
    };

    // Positions for skills
    const progPos = layoutRow(technicalSkills.programming.length, 5, cx, anchors.programming.y - 120, 28);
    const semiPos = layoutRow(technicalSkills.semiconductor.length, 5, cx, anchors.semiconductor.y + 40, 30);
    const testPos = layoutColumn(technicalSkills.testing.length, cy, anchors.testing.x + 160, 5, 26, 34);
    const qualPos = layoutColumn(technicalSkills.quality.length, cy, anchors.quality.x - 160, 5, 26, 34);

    // Orthogonal elbow connector
    const orthPath = (sx: number, sy: number, tx: number, ty: number, mode: 'vh' | 'hv') => {
      if (mode === 'vh') {
        return `M ${sx} ${sy} L ${sx} ${ty} L ${tx} ${ty}`;
      }
      return `M ${sx} ${sy} L ${tx} ${sy} L ${tx} ${ty}`;
    };

    const renderSkillNode = (x: number, y: number, skill: any, category: 'semiconductor' | 'testing' | 'programming' | 'quality') => {
      const label: string = typeof skill === 'string' ? skill : skill.label;
      const keyForImage: string = typeof skill === 'string' ? skill : skill.key;
      const url = getSkillImage(keyForImage || label);
      const id = `node-${category}-${normalizeToBase(keyForImage || label)}`;
      return (
        <g key={id} transform={`translate(${x}, ${y})`}>
          {/* Soft halo behind icon */}
          <circle cx={cardW / 2} cy={28} r={28} fill="rgba(99,102,241,0.12)" stroke="rgba(99,102,241,0.25)" />
          {/* Icon - larger for visibility */}
          {url ? (
            <image href={url} x={cardW / 2 - 22} y={2} width={44} height={44} preserveAspectRatio="xMidYMid meet" />
          ) : (
            <foreignObject x={cardW / 2 - 22} y={2} width={44} height={44}>
              <div className="w-11 h-11 flex items-center justify-center">
                {getBrandIcon(label) ?? getSkillIcon(category, label)}
              </div>
            </foreignObject>
          )}
          {/* Label */}
          <text x={cardW / 2} y={78} textAnchor="middle" fill="#111827" fontSize="15" fontWeight="800">{label}</text>
        </g>
      );
    };

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="hidden md:block w-full h-[1100px]">
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <rect width="24" height="24" fill="rgba(2,6,23,0.01)" />
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(99,102,241,0.05)" strokeWidth="1" />
          </pattern>
          <filter id="ds" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.35)" />
          </filter>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,5 L7,2.5 z" fill="rgba(99,102,241,0.6)" />
          </marker>
        </defs>

        {/* background */}
        <rect x={0} y={0} width={width} height={height} fill="url(#grid)" />

        {/* Central node */}
        <circle cx={cx} cy={cy} r={64} fill="rgba(99,102,241,0.12)" stroke="rgba(99,102,241,0.5)" filter="url(#ds)" />
        <text x={cx} y={cy + 6} textAnchor="middle" fontSize="20" fontWeight="800" fill="rgb(249,250,251)">Skills</text>

        {/* Category labels */}
        {(['programming','testing','semiconductor','quality'] as const).map((key) => {
          const labelMap: Record<typeof key, string> = {
            programming: t('skills.programming'),
            testing: t('skills.testing'),
            semiconductor: t('skills.semiconductor'),
            quality: t('skills.quality'),
          } as any;
          const a = anchors[key];
          const w = 240, h = 52, rx = 10;
          return (
            <g key={key}>
              <rect x={a.x - w/2} y={a.y - h/2} rx={rx} ry={rx} width={w} height={h} fill="rgba(17,24,39,0.88)" stroke="rgba(99,102,241,0.5)" filter="url(#ds)" />
              <text x={a.x} y={a.y + 6} textAnchor="middle" fontSize="15" fontWeight="800" fill="rgb(248,250,252)">{labelMap[key]}</text>
            </g>
          );
        })}

        {/* Orthogonal branches from center to categories */}
        <path d={orthPath(cx, cy - 68, anchors.programming.x, anchors.programming.y + 24, 'vh')} stroke="rgba(99,102,241,0.5)" strokeWidth={2} fill="none" markerEnd="url(#arrow)" />
        <path d={orthPath(cx + 76, cy, anchors.testing.x - 120, anchors.testing.y, 'hv')} stroke="rgba(99,102,241,0.5)" strokeWidth={2} fill="none" markerEnd="url(#arrow)" />
        <path d={orthPath(cx, cy + 68, anchors.semiconductor.x, anchors.semiconductor.y - 24, 'vh')} stroke="rgba(99,102,241,0.5)" strokeWidth={2} fill="none" markerEnd="url(#arrow)" />
        <path d={orthPath(cx - 76, cy, anchors.quality.x + 120, anchors.quality.y, 'hv')} stroke="rgba(99,102,241,0.5)" strokeWidth={2} fill="none" markerEnd="url(#arrow)" />

        {/* Sub-branches to skill nodes */}
        {progPos.map((p, i) => (
          <g key={`p-${i}`}>
            <path d={orthPath(anchors.programming.x, anchors.programming.y - 22, p.x + cardW/2, p.y + cardH, 'vh')} stroke="rgba(99,102,241,0.4)" strokeWidth={1.5} fill="none" markerEnd="url(#arrow)" />
            {renderSkillNode(p.x, p.y, technicalSkills.programming[i], 'programming')}
          </g>
        ))}
        {testPos.map((p, i) => (
          <g key={`t-${i}`}>
            <path d={orthPath(anchors.testing.x + 120, anchors.testing.y, p.x, p.y + cardH/2, 'hv')} stroke="rgba(99,102,241,0.4)" strokeWidth={1.5} fill="none" markerEnd="url(#arrow)" />
            {renderSkillNode(p.x, p.y, technicalSkills.testing[i], 'testing')}
          </g>
        ))}
        {semiPos.map((p, i) => (
          <g key={`s-${i}`}>
            <path d={orthPath(anchors.semiconductor.x, anchors.semiconductor.y + 22, p.x + cardW/2, p.y, 'vh')} stroke="rgba(99,102,241,0.4)" strokeWidth={1.5} fill="none" markerEnd="url(#arrow)" />
            {renderSkillNode(p.x, p.y, technicalSkills.semiconductor[i], 'semiconductor')}
          </g>
        ))}
        {qualPos.map((p, i) => (
          <g key={`q-${i}`}>
            <path d={orthPath(anchors.quality.x - 120, anchors.quality.y, p.x + cardW, p.y + cardH/2, 'hv')} stroke="rgba(99,102,241,0.4)" strokeWidth={1.5} fill="none" markerEnd="url(#arrow)" />
            {renderSkillNode(p.x, p.y, technicalSkills.quality[i], 'quality')}
          </g>
        ))}
      </svg>
    );
  };

  // Clean showcase tiles (simple, professional)
  const SkillTile = (category: 'semiconductor' | 'testing' | 'programming' | 'quality', item: { key: string; label: string }) => {
    const url = getSkillImage(item.key);
    const fallback = getBrandIcon(item.label) ?? getSkillIcon(category, item.label);
    return (
      <div key={`${category}-${item.key}`} className="flex flex-col items-center justify-start p-3 rounded-lg bg-card/70 border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-colors">
        <div className="h-32 w-32 rounded-md bg-background/60 flex items-center justify-center overflow-hidden shadow-sm">
          {url ? <img src={url} alt="" className="h-32 w-32 object-contain" /> : fallback}
        </div>
        <span className="mt-2 text-sm font-medium text-foreground text-center">{item.label}</span>
      </div>
    );
  };

  const experience = [
    {
      title: language === 'en' ? 'AI Engineer (Working Student)' : 'KI-Ingenieur (Werkstudentin)',
      company: 'Infineon Technologies',
      period: language === 'en' ? 'October 2025 - Present' : 'Oktober 2025 - Heute',
      location: 'Regensburg, Germany',
      responsibilities: language === 'en' ? [
        'Supporting pre-development and early research phases by conducting AI-driven technology scouting for backend development, leveraging tools such as MapEGY, Findest, and other analytical platforms.',
        'Performing systematic evaluation of emerging technologies, automation potentials, and innovation trends to identify high-value development opportunities in early-stage semiconductor projects.',
        'Utilizing advanced AI tools for data analysis, topic exploration, and evidence-based insights, enabling the consolidation of critical information into structured summaries for efficient decision-making and streamlined research activities.',
        'Contributing to reducing the exploratory workload of development teams by delivering comprehensive landscape analyses, improving the clarity and accessibility of technical information ahead of project initiation.'
      ] : [
        'Unterstützung von Vorentwicklung und frühen Forschungsphasen durch KI-gestütztes Technology-Scouting für die Backend-Entwicklung; Einsatz von Tools wie MapEGY, Findest und weiteren Analyseplattformen.',
        'Systematische Bewertung aufkommender Technologien, Automatisierungspotenziale und Innovationstrends zur Identifikation wertschöpfender Entwicklungschancen in frühphasigen Halbleiterprojekten.',
        'Nutzung fortgeschrittener KI-Werkzeuge für Datenanalyse, Themenexploration und evidenzbasierte Erkenntnisse; Verdichtung kritischer Informationen zu strukturierten Zusammenfassungen für effiziente Entscheidungen und schlanke Forschungsaktivitäten.',
        'Beitrag zur Reduzierung des explorativen Aufwands der Entwicklungsteams durch umfassende Landscape-Analysen; Verbesserung der Klarheit und Zugänglichkeit technischer Informationen vor Projektstart.'
      ]
    },
    {
      title: language === 'en' ? 'Research Engineer (Master Thesis)' : 'Forschungsingenieur (Masterarbeit)',
      company: 'Infineon Technologies',
      period: language === 'en' ? 'March 2025 - September 2025' : 'März 2025 - September 2025',
      location: 'Regensburg, Germany',
      responsibilities: language === 'en' ? [
        'Leading research on Transient liquid phase sintering for stable die attach interconnection with bare Copper surfaces',
        'Focused on enhancing die attach performance by evaluating the formation of intermetallic phases in sintering pastes or conductive adhesives based on Silver and low-melting metals/alloys.',
        'Aimed to deliver insights that improve bond stability and reliability, advancing electronics packaging technologies.'
      ] : [
        'Leitung der Forschung zur transienten Flüssigphasensinterung für stabile Die-Attach-Verbindungen mit blanken Kupferoberflächen',
        'Fokus auf die Verbesserung der Die-Attach-Leistung durch Bewertung der Bildung intermetallischer Phasen in Sinterpasten oder leitfähigen Klebstoffen auf Silber- und niedrigschmelzenden Metall-/Legierungsbasis.',
        'Ziel, Erkenntnisse zu liefern, die die Bindungsstabilität und Zuverlässigkeit verbessern und die Elektronikverpackungstechnologien voranbringen.'
      ]
    },
    {
      title: language === 'en' ? 'Quality Engineer (Working Student)' : 'Qualitätsingenieur (Werkstudentin)',
      company: 'Infineon Technologies',
      period: language === 'en' ? 'February 2024 - January 2025' : 'Februar 2024 - Januar 2025',
      location: 'Regensburg, Germany',
      responsibilities: language === 'en' ? [
        'Designed and deployed interactive Tableau dashboards that visualized various facilities in the backend semiconductor process, enhancing visibility and decision-making efficiency by 30%.',
        'Automated data workflows by developing Python and VBA scripts, reducing manual processing time of recurring Excel and PDF reports by 70% — this significantly saved time and improved team productivity.',
        'Established and maintained a structured Confluence knowledge base for Backend Preassembly operations, enhancing cross-team documentation access and cutting information retrieval time by 40%.',
        'Expertise in Backend Quality standards and analysis, including FMEA and MRB Process.'
      ] : [
        'Entwicklung von Dashboards mit Tableau für Deviation Decision Help-Daten in der Backend-Halbleiterproduktion.',
        'Programmierung von Lösungen mit Python und VBA zur Optimierung und Automatisierung der Verarbeitung wiederkehrender Excel- und PDF-Datensätze.',
        'Aufbau und Verwaltung von Confluence-Wissensdatenbanken für die Backend-Vormontageproduktion.',
        'Expertise in Backend-Qualitätsstandards und -analysen, einschließlich FMEA und MRB-Prozess.'
      ]
    },
    {
      title: language === 'en' ? 'EMC Test Lead' : 'EMC-Testleiter',
      company: 'Bosch Global Software Technologies',
      period: language === 'en' ? 'September 2020 - February 2023' : 'September 2020 - Februar 2023',
      location: 'Bengaluru, India',
      responsibilities: language === 'en' ? [
        'Led a team in executing rigorous 100+ EMC tests (Conducted Immunity/Emissions, Radiated Immunity/Emissions and ESD), ensuring compliance with ISO 17025, CISPR 25, ISO 11452-1/2/4 while optimizing coverage, efficiency and resource allocation to meet KPIs and customer demands.',
        'Ensured accuracy in test documentation and reporting, enabling data-driven decisions and high client satisfaction.',
        'Provided technical expertise to validate measurements and results, supporting other test leads in cross-project verification, and ensured seamless collaboration to maintain high-quality deliverables.',
        'Gained expertise in RF root cause analysis by troubleshooting and resolving failures during development ECU testing, analyzing RF interference impacts.'
      ] : [
        'Leitung eines Teams zur Durchführung anspruchsvoller EMV-Prüfungen (BCI), Sicherstellung der Einhaltung von ISO 17025, CISPR 25, ISO 11452-1/2/4 und gleichzeitige Optimierung von Abdeckung, Effizienz und Ressourceneinsatz zur Erfüllung von KPIs und Kundenanforderungen.',
        'Sicherstellung der Genauigkeit von Testdokumentation und Berichterstattung, um datenbasierte Entscheidungen und hohe Kundenzufriedenheit zu ermöglichen.',
        'Bereitstellung technischer Expertise zur Validierung von Messungen und Ergebnissen, Unterstützung anderer Testleiter bei projektübergreifender Verifikation und Sicherstellung einer nahtlosen Zusammenarbeit für hochwertige Ergebnisse.',
        'Erfahrung in der Ursachenanalyse von HF-Störungen durch Fehlerbehebung und Lösung von Problemen während der Entwicklung von ECU-Tests, Analyse der Auswirkungen von HF-Störungen.'
      ]
    },
    {
      title: language === 'en' ? 'EMC Test Engineer' : 'EMV-Testingenieur',
      company: 'Bosch Global Software Technologies',
      period: language === 'en' ? 'September 2019 - September 2020' : 'September 2019 - September 2020',
      location: 'Bengaluru, India',
      responsibilities: language === 'en' ? [
        'Performed EMC/Electrical testing – Bulk Current Injection, Conducted/Radiated Emissions, Radiated Immunity (Antenna Method), and ESD for Automotive Chassis and Active Safety Systems.',
        'Ensured full compliance with ISO 17025 , CISPR 25, ISO 11452 - 1/2/4 standards while testing for multiple OEMs.',
        'Gained expertise in Networking Protocols such as CAN, FlexRay and Ethernet.'
      ] : [
        'Durchführung von EMV-/Elektriktests – Bulk Current Injection, leitungsgebundene/abgestrahlte Emissionen, abgestrahlte Störfestigkeit (Antennenmethode) und ESD für Fahrgestell- und aktive Sicherheitssysteme im Automobilbereich.',
        'Sicherstellung der vollständigen Einhaltung der ISO 17025, CISPR 25, ISO 11452 -1/2/4 -Standards bei Tests für mehrere OEMs.',
        'Erfahrung mit Netzwerkprotokollen wie CAN, FlexRay und Ethernet.'
      ]
    }
  ];

  const projects = [
    {
      title: language === 'en' ? 'Transient Liquid Phase Sintering Research' : 'Transient Liquid Phase Sintering Forschung',
      description: language === 'en' ? 
        'Advanced research on die attach performance for power electronics, focusing on intermetallic phase formation and bond reliability.' :
        'Fortgeschrittene Forschung zur Die-Attach-Leistung für Leistungselektronik mit Fokus auf intermetallische Phasenbildung und Bindungszuverlässigkeit.',
      technologies: ['Die Attach Process', 'Transient Liquid Phase Sintering', 'Materials Research', 'High resolution material characterization tools', 'DSC'],
      status: language === 'en' ? 'Completed' : 'Abgeschlossen',
      date: '2025'
    },
    {
      title: language === 'en' ? 'Production Analytics Dashboard' : 'Produktionsanalytik-Dashboard',
      description: language === 'en' ?
        'Interactive Tableau dashboards for semiconductor production data with automated Python/VBA reporting systems.' :
        'Interaktive Tableau-Dashboards für Halbleiterproduktionsdaten mit automatisierten Python/VBA-Berichtssystemen.',
      technologies: ['Tableau', 'Python', 'VBA', 'Data Analytics'],
      status: language === 'en' ? 'Completed' : 'Abgeschlossen',
      date: '2024'
    },
    {
      title: language === 'en' ? 'MR Fluids Characterization' : 'MR-Fluide Charakterisierung',
      description: language === 'en' ?
        'Investigated viscosity properties of Boron-based MR fluids using multiple viscometers under varying conditions.' :
        'Untersuchung der Viskositätseigenschaften von Bor-basierten MR-Fluiden mit mehreren Viskosimetern unter verschiedenen Bedingungen.',
      technologies: ['Viscometry', 'Rheology', 'Materials Testing'],
      status: language === 'en' ? 'Completed' : 'Abgeschlossen',
      date: '2023-2024'
    },
    {
      title: language === 'en' ? 'EV On-board Charger' : 'EV Onboard-Ladegerät',
      description: language === 'en' ?
        'Designed Level-1 EV charger prototype with power electronics regulation and Arduino-based monitoring system.' :
        'Entwurf eines Level-1-EV-Ladegerät-Prototyps mit Leistungselektronik-Regelung und Arduino-basiertem Überwachungssystem.',
      technologies: ['Power Electronics', 'Arduino', 'Control Systems'],
      status: language === 'en' ? 'Completed' : 'Abgeschlossen',
      date: '2018-2019'
    }
  ];

  const education = [
    {
      degree: language === 'en' ? 'Master of Technology' : 'Master of Technology',
      field: language === 'en' ? 'Electrical and Microsystems Engineering' : 'Elektrotechnik und Mikrosystemtechnik',
      institution: 'Ostbayerische Technische Hochschule (OTH)',
      period: language === 'en' ? 'March 2023 - Present' : 'März 2023 - Heute',
      location: 'Regensburg, Germany',
      focus: language === 'en' ? 'Optoelectronics, Advanced Semiconductor Technologies' : 'Optoelektronik, Fortgeschrittene Halbleitertechnologien'
    },
    {
      degree: language === 'en' ? 'Bachelor of Technology' : 'Bachelor of Technology',
      field: language === 'en' ? 'Electrical and Electronics Engineering' : 'Elektrotechnik und Elektronik',
      institution: 'Amrita School of Engineering',
      period: language === 'en' ? 'July 2015 - May 2019' : 'Juli 2015 - Mai 2019',
      location: 'India',
      focus: language === 'en' ? 'Power Electronics, Control Systems' : 'Leistungselektronik, Steuerungssysteme'
    }
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = myCV;
    link.download = 'Prabhasa_Javvaji_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-10 glass border-b border-primary/10 shadow-elevated">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full animate-glow shadow-elevated"></div>
              <span className="font-bold text-xl text-primary">PJ</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Contact Button, CV Download & Language Switch */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex btn-primary shadow-elevated"
              >
                <Mail className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Contact Me' : 'Kontakt'}
              </Button>

              <Button
                onClick={downloadCV}
                variant="outline"
                className="hidden md:flex btn-secondary"
              >
                <Download className="w-4 h-4 mr-2" />
                CV
              </Button>
              
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${language === 'en' ? 'text-primary' : 'text-muted-foreground'}`}>EN</span>
                <Switch
                  checked={language === 'de'}
                  onCheckedChange={toggleLanguage}
                  className="data-[state=checked]:bg-primary"
                />
                <span className={`text-sm font-medium ${language === 'de' ? 'text-primary' : 'text-muted-foreground'}`}>DE</span>
              </div>
              
              <button
                className="md:hidden text-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-primary/10 bg-card/90 backdrop-blur-lg rounded-b-xl shadow-elevated">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left font-medium transition-colors hover:text-primary ${
                      activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full btn-primary mt-4 shadow-elevated"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Contact Me' : 'Kontakt'}
                </Button>
                <Button
                  onClick={downloadCV}
                  variant="outline"
                  className="w-full btn-secondary"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Download CV' : 'CV herunterladen'}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>


      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-background via-secondary to-accent/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            {/* Profile Image */}
            <div className="mb-8">
              <img
                src={myAvatar}
                alt="Prabhasa Javvaji"
                className="w-48 h-64 md:w-56 md:h-72 rounded-2xl mx-auto object-contain border-4 border-primary shadow-elevated bg-card/80 animate-white-glow border-blink-white"
                onError={(e) => {
                  e.currentTarget.src = myAvatar;
                }}
              />
            </div>

            {/* Hero Content */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 name-text">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl title-text mb-4 font-semibold">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto md:whitespace-nowrap">
              {t('hero.description')}
            </p>
            {/* Company/role with logos */}
            <p className="sr-only">{t('hero.company')}</p>
            <div className="flex items-center justify-center gap-3 mb-8 max-w-2xl mx-auto">
              <span className="text-base md:text-lg text-secondary-foreground">
                {language === 'en' ? 'AI Engineer at' : 'KI-Ingenieur bei'}
              </span>
              <img
                src={infineonLogo}
                alt="Infineon Technologies"
                className="h-10 md:h-12 w-auto object-contain"
              />
              <span className="text-muted-foreground">|</span>
              <img
                src={boschLogo}
                alt="Bosch"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://www.linkedin.com/in/prabhasa-javvaji-27b8a61b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-card border-2 border-primary/10 hover:border-primary hover:bg-primary/10 transition-all hover-scale shadow-elevated"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a
                href="https://www.xing.com/profile/Prabhasa_Javvaji09012"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-card border-2 border-primary/10 hover:border-primary hover:bg-primary/10 transition-all hover-scale shadow-elevated"
              >
                <XingIcon className="w-6 h-6 text-primary" />
              </a>
              <a
                href="mailto:prabhasajavvaji27@gmail.com"
                className="p-4 rounded-full bg-card border-2 border-primary/10 hover:border-primary hover:bg-primary/10 transition-all hover-scale shadow-elevated"
              >
                <Mail className="w-6 h-6 text-primary" />
              </a>
              <button 
                onClick={downloadCV}
                className="p-4 rounded-full bg-card border-2 border-primary/10 hover:border-primary hover:bg-primary/10 transition-all hover-scale shadow-elevated"
              >
                <FileText className="w-6 h-6 text-primary" />
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center space-x-4 mb-12">
              <Button
                onClick={() => scrollToSection('contact')}
                className="btn-primary shadow-elevated"
              >
                {language === 'en' ? 'Get In Touch' : 'Kontakt aufnehmen'}
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                className="btn-secondary"
              >
                {language === 'en' ? 'View Projects' : 'Projekte ansehen'}
              </Button>
            </div>

            {/* Scroll Arrow */}
            <div className="animate-float">
              <ChevronDown className="w-8 h-8 text-primary mx-auto cursor-pointer" onClick={() => scrollToSection('about')} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative bg-card/90 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-primary">
              {t('about.title')}
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              {t('about.description')}
            </p>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6 rounded-lg bg-secondary/80 border border-primary/10 hover:border-primary/30 transition-all hover-lift card">
                <div className="text-4xl font-bold heading-primary mb-2">5</div>
                <div className="text-muted-foreground font-medium">{language === 'en' ? 'Years Experience' : 'Jahre Erfahrung'}</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-secondary/80 border border-primary/10 hover:border-primary/30 transition-all hover-lift card">
                <div className="text-4xl font-bold heading-primary mb-2">4</div>
                <div className="text-muted-foreground font-medium">{language === 'en' ? 'Major Projects' : 'Große Projekte'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <div className="bg-secondary/80 py-12">
        <VideoSection />
      </div>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-primary">
              {t('skills.title')}
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
          </div>

          {/* Professional skills showcase (no graph) */}
          <div className="space-y-10">
            <Card className="gradient-border bg-secondary/90 card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-accent-baby-pink" />
                  <CardTitle className="heading-secondary">{t('skills.semiconductor')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                  {technicalSkills.semiconductor.map((item) => SkillTile('semiconductor', item))}
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-border bg-secondary/90 card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-accent-soft-grey" />
                  <CardTitle className="heading-secondary">{t('skills.testing')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                  {technicalSkills.testing.map((item) => SkillTile('testing', item))}
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-border bg-secondary/90 card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-primary" />
                  <CardTitle className="heading-secondary">{t('skills.programming')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                  {technicalSkills.programming.map((item) => SkillTile('programming', item))}
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-border bg-secondary/90 card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-accent-light-pink" />
                  <CardTitle className="heading-secondary">{t('skills.quality')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                  {technicalSkills.quality.map((item) => SkillTile('quality', item))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-primary">
              {t('projects.title')}
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="gradient-border hover-lift h-full bg-secondary/90 card">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-xl heading-secondary">{project.title}</CardTitle>
                    <div className="flex flex-col items-end space-x-2">
                      <Badge variant={project.status === (language === 'en' ? 'Ongoing' : 'Laufend') ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{project.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div>
                    <p className="font-medium mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-primary/10">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-card/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-primary">
              {t('experience.title')}
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline line */}
                {index < experience.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-primary/10"></div>
                )}
                <div className="flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-glow flex-shrink-0 shadow-elevated">
                    <Briefcase className="w-6 h-6 text-background" />
                  </div>
                  {/* Content */}
                  <Card className="gradient-border hover-lift flex-1 bg-secondary/90 card">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          {getCompanyLogo(exp.company) && (
                            <img
                              src={getCompanyLogo(exp.company) as string}
                              alt={`${exp.company} logo`}
                              className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain rounded-md flex-shrink-0"
                            />
                          )}
                          <div>
                            <CardTitle className="text-xl heading-secondary">{exp.title}</CardTitle>
                            <CardDescription className="text-lg font-medium">
                              {exp.company}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground text-right">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-card/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-primary">
              {t('education.title')}
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="gradient-border hover-lift bg-secondary/90 card">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0">
                      {getInstitutionLogo(edu.institution) ? (
                        <img
                          src={getInstitutionLogo(edu.institution) as string}
                          alt={`${edu.institution} logo`}
                          className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain rounded-md"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl heading-secondary">{edu.degree}</CardTitle>
                          <CardDescription className="text-lg font-medium">
                            {edu.field}
                          </CardDescription>
                          <p className="text-muted-foreground mt-2">{edu.institution}</p>
                        </div>
                        <div className="text-sm text-muted-foreground text-right">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <strong>{language === 'en' ? 'Focus Areas:' : 'Schwerpunkte:'}</strong> {edu.focus}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/90">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-primary">
                {t('contact.title')}
                <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('contact.description')}
              </p>
            </div>
            <div className="bg-secondary/90 rounded-xl shadow-elevated p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/10 bg-card/90">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://www.linkedin.com/in/prabhasa-javvaji-27b8a61b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.xing.com/profile/Prabhasa_Javvaji09012"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <XingIcon className="w-6 h-6" />
              </a>
              <a
                href="mailto:prabhasajavvaji27@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground text-sm mb-4">
              <MapPin className="w-4 h-4" />
              <span>{t('footer.location')}</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 Prabhasa Javvaji. {t('footer.rights')}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
};

export default Index;

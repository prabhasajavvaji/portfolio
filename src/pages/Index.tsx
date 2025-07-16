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
  Download
} from "lucide-react";
import myHeadshot from "../assets/my_headshot.jpg";
import myAvatar from "../assets/my_avatar.png";
import myVideo from "../assets/my_video.mp4";
import myCV from "../assets/Prabhasa_Javvaji_CV.pdf";

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

  const navigationItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'education', label: t('nav.education') },
    { id: 'contact', label: t('nav.contact') }
  ];

  const technicalSkills = {
    semiconductor: [
      'Advanced Semiconductor Packaging',
      'Transient Liquid Phase Sintering',
      'Die Bonding & Wire Bonding',
      'Failure Analysis (SEM, EDS, DSC)',
      'Flip Chip Technology',
      'Backend Process Technology'
    ],
    testing: [
      'EMI/EMC Validation',
      'ISO 17025 Compliance',
      'RF Testing & Analysis',
      'Automotive Electronics Testing',
      'CAN/FlexRay Protocols',
      'Signal Integrity Analysis'
    ],
    programming: [
      'Python Automation',
      'VBA Development',
      'Tableau Dashboards',
      'KiCAD Design',
      'LabVIEW',
      'C Programming'
    ],
    quality: [
      'FMEA Processes',
      'MRB Quality Control',
      'Statistical Process Control',
      'Root Cause Analysis',
      'Technical Documentation',
      'Confluence Management'
    ]
  };

  const experience = [
    {
      title: language === 'en' ? 'Research Engineer (Master Thesis)' : 'Forschungsingenieur (Masterarbeit)',
      company: 'Infineon Technologies',
      period: language === 'en' ? 'March 2025 - Present' : 'März 2025 - Heute',
      location: 'Regensburg, Germany',
      responsibilities: language === 'en' ? [
        'Led research on Transient liquid phase sintering for stable die attach interconnection with bare Copper surfaces',
        'Focused on enhancing die attach performance by evaluating the formation of intermetallic phases in sintering pastes or conductive adhesives based on Silver and low-melting metals/alloys.',
        'Aimed to deliver insights that improve bond stability and reliability, advancing electronics packaging technologies.'
      ] : [
        'Leitung der Forschung zur transienten Flüssigphasensinterung für stabile Die-Attach-Verbindungen mit blanken Kupferoberflächen',
        'Fokus auf die Verbesserung der Die-Attach-Leistung durch Bewertung der Bildung intermetallischer Phasen in Sinterpasten oder leitfähigen Klebstoffen auf Silber- und niedrigschmelzenden Metall-/Legierungsbasis.',
        'Ziel, Erkenntnisse zu liefern, die die Bindungsstabilität und Zuverlässigkeit verbessern und die Elektronikverpackungstechnologien voranbringen.'
      ]
    },
    {
      title: language === 'en' ? 'Quality Engineer (Working Student)' : 'Qualitätsingenieur (Werkstudent)',
      company: 'Infineon Technologies',
      period: language === 'en' ? 'February 2024 - January 2025' : 'Februar 2024 - Januar 2025',
      location: 'Regensburg, Germany',
      responsibilities: language === 'en' ? [
        'Developed dashboards using Tableau for Deviation Decision Help data for the Backend Semiconductor Production floor.',
        'Programmed solutions using Python and VBA to streamline and automate the processing of recurring Excel and PDF datasets.',
        'Built and managed Confluence knowledge repositories for Backend Preassembly production.',
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
        'Led a team in executing rigorous EMC testing (BCI), ensuring compliance with ISO 17025, CISPR 25, ISO 11452-1/2/4 while optimizing coverage, efficiency and resource allocation to meet KPIs and customer demands.',
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
        'Ensured full compliance with ISO 17025 standards while testing for multiple OEMs.',
        'Gained expertise in Networking Protocols such as CAN, FlexRay, and Ethernet.'
      ] : [
        'Durchführung von EMV-/Elektriktests – Bulk Current Injection, leitungsgebundene/abgestrahlte Emissionen, abgestrahlte Störfestigkeit (Antennenmethode) und ESD für Fahrgestell- und aktive Sicherheitssysteme im Automobilbereich.',
        'Sicherstellung der vollständigen Einhaltung der ISO 17025-Standards bei Tests für mehrere OEMs.',
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
      technologies: ['Materials Science', 'SEM', 'EDS', 'DSC'],
      status: language === 'en' ? 'Ongoing' : 'Laufend',
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
                className="w-48 h-64 md:w-56 md:h-72 rounded-2xl mx-auto object-contain border-4 border-primary animate-glow shadow-elevated bg-card/80"
                onError={(e) => {
                  e.currentTarget.src = myAvatar;
                }}
              />
            </div>

            {/* Hero Content */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-foreground bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-primary mb-4 font-semibold">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <p className="text-base md:text-lg text-secondary-foreground mb-8 max-w-2xl mx-auto">
              {t('hero.company')}
            </p>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              {t('about.title')}
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              {t('about.description')}
            </p>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-secondary/80 border border-primary/10 hover:border-primary/30 transition-all hover-lift card">
                <div className="text-4xl font-bold text-primary mb-2">7+</div>
                <div className="text-muted-foreground font-medium">{language === 'en' ? 'Years Experience' : 'Jahre Erfahrung'}</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-secondary/80 border border-primary/10 hover:border-primary/30 transition-all hover-lift card">
                <div className="text-4xl font-bold text-accent mb-2">2</div>
                <div className="text-muted-foreground font-medium">{language === 'en' ? 'Top Companies' : 'Top-Unternehmen'}</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-secondary/80 border border-primary/10 hover:border-primary/30 transition-all hover-lift card">
                <div className="text-4xl font-bold text-primary mb-2">4</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              {t('skills.title')}
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Semiconductor Skills */}
            <Card className="gradient-border hover-lift bg-secondary/90 backdrop-blur-sm card">
              <CardHeader className="text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">{t('skills.semiconductor')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {technicalSkills.semiconductor.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="w-full justify-center py-2 bg-secondary/80 text-secondary-foreground hover:bg-primary/10 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testing Skills */}
            <Card className="gradient-border hover-lift bg-secondary/90 backdrop-blur-sm card">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-accent">{t('skills.testing')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {technicalSkills.testing.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="w-full justify-center py-2 bg-secondary/80 text-secondary-foreground hover:bg-accent/10 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Programming Skills */}
            <Card className="gradient-border hover-lift bg-secondary/90 backdrop-blur-sm card">
              <CardHeader className="text-center">
                <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">{t('skills.programming')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {technicalSkills.programming.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="w-full justify-center py-2 bg-secondary/80 text-secondary-foreground hover:bg-primary/10 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quality Skills */}
            <Card className="gradient-border hover-lift bg-secondary/90 backdrop-blur-sm card">
              <CardHeader className="text-center">
                <Database className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-accent">{t('skills.quality')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {technicalSkills.quality.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="w-full justify-center py-2 bg-secondary/80 text-secondary-foreground hover:bg-accent/10 transition-colors">
                      {skill}
                    </Badge>
                  ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              {t('projects.title')}
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="gradient-border hover-lift h-full bg-secondary/90 card">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
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
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-medium">
                            {exp.company}
                          </CardDescription>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              {t('education.title')}
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="gradient-border hover-lift bg-secondary/90 card">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl text-primary">{edu.degree}</CardTitle>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
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

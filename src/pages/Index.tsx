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
        'Conducting research on Transient Liquid Phase Sintering for die attach performance',
        'Evaluating intermetallic phase formation in silver-based sintering pastes',
        'Failure analysis using SEM, EDS, and DSC techniques',
        'Contributing to electronics packaging technology advancement'
      ] : [
        'Forschung zur Transient Liquid Phase Sintering für Die-Attach-Leistung',
        'Bewertung der Bildung intermetallischer Phasen in silberbasierten Sinterpaste',
        'Ausfallanalyse mit SEM-, EDS- und DSC-Techniken',
        'Beitrag zur Weiterentwicklung der Elektronikverpackungstechnologie'
      ]
    },
    {
      title: language === 'en' ? 'Quality Engineer (Working Student)' : 'Qualitätsingenieur (Werkstudent)',
      company: 'Infineon Technologies',
      period: language === 'en' ? 'February 2024 - January 2025' : 'Februar 2024 - Januar 2025',
      location: 'Regensburg, Germany',
      responsibilities: language === 'en' ? [
        'Built interactive Tableau dashboards for production data visualization',
        'Automated reports using Python/VBA, reducing manual work by 40%',
        'Created centralized Confluence knowledge base',
        'Supported FMEA and MRB quality processes'
      ] : [
        'Erstellung interaktiver Tableau-Dashboards für Produktionsdatenvisualisierung',
        'Automatisierte Berichte mit Python/VBA, 40% Reduzierung manueller Arbeit',
        'Erstellung einer zentralen Confluence-Wissensbasis',
        'Unterstützung von FMEA- und MRB-Qualitätsprozessen'
      ]
    },
    {
      title: language === 'en' ? 'EMC Test Lead' : 'EMC-Testleiter',
      company: 'Bosch Global Software Technologies',
      period: language === 'en' ? 'September 2020 - February 2023' : 'September 2020 - Februar 2023',
      location: 'Bengaluru, India',
      responsibilities: language === 'en' ? [
        'Led EMI/EMC testing for automotive safety systems',
        'Ensured ISO 17025 compliance across multiple OEM projects',
        'Managed validation cycles and optimized resource efficiency',
        'Applied expertise in CAN, FlexRay, and Ethernet protocols'
      ] : [
        'Leitung von EMI/EMC-Tests für Automobilsicherheitssysteme',
        'Sicherstellung der ISO 17025-Konformität bei mehreren OEM-Projekten',
        'Verwaltung von Validierungszyklen und Optimierung der Ressourceneffizienz',
        'Anwendung von Expertise in CAN-, FlexRay- und Ethernet-Protokollen'
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
    link.href = '/Prabhasa_Javvaji_CV.pdf';
    link.download = 'Prabhasa_Javvaji_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full animate-glow"></div>
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
                className="hidden md:flex bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Mail className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Contact Me' : 'Kontakt'}
              </Button>

              <Button
                onClick={downloadCV}
                variant="outline"
                className="hidden md:flex border-accent text-accent hover:bg-accent hover:text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
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
            <div className="md:hidden py-4 border-t border-primary/20">
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
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg mt-4"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Contact Me' : 'Kontakt'}
                </Button>
                <Button
                  onClick={downloadCV}
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-white font-semibold py-2 rounded-lg"
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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            {/* Profile Image */}
            <div className="mb-8">
              <img
                src="/my_headshot.jpg"
                alt="Prabhasa Javvaji"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto object-cover border-4 border-primary animate-glow shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = "/my_avatar.png";
                }}
              />
            </div>

            {/* Hero Content */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
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
                className="p-4 rounded-full bg-card border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover-scale shadow-lg"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a
                href="mailto:Prabhasajavvaji27@gmail.com"
                className="p-4 rounded-full bg-card border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover-scale shadow-lg"
              >
                <Mail className="w-6 h-6 text-primary" />
              </a>
              <button 
                onClick={downloadCV}
                className="p-4 rounded-full bg-card border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover-scale shadow-lg"
              >
                <FileText className="w-6 h-6 text-primary" />
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center space-x-4 mb-12">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {language === 'en' ? 'Get In Touch' : 'Kontakt aufnehmen'}
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
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
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              {t('about.title')}
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              {t('about.description')}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 transition-all hover-lift">
                <div className="text-4xl font-bold text-primary mb-2">7+</div>
                <div className="text-muted-foreground font-medium">{language === 'en' ? 'Years Experience' : 'Jahre Erfahrung'}</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 transition-all hover-lift">
                <div className="text-4xl font-bold text-accent mb-2">2</div>
                <div className="text-muted-foreground font-medium">{language === 'en' ? 'Top Companies' : 'Top-Unternehmen'}</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 transition-all hover-lift">
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground font-medium">{language === 'en' ? 'Major Projects' : 'Große Projekte'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {t('skills.title')}
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Semiconductor Skills */}
            <Card className="gradient-border hover-lift bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">{t('skills.semiconductor')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {technicalSkills.semiconductor.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="w-full justify-center py-2 bg-secondary/80 text-secondary-foreground hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testing Skills */}
            <Card className="gradient-border hover-lift bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-accent">{t('skills.testing')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {technicalSkills.testing.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="w-full justify-center py-2 bg-secondary/80 text-secondary-foreground hover:bg-accent/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Programming Skills */}
            <Card className="gradient-border hover-lift bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">{t('skills.programming')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {technicalSkills.programming.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="w-full justify-center py-2 bg-secondary/80 text-secondary-foreground hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quality Skills */}
            <Card className="gradient-border hover-lift bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Database className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-accent">{t('skills.quality')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {technicalSkills.quality.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="w-full justify-center py-2 bg-secondary/80 text-secondary-foreground hover:bg-accent/20 transition-colors">
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
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('projects.title')}
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="gradient-border hover-lift h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
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
                        <Badge key={idx} variant="outline" className="border-primary/30">
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
      <section id="experience" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('experience.title')}
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline line */}
                {index < experience.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-primary/30"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-glow flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-background" />
                  </div>
                  
                  {/* Content */}
                  <Card className="gradient-border hover-lift flex-1">
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
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('education.title')}
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="gradient-border hover-lift">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
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
      <section id="contact" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {t('contact.title')}
                <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('contact.description')}
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/20">
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
                href="mailto:Prabhasajavvaji27@gmail.com"
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

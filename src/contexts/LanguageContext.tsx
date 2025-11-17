
import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'en' | 'de';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Prabhasa Javvaji',
    'hero.subtitle': 'Electrical & Microsystems Engineer',
    'hero.description': 'Semiconductor Packaging  | EMI/EMC Validation | Quality Management | Artificial Intelligence',
    'hero.company': 'AI Engineer at Infineon Technologies | Bosch',
    
    // About Section
    'about.title': 'About Me',
    'about.description': "Versatile engineer with a strong blend of AI-driven innovation, semiconductor backend expertise, EMI/EMC and hands-on experience across research, quality, and testing domains. Demonstrated capability in advanced materials research and reliability analysis using a range of microstructural, thermal, and failure-analysis techniques, alongside AI-based technology scouting to support early-stage semiconductor development. Skilled in developing automated data solutions, dashboards, and knowledge systems, as well as leading ISO and CISPR-compliant EMC testing activities for automotive applications. Known for rapidly adapting to complex technical environments, delivering clear insights, reliable results, and efficient workflows. Brings an analytical mindset and cross-functional approach to drive impactful, high-quality engineering outcomes.",
    
    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.semiconductor': 'Semiconductor Technology',
    'skills.testing': 'Testing & Validation',
    'skills.programming': 'Programming & Automation',
    'skills.quality': 'Quality Management',
    
    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.current': 'Present',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.ongoing': 'Ongoing',
    'projects.completed': 'Completed',
    
    // Education Section
    'education.title': 'Education',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': "Let's discuss opportunities in semiconductor technology and engineering innovation",
    
    // Video Section
    'video.title': 'About Me - Video Introduction',
    'video.description': 'Learn more about my journey and expertise',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.location': 'Regensburg, Germany',
  },
  de: {
    // Navigation
    'nav.about': 'Über mich',
    'nav.skills': 'Fähigkeiten',
    'nav.projects': 'Projekte',
    'nav.experience': 'Erfahrung',
    'nav.education': 'Bildung',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Prabhasa Javvaji',
    'hero.subtitle': 'Elektrotechnik- und Mikrosystemingenieur',
    'hero.description': 'Experte für Halbleiterverpackung | EMI/EMC-Validierung | Qualitätsmanagement | Künstliche Intelligenz',
    'hero.company': 'KI-Ingenieur bei Infineon Technologies | Bosch',
    
    // About Section
    'about.title': 'Über mich',
    'about.description': 'Vielseitiger Ingenieur mit einer starken Mischung aus KI-getriebener Innovation, Backend-Expertise im Halbleiterbereich, EMI/EMV und praxisnaher Erfahrung in Forschung, Qualität und Test. Nachgewiesene Kompetenz in der Werkstoffforschung und Zuverlässigkeitsanalyse mit einem breiten Spektrum mikrostruktureller, thermischer und ausfallanalytischer Verfahren sowie KI-gestütztem Technology-Scouting zur Unterstützung der frühen Halbleiterentwicklung. Erfahren in der Entwicklung automatisierter Datenlösungen, Dashboards und Wissenssysteme sowie in der Leitung ISO- und CISPR-konformer EMV-Prüfungen für Automotive-Anwendungen. Bekannt für die schnelle Anpassung an komplexe technische Umgebungen und für klare Einsichten, verlässliche Ergebnisse und effiziente Workflows. Bringt eine analytische Denkweise und einen funktionsübergreifenden Ansatz mit, um wirkungsstarke, qualitativ hochwertige Ingenieursergebnisse zu erzielen.',
    
    // Skills Section
    'skills.title': 'Technische Fähigkeiten',
    'skills.semiconductor': 'Halbleitertechnologie',
    'skills.testing': 'Prüfung & Validierung',
    'skills.programming': 'Programmierung, Automatisierung & KI',
    'skills.quality': 'Qualitätsmanagement',
    
    // Experience Section
    'experience.title': 'Berufserfahrung',
    'experience.current': 'Heute',
    
    // Projects Section
    'projects.title': 'Ausgewählte Projekte',
    'projects.ongoing': 'Laufend',
    'projects.completed': 'Abgeschlossen',
    
    // Education Section
    'education.title': 'Bildung',
    
    // Contact Section
    'contact.title': 'Kontakt aufnehmen',
    'contact.description': 'Lassen Sie uns über Möglichkeiten in der Halbleitertechnologie und Ingenieursinnovation diskutieren',
    
    // Video Section
    'video.title': 'Über mich - Video-Einführung',
    'video.description': 'Erfahren Sie mehr über meinen Werdegang und meine Expertise',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.location': 'Regensburg, Deutschland',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

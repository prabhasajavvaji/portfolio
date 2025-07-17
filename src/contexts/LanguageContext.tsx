
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
    'hero.description': 'Semiconductor Packaging  | EMI/EMC Validation | Quality Management',
    'hero.company': 'Research Engineer at Infineon Technologies | Ex-Bosch',
    
    // About Section
    'about.title': 'About Me',
    'about.description': "I am a Electrical and Microsystems Engineer with a strong focus on semiconductor packaging, EMI/EMC validation, quality management and process automation. With hands-on experience at Infineon Technologies and Bosch, I bring practical engineering solutions to complex challenges in high-tech manufacturing. I help semiconductor and automotive companies improve reliability, optimize backend processes, and ensure compliance through data-driven approaches. My expertise spans die-attach technologies, failure analysis and developing automated tools using Python, VBA and Tableau. I thrive in cross-functional teams and bring a proven ability to deliver results in fast-paced, quality-critical environments. I’m driven to contribute where innovation, precision and performance matter most.",
    
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
    'hero.description': 'Experte für Halbleiterverpackung | EMI/EMC-Validierung | Qualitätsmanagement',
    'hero.company': 'Forschungsingenieur bei Infineon Technologies | Ex-Bosch',
    
    // About Section
    'about.title': 'Über mich',
    'about.description': 'Ich bin ein leidenschaftlicher Elektrotechnik- und Mikrosystemingenieur mit Spezialisierung auf Halbleiterverpackung, EMI/EMC-Validierung und Qualitätsmanagement. Derzeit führe ich fortgeschrittene Forschung bei Infineon Technologies zur Die-Attach-Leistung mit transienter Flüssigphasensintersinterung für hochzuverlässige Leistungselektronik durch.',
    
    // Skills Section
    'skills.title': 'Technische Fähigkeiten',
    'skills.semiconductor': 'Halbleitertechnologie',
    'skills.testing': 'Prüfung & Validierung',
    'skills.programming': 'Programmierung & Automatisierung',
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

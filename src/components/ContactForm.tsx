
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send, CheckCircle, MapPin, Clock } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

declare global {
  interface Window {
    emailjs: any;
  }
}

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { t, language } = useLanguage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (window.emailjs) {
        await window.emailjs.send(
          'service_qea5oxv',
          'template_id',
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'Prabhasajavvaji27@gmail.com'
          }
        );
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.log('EmailJS not loaded, form data:', formData);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <Card className="gradient-border bg-card/90 backdrop-blur-sm max-w-md mx-auto">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-primary animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              {language === 'en' ? 'Message Sent Successfully!' : 'Nachricht erfolgreich gesendet!'}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {language === 'en' 
                ? 'Thank you for reaching out! I\'ll get back to you within 24 hours.' 
                : 'Vielen Dank für Ihre Nachricht! Ich werde mich innerhalb von 24 Stunden bei Ihnen melden.'
              }
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              {language === 'en' ? 'Send Another Message' : 'Weitere Nachricht senden'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Info */}
      <div className="lg:col-span-1 space-y-6">
        <Card className="gradient-border hover-lift bg-card/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-primary text-xl font-bold">
              {language === 'en' ? 'Get In Touch' : 'Kontakt aufnehmen'}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {language === 'en' 
                ? 'Let\'s discuss opportunities and collaborations' 
                : 'Lassen Sie uns über Möglichkeiten und Zusammenarbeit sprechen'
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Email</p>
                <a 
                  href="mailto:Prabhasajavvaji27@gmail.com"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Prabhasajavvaji27@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  {language === 'en' ? 'Location' : 'Standort'}
                </p>
                <p className="text-foreground font-medium">Regensburg, Germany</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  {language === 'en' ? 'Response Time' : 'Antwortzeit'}
                </p>
                <p className="text-foreground font-medium">
                  {language === 'en' ? 'Within 24 hours' : 'Innerhalb von 24 Stunden'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2">
        <Card className="gradient-border hover-lift bg-card/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-primary text-2xl font-bold">
              {language === 'en' ? 'Send a Message' : 'Nachricht senden'}
            </CardTitle>
            <CardDescription className="text-muted-foreground text-lg">
              {language === 'en' 
                ? 'Ready to collaborate? Let\'s bring your ideas to life together.' 
                : 'Bereit zur Zusammenarbeit? Lassen Sie uns gemeinsam Ihre Ideen zum Leben erwecken.'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-semibold">
                    {language === 'en' ? 'Full Name' : 'Vollständiger Name'}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-secondary/20 border-2 border-primary/20 focus:border-primary text-foreground rounded-lg h-12 px-4 transition-all duration-300 hover:border-primary/40"
                    placeholder={language === 'en' ? 'Enter your full name' : 'Geben Sie Ihren vollständigen Namen ein'}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-semibold">
                    {language === 'en' ? 'Email Address' : 'E-Mail-Adresse'}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-secondary/20 border-2 border-primary/20 focus:border-primary text-foreground rounded-lg h-12 px-4 transition-all duration-300 hover:border-primary/40"
                    placeholder={language === 'en' ? 'your.email@example.com' : 'ihre.email@beispiel.com'}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground font-semibold">
                  {language === 'en' ? 'Subject' : 'Betreff'}
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-secondary/20 border-2 border-primary/20 focus:border-primary text-foreground rounded-lg h-12 px-4 transition-all duration-300 hover:border-primary/40"
                  placeholder={language === 'en' ? 'What would you like to discuss?' : 'Was möchten Sie besprechen?'}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-semibold">
                  {language === 'en' ? 'Message' : 'Nachricht'}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-secondary/20 border-2 border-primary/20 focus:border-primary text-foreground rounded-lg px-4 py-3 transition-all duration-300 hover:border-primary/40 resize-none"
                  placeholder={language === 'en' 
                    ? 'Tell me about your project, opportunity, or just say hello! I\'d love to hear from you.'
                    : 'Erzählen Sie mir von Ihrem Projekt, Ihrer Gelegenheit oder sagen Sie einfach Hallo! Ich würde gerne von Ihnen hören.'
                  }
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-lg">{language === 'en' ? 'Sending...' : 'Wird gesendet...'}</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-3">
                    <Send className="w-5 h-5" />
                    <span className="text-lg">{language === 'en' ? 'Send Message' : 'Nachricht senden'}</span>
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
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
          'service_qea5oxv', // Your EmailJS service ID
          'template_id', // Replace with your EmailJS template ID
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
      <Card className="gradient-border">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <CheckCircle className="w-16 h-16 text-primary mb-4 animate-glow" />
          <h3 className="text-2xl font-bold text-primary mb-4">
            {language === 'en' ? 'Message Sent!' : 'Nachricht gesendet!'}
          </h3>
          <p className="text-muted-foreground mb-6">
            {language === 'en' 
              ? 'Thank you for reaching out. I\'ll get back to you soon!' 
              : 'Vielen Dank für Ihre Nachricht. Ich werde mich bald bei Ihnen melden!'
            }
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {language === 'en' ? 'Send Another Message' : 'Weitere Nachricht senden'}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Info */}
      <div className="lg:col-span-1">
        <Card className="gradient-border hover-lift h-full">
          <CardHeader>
            <CardTitle className="text-primary">
              {language === 'en' ? 'Contact Information' : 'Kontaktinformationen'}
            </CardTitle>
            <CardDescription>
              {language === 'en' 
                ? 'Get in touch for opportunities and collaborations' 
                : 'Kontaktieren Sie mich für Möglichkeiten und Zusammenarbeit'
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm text-muted-foreground">Email</p>
                <a 
                  href="mailto:Prabhasajavvaji27@gmail.com"
                  className="text-primary hover:underline"
                >
                  Prabhasajavvaji27@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm text-muted-foreground">
                  {language === 'en' ? 'Location' : 'Standort'}
                </p>
                <p className="text-foreground">Regensburg, Germany</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2">
        <Card className="gradient-border hover-lift">
          <CardHeader>
            <CardTitle className="text-primary">
              {language === 'en' ? 'Send a Message' : 'Nachricht senden'}
            </CardTitle>
            <CardDescription>
              {language === 'en' 
                ? 'I\'d love to hear from you. Send me a message and I\'ll respond as soon as possible.' 
                : 'Ich würde gerne von Ihnen hören. Senden Sie mir eine Nachricht und ich antworte so schnell wie möglich.'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    {language === 'en' ? 'Name' : 'Name'}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-primary/20 focus:border-primary text-foreground"
                    placeholder={language === 'en' ? 'Your name' : 'Ihr Name'}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    {language === 'en' ? 'Email' : 'E-Mail'}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-primary/20 focus:border-primary text-foreground"
                    placeholder={language === 'en' ? 'your.email@example.com' : 'ihre.email@beispiel.com'}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">
                  {language === 'en' ? 'Subject' : 'Betreff'}
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-background border-primary/20 focus:border-primary text-foreground"
                  placeholder={language === 'en' ? 'What is this about?' : 'Worum geht es?'}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  {language === 'en' ? 'Message' : 'Nachricht'}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-background border-primary/20 focus:border-primary text-foreground resize-none"
                  placeholder={language === 'en' 
                    ? 'Tell me about your project, opportunity, or just say hello!'
                    : 'Erzählen Sie mir von Ihrem Projekt, Ihrer Gelegenheit oder sagen Sie einfach Hallo!'
                  }
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 animate-glow"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    <span>{language === 'en' ? 'Sending...' : 'Wird gesendet...'}</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>{language === 'en' ? 'Send Message' : 'Nachricht senden'}</span>
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

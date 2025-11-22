import React, { useState, useRef } from 'react';
import { Layout } from '../components/Layout';
import { AnimatedSection, Button, SectionTitle } from '../components/UI';
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE, TEMPLATE, AND PUBLIC KEY
    // 1. Go to https://www.emailjs.com/
    // 2. Create a free account
    // 3. Add an Email Service (e.g., Gmail) -> Get Service ID
    // 4. Create an Email Template -> Get Template ID
    //    Ensure template variables match: {{user_name}}, {{user_email}}, {{user_phone}}, {{subject}}, {{message}}
    // 5. Go to Account -> API Keys -> Get Public Key

    const SERVICE_ID = 'service_default'; // e.g., 'service_gmail'
    const TEMPLATE_ID = 'template_default'; // e.g., 'template_contact_form'
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // e.g., 'user_123abc'

    // If keys are placeholder, simulate success for demo purposes
    if (SERVICE_ID === 'service_default' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        setTimeout(() => {
            setStatus('success');
            if (formRef.current) formRef.current.reset();
        }, 2000);
        console.log("EmailJS credentials not set. Simulating success.");
        return;
    }

    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setStatus('success');
            if (formRef.current) formRef.current.reset();
        }, (error) => {
            console.log(error.text);
            setStatus('error');
        });
    }
  };

  return (
    <Layout>
      <div className="bg-dark dark:bg-black text-white py-32 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">{t('contact_title')}</h1>
          <div className="h-1 w-20 bg-secondary mb-6"></div>
          <p className="text-xl max-w-2xl text-gray-200 dark:text-gray-300">We are ready to start your new project.</p>
        </div>
      </div>

      <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info */}
            <AnimatedSection>
               <SectionTitle title={t('contact_title')} subtitle={t('contact_subtitle')} centered={false} />
               <p className="text-gray-600 dark:text-gray-400 mb-12">
                 {t('contact_desc')}
               </p>

               <div className="space-y-8">
                 <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-light dark:bg-gray-800 rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                       <MapPin size={24} />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold text-dark dark:text-white mb-2">{t('office_head')}</h4>
                       <p className="text-gray-600 dark:text-gray-400">123 Construction Blvd,<br/>Innovation City, ST 12345</p>
                    </div>
                 </div>
                 
                 <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-light dark:bg-gray-800 rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                       <Phone size={24} />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold text-dark dark:text-white mb-2">{t('office_phone')}</h4>
                       <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-light dark:bg-gray-800 rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                       <Mail size={24} />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold text-dark dark:text-white mb-2">{t('office_email')}</h4>
                       <p className="text-gray-600 dark:text-gray-400">info@team2023.com<br/>support@team2023.com</p>
                    </div>
                 </div>
               </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection className="delay-200">
              <div className="bg-light dark:bg-gray-800 p-8 md:p-10 rounded-lg shadow-lg transition-colors relative overflow-hidden">
                <h3 className="text-2xl font-bold mb-6 text-dark dark:text-white">{t('btn_send')}</h3>
                
                {/* Status Messages */}
                <AnimatePresence>
                    {status === 'success' && (
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-20 bg-white/95 dark:bg-gray-800/95 flex flex-col items-center justify-center text-center p-8"
                        >
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                                <CheckCircle size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-dark dark:text-white mb-2">{t('btn_sent')}</h4>
                            <p className="text-gray-600 dark:text-gray-400">{t('form_success')}</p>
                            <button 
                                onClick={() => setStatus('idle')}
                                className="mt-6 text-sm font-bold text-secondary hover:underline uppercase"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    )}
                    {status === 'error' && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-red-100 dark:bg-red-900/30 border-l-4 border-red-500 p-4 mb-6"
                        >
                            <div className="flex items-center gap-2">
                                <AlertCircle className="text-red-500" size={20} />
                                <p className="text-red-700 dark:text-red-300 text-sm font-medium">{t('form_error')}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label htmlFor="user_name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('form_name')} <span className="text-red-500">*</span></label>
                        <input 
                          required 
                          name="user_name"
                          id="user_name"
                          type="text" 
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-dark dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all rounded-sm placeholder-gray-400"
                          placeholder="John Doe"
                        />
                     </div>
                     <div>
                        <label htmlFor="user_email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('form_email')} <span className="text-red-500">*</span></label>
                        <input 
                          required 
                          name="user_email"
                          id="user_email"
                          type="email" 
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-dark dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all rounded-sm placeholder-gray-400"
                          placeholder="john@example.com"
                        />
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label htmlFor="user_phone" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('form_phone')}</label>
                        <input 
                          name="user_phone"
                          id="user_phone"
                          type="tel" 
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-dark dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all rounded-sm placeholder-gray-400"
                          placeholder="+1 (555) 000-0000"
                        />
                     </div>
                     <div>
                         <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('form_subject')} <span className="text-red-500">*</span></label>
                         <input 
                           required 
                           name="subject"
                           id="subject"
                           type="text" 
                           className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-dark dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all rounded-sm placeholder-gray-400"
                           placeholder="Project Inquiry"
                         />
                     </div>
                  </div>

                  <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('form_message')} <span className="text-red-500">*</span></label>
                      <textarea 
                        required 
                        name="message"
                        id="message"
                        rows={4} 
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-dark dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all rounded-sm placeholder-gray-400 resize-y"
                        placeholder="How can we help you?"
                      ></textarea>
                  </div>
                  
                  <Button variant="primary" className={`w-full ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}>
                    {status === 'submitting' ? (
                        <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {t('btn_sending')}
                        </span>
                    ) : (
                        t('btn_send')
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Map */}
      <div className="h-96 w-full bg-gray-200 dark:bg-gray-800">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1623335567890!5m2!1sen!2sus" 
           width="100%" 
           height="100%" 
           style={{border:0, filter: 'grayscale(100%) invert(10%)'}} 
           allowFullScreen 
           loading="lazy"
           title="Office Location"
         ></iframe>
      </div>
    </Layout>
  );
};

export default Contact;
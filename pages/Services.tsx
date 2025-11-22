import React from 'react';
import { Layout } from '../components/Layout';
import { AnimatedSection, Button, SectionTitle } from '../components/UI';
import { SERVICES } from '../constants';
import { Hammer, Ruler, ClipboardCheck, HardHat } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap: Record<string, any> = {
  Hammer,
  Ruler,
  ClipboardCheck,
  HardHat
};

const Services = () => {
  const { t, get } = useLanguage();
  return (
    <Layout>
       <div className="bg-dark dark:bg-black text-white py-32 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-cd811969d3c6?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">{t('nav_services')}</h1>
          <div className="h-1 w-20 bg-secondary mb-6"></div>
          <p className="text-xl max-w-2xl text-gray-200 dark:text-gray-300">Comprehensive construction solutions tailored to your needs.</p>
        </div>
      </div>

      <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.iconName] || Hammer;
              const isEven = index % 2 === 0;
              
              return (
                <AnimatedSection key={service.id}>
                  <div className={`flex flex-col lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'} items-center gap-12`}>
                    <div className="lg:w-1/2 relative group">
                      <div className={`absolute inset-0 bg-secondary transform translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 -z-10 ${isEven ? 'right-0' : 'left-0'}`}></div>
                      <img src={service.image} alt={get(service.title)} className="w-full shadow-lg rounded-sm" />
                    </div>
                    
                    <div className="lg:w-1/2">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="p-4 bg-primary/5 dark:bg-white/10 text-primary dark:text-secondary rounded-full transition-colors">
                            <Icon size={32} />
                         </div>
                         <h3 className="text-3xl font-heading font-bold text-dark dark:text-white">{get(service.title)}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">{get(service.description)}</p>
                      
                      <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                         <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full"></div> Certified Professionals</li>
                         <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full"></div> Advanced Technology</li>
                         <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full"></div> Timely Delivery</li>
                      </ul>

                      <Button to="/contact" variant="primary">{t('btn_request')}</Button>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="bg-primary dark:bg-blue-900 py-20 text-white text-center transition-colors">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">Let's discuss how we can bring your vision to life with our expert construction services.</p>
            <Button to="/contact" variant="gold">{t('btn_quote')}</Button>
         </div>
      </section>
    </Layout>
  );
};

export default Services;
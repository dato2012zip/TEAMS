import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Button, AnimatedSection, SectionTitle } from '../components/UI';
import { SERVICES, PROJECTS, PARTNERS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current && (window as any).VANTA) {
      try {
        setVantaEffect(
          (window as any).VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x6d28d9, // Purple lines
            backgroundColor: 0x000000, // Black background
            points: 10.00,
            maxDistance: 22.00,
            spacing: 18.00,
            showDots: true
          })
        );
      } catch (e) {
        console.error("Vanta JS init failed", e);
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black" ref={vantaRef}>
      {/* Vanta Background Container is the div itself */}

      {/* Light Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10 pointer-events-none" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center z-20 pointer-events-none">
        <div className="container mx-auto px-4 pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl"
          >
            <h2 className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base pl-1 border-l-4 border-secondary">{t('hero_est')}</h2>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-none mb-6">
              TEAM 2023 <br/>
              <span className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-200 block mt-2 tracking-wide">
                 &mdash; {t('hero_headline')}
              </span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl max-w-xl mb-10 leading-relaxed border-l-2 border-white/20 pl-6">
              {t('hero_desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/projects" variant="gold">{t('btn_projects')}</Button>
              <Button to="/contact" variant="outline">{t('btn_contact')}</Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-20"
      >
        <ChevronDown size={40} className="animate-bounce text-secondary" />
      </motion.div>
    </div>
  );
};

const Home = () => {
  const { t, get } = useLanguage();

  return (
    <Layout>
      <Hero />

      {/* About Preview */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 -z-10"></div>
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" alt="Construction Team" className="w-full h-auto shadow-2xl rounded-sm" />
                <div className="absolute bottom-[-2rem] right-[-1rem] bg-white dark:bg-gray-800 p-8 shadow-xl max-w-xs hidden md:block border-l-4 border-secondary">
                  <p className="text-4xl font-bold text-primary dark:text-purple-400 mb-2">250+</p>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{t('stats_projects')}</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="lg:pl-10">
              <h2 className="text-secondary font-bold uppercase tracking-widest mb-2">{t('about_company')}</h2>
              <h3 className="text-4xl font-heading font-bold text-dark dark:text-white mb-6">{t('about_title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {t('about_desc_1')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {t('about_desc_2')}
              </p>
              <Button to="/about" variant="primary">{t('btn_learn_more')} <ArrowRight size={16} /></Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-light dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('services_title')} subtitle={t('services_subtitle')} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <AnimatedSection key={service.id} className={`delay-[${idx * 100}ms]`}>
                <div className="bg-white dark:bg-gray-900 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full group border-b-4 border-transparent hover:border-secondary">
                  <div className="w-16 h-16 bg-primary/10 dark:bg-primary/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <div className="text-primary dark:text-purple-300 group-hover:text-white font-bold text-xl">
                      {idx + 1}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-dark dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-purple-400 transition-colors">{get(service.title)}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{get(service.description)}</p>
                  <Link to="/services" className="text-secondary font-bold text-sm uppercase tracking-wide flex items-center gap-2 hover:gap-3 transition-all">
                    {t('btn_read_more')} <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-dark dark:bg-black text-white overflow-hidden transition-colors">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm block mb-2">{t('portfolio_subtitle')}</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold">{t('featured_projects')}</h2>
            </div>
            <div className="hidden md:block">
              <Button to="/projects" variant="outline">{t('btn_view_all')}</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map((project) => (
              <AnimatedSection key={project.id}>
                <Link to={`/projects/${project.id}`} className="group block relative overflow-hidden aspect-[4/3] cursor-pointer">
                  <img 
                    src={project.image} 
                    alt={get(project.title)} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-primary/80 dark:bg-purple-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h4 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{get(project.title)}</h4>
                    <p className="text-secondary font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{get(project.category)}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="md:hidden mt-8 text-center">
             <Button to="/projects" variant="outline">{t('btn_view_all')}</Button>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {PARTNERS.map(partner => (
               <img key={partner.id} src={partner.logo} alt={partner.name} className="h-12 object-contain" />
             ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
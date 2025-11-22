import React from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import { Layout } from '../components/Layout';
import { AnimatedSection, SectionTitle } from '../components/UI';
import { TEAM } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t, get } = useLanguage();
  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary dark:bg-gray-900 text-white py-32 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">{t('nav_about')}</h1>
          <div className="h-1 w-20 bg-secondary mb-6"></div>
          <p className="text-xl max-w-2xl text-gray-200 dark:text-gray-300">Driven by a passion for quality and a vision for the future of construction.</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="bg-light dark:bg-gray-800 p-10 rounded-sm border-l-4 border-primary dark:border-blue-500 h-full transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-primary dark:text-blue-400 flex items-center gap-3">
                  <span className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-sm"><Award size={24} /></span>
                  {t('mission_title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t('mission_desc')}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-light dark:bg-gray-800 p-10 rounded-sm border-l-4 border-secondary h-full transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-secondary flex items-center gap-3">
                   <span className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-sm"><CheckCircle size={24} /></span>
                   {t('vision_title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                   {t('vision_desc')}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats / Why Choose Us */}
      <section className="py-24 bg-dark dark:bg-black text-white transition-colors">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('why_choose')} subtitle={t('the_difference')} centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mt-16">
             <AnimatedSection>
                <div className="bg-white/5 p-8 hover:bg-white/10 transition-colors rounded-lg">
                  <Clock className="mx-auto text-secondary mb-4" size={48} />
                  <h4 className="text-4xl font-bold mb-2">25+</h4>
                  <p className="text-gray-400 uppercase text-sm tracking-widest">{t('stats_experience')}</p>
                </div>
             </AnimatedSection>
             <AnimatedSection>
                <div className="bg-white/5 p-8 hover:bg-white/10 transition-colors rounded-lg">
                  <CheckCircle className="mx-auto text-secondary mb-4" size={48} />
                  <h4 className="text-4xl font-bold mb-2">250+</h4>
                  <p className="text-gray-400 uppercase text-sm tracking-widest">{t('stats_projects')}</p>
                </div>
             </AnimatedSection>
             <AnimatedSection>
                <div className="bg-white/5 p-8 hover:bg-white/10 transition-colors rounded-lg">
                  <Users className="mx-auto text-secondary mb-4" size={48} />
                  <h4 className="text-4xl font-bold mb-2">150+</h4>
                  <p className="text-gray-400 uppercase text-sm tracking-widest">{t('stats_staff')}</p>
                </div>
             </AnimatedSection>
             <AnimatedSection>
                <div className="bg-white/5 p-8 hover:bg-white/10 transition-colors rounded-lg">
                  <Award className="mx-auto text-secondary mb-4" size={48} />
                  <h4 className="text-4xl font-bold mb-2">15</h4>
                  <p className="text-gray-400 uppercase text-sm tracking-widest">{t('stats_awards')}</p>
                </div>
             </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('leadership')} subtitle={t('meet_team')} />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <AnimatedSection key={member.id}>
                <div className="group relative overflow-hidden rounded-sm shadow-lg">
                  <img src={member.image} alt={get(member.name)} className="w-full h-[400px] object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl font-bold text-primary dark:text-white">{get(member.name)}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 uppercase font-medium">{get(member.position)}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
       {/* Timeline */}
       <section className="py-24 bg-light dark:bg-gray-800 transition-colors">
          <div className="container mx-auto px-4">
             <SectionTitle title={t('journey_title')} subtitle={t('journey_subtitle')} centered />
             <div className="max-w-4xl mx-auto mt-12 relative border-l-2 border-secondary/30 ml-4 md:ml-auto">
                {[
                   { year: '1998', title: 'Establishment', desc: 'TEAM 2023 founded with a small team of 5 engineers.' },
                   { year: '2005', title: 'Major Milestone', desc: 'Completed first high-rise commercial project in the capital.' },
                   { year: '2012', title: 'Expansion', desc: 'Opened regional offices and expanded into industrial sectors.' },
                   { year: '2023', title: 'Today', desc: 'Celebrating 25 years of excellence with over 250 completed projects.' },
                ].map((item, index) => (
                   <AnimatedSection key={index} className="mb-12 pl-12 relative">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-secondary rounded-full border-4 border-white dark:border-gray-800 shadow-sm transition-colors"></div>
                      <span className="text-secondary font-bold text-xl block mb-2">{item.year}</span>
                      <h4 className="text-2xl font-bold text-dark dark:text-white mb-2">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                   </AnimatedSection>
                ))}
             </div>
          </div>
       </section>

    </Layout>
  );
};

export default About;
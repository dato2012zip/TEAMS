import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Button, AnimatedSection } from '../components/UI';
import { PROJECTS } from '../constants';
import { MapPin, Calendar, Tag, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, get } = useLanguage();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
     window.scrollTo(0,0);
  }, [id]);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-dark dark:text-white">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <Button onClick={() => navigate('/projects')} variant="primary">{t('btn_back')}</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[60vh] w-full">
        <img src={project.image} alt={get(project.title)} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/50 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <Button onClick={() => navigate('/projects')} variant="outline" className="mb-8 text-sm border-white/50 hover:border-white">
               <ArrowLeft size={16} className="mr-2" /> {t('btn_back')}
            </Button>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">{get(project.title)}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{get(project.location)}</p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Sidebar Info */}
            <div className="lg:col-span-1">
              <AnimatedSection>
                <div className="bg-light dark:bg-gray-800 p-8 rounded-lg shadow-sm border-t-4 border-secondary transition-colors">
                  <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-200 dark:border-gray-700 text-dark dark:text-white">{t('project_info')}</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <MapPin className="text-secondary mt-1" size={20} />
                       <div>
                          <span className="block text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">{t('project_location')}</span>
                          <span className="font-medium text-dark dark:text-white">{get(project.location)}</span>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <Calendar className="text-secondary mt-1" size={20} />
                       <div>
                          <span className="block text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">{t('project_year')}</span>
                          <span className="font-medium text-dark dark:text-white">{project.year}</span>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <Tag className="text-secondary mt-1" size={20} />
                       <div>
                          <span className="block text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">{t('project_category')}</span>
                          <span className="font-medium text-dark dark:text-white">{get(project.category)}</span>
                       </div>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                       <Button to="/contact" variant="primary" className="w-full">{t('btn_contact')}</Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-3xl font-bold mb-6 text-dark dark:text-white">{t('project_overview')}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-12">
                  {get(project.description)}
                  <br /><br />
                  This project represents our commitment to excellence. Utilizing state-of-the-art materials and innovative engineering techniques, we successfully navigated complex logistical challenges to deliver a landmark structure.
                </p>

                <h3 className="text-2xl font-bold mb-6 text-dark dark:text-white">{t('project_gallery')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {project.gallery.map((img, idx) => (
                      <img 
                        key={idx} 
                        src={img} 
                        alt={`${get(project.title)} gallery ${idx}`} 
                        className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                      />
                   ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetails;
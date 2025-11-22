import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { AnimatedSection, SectionTitle } from '../components/UI';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const [filter, setFilter] = useState<'All' | 'Completed' | 'Ongoing'>('All');
  const { t, get } = useLanguage();
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.status === filter);

  return (
    <Layout>
      <div className="bg-dark dark:bg-black text-white py-32 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">{t('nav_projects')}</h1>
          <div className="h-1 w-20 bg-secondary mb-6"></div>
        </div>
      </div>

      <section className="py-24 bg-white dark:bg-gray-900 min-h-screen transition-colors">
        <div className="container mx-auto px-4">
          
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['All', 'Completed', 'Ongoing'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-8 py-2 text-sm font-bold uppercase tracking-wider border-2 transition-all duration-300 rounded-full ${
                  filter === f 
                    ? 'border-primary bg-primary text-white dark:border-blue-600 dark:bg-blue-600' 
                    : 'border-gray-200 text-gray-500 hover:border-primary hover:text-primary dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:border-blue-400'
                }`}
              >
                {f === 'All' ? t('filter_all') : f === 'Completed' ? t('filter_completed') : t('filter_ongoing')}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/projects/${project.id}`} className="group block h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img 
                        src={project.image} 
                        alt={get(project.title)} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase text-dark dark:text-white rounded-sm">
                        {project.status === 'Completed' ? t('filter_completed') : t('filter_ongoing')}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">{get(project.category)}</p>
                      <h3 className="text-2xl font-bold text-dark dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{get(project.title)}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex items-center gap-2">
                         <span className="w-1 h-1 bg-gray-400 rounded-full"></span> {get(project.location)}
                         <span className="w-1 h-1 bg-gray-400 rounded-full"></span> {project.year}
                      </p>
                      <span className="inline-block text-sm font-bold border-b-2 border-transparent group-hover:border-secondary transition-all text-dark dark:text-gray-300">{t('btn_view_details')}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
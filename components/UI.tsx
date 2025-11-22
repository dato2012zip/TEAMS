import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const AnimatedSection: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'outline' | 'gold' | 'accent';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, to, variant = 'primary', onClick, className = '' }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3 font-bold transition-all duration-300 uppercase tracking-wider text-sm rounded-sm";
  const variants = {
    primary: "bg-primary dark:bg-purple-700 text-white hover:bg-purple-900 dark:hover:bg-purple-600 shadow-lg hover:shadow-purple-500/50",
    outline: "border-2 border-white text-white hover:bg-white hover:text-primary dark:hover:text-dark",
    gold: "bg-secondary text-dark hover:bg-yellow-300 shadow-lg hover:shadow-yellow-500/50",
    accent: "bg-accent text-white hover:bg-red-600 shadow-lg hover:shadow-red-500/50",
  };

  const content = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

export const SectionTitle = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    {subtitle && <span className="block text-secondary font-bold tracking-widest uppercase text-sm mb-2">{subtitle}</span>}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark dark:text-white transition-colors">{title}</h2>
    <div className={`h-1 w-20 bg-secondary mt-4 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);
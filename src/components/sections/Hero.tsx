import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText?: string;
  benefits?: string[];
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  image,
  ctaText = "Agendar Consulta",
  benefits = [],
  onCtaClick
}) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-medical-50 to-transparent -z-10"></div>
      <div className="absolute top-20 right-20 w-64 md:w-96 h-64 md:h-96 bg-teal-100/50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <span className="h-px w-6 md:w-8 bg-teal-500"></span>
              <span className="text-teal-600 text-xs md:text-sm font-bold tracking-widest uppercase">
                {subtitle}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-medical-900 leading-[1.1] mb-4 md:mb-6 tracking-tight">
              {title}
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed max-w-lg">
              {description}
            </p>
            
            {benefits.length > 0 && (
              <div className="flex flex-wrap gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-3 mb-6 md:mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-medical-800">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-teal-100 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-teal-600" />
                    </div>
                    <span className="text-xs md:text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/50769639626?text=Hola,%20quiero%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onCtaClick}
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-medical-600 to-medical-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-medical-900/10 transition-all duration-300 hover:scale-[1.02] text-base md:text-lg"
              >
                {ctaText} <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-medical-800 font-semibold rounded-xl border-2 border-medical-200 hover:border-medical-400 hover:bg-medical-50 transition-all duration-300 text-base md:text-lg"
              >
                Más información
              </button>
            </div>
          </motion.div>

          {/* Image Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-medical-900/10 border-4 border-white">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5]"
              />
              
              {/* Floating Review Card */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-sm p-3 md:p-5 rounded-xl md:rounded-2xl shadow-lg border border-white/50">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                    ))}
                  </div>
                  <div>
                    <div className="flex text-yellow-400 text-xs mb-0.5 md:mb-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-current" />)}
                    </div>
                    <p className="text-[10px] md:text-xs font-medium text-slate-600">
                      <strong className="text-medical-900">+500 Pacientes</strong> satisfechos este mes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Dots */}
            <div className="absolute -bottom-10 -right-10 grid grid-cols-6 gap-2 opacity-20">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-medical-600"></div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

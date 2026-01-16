import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface BenefitsProps {
  title: string;
  subtitle: string;
  items: BenefitItem[];
}

export const Benefits: React.FC<BenefitsProps> = ({ title, subtitle, items }) => {
  return (
    <section className="py-12 md:py-24 bg-surface-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-2 md:mb-3 block">{subtitle}</span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-medical-900 mb-3 md:mb-4">{title}</h3>
          <div className="w-16 md:w-20 h-1 md:h-1.5 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group p-6 md:p-10 rounded-2xl md:rounded-[2rem] bg-white hover:shadow-soft-lg transition-all duration-500 border border-gray-100 hover:-translate-y-1"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-medical-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-8 group-hover:bg-medical-600 transition-colors duration-500">
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-medical-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-medical-900 mb-2 md:mb-4">{item.title}</h4>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

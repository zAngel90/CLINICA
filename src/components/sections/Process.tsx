import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessProps {
  title?: string;
  steps: Step[];
}

export const Process: React.FC<ProcessProps> = ({ title = "¿Cómo funciona?", steps }) => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-medical-600 text-white flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg mb-4 md:mb-6 border-4 border-white">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

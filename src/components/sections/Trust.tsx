import React from 'react';
import { Award, Star, ShieldCheck, Users } from 'lucide-react';

export const Trust = () => {
  return (
    <section className="py-8 md:py-12 border-y border-gray-100 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
          {[
            { icon: Award, number: "+10", label: "Años de Experiencia" },
            { icon: Users, number: "+5k", label: "Pacientes Felices" },
            { icon: ShieldCheck, number: "100%", label: "Certificados" },
            { icon: Star, number: "4.9", label: "Valoración Google" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 group text-center sm:text-left">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-medical-50 flex items-center justify-center group-hover:bg-medical-100 transition-colors">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-medical-600" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-medical-900">{item.number}</div>
                <div className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wide">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Benefits } from '../components/sections/Benefits';
import { Process } from '../components/sections/Process';
import { Trust } from '../components/sections/Trust';
import { Contact } from '../components/sections/Contact';
import { Zap, HeartPulse, RefreshCw } from 'lucide-react';

export const Ozone = () => {
  const benefits = [
    {
      title: "Alivio del Dolor",
      description: "Potente efecto antiinflamatorio y analgésico para dolores crónicos y agudos.",
      icon: Zap
    },
    {
      title: "Revitalización Celular",
      description: "Mejora la oxigenación de los tejidos y fortalece el sistema inmunológico.",
      icon: RefreshCw
    },
    {
      title: "Tratamiento Integral",
      description: "Complemento ideal para hernias discales, fibromialgia y pie diabético.",
      icon: HeartPulse
    }
  ];

  const processSteps = [
    { number: "01", title: "Evaluación", description: "Valoración médica para determinar el protocolo adecuado." },
    { number: "02", title: "Sesión", description: "Aplicación de ozono médico de forma segura y controlada." },
    { number: "03", title: "Recuperación", description: "Reposo breve (si aplica) y retorno a actividades." },
    { number: "04", title: "Seguimiento", description: "Evaluación de progreso sesión tras sesión." }
  ];

  return (
    <div className="animate-fade-in">
      <Hero 
        title="Ozonoterapia y Neuromix"
        subtitle="Medicina Regenerativa"
        description="Tratamientos innovadores para el manejo del dolor y la regeneración celular. Recupera tu calidad de vida con terapias seguras y efectivas."
        image="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop"
        ctaText="Solicitar Valoración"
        benefits={['Sin efectos secundarios', 'Resultados rápidos', 'Terapia Ambulatoria']}
        onCtaClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      />
      
      <Benefits 
        title="Beneficios de la Ozonoterapia"
        subtitle="Salud Integral"
        items={benefits}
      />

      <Trust />

      <Process steps={processSteps} />

      <Contact />
    </div>
  );
};

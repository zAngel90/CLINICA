import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Benefits } from '../components/sections/Benefits';
import { Process } from '../components/sections/Process';
import { Trust } from '../components/sections/Trust';
import { Contact } from '../components/sections/Contact';
import { Sparkles, Smile, Clock, Shield } from 'lucide-react';

export const FacialHarmonization = () => {
  const benefits = [
    {
      title: "Resultados Naturales",
      description: "Realzamos tu belleza sin perder tu esencia. Tratamientos personalizados para cada tipo de rostro.",
      icon: Smile
    },
    {
      title: "Mínimamente Invasivo",
      description: "Procedimientos ambulatorios sin cirugía, recuperación rápida y molestias mínimas.",
      icon: Shield
    },
    {
      title: "Efecto Rejuvenecedor",
      description: "Combate signos de la edad, líneas de expresión y flacidez de manera efectiva.",
      icon: Sparkles
    }
  ];

  const processSteps = [
    { number: "01", title: "Valoración", description: "Análisis facial detallado por nuestros especialistas." },
    { number: "02", title: "Diseño", description: "Planificación personalizada de las zonas a tratar." },
    { number: "03", title: "Aplicación", description: "Procedimiento seguro con productos certificados." },
    { number: "04", title: "Control", description: "Seguimiento para asegurar resultados óptimos." }
  ];

  return (
    <div className="animate-fade-in">
      <Hero 
        title="Armonización Facial Avanzada"
        subtitle="Estética Médica"
        description="Descubre la mejor versión de ti misma con nuestros tratamientos de armonización facial. Equilibrio, simetría y belleza natural en manos de expertos médicos."
        image="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
        benefits={['Rellenos Faciales', 'Perfilamiento', 'Bioestimuladores']}
        onCtaClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      />
      
      <Benefits 
        title="¿Por qué elegir nuestra clínica?"
        subtitle="Beneficios Exclusivos"
        items={benefits}
      />

      <Trust />

      <Process steps={processSteps} />

      <Contact />
    </div>
  );
};

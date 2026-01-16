import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Benefits } from '../components/sections/Benefits';
import { Process } from '../components/sections/Process';
import { Trust } from '../components/sections/Trust';
import { Contact } from '../components/sections/Contact';
import { Activity, Brain, FileText } from 'lucide-react';

export const EEG = () => {
  const benefits = [
    {
      title: "Tecnología Digital",
      description: "Equipos de última generación para registros precisos y detallados de la actividad cerebral.",
      icon: Activity
    },
    {
      title: "Interpretación Especializada",
      description: "Neurólogos certificados analizan cada estudio para un diagnóstico certero.",
      icon: Brain
    },
    {
      title: "Entrega Rápida",
      description: "Resultados digitales y físicos entregados en tiempo récord para iniciar tu tratamiento.",
      icon: FileText
    }
  ];

  const processSteps = [
    { number: "01", title: "Cita", description: "Agenda tu estudio en el horario que más te convenga." },
    { number: "02", title: "Preparación", description: "Indicaciones sencillas previas al estudio (cabello limpio, etc)." },
    { number: "03", title: "Estudio", description: "Realización del EEG en un ambiente cómodo y tranquilo." },
    { number: "04", title: "Resultados", description: "Entrega de informe médico detallado." }
  ];

  return (
    <div className="animate-fade-in">
      <Hero 
        title="Electroencefalogramas Digitales"
        subtitle="Neurología Clínica"
        description="Estudios neurológicos de alta precisión para el diagnóstico y seguimiento de condiciones cerebrales. Tecnología avanzada y calidez humana."
        image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
        ctaText="Agendar Estudio"
        benefits={['Mapeo Cerebral', 'EEG Sueño/Vigilia', 'Video EEG']}
        onCtaClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      />
      
      <Benefits 
        title="Precisión en cada diagnóstico"
        subtitle="Estudios Confiables"
        items={benefits}
      />

      <Trust />

      <Process steps={processSteps} />

      <Contact />
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Activity, Zap, ChevronRight } from 'lucide-react';
import { Trust } from '../components/sections/Trust';
import { Contact } from '../components/sections/Contact';
import { Button } from '../components/ui/Button';

export const Home = () => {
  const services = [
    {
      title: "Armonización Facial",
      desc: "Realza tu belleza natural con tratamientos mínimamente invasivos.",
      icon: Sparkles,
      path: "/armonizacion",
      color: "text-rose-500",
      bg: "bg-rose-50",
      img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Neurofisiología Clínica",
      desc: "Diagnósticos precisos con tecnología de electroencefalograma digital.",
      icon: Activity,
      path: "/electroencefalogramas",
      color: "text-blue-500",
      bg: "bg-blue-50",
      img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Ozonoterapia",
      desc: "Medicina regenerativa avanzada para el manejo del dolor crónico.",
      icon: Zap,
      path: "/ozono",
      color: "text-teal-500",
      bg: "bg-teal-50",
      img: "https://images.unsplash.com/photo-1584515933487-779824d29609?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-white">
      {/* Modern Hero Hub */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-medical-900 to-medical-800">
        {/* Simple Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-600/10 to-transparent"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 items-center">
            {/* Content */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                Excelencia Médica <br/>
                <span className="text-teal-400">y Estética Integral</span>
              </h1>
              
              <p className="text-xl text-medical-100 mb-10 leading-relaxed max-w-xl">
                En Nervos Center fusionamos la ciencia neurológica con el arte de la estética para ofrecerte bienestar completo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-medical-900 hover:bg-gray-100 font-semibold rounded-xl transition-all duration-300 text-lg"
                >
                  Ver servicios
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="https://wa.me/50769639626?text=Hola,%20quiero%20más%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white border-2 border-white/20 hover:bg-white/5 font-semibold rounded-xl transition-all duration-300 text-lg"
                >
                  Contáctanos
                </a>
              </div>
              
              {/* Simple Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">+10</div>
                  <div className="text-sm text-medical-200">Años de experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-medical-200">Pacientes atendidos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">3</div>
                  <div className="text-sm text-medical-200">Especialidades</div>
                </div>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1000&auto=format&fit=crop"
                  alt="Clínica Nervos Center"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-900/80 via-medical-900/20 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-medical-900 mb-1">Atención profesional</h3>
                      <p className="text-sm text-slate-600">Cuidado personalizado para tu salud y bienestar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Trust />

      {/* Services Cards - Floating Effect */}
      <section id="servicios" className="py-24 bg-surface-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-2 block">Especialidades</span>
              <h2 className="text-3xl md:text-4xl font-bold text-medical-900">Áreas de Atención</h2>
            </div>
            <Link to="/contact" className="hidden md:flex items-center text-medical-600 font-semibold hover:text-medical-800 transition-colors">
              Ver todos los tratamientos <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link 
                key={idx} 
                to={service.path}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 z-10"></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute top-6 left-6 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center z-20 shadow-lg ${service.color}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-medical-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 mb-8 flex-1 leading-relaxed">{service.desc}</p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                    <span className="text-sm font-semibold text-medical-600">Más información</span>
                    <div className="w-8 h-8 rounded-full bg-medical-50 flex items-center justify-center group-hover:bg-medical-600 group-hover:text-white transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

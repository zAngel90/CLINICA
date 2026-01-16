import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detectar si estamos en la home para manejar el contraste
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lógica de visualización:
  // Si estamos en Home, arriba del todo y el menú móvil está cerrado -> Tema Oscuro (Texto Blanco)
  // En cualquier otro caso -> Tema Claro (Texto Oscuro sobre fondo Blanco)
  const isTransparentState = isHome && !scrolled && !isOpen;

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Armonización Facial', path: '/armonizacion' },
    { name: 'Neurología', path: '/electroencefalogramas' },
    { name: 'Ozonoterapia', path: '/ozono' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // Si no es transparente (scrolled o páginas internas), aplicamos fondo blanco y sombra
        !isTransparentState 
          ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-gray-100" 
          : "bg-transparent py-4 md:py-6 border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Optimizado para móviles */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group shrink-0" onClick={() => setIsOpen(false)}>
            <div className={cn(
              "w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center font-bold text-lg md:text-xl shadow-lg transition-all duration-300",
              // Invertir colores del logo según el estado
              isTransparentState 
                ? "bg-white text-medical-900" 
                : "bg-gradient-to-br from-medical-800 to-medical-600 text-white group-hover:shadow-glow"
            )}>
              N
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-bold text-base md:text-lg leading-none tracking-tight transition-colors duration-300",
                isTransparentState ? "text-white" : "text-medical-900"
              )}>
                Nervos Center
              </span>
              <span className={cn(
                "text-[9px] md:text-[10px] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase mt-0.5 transition-colors duration-300",
                isTransparentState ? "text-teal-300" : "text-teal-600"
              )}>
                Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Cambiado de lg a md */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xs lg:text-sm font-medium transition-colors relative py-1 hover:opacity-100 whitespace-nowrap",
                  // Lógica de colores para los links
                  isTransparentState 
                    ? "text-medical-100 hover:text-white" 
                    : "text-slate-500 hover:text-medical-600",
                  location.pathname === link.path && (
                    isTransparentState ? "text-white font-semibold" : "text-medical-800 font-semibold"
                  )
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 rounded-full",
                    isTransparentState ? "bg-white" : "bg-teal-500"
                  )}></span>
                )}
              </Link>
            ))}
            
            {/* Botón CTA adaptativo - Más compacto en tablets */}
            <a 
              href="https://wa.me/50769639626?text=Hola,%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "ml-2 lg:ml-4 inline-flex items-center justify-center gap-2 px-3 lg:px-4 py-2 rounded-lg font-semibold text-xs lg:text-sm whitespace-nowrap transition-all duration-300 hover:scale-[1.02]",
                isTransparentState 
                  ? "bg-white text-medical-800 hover:bg-gray-50" 
                  : "bg-gradient-to-r from-medical-600 to-medical-500 text-white hover:shadow-lg"
              )}
            >
              <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden lg:inline">Agendar Cita</span>
              <span className="lg:hidden">Agendar</span>
            </a>
          </nav>

          {/* Mobile Menu Button - Ajustado */}
          <button 
            className={cn(
              "md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-opacity-10",
              isTransparentState 
                ? "text-white hover:bg-white" 
                : "text-medical-900 hover:bg-medical-900"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay - Mejorado */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className={cn(
        "fixed top-0 right-0 h-screen w-[280px] sm:w-[320px] bg-white z-[70] md:hidden shadow-2xl transition-transform duration-300 ease-out flex flex-col",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Header del menú móvil - Fixed */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-100 shrink-0 bg-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-medical-800 to-medical-600 flex items-center justify-center font-bold text-white text-sm">
              N
            </div>
            <span className="font-bold text-medical-900 text-sm">Menú</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Links del menú - Scrollable */}
        <div className="flex-1 overflow-y-auto overscroll-contain bg-white">
          <div className="flex flex-col p-4 sm:p-5 gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-medium rounded-lg px-4 py-3 transition-all hover:bg-gray-50",
                  location.pathname === link.path 
                    ? 'text-medical-800 font-bold bg-medical-50' 
                    : 'text-slate-600 hover:text-medical-800'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer con botón CTA - Fixed */}
        <div className="p-4 sm:p-5 border-t border-gray-100 shrink-0 bg-white">
          <a 
            href="https://wa.me/50769639626?text=Hola,%20quiero%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-medical-600 to-medical-500 text-white font-semibold rounded-xl px-6 py-3 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <Phone className="w-4 h-4" />
            Agendar Cita
          </a>
        </div>
      </div>
    </header>
  );
};

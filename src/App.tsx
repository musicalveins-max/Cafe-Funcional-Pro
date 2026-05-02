/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Leaf, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Instagram, 
  Globe, 
  Star,
  Quote,
  ShieldCheck,
  Package,
  Heart
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/573202230602?text=me%20interesa%20el%20cafe%20funcional%20vengo%20de%20la%20pagina";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-coffee-base font-sans text-stone-900 selection:bg-brand-green selection:text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-coffee-mist rounded-full blur-[80px] opacity-60 z-0 pointer-events-none hidden md:block"></div>
      <div className="fixed bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-brand-green-light rounded-full blur-[80px] opacity-60 z-0 pointer-events-none hidden md:block"></div>

      {/* Navigation */}
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-coffee-rich rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-coffee-rich/20">
              <Coffee size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-coffee-rich uppercase">
              Cafe Funcional <span className="font-light opacity-50">Pro</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-coffee-deep/70">
            <a href="#ingredientes" className="hover:text-brand-green transition-colors">Ingredientes</a>
            <a href="#preparacion" className="hover:text-brand-green transition-colors">Preparación</a>
            <a href="#beneficios" className="hover:text-brand-green transition-colors">Beneficios</a>
            <a href="#precio" className="hover:text-brand-green transition-colors">Precio</a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green text-white px-6 py-2.5 rounded-xl hover:bg-brand-green-dark transition-all shadow-lg shadow-brand-green/20 flex items-center gap-2"
            >
              Pedir Ahora
              <ArrowRight size={16} />
            </a>
          </div>

          <button className="md:hidden text-coffee-rich">
            <MessageCircle size={24} onClick={() => window.open(whatsappLink, '_blank')} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green-dark text-xs font-bold rounded-full uppercase tracking-wider mb-6">
              Distribuidor Independiente Autorizado
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-coffee-deep tracking-tighter mb-8 uppercase">
              Tu Café Diario, <br/>
              <span className="text-brand-green italic">Ahora es Salud.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Disfruta el sabor premium del café colombiano enriquecido con tecnología nutricional avanzada. Mejora tu sistema inmunológico mientras disfrutas de tu ritual favorito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-coffee-rich text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-coffee-deep transition-all shadow-xl shadow-coffee-rich/30"
              >
                <MessageCircle size={24} />
                ORDENA POR WHATSAPP
              </a>
              <a 
                href="#ingredientes"
                className="inline-flex items-center justify-center gap-2 border-2 border-coffee-rich text-coffee-rich px-8 py-4 rounded-2xl font-bold text-lg hover:bg-coffee-rich hover:text-white transition-all"
              >
                VER PRODUCTOS
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-stone-100 relative group">
              <div className="aspect-square bg-white rounded-3xl flex items-center justify-center overflow-hidden mb-8">
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.img 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    src="https://drive.google.com/thumbnail?id=1WXvkNL356czuxlv8MLLSPDB-fQpD5BHa&sz=w1000" 
                    alt="Cafe Funcional Pro Pack" 
                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-0 right-0 w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-white font-black text-lg shadow-xl border-4 border-white rotate-12">
                    NUEVO
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black text-coffee-deep tracking-tight">Pack Vitalidad Inmune</h3>
                    <p className="text-slate-500 font-medium">Caja de 30 sobres de café gourmet con ingredientes seleccionados como hongos Ganoderma Lucidum y Shiitake, fibra prebiótica y vitamina C,</p>
                  </div>
                  <div className="bg-brand-green/10 text-brand-green px-3 py-1 rounded-lg text-xs font-black">TOP</div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-stone-50">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-black text-brand-green">Pack Premium Vitalidad</span>
                    <span className="text-[10px] uppercase font-black text-slate-400 mt-1">Caja 30 porciones</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-orange-400 text-orange-400" />
                      <Star size={16} className="fill-orange-400 text-orange-400" />
                      <Star size={16} className="fill-orange-400 text-orange-400" />
                      <Star size={16} className="fill-orange-400 text-orange-400" />
                      <Star size={16} className="fill-orange-400 text-orange-400" />
                    </div>
                    <span className="text-[10px] uppercase font-black text-slate-400 mt-1">128 reseñas</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Bar */}
      <section id="trust" className="bg-coffee-deep py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex items-center gap-6 p-8 group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-brand-green/20 group-hover:scale-110 transition-all duration-500 border border-white/5">☕</div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">Sabor Premium</h4>
                <p className="text-white/40 text-xs font-medium">Grano 100% de exportación colombiana.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-8 group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-brand-green/20 group-hover:scale-110 transition-all duration-500 border border-white/5">🛡️</div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">Inmunidad Alta</h4>
                <p className="text-white/40 text-xs font-medium">Fortalece el sistema inmunológico, reduce la fatiga, estrés, y actúa como antioxidante.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-8 group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-brand-green/20 group-hover:scale-110 transition-all duration-500 border border-white/5">📦</div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">Fácil de llevar</h4>
                <p className="text-white/40 text-xs font-medium">Práctico formato en sobres individuales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredientes" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="text-brand-green font-black uppercase tracking-[0.3em] text-xs mb-4">La Ciencia del Sabor</div>
              <h2 className="text-5xl md:text-6xl font-black text-coffee-deep leading-tight tracking-tighter">
                INGREDIENTES <br/><span className="text-stone-300">POTENCIADOS</span>
              </h2>
            </div>
            <p className="text-slate-500 font-medium italic max-w-sm mb-2 border-l-4 border-brand-green pl-6">
              "Cada taza contiene ingredientes seleccionados para acompañar tu bienestar diario."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Café Colombiano", 
                desc: "Café soluble 100% colombiano de alta calidad con el sabor que amas.", 
                icon: <Coffee size={32} />,
                accent: "bg-amber-100"
              },
              { 
                title: "Hongos Adaptógenos", 
                desc: "Mezcla de hongos que ayudan a tu cuerpo a equilibrarse ante el estrés diario.", 
                icon: <Leaf size={32} />,
                accent: "bg-emerald-100"
              },
              { 
                title: "Fibra Prebiótica", 
                desc: "Promueve la salud digestiva y asegura una mejor absorción de nutrientes.", 
                icon: <Heart size={32} />,
                accent: "bg-rose-100"
              },
              { 
                title: "Vitamina C", 
                desc: "Potente antioxidante para fortalecer tus defensas naturales y vitalidad.", 
                icon: <Zap size={32} />,
                accent: "bg-yellow-100"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -12 }}
                className="bg-stone-50 p-10 rounded-[32px] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col"
              >
                <div className={`${item.accent} w-20 h-20 rounded-2xl flex items-center justify-center text-coffee-deep mb-8 relative group-hover:rotate-12 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-coffee-deep mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section id="preparacion" className="py-32 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-brand-green font-black uppercase tracking-[0.3em] text-xs mb-4">PREPARACIÓN</div>
              <h2 className="text-5xl md:text-6xl font-black text-coffee-deep leading-[0.9] tracking-tighter mb-8 uppercase">
                Cómo prepararlo <br/><span className="text-stone-300">& disfrutarlo</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                Prepara tu Immunotec Café en segundos — práctico para cualquier momento de tu día.
              </p>

              <div className="space-y-10">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-coffee-rich mb-6 border-b border-coffee-rich/10 pb-2">Preparación básica</h3>
                  <ul className="space-y-4">
                    {[
                      "Mezcla 1 sobre en 1 taza de agua caliente o en tu bebida favorita… y listo.",
                      "No requiere cafetera ni equipos especiales.",
                      "30 porciones por caja — para todo el mes."
                    ].map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center shrink-0 font-black text-xs shadow-lg shadow-brand-green/20">{i + 1}</div>
                        <p className="text-slate-600 font-medium">{step}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-coffee-rich mb-6 border-b border-coffee-rich/10 pb-2">Disfrútalo como prefieras</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { label: "Negro", desc: "Clásico & Puro" },
                      { label: "Con Leche", desc: "Cremoso & Suave" },
                      { label: "Frío o Caliente", desc: "A tu gusto" }
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-brand-green/10 rounded-2xl border border-brand-green/20 shadow-sm transition-transform hover:scale-105">
                        <div className="font-black text-brand-green-dark text-xs uppercase tracking-wider mb-1">{item.label}</div>
                        <div className="text-[10px] text-brand-green/60 font-bold uppercase">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-brand-green/10 rounded-full blur-[100px] opacity-60"></div>
              <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://drive.google.com/thumbnail?id=1d7WW63w2rvv3V9Cc8XGEWuV9EuCR6kmz&sz=w1000" 
                  alt="Preparando Café Funcional Pro" 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-deep/80 to-transparent flex items-end p-12">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center text-3xl shadow-xl">☕</div>
                    <div>
                      <div className="text-2xl font-black tracking-tighter">Listo en 10s</div>
                      <div className="text-xs font-bold uppercase tracking-widest opacity-60">Instantáneo Premium</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-32 bg-coffee-deep relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-green/20 rounded-[50px] blur-2xl group-hover:blur-3xl transition-all"></div>
              <img 
                src="https://drive.google.com/thumbnail?id=1E3B8HEF6GOaTDiNdLKcgw8LjAjxceVZk&sz=w1000" 
                alt="Beneficios Cafe Funcional Pro" 
                className="relative rounded-[40px] shadow-2xl z-10 object-cover w-full h-full transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-brand-green font-black uppercase tracking-[0.3em] text-xs mb-6 underline decoration-2 underline-offset-8">Rendimiento Inmune</div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-tight">
                BENEFICIOS QUE <br/><span className="italic text-white/40">SIENTES</span>
              </h2>
              <ul className="space-y-6">
                {[
                  "Se adapta a tu rutina y la eleva instantáneamente.",
                  "Energía limpia y sostenida sin el 'crash' del café normal.",
                  "Apoyo inmunológico diario con cada sorbo.",
                  "Fácil de preparar, perfecto para tu ritmo de vida.",
                  "Puerta de entrada al negocio Immunotec en Colombia."
                ].map((text, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/10 text-brand-green flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-white transition-all">
                      <CheckCircle2 size={18} />
                    </div>
                    <p className="text-white/70 text-lg font-medium">{text}</p>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-16 p-8 bg-white/5 rounded-[32px] border border-white/10 backdrop-blur-sm relative">
                <Quote className="absolute -top-6 -left-6 text-brand-green opacity-50" size={64} />
                <p className="font-serif text-xl italic text-white/90 leading-relaxed mb-6">
                  "Más que una taza de café, una nueva forma de disfrutar tu rutina diaria."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-green flex items-center justify-center text-white font-black text-xl">L</div>
                  <div>
                    <div className="text-white font-black tracking-tight">Luz Adriana</div>
                    <div className="text-brand-green text-xs font-black uppercase tracking-widest">Consultora Oro</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">
                Immunotec Café <span className="text-white/30">vs</span> La Competencia
              </h3>
              <p className="text-brand-green font-bold uppercase tracking-widest text-sm">
                Más que una taza de café, una nueva forma de disfrutar tu rutina.
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[800px] bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="p-8 text-left text-white/50 uppercase tracking-widest text-xs font-black">Característica</th>
                      <th className="p-8 text-center text-white/50 uppercase tracking-widest text-xs font-black">Café regular</th>
                      <th className="p-8 text-center text-white/50 uppercase tracking-widest text-xs font-black">Café con hongos (general)</th>
                      <th className="p-8 text-center text-brand-green uppercase tracking-[0.2em] text-sm font-black bg-white/5">Immunotec Café</th>
                    </tr>
                  </thead>
                  <tbody className="text-white font-medium">
                    {[
                      { 
                        feature: "Cafeína natural", 
                        reg: <span className="text-emerald-500">✓</span>, 
                        hon: <span className="text-emerald-500">✓</span>, 
                        imm: <span className="text-brand-green">✓</span> 
                      },
                      { 
                        feature: "Ganoderma & Shiitake", 
                        reg: <span className="text-white/20">✗</span>, 
                        hon: <span className="text-emerald-500">✓</span>, 
                        imm: <span className="text-brand-green">✓</span> 
                      },
                      { 
                        feature: "Fibra prebiótica", 
                        reg: <span className="text-white/20">✗</span>, 
                        hon: <span className="text-amber-500/60">⚠ Ocasional</span>, 
                        imm: <span className="text-brand-green font-black">✓</span> 
                      },
                      { 
                        feature: "Sin azúcar añadida", 
                        reg: <span className="text-amber-500/60">⚠ Varía</span>, 
                        hon: <span className="text-amber-500/60">⚠ Varía</span>, 
                        imm: <span className="text-brand-green font-black">✓</span> 
                      },
                      { 
                        feature: "Experiencia premium", 
                        reg: <span className="text-white/20">✗</span>, 
                        hon: <span className="text-emerald-500">✓</span>, 
                        imm: <span className="text-brand-green font-black">✓ Alta</span> 
                      }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-8 text-white/80">{row.feature}</td>
                        <td className="p-8 text-center">{row.reg}</td>
                        <td className="p-8 text-center">{row.hon}</td>
                        <td className="p-8 text-center bg-white/5 font-black text-brand-green italic">{row.imm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Comparison Section */}
      <section id="valor" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-stone-50 rounded-[60px] p-12 lg:p-20 border border-stone-100 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="text-brand-green font-black uppercase tracking-[0.3em] text-xs mb-4">AHORRO INTELIGENTE</div>
              <h2 className="text-4xl md:text-5xl font-black text-coffee-deep leading-tight tracking-tighter mb-8 uppercase">
                MÁS VALOR POR <br/><span className="text-brand-green">CADA TAZA</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                En un Juan Valdez, Oma o Starbucks una taza no baja de <span className="font-bold text-coffee-deep">$6,000 COP</span> y no aporta nada extra a tu fisiología.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
                  <div className="text-stone-300 font-black text-xs uppercase mb-2">Cafetería Tradicional</div>
                  <div className="text-2xl font-black text-stone-400">$6,000+</div>
                  <div className="text-[10px] font-bold text-red-300 uppercase mt-2">Solo Cafeína · Sin Nutrientes</div>
                </div>
                <div className="bg-brand-green p-6 rounded-3xl shadow-xl shadow-brand-green/20">
                  <div className="text-white/60 font-black text-xs uppercase mb-2">Cafe Funcional Pro</div>
                  <div className="text-2xl font-black text-white">$3,500</div>
                  <div className="text-[10px] font-bold text-white uppercase mt-2">Bienestar Inmune · Adaptógenos</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 bg-white p-10 rounded-[40px] shadow-2xl border border-stone-50 relative group">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center text-4xl group-hover:rotate-12 transition-transform">💡</div>
              <h3 className="text-2xl font-black text-coffee-deep mb-6 tracking-tight">Decisión Inteligente</h3>
              <p className="text-slate-600 font-medium mb-8 leading-relaxed italic text-lg border-l-4 border-brand-green pl-6">
                "Nuestro café lo puede obtener desde $3,500 pesos por taza y estás obteniendo muchos beneficios extra para tu salud cada vez."
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm font-bold text-stone-600 italic">Ahorro del 50% vs cafeterías premium</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm font-bold text-stone-600 italic">Nutrición que el café normal no tiene</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 bg-coffee-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="text-brand-green font-black uppercase tracking-[0.3em] text-xs mb-4">PÚBLICO OBJETIVO</div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter uppercase">¿Para <span className="text-brand-green">quién es?</span></h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-medium">
              Immunotec Café es para personas que quieren más de su rutina diaria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { emoji: "🧘", title: "Tendencia & Bienestar", desc: "Personas abiertas a nuevas tendencias de bienestar." },
              { emoji: "☕", title: "Amantes del Café", desc: "Amantes del café que quieren innovar su rutina." },
              { emoji: "⚡", title: "Vida Ágil", desc: "Quienes buscan practicidad sin complicaciones." },
              { emoji: "🤝", title: "Oportunidad", desc: "Emprendedores que ven en el café una oportunidad." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-colors group"
              >
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block">{item.emoji}</div>
                <h3 className="text-lg font-black uppercase tracking-widest mb-4 text-brand-green">{item.title}</h3>
                <p className="text-white/60 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="precio" className="py-32 bg-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-stone-50 border border-stone-100 p-16 rounded-[60px] shadow-2xl relative"
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-brand-green rounded-3xl flex items-center justify-center text-white shadow-xl rotate-12">
              <Package size={48} />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-coffee-deep mb-8 tracking-tighter mt-4 uppercase">
              ¿Listo para <span className="text-brand-green italic">Tu Mejora?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-6 max-w-xl mx-auto font-medium">
              Escríbenos por WhatsApp y te explicamos cómo hacer tu pedido. Atención personalizada por tu consultor Immunotec en Colombia.
            </p>

            <div className="mb-10 inline-block bg-white px-8 py-4 rounded-3xl border border-stone-100 shadow-sm">
              <div className="text-brand-green font-black text-xs uppercase tracking-widest mb-1">Precio Especial Caja 30 Porciones</div>
              <div className="text-4xl font-black text-coffee-deep">$104.300 <span className="text-sm font-normal text-slate-400">COP</span></div>
              <div className="text-[10px] font-bold text-slate-400 uppercase mt-1">IVA Incluido · Valorización según mercado</div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#25D366] text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-[#128C7E] transition-all shadow-2xl shadow-[#25D366]/20"
              >
                <MessageCircle size={32} />
                ORDENA POR WHATSAPP
              </a>
            </motion.div>

            <div className="mt-16 pt-10 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Fácil de llevar",
                "Asesoría VIP",
                "Pago Seguro",
                "Garantía Total"
              ].map((text, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <a href="#" className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-coffee-rich rounded-xl flex items-center justify-center text-white">
                  <Coffee size={24} />
                </div>
                <span className="text-2xl font-black tracking-tight text-coffee-deep uppercase">Cafe Funcional Pro</span>
              </a>
              <p className="text-slate-500 font-medium max-w-sm mb-10 leading-relaxed text-lg italic">
                "Disfruta el sabor premium del café colombiano enriquecido con tecnología nutricional avanzada."
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-brand-green hover:text-white transition-all shadow-sm">
                  <Instagram size={24} />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-brand-green hover:text-white transition-all shadow-sm">
                  <Globe size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-black uppercase tracking-[0.2em] text-xs text-stone-300 mb-10">Navegación</h4>
              <ul className="space-y-6 text-base font-bold text-coffee-deep/70">
                <li><a href="#ingredientes" className="hover:text-brand-green transition-colors">Ingredientes</a></li>
                <li><a href="#preparacion" className="hover:text-brand-green transition-colors">Preparación</a></li>
                <li><a href="#beneficios" className="hover:text-brand-green transition-colors">Beneficios</a></li>
                <li><a href="#precio" className="hover:text-brand-green transition-colors font-black text-brand-green">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-[0.2em] text-xs text-stone-300 mb-10">Legal</h4>
              <ul className="space-y-6 text-base font-bold text-coffee-deep/70">
                <li><a href="https://www.immunotec.com/es-CO/danielrealpe/products/cafe" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">Immunotec Oficial</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">Política Privacidad</a></li>
                <li className="flex items-center gap-3 text-stone-400 text-sm font-medium">
                  <ShieldCheck size={20} />
                  Consultor Autorizado
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-slate-400 font-black uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} CAFE FUNCIONAL PRO COLOMBIA
            </div>
            <div className="flex items-center gap-4 text-xs font-black text-brand-green tracking-widest uppercase">
              Hecho en Colombia <div className="w-4 h-0.5 bg-brand-green"></div> Basado en Ciencia
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

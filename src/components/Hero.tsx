import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../constants';

interface HeroProps {
  currentHero: number;
  mousePos: { x: number; y: number };
}

export default function Hero({ currentHero, mousePos }: HeroProps) {
  return (
    <section id="início" className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark font-sans">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentHero}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.5, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-brand-dark/40 z-10" />
            <img 
              src={IMAGES.hero[currentHero]} 
              alt="Material de Construção TBR" 
              className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* TECHNICAL OVERLAYS */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30" />
        <div className="absolute top-0 left-[10%] w-[1px] h-full bg-white/10" />
        <div className="absolute top-0 right-[10%] w-[1px] h-full bg-white/10" />
        
        {/* CORNER COORDINATES */}
        <div className="absolute top-10 left-10 font-mono text-[10px] text-brand-secondary tracking-widest uppercase">
          [ 03° 44' 51" S | 47° 24' 49" W ]
        </div>
        <div className="absolute top-10 right-10 font-mono text-[10px] text-white/40 tracking-widest uppercase">
          SYS_TBR_V2.0
        </div>
        <div className="absolute bottom-10 left-10 font-mono text-[10px] text-white/40 tracking-widest uppercase flex flex-col">
          <span>STRUCTURAL_PRECISION</span>
          <span className="text-brand-secondary">MADEIRAS_CERTIFICADAS</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block py-1 px-3 bg-brand-primary text-white font-black text-[10px] uppercase tracking-[0.3em] mb-6">
                Liderança Industrial
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[15vw] lg:text-[10rem] font-display font-black leading-[0.8] tracking-tighter text-white mb-8 uppercase"
            >
              FORÇA <br />
              QUE <br />
              <span className="text-brand-secondary italic">CONSTRÓI.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="max-w-xl border-l-4 border-brand-primary pl-8 mt-12"
            >
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                Da fundação ao acabamento: fornecemos a infraestrutura material para os maiores projetos do Tocantins.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-brand-secondary/10 flex items-center justify-center font-mono text-[10px] text-brand-secondary">
                #01
              </div>
              <h3 className="text-brand-secondary font-black text-xs uppercase tracking-widest mb-4">Ação Imediata</h3>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">
                Entre em contato direto com nossa central de logística e receba sua cotação em minutos.
              </p>
              
              <motion.a 
                href="https://wa.me/5563981267836"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-white font-black text-xs uppercase tracking-widest group"
              >
                Solicitar Cotação
                <div className="w-12 h-[2px] bg-brand-secondary transition-all group-hover:w-20" />
              </motion.a>
            </motion.div>

            <div className="flex gap-4">
              <div className="flex-1 h-[1px] bg-white/10 self-center" />
              <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
                SCROLL_TO_EXPLORE
              </div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-8 bg-brand-secondary"
              />
            </div>
          </div>

        </div>
      </div>

      {/* SIDEBAR NAVIGATION (TECHNICAL) */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 z-30">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-4 group cursor-pointer">
            <div className={`h-[1px] bg-white transition-all ${currentHero === i ? 'w-12' : 'w-4 group-hover:w-8'} opacity-${currentHero === i ? '100' : '20'}`} />
            <span className={`font-mono text-[10px] text-white transition-opacity ${currentHero === i ? 'opacity-100' : 'opacity-20 group-hover:opacity-100'}`}>
              0{i + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

  );
}

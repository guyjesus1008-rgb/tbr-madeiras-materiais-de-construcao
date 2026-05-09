import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../constants';

interface HeroProps {
  currentHero: number;
  mousePos: { x: number; y: number };
}

export default function Hero({ currentHero, mousePos }: HeroProps) {
  return (
    <section id="início" className="relative min-h-[700px] md:h-screen flex items-center overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div 
            key={currentHero}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: 0.4, 
              scale: 1,
              x: mousePos.x,
              y: mousePos.y
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 3, ease: "easeInOut" },
              scale: { duration: 10, ease: "linear" },
              x: { type: "spring", stiffness: 30, damping: 20 },
              y: { type: "spring", stiffness: 30, damping: 20 }
            }}
            className="absolute inset-0"
          >
            <img 
              src={IMAGES.hero[currentHero]} 
              alt="Obra de construção premium" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading={currentHero === 0 ? "eager" : "lazy"}
              fetchPriority={currentHero === 0 ? "high" : "low"}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-16 h-[2px] bg-brand-secondary" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-secondary">
              O Futuro da Construção
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[9.5rem] font-display font-black leading-[0.85] md:leading-[0.75] tracking-tighter text-white mb-10"
          >
            ALTO <br />
            PADRÃO <br />
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: [1, 1.1, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                opacity: { delay: 1.2, duration: 1, ease: "easeOut" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              } as any}
              className="text-brand-secondary italic inline-block"
            >
              REAL.
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-2xl text-white/50 mb-14 leading-relaxed font-light max-w-2xl"
          >
            Madeiras selecionadas e materiais de alto desempenho para 
            projetos que exigem perfeição. A base sólida que seu sonho 
            merece, com a agilidade da TBR.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-2 sm:flex sm:flex-row gap-3 md:gap-6"
          >
            <motion.a 
              href="https://wa.me/5563981267836"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#06110d' }}
              whileTap={{ scale: 0.95 }}
              className="px-4 md:px-14 py-5 md:py-7 bg-brand-secondary text-brand-dark font-black text-[8px] md:text-[10px] uppercase tracking-[0.2em] rounded-2xl shadow-[0_20px_50px_rgba(250,204,21,0.2)] transition-all duration-300 text-center flex items-center justify-center"
            >
              Solicitar Cotação
            </motion.a>

            <motion.a 
              href="#diferenciais"
              whileHover={{ scale: 1.05, borderColor: '#facc15', color: '#facc15' }}
              whileTap={{ scale: 0.95 }}
              className="px-4 md:px-14 py-5 md:py-7 border-2 border-white/10 text-white font-black text-[8px] md:text-[10px] uppercase tracking-[0.2em] rounded-2xl transition-all duration-300 text-center flex items-center justify-center"
            >
              Produtos
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/10"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-brand-secondary/30 to-transparent" />
      </motion.div>
    </section>
  );
}

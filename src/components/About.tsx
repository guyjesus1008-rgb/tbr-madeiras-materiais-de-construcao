import { motion } from 'motion/react';
import { IMAGES } from '../constants';

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-40 px-6 max-w-7xl mx-auto font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* TECHNICAL IMAGE FRAME */}
          <div className="aspect-[3/4] border-2 border-brand-dark/10 p-4">
            <div className="w-full h-full overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5 }}
                src={IMAGES.about} 
                alt="Gestão TBR" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-10 -right-4 md:-right-10 bg-brand-dark p-12 text-white border-t-8 border-brand-primary z-10"
          >
            <p className="text-6xl md:text-8xl font-display font-black leading-none mb-4 tracking-tighter text-brand-secondary">05</p>
            <p className="font-mono text-[9px] font-black uppercase tracking-[0.4em] text-white/40">ANOS_DE_OPERAÇÃO_LÍDER</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-[1px] bg-brand-primary" />
            <p className="text-brand-primary font-black text-[10px] uppercase tracking-[0.5em]">System_History</p>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-brand-dark mb-12 leading-[0.85] tracking-tighter uppercase">
            TRADIÇÃO <br />QUE MOLDA O <br /><span className="text-brand-primary italic">PROGRESSO.</span>
          </h2>
          <div className="space-y-8 text-brand-dark/50 text-xl leading-relaxed font-light">
            <p>
              Consolidamos nossa operação como o <strong className="text-brand-dark font-black tracking-tight">hub logístico e de suprimentos</strong> número um de Tocantinópolis. 
            </p>
            <p>
              Nossa trajetória é baseada na precisão técnica e no compromisso inabalável com a integridade estrutural de cada projeto que fornecemos.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-brand-dark/5">
            {[
              { title: 'Sustentabilidade', desc: 'Madeiras com certificação ambiental rigorosa.' },
              { title: 'Eficiência', desc: 'Zero latência na entrega de insumos críticos.' },
            ].map(item => (
              <div key={item.title}>
                <h4 className="text-brand-dark font-black text-xs uppercase tracking-[0.2em] mb-3 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-secondary" />
                  {item.title}
                </h4>
                <p className="text-brand-dark/40 text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

  );
}

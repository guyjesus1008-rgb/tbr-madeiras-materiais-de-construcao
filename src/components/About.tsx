import { motion } from 'motion/react';
import { IMAGES } from '../constants';
import { floatAnimation } from '../utils/animations';

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
            <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 10 }}
              src={IMAGES.about} 
              alt="Gestão TBR" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
              loading="lazy"
              fetchPriority="low"
            />
          </div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            {...floatAnimation}
            className="absolute -bottom-8 md:-bottom-16 -right-4 md:-right-10 bg-brand-primary p-10 md:p-16 rounded-3xl text-white shadow-3xl z-10"
          >
            <p className="text-5xl md:text-8xl font-display font-black leading-none mb-2 md:mb-4 tracking-tighter">5</p>
            <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Anos de Liderança</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-primary font-black text-[10px] uppercase tracking-[0.5em] mb-4 md:topic-8">Nossa Base</p>
          <h2 className="text-4xl md:text-7xl font-display font-black text-brand-dark mb-8 md:mb-12 leading-[0.85] tracking-tighter">Tradição <br />que molda o <br /><span className="text-brand-primary italic">progresso.</span></h2>
          <div className="space-y-6 md:space-y-10 text-brand-dark/50 text-base md:text-xl leading-relaxed font-light">
            <p>
              Em apenas <strong className="text-brand-dark font-black tracking-tight">5 anos</strong>, a <strong className="text-brand-dark font-black tracking-tight">TBR Madeiras</strong> consolidou-se como a maior referência em materiais de construção de Tocantinópolis. 
            </p>
            <p>
              Nossa trajetória é fruto do compromisso inabalável com a qualidade e o respeito absoluto ao investimento de cada cliente, garantindo a base sólida que seu sonho merece.
            </p>
          </div>
          
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[
              { title: 'Sustentabilidade', desc: 'Madeiras com certificação ambiental.' },
              { title: 'Eficiência', desc: 'Zero atrasos na sua linha de produção.' },
            ].map(item => (
              <div key={item.title}>
                <h4 className="text-brand-dark font-black text-sm uppercase tracking-widest mb-3 flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full" />
                  {item.title}
                </h4>
                <p className="text-brand-dark/40 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

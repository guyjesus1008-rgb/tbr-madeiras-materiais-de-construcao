import { motion } from 'motion/react';
import { 
  Hammer, 
  Truck, 
  Star, 
  ShieldCheck, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { fadeIn, staggerContainer, floatAnimation } from '../utils/animations';

export default function BentoDifferentials() {
  return (
    <section id="diferenciais" className="py-20 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8 md:gap-12">
        <motion.div {...fadeIn}>
          <p className="text-brand-primary font-black text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-6">Inovação & Raça</p>
          <h2 className="text-4xl md:text-[5rem] font-display font-black text-brand-dark leading-[0.9] tracking-tighter">A elite da <br/><span className="text-brand-primary italic">construção.</span></h2>
        </motion.div>
        <motion.p {...fadeIn} className="max-w-md text-brand-dark/40 text-lg leading-relaxed font-medium">
          Não entregamos apenas materiais. Entregamos a garantia de que seu projeto 
          será executado com os melhores componentes do mercado global.
        </motion.p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
      >
        {/* Card 1 - Main feature */}
        <motion.div 
          variants={fadeIn}
          whileHover={{ y: -10, scale: 1.01 }}
          className="col-span-2 row-span-2 bg-brand-dark p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden group shadow-2xl shadow-black/20"
        >
          <motion.div 
            initial={{ rotate: -10, opacity: 0, scale: 0.8 }}
            whileInView={{ rotate: 0, opacity: 0.05, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-0 right-0 p-10 text-white hidden md:block"
          >
            <Hammer size={240} />
          </motion.div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <motion.div 
                whileHover={{ rotate: 15 }}
                {...floatAnimation}
                className="w-12 h-12 md:w-16 md:h-16 bg-brand-secondary rounded-xl md:rounded-2xl flex items-center justify-center mb-8 md:topic-10 shadow-lg shadow-brand-secondary/20"
              >
                <CheckCircle2 className="text-brand-dark w-7 h-7 md:w-8 md:h-8" />
              </motion.div>
              <h3 className="text-3xl md:text-6xl font-display font-black text-white mb-6 md:mb-8 tracking-tighter">Estoque <br />Imbatível.</h3>
              <p className="text-white/50 max-w-sm leading-relaxed text-sm md:text-xl font-light">
                A maior pronta entrega do Tocantins. Se está no catálogo, 
                está no nosso caminhão indo até você.
              </p>
            </div>
            <div className="mt-8 md:mt-16 flex flex-wrap gap-2 md:gap-4">
              {['Madeiras', 'Ferragens', 'Acabamento'].map(tag => (
                <span key={tag} className="px-3 md:px-4 py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-lg md:rounded-xl text-[7px] md:text-[10px] font-black uppercase tracking-widest text-brand-secondary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          variants={fadeIn}
          whileHover={{ y: -10, scale: 1.02, backgroundColor: '#15803d' }}
          className="col-span-1 bg-brand-muted p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] flex flex-col justify-between transition-all duration-500 group shadow-lg"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl shadow-sm flex items-center justify-center mb-6 text-brand-primary group-hover:text-white transition-colors">
            <Truck size={24} />
          </div>
          <div>
            <h4 className="text-lg md:text-2xl font-display font-black text-brand-dark group-hover:text-white transition-colors mb-2 tracking-tight leading-none">Logística G7</h4>
            <p className="text-[10px] md:text-sm text-brand-dark/50 group-hover:text-white/70 transition-colors leading-tight md:leading-relaxed font-medium">
              Frota própria para entrega imediata em toda a região.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          variants={fadeIn}
          whileHover={{ y: -10, scale: 1.02 }}
          className="col-span-1 bg-brand-secondary p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] flex flex-col justify-between shadow-lg"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mb-6 text-brand-dark">
            <Star size={24} fill="currentColor" />
          </div>
          <div>
            <h4 className="text-lg md:text-2xl font-display font-black text-brand-dark mb-2 tracking-tight leading-none">Custo Elite</h4>
            <p className="text-[10px] md:text-sm text-brand-dark/70 leading-tight md:leading-relaxed font-medium">
              O menor preço garantido pela parceria direta com a indústria.
            </p>
          </div>
        </motion.div>

        {/* Card 4 - New Replacement */}
        <motion.div 
          variants={fadeIn}
          whileHover={{ y: -10, scale: 1.02 }}
          className="col-span-2 bg-white border border-black/5 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] flex flex-col sm:flex-row items-center justify-between group shadow-xl gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-muted rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck className="text-brand-primary w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h4 className="text-lg md:text-2xl font-display font-black text-brand-dark mb-1">Garantia de Origem</h4>
              <p className="text-brand-dark/40 text-[10px] md:text-sm font-medium">Madeiras certificadas e 100% legalizadas.</p>
            </div>
          </div>
          <motion.div 
            whileHover={{ x: 10 }}
            className="hidden sm:flex w-10 h-10 md:w-12 md:h-12 bg-brand-dark rounded-full items-center justify-center text-white"
          >
            <ChevronRight size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

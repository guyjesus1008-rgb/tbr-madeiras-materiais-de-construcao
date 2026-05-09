import { motion } from 'motion/react';
import { 
  Hammer, 
  Truck, 
  Star, 
  ShieldCheck, 
  CheckCircle2,
  ChevronRight,
  Activity
} from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';

export default function BentoDifferentials() {
  return (
    <section id="diferenciais" className="py-20 md:py-40 px-6 max-w-7xl mx-auto bg-white">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12 border-b border-brand-dark/10 pb-12">
        <motion.div {...fadeIn}>
          <div className="flex items-center gap-3 mb-4">
            <Activity className="text-brand-primary w-4 h-4" />
            <p className="text-brand-primary font-black text-[10px] uppercase tracking-[0.5em]">System_Infrastructure</p>
          </div>
          <h2 className="text-5xl md:text-[6rem] font-display font-black text-brand-dark leading-[0.85] tracking-tighter uppercase">
            A ELITE DA <br/><span className="text-brand-primary italic">CONSTRUÇÃO.</span>
          </h2>
        </motion.div>
        <motion.p {...fadeIn} className="max-w-md text-brand-dark/50 text-xl leading-relaxed font-light">
          Protocolos de qualidade rigorosos e logística de alta performance. 
          Não vendemos produtos, fornecemos soluções estruturais.
        </motion.p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {/* MAIN CARD: INVENTORY */}
        <motion.div 
          variants={fadeIn}
          className="md:col-span-2 md:row-span-2 bg-brand-dark p-10 md:p-16 rounded-xl relative overflow-hidden group border-2 border-brand-dark"
        >
          <div className="absolute top-0 right-0 p-8 font-mono text-[10px] text-white/20">
            LOC_TOCANTINOPOLIS_2.0
          </div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="w-16 h-16 bg-brand-secondary rounded-lg flex items-center justify-center mb-10 shadow-xl shadow-brand-secondary/20">
                <CheckCircle2 className="text-brand-dark w-8 h-8" />
              </div>
              <h3 className="text-4xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter uppercase leading-none">
                Estoque <br /> <span className="text-brand-secondary">Imbatível.</span>
              </h3>
              <p className="text-white/40 max-w-sm leading-relaxed text-lg font-light">
                A maior pronta entrega da região. Se está no catálogo, 
                está no pátio pronto para o carregamento imediato.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              {['MOD_MADEIRAS', 'SYS_FERRAGENS', 'FIN_ACABAMENTO'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-md font-mono text-[9px] font-black tracking-widest text-brand-secondary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* LOGISTICS CARD */}
        <motion.div 
          variants={fadeIn}
          whileHover={{ borderColor: '#15803d' }}
          className="col-span-1 bg-brand-muted p-10 rounded-xl flex flex-col justify-between border-2 border-transparent transition-all duration-300"
        >
          <div>
            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-8 text-brand-primary">
              <Truck size={24} />
            </div>
            <h4 className="text-2xl font-display font-black text-brand-dark mb-4 tracking-tight uppercase">Logística G7</h4>
            <p className="text-sm text-brand-dark/60 leading-relaxed font-medium">
              Frota rastreada e otimizada para entregas ninja em 24h.
            </p>
          </div>
          <div className="mt-8 font-mono text-[9px] text-brand-dark/20 uppercase">TRK_ID: 992-X</div>
        </motion.div>

        {/* PRICE CARD */}
        <motion.div 
          variants={fadeIn}
          className="col-span-1 bg-brand-secondary p-10 rounded-xl flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 bg-brand-dark rounded-lg flex items-center justify-center mb-8 text-brand-secondary">
              <Star size={24} fill="currentColor" />
            </div>
            <h4 className="text-2xl font-display font-black text-brand-dark mb-4 tracking-tight uppercase">Custo Elite</h4>
            <p className="text-sm text-brand-dark/80 leading-relaxed font-bold">
              Negociação direta com a indústria. Preço de fábrica garantido.
            </p>
          </div>
          <div className="mt-8 font-mono text-[9px] text-brand-dark/40 uppercase font-black tracking-widest">MIN_PRICE_SECURED</div>
        </motion.div>

        {/* CERTIFICATION CARD */}
        <motion.div 
          variants={fadeIn}
          className="md:col-span-2 bg-white border-2 border-brand-dark/5 p-10 rounded-xl flex flex-col sm:flex-row items-center justify-between group gap-8"
        >
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 bg-brand-muted rounded-xl flex items-center justify-center shrink-0 border border-brand-dark/5">
              <ShieldCheck className="text-brand-primary w-10 h-10" />
            </div>
            <div>
              <h4 className="text-3xl font-display font-black text-brand-dark mb-2 uppercase tracking-tighter">Garantia de Origem</h4>
              <p className="text-brand-dark/40 text-sm font-medium">Madeiras 100% certificadas e legalizadas pelos órgãos ambientais.</p>
            </div>
          </div>
          <motion.div 
            whileHover={{ x: 10 }}
            className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center text-brand-secondary cursor-pointer"
          >
            <ChevronRight size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

  );
}

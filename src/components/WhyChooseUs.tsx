import { motion } from 'motion/react';
import { Shield, Zap, Factory, Crosshair } from 'lucide-react';

const reasons = [
  { 
    title: "Estoque Real", 
    desc: "Disponibilidade imediata confirmada em sistema. Nosso galpão de 2.000m² é o pulmão da sua obra.",
    icon: <Factory className="w-5 h-5" />
  },
  { 
    title: "Preço de Fábrica", 
    desc: "Negociação direta via parcerias industriais estratégicas. O melhor custo por m² de Tocantinópolis.",
    icon: <Shield className="w-5 h-5" />
  },
  { 
    title: "Logística Alpha", 
    desc: "Frota própria com roteirização inteligente. Entrega sincronizada com o cronograma da sua construção.",
    icon: <Zap className="w-5 h-5" />
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-40 px-6 bg-white overflow-hidden font-sans border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Crosshair className="text-brand-primary w-4 h-4" />
                <p className="text-brand-primary font-black text-[10px] uppercase tracking-[0.5em]">Quality_Assurance_Protocol</p>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-black text-brand-dark leading-[0.85] tracking-tighter uppercase">
                A INTELIGÊNCIA QUE SUA <br />
                <span className="text-brand-primary italic text-[4rem] md:text-[6rem]">OBRA EXIGE.</span>
              </h2>
            </div>
            
            <div className="space-y-10">
              {reasons.map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-12 h-12 bg-brand-muted border border-brand-dark/5 flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                  <div className="border-b border-brand-dark/5 pb-8 w-full">
                    <h4 className="text-brand-dark font-black text-xs uppercase tracking-[0.2em] mb-3">{item.title}</h4>
                    <p className="text-brand-dark/50 leading-relaxed font-light text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-brand-dark p-12 md:p-20 text-center relative overflow-hidden border-t-8 border-brand-secondary">
              {/* DECORATIVE GRID */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              
              <div className="relative z-10">
                <span className="font-mono text-[9px] text-brand-secondary uppercase tracking-[0.5em] mb-8 block">TBR_METRICS_2026</span>
                <h3 className="text-4xl md:text-6xl font-display font-black text-white leading-none tracking-tighter uppercase mb-8">
                  EFICIÊNCIA <br />
                  <span className="text-brand-secondary italic">TOTAL.</span>
                </h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto font-light">
                  Sincronizamos nosso estoque com sua necessidade. Menos desperdício, mais resultado real na sua obra.
                </p>
                <div className="mt-12 flex justify-center gap-2">
                  {[1,2,3].map(i => <div key={i} className="w-2 h-2 bg-brand-secondary/20" />)}
                </div>
              </div>
            </div>
            
            {/* FLOATING COORDINATE LABEL */}
            <div className="absolute -bottom-6 -right-6 bg-brand-secondary p-4 font-mono text-[9px] font-black text-brand-dark uppercase tracking-widest hidden md:block">
              [ REF_STRUCT_04 ]
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


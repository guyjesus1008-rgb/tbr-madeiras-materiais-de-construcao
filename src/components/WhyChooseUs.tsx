import { motion } from 'motion/react';
import { breathAnimation } from '../utils/animations';

const reasons = [
  { title: "Estoque Real", desc: "Não trabalhamos com promessas. O que você vê no catálogo está em nosso galpão de 2.000m²." },
  { title: "Preço de Fábrica", desc: "Negociamos direto com as maiores indústrias para garantir o melhor custo-benefício de Tocantinópolis." },
  { title: "Entrega Ninja", desc: "Nossa frota própria conhece cada rua da cidade. Entregamos enquanto o cimento ainda está fresco." }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-12"
          >
            <div>
              <p className="text-brand-primary font-black text-[10px] uppercase tracking-[0.5em] mb-4 md:topic-6">Por que nos escolher?</p>
              <h2 className="text-4xl md:text-6xl font-display font-black text-brand-dark leading-[0.9] tracking-tighter">
                A inteligência que sua <br />
                <span className="text-brand-primary italic">obra exige.</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              {reasons.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-1 h-12 bg-brand-secondary/30 rounded-full shrink-0 mt-1" />
                  <div>
                    <h4 className="text-brand-dark font-black text-sm uppercase tracking-widest mb-2">{item.title}</h4>
                    <p className="text-brand-dark/50 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            {...breathAnimation}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="aspect-square w-full max-w-[500px] bg-brand-muted rounded-[4rem] p-12 md:p-20 flex items-center justify-center text-center shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-black/5 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[4rem]" />
              <h3 className="text-3xl md:text-5xl font-display font-black text-brand-dark leading-[1.1] tracking-tighter relative z-10">
                Primeira loja de materiais de construção <br />
                <span className="text-brand-primary">BBB:</span> <br />
                <span className="italic underline decoration-brand-secondary decoration-4 underline-offset-8">bom, bonito e barato!</span> 😆
              </h3>
              
              {/* Decorative dots */}
              <div className="absolute top-12 left-12 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-primary/20" />
                <div className="w-2 h-2 rounded-full bg-brand-primary/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

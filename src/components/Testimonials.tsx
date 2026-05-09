import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { fadeIn } from '../utils/animations';

const testimonials = [
  { name: 'Atila Souza', role: 'Cliente Google', text: 'Ótimo atendimento e preços competitivos. A entrega foi super rápida, recomendo a todos que buscam qualidade.' },
  { name: 'Fernando Rodrigues', role: 'Cliente Google', text: 'Madeira de primeira qualidade. O pessoal é muito atencioso e entende muito do assunto, ajudando na escolha certa.' },
  { name: 'Juliana Mendes', role: 'Cliente Google', text: 'Melhor lugar de Tocantinópolis para comprar materiais de construção. Tudo muito organizado, preço justo e transparência.' },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-muted py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-brand-primary font-black text-[10px] uppercase tracking-[0.5em] mb-6">Depoimentos</p>
          <h2 className="text-4xl md:text-5xl font-display font-black text-brand-dark tracking-tighter">Quem constrói <span className="italic">confia.</span></h2>
        </div>
        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-10 overflow-x-auto md:overflow-visible pb-10 md:pb-0 scrollbar-hide snap-x px-4 md:px-0 -mx-4 md:mx-0">
          {testimonials.map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[280px] md:min-w-0 bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl shadow-black/5 snap-center"
            >
              <div className="flex gap-1 text-brand-secondary mb-4 md:mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-brand-dark/60 italic mb-6 md:mb-8 font-medium text-sm md:text-base leading-relaxed">"{item.text}"</p>
              <div>
                <p className="font-black text-brand-dark text-xs md:text-sm uppercase tracking-widest">{item.name}</p>
                <p className="text-brand-dark/30 text-[10px] font-bold uppercase tracking-widest">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

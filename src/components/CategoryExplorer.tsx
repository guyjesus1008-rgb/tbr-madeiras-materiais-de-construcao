import { motion } from 'motion/react';
import { IMAGES } from '../constants';
import { fadeIn, breathAnimation } from '../utils/animations';

const categories = [
  { title: 'Madeiras', icon: '🪵', img: IMAGES.wood, items: 'Stru, Telha, Piso' },
  { title: 'Ferramentas', icon: '🛠️', img: IMAGES.tools, items: 'Bosch, Makita' },
  { title: 'Acabamento', icon: '🎨', img: IMAGES.finish, items: 'Tintas, Cubas' },
  { title: 'Elétrica', icon: '⚡', img: IMAGES.service2, items: 'Fios, LED' },
];

export default function CategoryExplorer() {
  return (
    <section className="py-12 md:py-24 bg-brand-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.title}
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[280px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <motion.img 
                src={cat.img} 
                alt={cat.title} 
                {...breathAnimation}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/10 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="text-2xl md:text-4xl mb-2 md:mb-4 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"
                >
                  {cat.icon}
                </motion.span>
                <h4 className="text-lg md:text-2xl font-display font-bold text-white mb-1 md:mb-2 uppercase tracking-tighter leading-none">{cat.title}</h4>
                <p className="text-white/60 text-[8px] md:text-xs font-black uppercase tracking-widest leading-relaxed opacity-0 md:group-hover:opacity-100 transition-all duration-500 translate-y-4 md:group-hover:translate-y-0">
                  {cat.items}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

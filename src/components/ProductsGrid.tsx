import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { IMAGES } from '../constants';
import { fadeIn, waveAnimation } from '../utils/animations';

const services = [
  { title: 'Madeiras Nobres', img: IMAGES.service1, desc: 'Vigas, pilares e pranchas de alta densidade para estruturas de alto padrão.' },
  { title: 'Acabamentos', img: IMAGES.service2, desc: 'Soluções premium em tintas e revestimentos que elevam o design da obra.' },
  { title: 'Hidráulica Tigre', img: IMAGES.service3, desc: 'A segurança da maior marca do mundo no coração da sua construção.' },
];

export default function ProductsGrid() {
  return (
    <section id="serviços" className="bg-brand-dark py-20 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12">
          <motion.div {...fadeIn}>
            <p className="text-brand-secondary font-black text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-6">Nosso Portfólio</p>
            <h2 className="text-4xl md:text-[6rem] font-display font-black text-white leading-[0.85] tracking-tighter">O DNA da sua <br/><span className="text-brand-secondary">Arquitetura.</span></h2>
          </motion.div>
          <motion.button 
            whileHover={{ gap: '2rem' }}
            className="flex items-center gap-4 text-white font-black text-[10px] uppercase tracking-[0.3em] py-4 border-b-2 border-brand-secondary transition-all"
          >
            Explorar Catálogo <ChevronRight size={16} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div 
              key={service.title}
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              {...waveAnimation}
              className="group relative h-[700px] rounded-[4rem] overflow-hidden shadow-2xl"
            >
              <motion.img 
                whileHover={{ scale: 1.15 }}
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover grayscale brightness-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="low"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-16 translate-y-10 group-hover:translate-y-0 transition-all duration-700">
                <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Edição 2026</span>
                <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-6 leading-none tracking-tighter">{service.title}</h3>
                <p className="text-white/50 mb-10 text-base md:text-lg leading-relaxed max-w-[280px] opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700">{service.desc}</p>
                <motion.div 
                  whileHover={{ scale: 1.1, backgroundColor: '#facc15' }}
                  className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-dark transition-all"
                >
                  <ChevronRight size={28} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

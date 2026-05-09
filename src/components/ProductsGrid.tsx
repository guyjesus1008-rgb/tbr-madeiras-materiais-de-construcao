import { motion } from 'motion/react';
import { ChevronRight, Plus } from 'lucide-react';
import { IMAGES } from '../constants';
import { fadeIn } from '../utils/animations';

const services = [
  { id: 'MOD_W01', title: 'Madeiras Nobres', img: IMAGES.service1, desc: 'Vigas, pilares e pranchas de alta densidade para estruturas de alto padrão.' },
  { id: 'MOD_F02', title: 'Acabamentos', img: IMAGES.service2, desc: 'Soluções premium em tintas e revestimentos que elevam o design da obra.' },
  { id: 'SYS_H03', title: 'Hidráulica Tigre', img: IMAGES.service3, desc: 'A segurança da maior marca do mundo no coração da sua construção.' },
];

export default function ProductsGrid() {
  return (
    <section id="serviços" className="bg-brand-dark py-20 md:py-40 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12 border-b border-white/10 pb-12">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-3 mb-4">
              <Plus className="text-brand-secondary w-4 h-4" />
              <p className="text-brand-secondary font-black text-[10px] uppercase tracking-[0.5em]">Inventory_Control</p>
            </div>
            <h2 className="text-5xl md:text-[7rem] font-display font-black text-white leading-[0.85] tracking-tighter uppercase">
              O DNA DA SUA <br/><span className="text-brand-secondary">ARQUITETURA.</span>
            </h2>
          </motion.div>
          <motion.button 
            whileHover={{ x: 10 }}
            className="flex items-center gap-6 text-white font-black text-[10px] uppercase tracking-[0.3em] py-4 border-b border-brand-secondary transition-all"
          >
            Explorar Catálogo <ChevronRight size={16} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={service.title}
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative h-[600px] overflow-hidden border border-white/5"
            >
              {/* TECHNICAL LABEL */}
              <div className="absolute top-6 left-6 z-20 font-mono text-[10px] text-brand-secondary bg-brand-dark/80 px-2 py-1 backdrop-blur-sm border border-brand-secondary/30">
                {service.id}
              </div>

              <motion.img 
                whileHover={{ scale: 1.1 }}
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover grayscale brightness-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-10 translate-y-12 group-hover:translate-y-0 transition-all duration-700">
                <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-6 uppercase tracking-tighter leading-none">
                  {service.title}
                </h3>
                <p className="text-white/50 mb-10 text-sm leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 font-light">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-8">
                  <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">DISPONÍVEL_EM_ESTOQUE</span>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-dark shadow-xl"
                  >
                    <ChevronRight size={24} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

  );
}

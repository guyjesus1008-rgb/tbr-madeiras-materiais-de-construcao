import { motion } from 'motion/react';
import { MessageSquare, Instagram, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-dark rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-3xl group"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(21,128,61,0.4)_0%,transparent_70%)] pointer-events-none group-hover:opacity-80 transition-opacity" 
          />
          <h2 className="text-6xl md:text-[8rem] font-display font-black text-white mb-16 relative z-10 leading-[0.8] tracking-tighter">SUA OBRA <br /><span className="text-brand-primary">MERECE TBR.</span></h2>
          <motion.a 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5563981267836"
            className="inline-flex items-center gap-8 px-20 py-8 bg-brand-primary text-white font-black text-xs uppercase tracking-[0.4em] rounded-[2.5rem] shadow-2xl relative z-10 hover:bg-white hover:text-brand-dark transition-all duration-500"
          >
            Falar no WhatsApp <MessageSquare size={24} />
          </motion.a>
        </motion.div>
      </section>

      <footer className="bg-brand-muted pt-40 pb-20 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-24">
          <div className="max-w-md">
            <span className="font-display text-4xl font-black text-brand-dark mb-10 block tracking-tighter">
              TBR<span className="text-brand-primary">MADEIRAS</span>
            </span>
            <p className="text-brand-dark/50 text-lg leading-relaxed mb-12 font-medium">
              A elite dos materiais de construção em Tocantinópolis. 
              Qualidade estrutural do início ao acabamento.
            </p>
            <div className="flex gap-6">
              {[Instagram, MessageSquare, Phone].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5, backgroundColor: '#15803d', color: '#ffffff' }}
                  href="#" 
                  className="w-14 h-14 bg-white text-brand-dark rounded-2xl flex items-center justify-center transition-all shadow-sm border border-black/5"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
            <div>
              <h5 className="text-[10px] uppercase font-black text-brand-dark/20 mb-10 tracking-[0.5em]">Links</h5>
              <ul className="space-y-6">
                {['Diferenciais', 'Serviços', 'Sobre', 'Contato'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-sm font-black text-brand-dark/40 hover:text-brand-primary transition-colors tracking-widest uppercase">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-1 md:col-span-2">
              <h5 className="text-[10px] uppercase font-black text-brand-dark/20 mb-10 tracking-[0.5em]">Localização</h5>
              <p className="text-xl text-brand-dark font-black flex gap-4 max-w-[320px] leading-snug">
                <MapPin className="shrink-0 text-brand-primary mt-1" size={28} />
                Rua Olímpio Brito, 23, Vila Padre Cesare, Tocantinópolis-TO
              </p>
              <p className="mt-8 text-brand-dark/40 text-sm font-medium ml-11">
                Ao lado da Mercearia Morais. <br />
                Atendimento: Seg a Sex [08h - 18h]
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-40 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-[10px] font-black tracking-[0.3em] text-brand-dark/10">
            &copy; {new Date().getFullYear()} TBR MADEIRAS. ELEGÂNCIA E DURABILIDADE DESDE A BASE.
          </p>
          <div className="flex gap-16">
            <span className="text-[10px] font-black tracking-[0.4em] text-brand-dark/10 hover:text-brand-dark cursor-pointer transition-colors uppercase">Privacidade</span>
            <span className="text-[10px] font-black tracking-[0.4em] text-brand-dark/10 hover:text-brand-dark cursor-pointer transition-colors uppercase">Termos</span>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <motion.a
        href="https://wa.me/5563981267836"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.3)] flex items-center justify-center group border-2 md:border-4 border-white"
      >
        <span className="absolute right-full mr-4 bg-brand-dark text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0 shadow-2xl hidden md:block">
          Fale Conosco
        </span>
        <svg 
          viewBox="0 0 24 24" 
          className="w-6 h-6 md:w-8 md:h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 2.106.654 4.059 1.764 5.679L2 22l4.497-1.161c1.611 1.053 3.522 1.668 5.515 1.668 5.508 0 9.987-4.479 9.987-9.987 0-5.508-4.479-9.987-9.987-9.987zm0 18.288c-1.803 0-3.483-.513-4.914-1.395l-.351-.219-2.61.675.684-2.541-.24-.381c-.96-1.521-1.518-3.327-1.518-5.253 0-4.569 3.717-8.286 8.286-8.286 4.569 0 8.286 3.717 8.286 8.286s-3.717 8.286-8.286 8.286zM15.93 13.911c-.24-.12-1.41-.696-1.629-.777-.219-.081-.378-.12-.537.12-.159.24-.615.777-.753.936-.138.159-.276.18-.516.06-.24-.12-1.011-.372-1.926-1.188-.711-.633-1.191-1.419-1.332-1.659-.138-.24-.015-.369.105-.489.108-.108.24-.279.36-.42.12-.138.159-.24.24-.399.081-.159.042-.3-.021-.42-.06-.12-.537-1.293-.735-1.77-.192-.465-.384-.399-.537-.408-.138-.009-.297-.009-.456-.009-.159 0-.417.06-.636.3-.219.24-.837.819-.837 2s.861 2.319.981 2.478c.12.159 1.695 2.589 4.104 3.63.573.249 1.02.399 1.368.51.576.183 1.101.156 1.512.096.459-.066 1.41-.576 1.608-1.134.198-.558.198-1.035.138-1.134-.06-.099-.219-.159-.459-.279z"/>
        </svg>
      </motion.a>
    </>
  );
}

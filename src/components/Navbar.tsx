import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  MessageSquare 
} from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Navbar({ isScrolled, isMenuOpen, setIsMenuOpen }: NavbarProps) {
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 py-3 md:py-4' 
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl md:text-3xl font-display font-black tracking-tighter ${
            isScrolled ? 'text-brand-dark' : 'text-white'
          }`}
        >
          TBR<span className={isScrolled ? 'text-brand-primary' : 'text-brand-secondary'}>MADEIRAS</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {['Início', 'Diferenciais', 'Serviços', 'Sobre', 'Contato'].map((item, index) => (
            <motion.a 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-[10px] font-black uppercase tracking-widest transition-all hover:scale-110 ${
                isScrolled ? 'text-brand-dark/60 hover:text-brand-primary' : 'text-white/70 hover:text-white'
              }`}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:block">
          <motion.a 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5563981267836" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-brand-primary text-white font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-brand-dark transition-all shadow-xl shadow-brand-primary/20"
          >
            Orçamento Rápido
          </motion.a>
        </div>

        <button 
          className={`md:hidden p-2 rounded-xl transition-all ${
            isScrolled ? 'bg-brand-muted text-brand-dark' : 'bg-white/10 text-white backdrop-blur-md'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-50 md:hidden flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-black/5">
              <span className="text-xl font-display font-black text-brand-dark">TBR<span className="text-brand-primary">MADEIRAS</span></span>
              <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-brand-muted rounded-xl text-brand-dark">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-8">
              {['Início', 'Diferenciais', 'Serviços', 'Sobre', 'Contato'].map((item) => (
                <motion.a 
                  whileHover={{ x: 10 }}
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-4xl font-display font-black text-brand-dark hover:text-brand-primary transition-colors flex items-center justify-between group border-b border-black/5 pb-6"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                  <ChevronRight size={32} className="opacity-10 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
              
              <div className="mt-8">
                <a 
                  href="https://wa.me/5563981267836"
                  className="w-full py-6 bg-brand-primary text-white font-black text-sm uppercase tracking-widest text-center rounded-2xl shadow-xl flex items-center justify-center gap-4"
                >
                  <MessageSquare size={20} fill="white" />
                  WhatsApp Direto
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

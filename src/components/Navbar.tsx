import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  MessageSquare,
  Cpu
} from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Navbar({ isScrolled, isMenuOpen, setIsMenuOpen }: NavbarProps) {
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-brand-dark/95 backdrop-blur-2xl border-b border-white/10 py-3' 
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl md:text-3xl font-display font-black tracking-tighter uppercase ${
            isScrolled ? 'text-white' : 'text-white'
          }`}
        >
          TBR<span className="text-brand-secondary">MADEIRAS</span>
        </motion.div>

        {/* TECHNICAL STATUS INDICATOR (DESKTOP) */}
        <div className="hidden lg:flex items-center gap-4 px-4 py-1 border border-white/10 rounded-full bg-white/5">
          <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-pulse" />
          <span className="font-mono text-[8px] text-white/40 uppercase tracking-widest">System_Active_v2.0</span>
        </div>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {['Início', 'Diferenciais', 'Serviços', 'Sobre', 'Contato'].map((item, index) => (
            <motion.a 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-mono text-[9px] font-bold uppercase tracking-[0.2em] transition-all hover:text-brand-secondary ${
                isScrolled ? 'text-white/60' : 'text-white/70'
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
            whileHover={{ x: 5 }}
            href="https://wa.me/5563981267836" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-brand-primary text-white font-black text-[10px] uppercase tracking-widest rounded-sm hover:bg-brand-secondary hover:text-brand-dark transition-all border border-brand-primary"
          >
            Orçamento_Rápido
          </motion.a>
        </div>

        <button 
          className={`md:hidden p-3 rounded-lg transition-all ${
            isScrolled ? 'bg-white/5 text-white border border-white/10' : 'bg-white/10 text-white backdrop-blur-md'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-dark z-50 md:hidden flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-white/5">
              <span className="text-xl font-display font-black text-white">TBR<span className="text-brand-secondary">MADEIRAS</span></span>
              <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-white/5 rounded-lg text-white">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-10">
              {['Início', 'Diferenciais', 'Serviços', 'Sobre', 'Contato'].map((item) => (
                <motion.a 
                  whileHover={{ x: 10 }}
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-5xl font-display font-black text-white hover:text-brand-secondary transition-colors flex items-center justify-between group uppercase tracking-tighter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                  <ChevronRight size={32} className="text-brand-secondary opacity-20 group-hover:opacity-100" />
                </motion.a>
              ))}
              
              <div className="mt-auto pb-10">
                <a 
                  href="https://wa.me/5563981267836"
                  className="w-full py-6 bg-brand-secondary text-brand-dark font-black text-xs uppercase tracking-widest text-center rounded-sm flex items-center justify-center gap-4"
                >
                  <MessageSquare size={20} />
                  Falar com Consultor
                </a>
                <div className="mt-8 flex justify-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                  <span className="font-mono text-[8px] text-white/20 uppercase tracking-[0.4em]">Operational_Status: 100%</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


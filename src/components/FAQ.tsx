import { motion } from 'motion/react';
import { CheckCircle2, Phone, MapPin } from 'lucide-react';
import { fadeIn } from '../utils/animations';

const faqs = [
  { q: "Qual o prazo de entrega em Tocantinópolis?", a: "Entregamos materiais em estoque no mesmo dia ou em até 24h úteis na área urbana." },
  { q: "Vocês trabalham com cartão de crédito?", a: "Sim, aceitamos todas as bandeiras e oferecemos parcelamento facilitado para compras de grande volume." },
  { q: "As madeiras possuem certificação?", a: "Absolutamente. Todas as nossas madeiras têm origem controlada e certificação de manejo sustentável (DOF)." },
];

export default function FAQ() {
  return (
    <>
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-black text-brand-dark tracking-tighter uppercase">Dúvidas Frequentes</h2>
          <p className="text-brand-dark/40 font-medium tracking-tight">O que você precisa saber antes de começar sua obra</p>
        </div>
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              className="p-8 bg-white border border-black/5 rounded-[2.5rem] hover:border-brand-primary/20 transition-all cursor-help"
            >
              <h4 className="text-lg font-black text-brand-dark mb-3 flex items-center gap-3">
                <CheckCircle2 className="text-brand-primary" size={20} />
                {item.q}
              </h4>
              <p className="text-brand-dark/50 leading-relaxed pl-8 font-medium">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contato" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 mb-20">
          <motion.div {...fadeIn} className="bg-brand-muted p-12 md:p-20 rounded-[4rem] border border-black/5 flex flex-col justify-center items-center text-center">
            <h3 className="text-4xl md:text-6xl font-display font-black text-brand-dark mb-8 tracking-tighter uppercase">Ficou com alguma dúvida?</h3>
            <p className="text-brand-dark/50 text-xl leading-relaxed mb-10 max-w-2xl">
              Nossa equipe técnica está pronta para analisar seu projeto e sugerir as melhores soluções em madeira e materiais estruturais.
            </p>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Phone className="text-brand-primary" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase text-brand-dark/30 tracking-widest">Ligue agora</p>
                  <p className="font-display font-black text-brand-dark text-lg">(63) 98126-7836</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <MapPin className="text-brand-primary" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase text-brand-dark/30 tracking-widest">Endereço</p>
                  <p className="font-display font-black text-brand-dark text-lg">Rua Olimpio Brito 23, Tocantinópolis</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

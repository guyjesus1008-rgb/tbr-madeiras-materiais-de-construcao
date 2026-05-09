export default function Marquee() {
  const brands = ['VONDER', 'SUVINIL', 'VEDACIT', 'TIGRE', 'CORAL', 'DECA', 'AMANCO'];
  
  return (
    <div className="py-10 md:py-16 border-y border-black/5 bg-brand-muted overflow-hidden">
      <div className="flex gap-16 md:gap-24 animate-marquee whitespace-nowrap px-10 shrink-0">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-16 md:gap-24 items-center">
            {brands.map((brand) => (
              <span key={brand} className="text-3xl md:text-6xl font-display font-black text-brand-dark/10 tracking-[0.2em] transition-colors hover:text-brand-primary/20">
                {brand}
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}

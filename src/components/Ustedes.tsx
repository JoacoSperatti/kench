import { motion } from 'framer-motion';

const Ustedes = () => {
  const fotos = [
    { img: '/assets/photos/Ustedes/@ronnfotografia_-118.JPG', rot: '-rotate-3' },
    { img: '/assets/photos/Ustedes/@ronnfotografia_-172.JPG', rot: 'rotate-2' },
    { img: '/assets/photos/Ustedes/57_KENCH_CAIX.jpg', rot: '-rotate-1' },
    { img: '/assets/photos/Ustedes/ronnfotografia-433.jpg', rot: 'rotate-6' },
  ];

  return (
    <section className="py-32 bg-kench-yellow text-black relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-9xl md:text-[13rem] font-ash mb-8 uppercase leading-none tracking-[0.05em]">UUSTEDES</h2>
          <p className="max-w-3xl mx-auto font-sequel text-3xl mb-24 font-black uppercase tracking-tight leading-none">
            La fiesta no se hace con parlantes, se hace con gente que tiene ganas de romperla. 
            <span className="text-kench-red block mt-4">Ustedes son el verdadero show.</span>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {fotos.map((foto, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0, rotate: i % 2 === 0 ? -10 : 10 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ rotate: i % 2 === 0 ? 5 : -5, scale: 1.05, zIndex: 20 }}
              className={`relative bg-white p-4 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] border-4 border-black transition-all duration-300 group cursor-none`}
            >
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden border-2 border-black">
                <img 
                  src={foto.img} 
                  alt={`Kench Guest ${i}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="mt-6 flex justify-between items-center opacity-40">
                <span className="font-sequel text-xs tracking-widest uppercase">KENCH COMMUNITY</span>
                <span className="font-ash text-xl">2026</span>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-kench-red text-white px-6 py-3 font-ash text-3xl transform -rotate-12 pointer-events-none shadow-xl border-2 border-black">
                #LEGENDARIO
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.9 }}
          className="mt-24 bg-black text-white px-16 py-8 font-ash text-4xl hover:bg-kench-red transition-all shadow-[10px_10px_0px_0px_rgba(255,0,0,1)] hover:shadow-none"
        >
          GALERÍA COMPLETA
        </motion.button>
      </div>
      
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none">
        <div className="font-ash text-[40rem] leading-none absolute -left-20 -top-20">U</div>
        <div className="font-ash text-[40rem] leading-none absolute -right-20 -bottom-20">S</div>
      </div>
    </section>
  );
};

export default Ustedes;

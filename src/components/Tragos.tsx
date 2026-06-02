import { motion } from 'framer-motion';

const Tragos = () => {
  const tragos = [
    { 
      nombre: 'MIXOLOGY', 
      desc: 'Nuestros bartenders no sirven tragos, crean experiencias.',
      img: '/assets/photos/Tragos/@ronnfotografia_-125.JPG'
    },
    { 
      nombre: 'EXPLOSIVA', 
      desc: 'Rapidez, calidad y el mejor ambiente de la ciudad.',
      img: '/assets/photos/Tragos/KENCH-180.jpg'
    },
    { 
      nombre: 'PREMIUM', 
      desc: 'Solo marcas de primera línea para una noche sin resaca.',
      img: '/assets/photos/Tragos/@ronnfotografia_-77.JPG'
    },
  ];

  return (
    <section className="py-32 bg-kench-red relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden select-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="text-9xl font-ash text-black whitespace-nowrap -rotate-12 mb-4">
            BARRA LIBRE BARRA LIBRE BARRA LIBRE BARRA LIBRE BARRA LIBRE
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12">
          <div className="flex-1">
            <h2 className="text-8xl md:text-[11rem] font-ash text-kench-yellow leading-[1.1] uppercase tracking-[0.05em] kench-text-shadow">
              BARRA <br /> LIBRE
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-black font-sequel text-2xl md:text-3xl font-black uppercase tracking-tight leading-none mb-8">
              Acá la sed no existe. Calidad premium servida a la velocidad de la luz.
            </p>
            <div className="sticker bg-black text-kench-yellow">TODA LA NOCHE</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tragos.map((trago, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-black p-4 border-4 border-black relative group overflow-hidden"
            >
              <div className="h-96 overflow-hidden mb-6 relative border-2 border-white/10">
                <img 
                  src={trago.img} 
                  alt={trago.nombre} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-kench-red/40 opacity-50 group-hover:opacity-0 transition-opacity" />
              </div>
              
              <h3 className="text-5xl font-ash text-kench-yellow mb-4 uppercase">
                {trago.nombre}
              </h3>
              <p className="font-body text-xl text-gray-400 group-hover:text-white transition-colors leading-tight">
                {trago.desc}
              </p>
              
              <div className="absolute top-0 right-0 w-20 h-20 bg-kench-yellow transform rotate-45 translate-x-10 -translate-y-10 group-hover:bg-white transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tragos;

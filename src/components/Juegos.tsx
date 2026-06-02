import { motion } from 'framer-motion';

const Juegos = () => {
  const juegos = [
    { 
      nombre: 'JUEGO 1', 
      desc: 'Competencia salvaje por la gloria de la noche.', 
      img: '/assets/photos/Juegos/@ronnfotografia_-39.JPG' 
    },
    { 
      nombre: 'JUEGO 2', 
      desc: 'Donde la competencia se mezcla con el caos.', 
      img: '/assets/photos/Juegos/@ronnfotografia_-52.JPG' 
    },
    { 
      nombre: 'JUEGO 3', 
      desc: '¿Tenés lo que se necesita para ganar?', 
      img: '/assets/photos/Juegos/ronnfotografia-57.jpg' 
    },
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-24">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-8xl md:text-[11rem] font-ash text-kench-yellow leading-none uppercase tracking-[0.05em]">JUUEGOS</h2>
            <div className="sticker-red mt-4">EXPERIENCIA KENCH</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {juegos.map((juego, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 shadow-[15px_15px_0px_0px_#ffff00] border-4 border-black group transition-all"
            >
              <div className="h-80 overflow-hidden mb-6 border-2 border-black relative">
                <img 
                  src={juego.img} 
                  alt={juego.nombre} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="text-5xl font-ash text-black mb-4 uppercase">{juego.nombre}</h3>
              <p className="text-black font-sequel text-xl tracking-tight uppercase leading-tight">{juego.desc}</p>
              
              <div className="mt-8 flex justify-end">
                <div className="w-12 h-12 bg-black text-kench-yellow flex items-center justify-center font-ash text-2xl group-hover:bg-kench-red transition-colors">
                  ?
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative large background text */}
      <div className="absolute top-1/2 left-0 text-[18rem] font-ash text-white/5 pointer-events-none select-none leading-none -translate-x-1/2 -rotate-90">
        GAMING
      </div>
    </section>
  );
};

export default Juegos;

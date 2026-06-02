import { motion } from 'framer-motion';

const Artistas = () => {
  const artistas = [
    { nombre: 'Pibes Chorros', tipo: 'LIVE SHOW', img: '/assets/photos/Artistas/@ronnfotografia_-303.JPG' },
    { nombre: 'Yerba Brava', tipo: 'INVITADOS', img: '/assets/photos/Artistas/@ronnfotografia_-316.JPG' },
    { nombre: 'Damas Gratis', tipo: 'ESPECTACULO', img: '/assets/photos/Artistas/@ronnfotografia_-375.JPG' },
    { nombre: 'Mala Fama', tipo: 'PERFORMANCE', img: '/assets/photos/Artistas/@ronnfotografia_-384.JPG' },
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="w-full lg:w-1/3 sticky top-32">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-8xl font-ash text-white leading-[1.1] mb-12 uppercase tracking-[0.05em]">
                ARTIISTAS <br /> <span className="text-kench-red">INVIITADOS</span>
              </h2>
              <p className="font-body text-2xl text-gray-400 leading-tight mb-12">
                No es solo música, es un despliegue de energía pura. Desde shows visuales hasta performers que rompen el escenario. 
              </p>
              <div className="sticker bg-kench-yellow text-black -rotate-3">CADA KENCH ES ÚNICA</div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            {artistas.map((artista, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[500px] overflow-hidden border-2 border-white/20"
              >
                <img 
                  src={artista.img} 
                  alt={artista.nombre} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="text-kench-yellow font-sequel text-sm uppercase tracking-[0.3em] mb-4 block">
                    {artista.tipo}
                  </span>
                  <h3 className="text-white text-5xl font-ash uppercase leading-none">
                    {artista.nombre}
                  </h3>
                </div>
                
                {/* Hover overlay with text marquee */}
                <div className="absolute inset-0 bg-kench-red/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center overflow-hidden">
                   <div className="rotate-45 scale-150">
                     <div className="font-ash text-white text-4xl whitespace-nowrap animate-marquee">
                        SHOW EN VIVO SHOW EN VIVO SHOW EN VIVO SHOW EN VIVO
                     </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative large background text */}
      <div className="absolute top-0 right-0 text-[15rem] font-ash text-white/5 pointer-events-none select-none leading-none vertical-text">
        ART
      </div>
    </section>
  );
};

export default Artistas;

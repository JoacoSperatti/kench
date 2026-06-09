import { motion } from 'framer-motion';

const UltimosEventos = () => {
  const eventos = [
    {
      edicion: 'KENCH #10',
      nombre: 'LA CLASICA DE OTONO',
      fecha: 'Sábado 16 de Mayo',
      lugar: 'Niceto Club, Palermo',
      foto: '/assets/photos/galeria/IMG_6240.JPG',
      sticker: 'SOLD OUT',
      stickerColor: 'bg-kench-red text-kench-yellow'
    },
    {
      edicion: 'KENCH #09',
      nombre: 'CAOS EN C ART MEDIA',
      fecha: 'Sábado 18 de Abril',
      lugar: 'C Complejo Art Media',
      foto: '/assets/photos/galeria/KENCH-239.jpg',
      sticker: 'RECORD BARRA',
      stickerColor: 'bg-kench-yellow text-black'
    },
    {
      edicion: 'KENCH #08',
      nombre: 'EL RETORNO',
      fecha: 'Sábado 14 de Marzo',
      lugar: 'Groove, Palermo',
      foto: '/assets/photos/galeria/@ronnfotografia_-174.JPG',
      sticker: 'EXPLOTADO',
      stickerColor: 'bg-kench-pink text-white'
    }
  ];

  return (
    <section id="ultimos-eventos" className="py-28 bg-black relative overflow-hidden">
      {/* Decorative text on background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-ash text-white/[0.02] tracking-tighter uppercase pointer-events-none select-none z-0">
        HISTORIAL
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-kench-yellow font-sequel text-sm tracking-[0.2em] uppercase block mb-3">
            LO QUE ESTUVIMOS HACIENDO
          </span>
          <h2 className="text-5xl md:text-8xl font-ash text-white uppercase leading-none tracking-tight">
            ULTIMOS EVENTOS
          </h2>
          <div className="w-24 h-1 bg-kench-red mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {eventos.map((ev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-black border border-white/10 p-5 group flex flex-col justify-between h-full hover:border-white/30 transition-all duration-300 relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-[#111]">
                <img
                  src={ev.foto}
                  alt={ev.nombre}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                
                {/* Sticker on image */}
                <div className={`absolute top-4 right-4 px-3 py-1 font-ash text-sm md:text-base border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${ev.stickerColor} transform rotate-3`}>
                  {ev.sticker}
                </div>
              </div>

              {/* Text Info */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-kench-red font-ash text-2xl uppercase tracking-wider block mb-1">
                    {ev.edicion}
                  </span>
                  <h3 className="text-2xl font-ash text-white mb-4 uppercase leading-none tracking-tight">
                    {ev.nombre}
                  </h3>
                </div>
                
                <div className="border-t border-white/10 pt-4 mt-4 font-body text-gray-400">
                  <p className="text-sm font-semibold text-white/80">{ev.fecha}</p>
                  <p className="text-xs uppercase mt-1 tracking-wider">{ev.lugar}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UltimosEventos;

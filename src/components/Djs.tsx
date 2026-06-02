import { motion } from 'framer-motion';

const Djs = () => {
  const djs = [
    { nombre: 'NOMBRE 1', estilo: 'PERREO & CACHENGUE', img: '/assets/photos/DJs/@ronnfotografia_-248.JPG' },
    { nombre: 'NOMBRE 2', estilo: 'ELECTRONICA / HOUSE', img: '/assets/photos/DJs/KENCH-170.jpg' },
    { nombre: 'NOMBRE 3', estilo: 'TRAP & REGGAETON', img: '/assets/photos/DJs/IMG_7293.JPG' },
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-4">
          <h2 className="text-8xl md:text-[12rem] font-ash text-white uppercase leading-[1.1] tracking-[0.05em]">
            LINE <br /> UP
          </h2>
          <div className="sticker-red md:-mt-12">DJS RESIDENTES</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {djs.map((dj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[3/4] overflow-hidden border-4 border-white relative shadow-[15px_15px_0px_0px_#ffff00] group-hover:shadow-none group-hover:translate-x-[15px] group-hover:translate-y-[15px] transition-all duration-300">
                <img 
                  src={dj.img} 
                  alt={dj.nombre} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-kench-red/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="bg-black text-white px-4 py-2 font-ash text-2xl inline-block transform -rotate-2">
                     {dj.nombre}
                   </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-kench-yellow font-sequel text-sm tracking-[0.3em] uppercase">
                  {dj.estilo}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background large text */}
      <div className="absolute bottom-0 right-0 text-[20rem] font-ash text-white/5 pointer-events-none select-none leading-none -mb-20">
        DJS
      </div>
    </section>
  );
};

export default Djs;

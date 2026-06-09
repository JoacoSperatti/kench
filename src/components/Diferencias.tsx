import { motion } from 'framer-motion';
import { Beer, Music, Flame, Smile } from 'lucide-react';

const Diferencias = () => {
  const caracteristicas = [
    {
      icon: <Beer className="w-12 h-12 text-kench-red" />,
      titulo: 'BARRA LIBRE REAL',
      descripcion: 'Se toma lo que se quiere, cuando se quiere, toda la noche. Sin sorpresas, sin marcas genéricas y sin letra chica.'
    },
    {
      icon: <Music className="w-12 h-12 text-kench-yellow" />,
      titulo: 'MUSICA AL PALO',
      descripcion: 'DJ sets asesinos combinando el reggaetón más sucio de la vieja escuela, los hits del pop y cumbia para no dejar de bailar.'
    },
    {
      icon: <Flame className="w-12 h-12 text-kench-orange" />,
      titulo: 'EL CAOS QUE BUSCAS',
      descripcion: 'Shows sorpresa, juegos en vivo con premios insólitos, reparto de merch oficial y esa energía descontrolada que solo se vive en Kench.'
    },
    {
      icon: <Smile className="w-12 h-12 text-kench-pink" />,
      titulo: 'VENI COMO QUIERAS',
      descripcion: 'Acá no hay dress code ni caretas. Ponete tu outfit favorito y vení a disfrutar con amigos. Cero pose, pura diversión.'
    }
  ];

  return (
    <section id="diferencias" className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background lights */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-kench-red/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-kench-yellow/10 blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-6">
          <div>
            <span className="text-kench-red font-sequel text-sm tracking-[0.2em] uppercase block mb-3">LA DIFERENCIA KENCH</span>
            <h2 className="text-5xl md:text-8xl font-ash text-white uppercase leading-none tracking-tight">
              POR QUE KENCH?
            </h2>
          </div>
          <div className="sticker bg-kench-yellow text-black transform rotate-2">
            NO ES CUALQUIER FIESTA
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caracteristicas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: 'var(--color-kench-yellow)' }}
              className="bg-black/60 backdrop-blur-sm p-8 border-2 border-white/10 hover:border-kench-yellow transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-3xl font-ash text-white mb-4 tracking-wide uppercase">{item.titulo}</h3>
                <p className="text-gray-400 font-body text-lg leading-relaxed">{item.descripcion}</p>
              </div>
              <div className="mt-8 text-white/5 font-ash text-6xl text-right select-none pointer-events-none">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferencias;

import { motion } from 'framer-motion';

const SobreNosotros = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-kench-red/10 blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-kench-yellow/10 blur-[100px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: -2 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-kench-yellow p-10 relative shadow-[20px_20px_0px_0px_#ff0000] border-4 border-black"
          >
            <div className="sticker-red absolute -top-8 -right-8 z-20">QUE ONDA?</div>
            <h2 className="text-7xl md:text-8xl font-ash text-black mb-8 uppercase leading-[1.2]">Sobre <br />Nosotros</h2>
            <p className="text-black text-2xl mb-6 font-body leading-tight">
              Kench no nació en una oficina, nació en el medio de una pista, con los bajos retumbando en el pecho y las ganas de que la noche no tenga reglas. 
              Somos el refugio para los que buscan algo más que "una salida": somos el <span className="text-kench-red font-ash uppercase text-4xl">CAOS CONTROLADO</span>.
            </p>
            <p className="text-black/80 text-xl font-body leading-relaxed italic border-t-2 border-black/10 pt-6">
              Acá no importa quién sos de día. Cuando se prenden las luces rojas, todos somos Kench. Barra libre sin vueltas, música que no te deja parar y esa energía que solo entendés cuando estás ahí. No te lo contaron, lo viviste.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="bg-white p-8 transform rotate-2 hover:rotate-0 transition-all cursor-default border-4 border-black shadow-[10px_10px_0px_0px_#ff0000] group">
              <h3 className="text-kench-red text-4xl font-ash mb-4 group-hover:scale-105 transition-transform">MEJORES LUGARES</h3>
              <p className="text-black font-sequel text-xl tracking-tight uppercase">Los mejores boliches de BsAs, solo para ustedes.</p>
            </div>
            
            <div className="bg-kench-red p-8 transform -rotate-3 hover:rotate-0 transition-all cursor-default shadow-[10px_10px_0px_0px_#ffff00] border-4 border-black group">
              <h3 className="text-kench-yellow text-4xl font-ash mb-4 group-hover:scale-105 transition-transform">DRESS CODE: CERO</h3>
              <p className="text-white font-sequel text-xl tracking-tight uppercase">Lo que tengas puesto está bien. Vení a disfrutar.</p>
            </div>

            <div className="bg-kench-yellow p-8 transform rotate-1 hover:rotate-0 transition-all cursor-default border-4 border-black shadow-[10px_10px_0px_0px_#000] group">
              <h3 className="text-black text-4xl font-ash mb-4 group-hover:scale-105 transition-transform">LINE UP BRUTAL</h3>
              <p className="text-black font-sequel text-xl tracking-tight uppercase">Los Mejores DJ para que cantes y te muevas toda la noche.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;

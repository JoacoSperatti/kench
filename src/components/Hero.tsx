import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#050505]">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
        >
          <source src="/assets/videos/aftermovie.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_0%,#000_120%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Top Label */}
          <span className="sticker mb-8">LA MEJOR NOCHE DE TU VIDA</span>

          <h1 className="text-white text-7xl md:text-[12rem] font-ash mb-12 uppercase tracking-[0.02em] md:tracking-[0.05em] kench-text-shadow leading-[1] md:leading-[0.95]">
            FIESTA <br className="hidden md:block" /> KENCH
          </h1>
          
          <p className="font-sequel text-xl md:text-3xl text-kench-yellow mb-12 tracking-[0.2em] uppercase max-w-3xl leading-relaxed">
            La única y maldita fiesta <br /> <span className="text-white">con barra libre toda la noche.</span>
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.button
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-kench-red text-kench-yellow font-ash text-4xl border-4 border-kench-yellow shadow-[8px_8px_0px_0px_rgba(255,255,0,0.3)] transition-all hover:shadow-none hover:bg-white hover:text-black hover:border-black"
            >
              CONSEGUIR ENTRADAS
            </motion.button>
            
            <a 
              href="#sobre-nosotros"
              className="font-sequel text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors border-b border-white/20 pb-1"
            >
              Ver más info ↓
            </a>
          </div>
        </motion.div>
      </div>

      {/* Side Decorative Text (Polenta style) */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="font-ash text-white/10 text-9xl vertical-text transform rotate-180 select-none">
          KENCH KENCH KENCH
        </div>
      </div>
      
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="font-ash text-white/10 text-9xl vertical-text select-none">
          MALDITA FIESTA
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Beer } from 'lucide-react';

const Hero = () => {
  return (
    <section id="evento" className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black pt-20">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#050505]">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-50 shadow-2xl grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
        >
          <source src="/assets/videos/aftermovie.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_10%,#000_130%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center max-w-5xl mx-auto w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* Badge indicator */}
          <span className="sticker mb-6 transform -rotate-2 animate-pulse">
            PROXIMA FECHA • ENTRADAS LIMITADAS
          </span>

          {/* Event Title */}
          <h1 className="text-white text-6xl sm:text-7xl md:text-[10rem] font-ash uppercase tracking-tight leading-none mb-4 kench-text-shadow">
            KENCH #11
          </h1>
          
          <span className="sticker bg-kench-red text-kench-yellow mb-8 transform rotate-1 text-2xl border-2 border-kench-yellow py-1 px-4">
            EDICION MUNDIAL
          </span>
          
          <p className="font-sequel text-lg sm:text-2xl text-kench-yellow tracking-[0.15em] uppercase mb-10 max-w-2xl leading-relaxed">
            La única y maldita fiesta <span className="text-white">barra libre.</span>
          </p>

          {/* Event Details Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl bg-black/80 backdrop-blur-md border-2 border-white/20 p-6 md:p-8 mb-12 rounded-none relative">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-kench-yellow border-2 border-black" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-kench-red border-2 border-black" />
            
            <div className="flex flex-col items-center p-4 border-b md:border-b-0 md:border-r border-white/10">
              <Calendar className="text-kench-red w-8 h-8 mb-3" />
              <span className="text-xs uppercase text-gray-400 font-sequel tracking-wider">CUÁNDO</span>
              <span className="text-xl font-ash text-white mt-1 text-center">SAB. 4 JULIO</span>
            </div>

            <div className="flex flex-col items-center p-4 border-b md:border-b-0 md:border-r border-white/10">
              <Clock className="text-kench-yellow w-8 h-8 mb-3" />
              <span className="text-xs uppercase text-gray-400 font-sequel tracking-wider">HORARIO</span>
              <span className="text-xl font-ash text-white mt-1 text-center">23:59 HS</span>
            </div>

            <div className="flex flex-col items-center p-4 border-b lg:border-b-0 lg:border-r border-white/10">
              <MapPin className="text-kench-orange w-8 h-8 mb-3" />
              <span className="text-xs uppercase text-gray-400 font-sequel tracking-wider">DÓNDE</span>
              <span className="text-xl font-ash text-white mt-1 text-center">CAIX</span>
            </div>

            <div className="flex flex-col items-center p-4">
              <Beer className="text-kench-pink w-8 h-8 mb-3" />
              <span className="text-xs uppercase text-gray-400 font-sequel tracking-wider">MODALIDAD</span>
              <span className="text-xl font-ash text-white mt-1 text-center">BARRA LIBRE</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center w-full justify-center">
            <motion.a
              href="https://www.passline.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-kench-red text-kench-yellow font-ash text-3xl md:text-4xl border-2 border-kench-yellow shadow-[6px_6px_0px_0px_rgba(255,255,0,1)] transition-all hover:shadow-none hover:bg-white hover:text-black hover:border-black text-center w-full sm:w-auto uppercase"
            >
              COMPRAR ENTRADAS
            </motion.a>
            
            <a 
              href="#diferencias"
              className="font-sequel text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors border-b border-white/20 pb-1"
            >
              ¿QUÉ NOS HACE ÚNICOS? ↓
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Borders (Polenta raw vibe) */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-kench-yellow via-kench-red to-kench-pink z-10" />
    </section>
  );
};

export default Hero;

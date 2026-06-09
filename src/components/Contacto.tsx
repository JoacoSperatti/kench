import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contacto = () => {
  return (
    <section id="contacto" className="py-28 bg-[#0a0a0a] relative overflow-hidden border-t-2 border-white/10">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-kench-pink/10 blur-[150px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-kench-pink font-sequel text-sm tracking-[0.2em] uppercase block mb-3">
            HABLEMOS / SUMATE AL CAOS
          </span>
          <h2 className="text-5xl md:text-8xl font-ash text-white uppercase leading-none tracking-tight">
            CONTACTO
          </h2>
          <p className="text-gray-400 font-body text-lg max-w-xl mt-4">
            ¿Querés traer tu marca o unirte a la comunidad? Escribinos directamente por cualquiera de nuestros canales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* WhatsApp */}
          <motion.a
            href="https://chat.whatsapp.com/GPKW0ZwX55c2JnpJdfHG4e"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-between p-8 bg-black/40 border border-white/10 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all duration-300 group text-center h-[260px]"
          >
            <div className="p-4 bg-white/5 rounded-full group-hover:bg-[#25D366] group-hover:text-black transition-all">
              <svg 
                viewBox="0 0 24 24" 
                width="36" 
                height="36" 
                fill="currentColor"
                className="w-9 h-9"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-ash text-2xl text-white group-hover:text-[#25D366] transition-colors uppercase">WHATSAPP</h3>
              <p className="font-sequel text-[10px] text-gray-500 uppercase tracking-widest mt-1">Comunidad Oficial</p>
            </div>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/fiestakench"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-between p-8 bg-black/40 border border-white/10 hover:border-[#E1306C] hover:bg-[#E1306C]/5 transition-all duration-300 group text-center h-[260px]"
          >
            <div className="p-4 bg-white/5 rounded-full group-hover:bg-[#E1306C] group-hover:text-white transition-all">
              <svg 
                viewBox="0 0 24 24" 
                width="36" 
                height="36" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-9 h-9"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <div>
              <h3 className="font-ash text-2xl text-white group-hover:text-[#E1306C] transition-colors uppercase">INSTAGRAM</h3>
              <p className="font-sequel text-[10px] text-gray-500 uppercase tracking-widest mt-1">@fiestakench</p>
            </div>
          </motion.a>

          {/* TikTok */}
          <motion.a
            href="https://www.tiktok.com/@fiestakench"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-between p-8 bg-black/40 border border-white/10 hover:border-[#00f2fe] hover:bg-[#00f2fe]/5 transition-all duration-300 group text-center h-[260px]"
          >
            <div className="p-4 bg-white/5 rounded-full group-hover:bg-[#00f2fe] group-hover:text-black transition-all">
              <svg 
                viewBox="0 0 24 24" 
                width="36" 
                height="36" 
                fill="currentColor"
                className="w-9 h-9"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.72-.49-.44-.9-.96-1.21-1.54v6.57c.06 2.24-.78 4.57-2.43 6.13-1.81 1.79-4.57 2.45-7.01 1.77-2.61-.67-4.75-2.73-5.46-5.32-.87-2.92.17-6.28 2.59-8.15 1.72-1.35 4.02-1.81 6.16-1.29V11.1c-1.22-.39-2.6-.17-3.6.58-.99.72-1.48 2.02-1.25 3.22.2 1.25 1.16 2.33 2.39 2.59 1.25.28 2.65-.24 3.29-1.32.31-.51.44-1.11.42-1.7V.02z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-ash text-2xl text-white group-hover:text-[#00f2fe] transition-colors uppercase">TIKTOK</h3>
              <p className="font-sequel text-[10px] text-gray-500 uppercase tracking-widest mt-1">@fiestakench</p>
            </div>
          </motion.a>

          {/* Mail */}
          <motion.a
            href="mailto:contactokench@gmail.com"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-between p-8 bg-black/40 border border-white/10 hover:border-kench-red hover:bg-kench-red/5 transition-all duration-300 group text-center h-[260px]"
          >
            <div className="p-4 bg-white/5 rounded-full group-hover:bg-kench-red group-hover:text-white transition-all">
              <Mail className="w-9 h-9" />
            </div>
            <div>
              <h3 className="font-ash text-2xl text-white group-hover:text-kench-red transition-colors uppercase">EMAIL</h3>
              <p className="font-sequel text-[10px] text-gray-500 uppercase tracking-widest mt-1">contactokench@gmail.com</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;

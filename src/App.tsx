import Hero from './components/Hero';
import Carousel from './components/Carousel';
import SobreNosotros from './components/SobreNosotros';
import Juegos from './components/Juegos';
import Tragos from './components/Tragos';
import Artistas from './components/Artistas';
import Ustedes from './components/Ustedes';
import Djs from './components/Djs';
import { Camera, X, Music } from 'lucide-react';

function App() {
  return (
    <div className="w-full min-h-screen bg-kench-black text-white selection:bg-kench-yellow selection:text-black overflow-x-hidden font-body">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-2 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/10">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src="/assets/logo.png" alt="Kench Logo" className="h-16 md:h-20 transform -rotate-2 transition-transform hover:scale-105" />
        </a>
        <div className="hidden lg:flex gap-8 items-center">
          <a href="#sobre-nosotros" className="hover:text-kench-yellow transition-colors font-sequel text-sm tracking-tighter uppercase">Sobre nosotros</a>
          <a href="#djs" className="hover:text-kench-yellow transition-colors font-sequel text-sm tracking-tighter uppercase">DJs</a>
          <a href="#tragos" className="hover:text-kench-red transition-colors font-sequel text-sm tracking-tighter uppercase">Tragos</a>
          <a href="#galeria" className="hover:text-kench-yellow transition-colors font-sequel text-sm tracking-tighter uppercase">Galería</a>
          <a href="#juegos" className="hover:text-kench-red transition-colors font-sequel text-sm tracking-tighter uppercase">Juegos</a>
          <a href="#artistas" className="hover:text-kench-yellow transition-colors font-sequel text-sm tracking-tighter uppercase">Artistas</a>
          <a href="#ustedes" className="hover:text-kench-red transition-colors font-sequel text-sm tracking-tighter uppercase">Ustedes</a>
          <button className="bg-kench-red text-kench-yellow px-8 py-3 font-ash text-2xl hover:bg-white hover:text-black transition-all border-2 border-kench-yellow shadow-[4px_4px_0px_0px_rgba(255,0,0,1)] hover:shadow-none active:translate-x-1 active:translate-y-1">
            TICKETS
          </button>
        </div>
        {/* Mobile Ticket Button */}
        <div className="lg:hidden">
          <button className="bg-kench-red text-kench-yellow px-6 py-2 font-ash text-xl border-2 border-kench-yellow">
            TICKETS
          </button>
        </div>
      </nav>

      {/* Floating WhatsApp CTA */}
      <a 
        href="https://chat.whatsapp.com/GPKW0ZwX55c2JnpJdfHG4e" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white h-[64px] min-w-[64px] rounded-full shadow-2xl hover:scale-110 transition-all group flex items-center justify-center gap-3 overflow-hidden px-4 hover:max-w-[400px] duration-500"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="currentColor" 
          className="flex-shrink-0"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="font-ash text-xl whitespace-nowrap hidden group-hover:block transition-all duration-500">UNITE A LOS KENCHEROS</span>
      </a>

      <main>
        <Hero />
        
        {/* New Scrolling Marquee for dynamic feel */}
        <div className="bg-kench-yellow py-4 overflow-hidden whitespace-nowrap border-y-4 border-black rotate-1 scale-105 z-20 relative">
          <div className="animate-marquee inline-block">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-black font-ash text-5xl mx-12 uppercase">
                KENCH • LA ÚNICA Y MALDITA FIESTA BARRA LIBRE • KENCH • 
              </span>
            ))}
          </div>
        </div>

        <div id="sobre-nosotros" className="pt-20">
          <SobreNosotros />
        </div>

        <div id="djs">
          <Djs />
        </div>

        <div id="tragos">
          <Tragos />
        </div>

        <div id="galeria">
          <Carousel />
        </div>

        <div id="juegos">
          <Juegos />
        </div>

        <div id="artistas">
          <Artistas />
        </div>

        <div id="ustedes">
          <Ustedes />
        </div>

        {/* Informative banner with Polenta vibe */}
        <div className="bg-kench-red py-12 overflow-hidden whitespace-nowrap border-y-8 border-kench-yellow -rotate-1">
          <div className="animate-marquee inline-block" style={{ animationDirection: 'reverse' }}>
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-kench-yellow font-ash text-7xl mx-8 uppercase opacity-80">
                NO ES CUALQUIER FIESTA • BARRA LIBRE • NO ES CUALQUIER FIESTA • 
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-24 bg-kench-black border-t-4 border-white/10 px-6 relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
          <div className="text-center">
            <div className="text-[12rem] md:text-[18rem] font-ash text-kench-yellow leading-none tracking-tighter opacity-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
              KENCH
            </div>
            <img src="/assets/logo.png" alt="Kench Logo" className="h-48 md:h-64 mx-auto mb-8 relative z-10" />
            <h3 className="text-4xl md:text-6xl font-ash text-white mb-4 relative z-10">¿ESTÁS LISTO?</h3>
            <p className="text-gray-400 font-body text-xl max-w-2xl mx-auto">Únete a la comunidad más loca de Buenos Aires. Barra libre, buena música y el mejor ambiente.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 relative z-10">
            <a href="#" className="flex flex-col items-center gap-2 group">
              <div className="p-6 bg-white/5 rounded-2xl group-hover:bg-kench-yellow group-hover:text-black transition-all transform group-hover:-rotate-6 border border-white/10">
                <Camera size={40} />
              </div>
              <span className="font-sequel text-xs tracking-widest uppercase text-gray-500 group-hover:text-white">Instagram</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 group">
              <div className="p-6 bg-white/5 rounded-2xl group-hover:bg-kench-red group-hover:text-white transition-all transform group-hover:rotate-6 border border-white/10">
                <X size={40} />
              </div>
              <span className="font-sequel text-xs tracking-widest uppercase text-gray-500 group-hover:text-white">X / Twitter</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 group">
              <div className="p-6 bg-white/5 rounded-2xl group-hover:bg-kench-pink group-hover:text-white transition-all transform group-hover:-rotate-3 border border-white/10">
                <Music size={40} />
              </div>
              <span className="font-sequel text-xs tracking-widest uppercase text-gray-500 group-hover:text-white">Spotify</span>
            </a>
          </div>
          
          <div className="w-full h-px bg-white/10" />
          
          <div className="flex flex-col md:flex-row justify-between w-full text-gray-600 font-sequel text-xs tracking-widest uppercase">
            <p>© 2026 KENCH FIESTA. TODOS LOS DERECHOS RESERVADOS.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacidad</a>
              <a href="#" className="hover:text-white">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

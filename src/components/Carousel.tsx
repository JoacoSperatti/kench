import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true });

  const images = [
    { url: '/assets/photos/galeria/@ronnfotografia_-160.JPG', tag: 'ENERGIA' },
    { url: '/assets/photos/galeria/@ronnfotografia_-174.JPG', tag: 'NIGHTLIFE' },
    { url: '/assets/photos/galeria/IMG_6240.JPG', tag: 'FIESTON' },
    { url: '/assets/photos/galeria/KENCH-239.jpg', tag: 'CAOS' },
    { url: '/assets/photos/galeria/fiesta-kench.jpg', tag: 'SIEMPRE KENCH' },
  ];

  return (
    <section className="py-32 bg-black overflow-hidden relative">
      <div className="container mx-auto px-4 mb-24 relative z-10">
        <div className="flex flex-col md:flex-row items-baseline gap-8">
          <h2 className="text-8xl md:text-[11rem] font-ash text-kench-yellow leading-none uppercase tracking-[0.05em]">GAALERIA</h2>
          <div className="sticker bg-white text-black -rotate-2">REVIVI LA NOCHE</div>
        </div>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex gap-16 px-8 cursor-grab active:cursor-grabbing">
          {images.map((img, index) => (
            <div key={index} className="embla__slide flex-none w-[350px] md:w-[600px]">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-black p-4 border-2 border-white/20 relative group"
              >
                <div className="aspect-[16/9] overflow-hidden mb-8 relative">
                  <img
                    src={img.url}
                    alt={`Gallery ${index}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-kench-red/10 group-hover:bg-transparent" />
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="font-ash text-4xl text-white uppercase tracking-tighter">{img.tag}</div>
                  <div className="font-sequel text-xs text-white/40 tracking-[0.5em] uppercase pb-2">0{index + 1} // 05</div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-kench-red text-white p-4 font-ash text-xl transform rotate-12 shadow-2xl border-2 border-black group-hover:rotate-0 transition-transform">
                  MALDITA FIESTA
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Horizontal divider */}
      <div className="mt-32 w-full h-px bg-white/10" />
    </section>
  );
};

export default Carousel;

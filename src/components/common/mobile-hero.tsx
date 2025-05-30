"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const MobileHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const spinningTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP timeline for initial animations
    const tl = gsap.timeline();
    
    // Animate title on load
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    
    // Animate CTA button
    tl.fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.3"
    );

    // Floating animation for the shape
    gsap.to(shapeRef.current, {
      y: -20,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    // Spinning text animation
    gsap.to(spinningTextRef.current, {
      rotation: 360,
      duration: 8,
      ease: "none",
      repeat: -1
    });

    // CTA button hover effects
    const ctaButton = ctaRef.current;
    
    const handleMouseEnter = () => {
      gsap.to(ctaButton, {
        scale: 1.1,
        boxShadow: "0 20px 40px rgba(216, 90, 0, 0.4)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(ctaButton, {
        scale: 1,
        boxShadow: "0 10px 20px rgba(216, 90, 0, 0.2)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Add event listeners with null checks
    if (ctaButton) {
      ctaButton.addEventListener('mouseenter', handleMouseEnter);
      ctaButton.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      // Remove event listeners with null checks
      if (ctaButton) {
        ctaButton.removeEventListener('mouseenter', handleMouseEnter);
        ctaButton.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="w-full min-h-screen relative lg:hidden overflow-hidden flex flex-col -mb-20"
    >
      {/* Animated background shape */}
      <div
        ref={shapeRef}
        className="absolute top-1/4 right-8 w-32 h-32 rounded-full bg-gradient-to-r from-[#d85a00]/20 to-[#7a290e]/30 blur-xl"
      />
      
      {/* Mobilava Image at the top */}
      <div className="relative z-5 flex justify-center">
        <Image
          src="/lava/3.png"
          alt="Magma Studio Mobile"
          width={400}
          height={400}
          className="object-contain scale-150"
          priority
        />
      </div>

      {/* Main content container - Left aligned */}
      <div className="relative z-10 flex flex-col items-start px-6 flex-1 justify-center">
        
        {/* Main title */}
        <h1 
          ref={titleRef}
          className="font-cabinetGrotesk font-bold text-6xl sm:text-6xl text-white leading-tight mb-8 uppercase tracking-tighter text-left"
        >
          <span className="block">Desarrollo web a la</span>
          <span className="block bg-clip-text text-white font-light">
            medida
          </span>
        </h1>

        {/* Services grid - 2 rows */}
        <div className="mb-8 grid grid-cols-2 gap-x-8 gap-y-6 w-full max-w-md">
          {['Sitios web', 'Landing Pages', 'Software', 'E-commerce'].map((service) => (
            <span
              key={service}
              className="text-white text-2xl font-cabinetGrotesk font-bold italic uppercase text-left tracking-wide leading-tight"
            >
              {service}
            </span>
          ))}
        </div>

        {/* Subtle WhatsApp CTA Button */}
        <div className="w-full max-w-md">
          <Link
            href="https://wa.me/523336767331?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <button
              ref={ctaRef}
              className="group relative w-full px-6 py-4 bg-white/5 backdrop-blur-sm rounded-full text-white font-archivo font-normal text-base border border-white/10 hover:border-[#d85a00]/30 transition-all duration-300"
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#d85a00]/0 group-hover:bg-[#d85a00]/10 transition-all duration-300" />
              
              {/* Button content - centered */}
              <span className="relative z-10 flex items-center justify-center gap-3">
                <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="group-hover:text-[#d85a00] transition-colors duration-300 uppercase">¡Comienza tu proyecto!</span>
              </span>
            </button>
          </Link>
        </div>

        
      </div>
    </section>
  );
};

export default MobileHero;

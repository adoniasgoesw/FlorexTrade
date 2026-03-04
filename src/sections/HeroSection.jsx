import { useRef } from "react";
import { testimonials } from "../assets/data";

export default function Testimonials() {
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.setProperty(
        "--marquee-play-state",
        "paused"
      );
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.setProperty(
        "--marquee-play-state",
        "running"
      );
    }
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-normal mb-4 clash-display">
            Trusted by Traders
          </h2>

          <p className="text-zinc-400/90 text-lg">
            Join thousands of satisfied traders on ForexTrade
          </p>
        </div>
      </div>

      <div className="relative flex flex-col antialiased">
        <div ref={marqueeRef} className="relative flex overflow-hidden py-4">
          
          {/* PRIMEIRA LINHA */}
          <div
            className="animate-marquee min-w-full flex shrink-0 items-stretch gap-8"
            style={{
              animationPlayState: "var(--marquee-play-state)",
            }}
          >
            {testimonials.map((test, i) => (
              <div
                key={`first-${i}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-[400px] cursor-pointer shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8 border-2 rounded-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 overflow-hidden rounded-full flex items-center justify-center bg-pink-500 text-xl">
                    {!test.image ? (
                      test.name[0]
                    ) : (
                      <img
                        src={test.image}
                        alt={test.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div>
                    <h4 className="font-medium text-lg clash-display text-white/90">
                      {test.name}
                    </h4>

                    <p className="text-sm text-white/60">
                      {test.role}
                    </p>
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed">
                  {test.content}
                </p>
              </div>
            ))}
          </div>

          {/* SEGUNDA LINHA (DUPLICADA PARA LOOP INFINITO) */}
          <div
            className="animate-marquee min-w-full flex shrink-0 items-stretch gap-8"
            style={{
              animationPlayState: "var(--marquee-play-state)",
            }}
          >
            {testimonials.map((test, i) => (
              <div
                key={`second-${i}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-[400px] cursor-pointer shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8 border-2 rounded-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 overflow-hidden rounded-full flex items-center justify-center bg-pink-500 text-xl">
                    {!test.image ? (
                      test.name[0]
                    ) : (
                      <img
                        src={test.image}
                        alt={test.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div>
                    <h4 className="font-medium text-lg clash-display text-white/90">
                      {test.name}
                    </h4>

                    <p className="text-sm text-white/60">
                      {test.role}
                    </p>
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed">
                  {test.content}
                </p>
              </div>
            ))}
          </div>

          {/* GRADIENTS LATERAIS */}
          <div className="absolute h-full w-20 md:w-50 bg-gradient-to-r from-black to-transparent -left-1" />
          <div className="absolute h-full w-20 md:w-50 bg-gradient-to-l from-black to-transparent -right-1" />
        </div>
      </div>
    </section>
  );
}
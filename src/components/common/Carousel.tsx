"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  isDark: boolean;
}

export default function Carousel({ images, isDark }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="relative w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((src, i) => (
          <div key={i} className="flex-[0_0_100%] min-w-0 relative">
            <img
              src={src}
              alt={`Project image ${i + 1}`}
              className="rounded-lg shadow-md w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={scrollPrev}
        className={`absolute top-1/2 left-2 -translate-y-1/2 rounded-full p-2 transition ${
          isDark
            ? "bg-slate-700 text-white hover:bg-slate-600"
            : "bg-white text-slate-700 hover:bg-slate-200"
        } shadow`}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={scrollNext}
        className={`absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-2 transition ${
          isDark
            ? "bg-slate-700 text-white hover:bg-slate-600"
            : "bg-white text-slate-700 hover:bg-slate-200"
        } shadow`}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

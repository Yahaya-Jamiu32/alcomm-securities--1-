"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setIndex(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, close, step]);

  if (images.length === 0) return null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {images.map((src, i) => (
          <li key={src}>
            <button
              type="button"
              onClick={(e) => { lastTrigger.current = e.currentTarget; setIndex(i); }}
              aria-label={`Open image ${i + 1} of ${images.length}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <Image src={src} alt={`${title}, photo ${i + 1}`} fill sizes="(min-width: 1024px) 30vw, 46vw" className="object-cover transition duration-500 group-hover:scale-105" />
            </button>
          </li>
        ))}
      </ul>
      {index !== null && (
        <div role="dialog" aria-modal="true" aria-label={`${title} image viewer`} className="fixed inset-0 z-[60] flex items-center justify-center bg-deep/95 p-4">
          <button ref={closeRef} type="button" onClick={close} aria-label="Close image viewer" className="absolute right-4 top-4 flex size-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-gold"><X className="size-6" aria-hidden="true" /></button>
          {images.length > 1 && (
            <>
              <button type="button" onClick={() => step(-1)} aria-label="Previous image" className="absolute left-3 flex size-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-gold"><ChevronLeft className="size-6" aria-hidden="true" /></button>
              <button type="button" onClick={() => step(1)} aria-label="Next image" className="absolute right-3 flex size-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-gold"><ChevronRight className="size-6" aria-hidden="true" /></button>
            </>
          )}
          <div className="relative h-[80vh] w-full max-w-5xl">
            <Image src={images[index]} alt={`${title}, photo ${index + 1} of ${images.length}`} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}

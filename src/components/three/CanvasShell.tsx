"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import clsx from "clsx";

function HeroScene({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 2]} intensity={0.8} />
      <mesh rotation={[0.3, 0.6, 0]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial color="#0f8a3d" wireframe={reduceMotion} />
      </mesh>
    </>
  );
}

export function CanvasShell({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
    const handle = () => setReduceMotion(media.matches);
    media.addEventListener("change", handle);
    return () => media.removeEventListener("change", handle);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={clsx("relative overflow-hidden bg-white", className)}>
      {isVisible ? (
        <Canvas camera={{ position: [2.6, 2.6, 2.6], fov: 50 }}>
          <HeroScene reduceMotion={reduceMotion} />
          <OrbitControls enableZoom={false} autoRotate={!reduceMotion} />
        </Canvas>
      ) : null}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-primary/10" />
    </div>
  );
}

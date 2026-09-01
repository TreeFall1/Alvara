"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function WebGLWordmark() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "high-performance" });
    } catch {
      element.classList.add("webgl-wordmark--fallback");
      element.textContent = "SHARPLINK";
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.z = 12;
    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const source = document.createElement("canvas");
    source.width = 1600; source.height = 280;
    const context = source.getContext("2d", { willReadFrequently: true });
    if (!context) { element.classList.add("webgl-wordmark--fallback"); element.textContent = "SHARPLINK"; renderer.dispose(); return; }
    context.fillStyle = "#fff";
    context.font = "900 230px Arial Narrow, Arial, sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("SHARPLINK", 800, 142);
    const pixels = context.getImageData(0, 0, source.width, source.height).data;
    for (let y = 0; y < source.height; y += 7) {
      for (let x = 0; x < source.width; x += 7) {
        if (pixels[(y * source.width + x) * 4 + 3] > 128 && Math.random() > 0.32) {
          positions.push((x / source.width - 0.5) * 15.6, -(y / source.height - 0.5) * 2.7, (Math.random() - 0.5) * 0.08);
        }
      }
    }
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0xfff9ef, size: 0.025, transparent: true, opacity: 0.92 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    element.appendChild(renderer.domElement);

    const pointer = { x: 0, y: 0 };
    const onPointer = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width - 0.5;
      pointer.y = (event.clientY - rect.top) / rect.height - 0.5;
    };
    const resize = () => {
      const width = Math.max(element.clientWidth, 1);
      const height = Math.max(element.clientHeight, 1);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    element.addEventListener("pointermove", onPointer);
    resize();
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startedAt = performance.now();
    renderer.setAnimationLoop(() => {
      const t = (performance.now() - startedAt) / 1000;
      const autoX = innerWidth <= 800 ? Math.sin(t * 0.42) * 0.24 : pointer.x;
      const autoY = innerWidth <= 800 ? Math.cos(t * 0.35) * 0.12 : pointer.y;
      points.rotation.y += ((reduced ? 0 : autoX * 0.12) - points.rotation.y) * 0.045;
      points.rotation.x += ((reduced ? 0 : -autoY * 0.08) - points.rotation.x) * 0.045;
      points.position.z = reduced ? 0 : Math.sin(t * 0.7) * 0.08;
      renderer.render(scene, camera);
    });

    return () => {
      renderer.setAnimationLoop(null);
      observer.disconnect();
      element.removeEventListener("pointermove", onPointer);
      renderer.domElement.remove();
      geometry.dispose(); material.dispose(); renderer.dispose();
    };
  }, []);

  return <div className="webgl-wordmark" ref={host}/>;
}

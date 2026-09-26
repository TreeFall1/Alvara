"use client";

import Image from "next/image";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import * as THREE from "three";

const COIN_COLORS = {
  hemisphereSky: 0xf2fff9,
  hemisphereGround: 0x171512,
  keyLight: 0xffffff,
  rimLight: 0xa7e5d3,
  coolLight: 0xc8b8e0,
} as const;

// Full rotations across the complete scroll-driven animation.
const COIN_ROTATION_SPEED = 2;
export type CoinSceneHandle = {
  setProgress: (progress: number) => void;
};

type CoinSceneProps = {
  autoRotate?: boolean;
  modelSize?: number;
  modelSrc?: string;
};

export const CoinScene = forwardRef<CoinSceneHandle, CoinSceneProps>(function CoinScene({ autoRotate = false, modelSize = 4, modelSrc = "/Coin.glb" }, forwardedRef) {
  const hostRef = useRef<HTMLDivElement>(null);
  const drawRef = useRef<((progress: number) => void) | null>(null);
  const progressRef = useRef(0.12);

  useImperativeHandle(forwardedRef, () => ({
    setProgress(progress) {
      progressRef.current = THREE.MathUtils.clamp(progress, 0, 1);
      drawRef.current?.(progressRef.current);
    },
  }), []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let disposed = false;
    let isVisible = false;
    let animationFrame = 0;
    let cleanupScene: (() => void) | undefined;
    let startAnimation = () => {};
    const stopAnimation = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    };

    const initialize = async () => {
      if (disposed || cleanupScene) return;
      const isMobile = matchMedia("(max-width: 1024px)").matches;
      const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const maxPixelRatio = isMobile ? 2.7 : 4;
      const maxTextureAnisotropy = isMobile ? 8 : 16;
      const shadowsEnabled = !isMobile;

      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      } catch {
        host.classList.add("coin-scene--fallback");
        return;
      }

      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.18;
      renderer.shadowMap.enabled = shadowsEnabled;
      renderer.shadowMap.type = THREE.PCFShadowMap;
      host.prepend(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 100);
      camera.position.set(0, 0.15, 8.4);
      const coinGroup = new THREE.Group();
      scene.add(coinGroup);

      scene.add(new THREE.HemisphereLight(COIN_COLORS.hemisphereSky, COIN_COLORS.hemisphereGround, 2.2));
      const key = new THREE.DirectionalLight(COIN_COLORS.keyLight, 5.4);
      key.position.set(4, 5, 7);
      key.castShadow = shadowsEnabled;
      key.shadow.mapSize.set(2048, 2048);
      key.shadow.bias = -0.0001;
      key.shadow.normalBias = 0.02;
      scene.add(key);
      const rim = new THREE.PointLight(COIN_COLORS.rimLight, 34, 18, 1.7);
      rim.position.set(-4.5, 0.5, 4);
      scene.add(rim);
      const cool = new THREE.PointLight(COIN_COLORS.coolLight, 24, 15, 2);
      cool.position.set(4, -3, 2);
      scene.add(cool);

      const render = (progress: number) => {
        const p = prefersReducedMotion ? 0.18 : progress;
        coinGroup.rotation.set(
          0.16 + Math.sin(p * Math.PI * 2) * 0.16,
          -0.72 + p * Math.PI * 2 * COIN_ROTATION_SPEED,
          -0.08 + Math.sin(p * Math.PI * 3) * 0.11,
        );
        renderer.render(scene, camera);
      };
      drawRef.current = render;

      const animate = (time: number) => {
        if (disposed || !isVisible || !autoRotate || prefersReducedMotion) {
          animationFrame = 0;
          return;
        }
        coinGroup.rotation.set(
          0.16 + Math.sin(time * 0.00055) * 0.08,
          -0.72 + time * 0.00048,
          -0.08 + Math.sin(time * 0.00038) * 0.05,
        );
        renderer.render(scene, camera);
        animationFrame = requestAnimationFrame(animate);
      };
      startAnimation = () => {
        if (!animationFrame && isVisible && autoRotate && !prefersReducedMotion) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      const resize = () => {
        const width = Math.max(host.clientWidth, 1);
        const height = Math.max(host.clientHeight, 1);
        renderer.setPixelRatio(Math.min(devicePixelRatio * 2, maxPixelRatio));
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        const verticalHalfFov = THREE.MathUtils.degToRad(camera.fov / 2);
        const horizontalHalfFov = Math.atan(Math.tan(verticalHalfFov) * camera.aspect);
        camera.position.z = 2.5 / Math.tan(Math.min(verticalHalfFov, horizontalHalfFov));
        camera.updateProjectionMatrix();
        render(progressRef.current);
      };
      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(host);
      resize();

      const disposeModel = (model: THREE.Object3D) => {
        model.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          child.geometry.dispose();
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          materials.forEach((material) => {
            Object.values(material).forEach((value) => { if (value instanceof THREE.Texture) value.dispose(); });
            material.dispose();
          });
        });
      };
      cleanupScene = () => {
        stopAnimation();
        resizeObserver.disconnect();
        drawRef.current = null;
        disposeModel(coinGroup);
        renderer.dispose();
        renderer.domElement.remove();
        host.classList.remove("coin-scene--loaded", "coin-scene--fallback");
      };

      const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");
      if (disposed) return;
      const loader = new GLTFLoader();
      loader.load(modelSrc, (gltf) => {
        if (disposed) { disposeModel(gltf.scene); return; }
        const model = gltf.scene;
        const textureAnisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), maxTextureAnisotropy);
        model.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          child.castShadow = shadowsEnabled;
          child.receiveShadow = shadowsEnabled;
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          materials.forEach((material) => {
            Object.values(material).forEach((value) => {
              if (!(value instanceof THREE.Texture)) return;
              value.anisotropy = textureAnisotropy;
              value.needsUpdate = true;
              material.dithering = true;
            });
            if (material instanceof THREE.MeshStandardMaterial) {
              material.envMapIntensity = 1.35;
              material.dithering = true;
              material.needsUpdate = true;
            }
          });
        });
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        const normalized = new THREE.Group();
        normalized.add(model);
        normalized.scale.setScalar(modelSize / Math.max(size.x, size.y, size.z));
        coinGroup.add(normalized);
        host.classList.add("coin-scene--loaded");
        render(progressRef.current);
        startAnimation();
      }, undefined, () => {
        stopAnimation();
        if (!disposed) host.classList.add("coin-scene--fallback");
      });
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (entry.isIntersecting) {
        void initialize().catch(() => {
          if (!disposed) host.classList.add("coin-scene--fallback");
        });
        startAnimation();
      } else {
        stopAnimation();
      }
    }, { rootMargin: "900px" });
    observer.observe(host);

    return () => {
      disposed = true;
      stopAnimation();
      observer.disconnect();
      cleanupScene?.();
    };
  }, [autoRotate, modelSize, modelSrc]);

  return (
    <div className="coin-scene" ref={hostRef}>
      <div className="coin-scene__fallback" aria-hidden="true">
        <Image
          src="/media/coin-fallback.webp"
          alt=""
          fill
          sizes="(max-width: 1024px) 88vw, 42vw"
        />
      </div>
    </div>
  );
});

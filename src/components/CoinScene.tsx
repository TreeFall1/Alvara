"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import * as THREE from "three";

const COIN_COLORS = {
  hemisphereSky: 0xfff6e7,
  hemisphereGround: 0x160b08,
  keyLight: 0xfff3dd,
  rimLight: 0xff5b35,
  coolLight: 0x8da7ff,
} as const;

// Full rotations across the complete scroll-driven animation.
const COIN_ROTATION_SPEED = 2;
const COIN_SIZE = 3;

const COIN_RENDER_QUALITY = {
  antialias: true,
  maxPixelRatio: 2.5,
  maxTextureAnisotropy: 16,
  shadowMapSize: 2048,
  shadowMapType: THREE.PCFShadowMap,
} as const;

export type CoinSceneHandle = {
  setProgress: (progress: number) => void;
};

export const CoinScene = forwardRef<CoinSceneHandle>(function CoinScene(_, forwardedRef) {
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
    let cleanupScene: (() => void) | undefined;

    const initialize = async () => {
      if (disposed || cleanupScene) return;

      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: COIN_RENDER_QUALITY.antialias, alpha: true, powerPreference: "high-performance" });
      } catch {
        host.classList.add("coin-scene--fallback");
        return;
      }

      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.18;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = COIN_RENDER_QUALITY.shadowMapType;
      host.prepend(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 100);
      camera.position.set(0, 0.15, 8.4);
      const coinGroup = new THREE.Group();
      scene.add(coinGroup);

      scene.add(new THREE.HemisphereLight(COIN_COLORS.hemisphereSky, COIN_COLORS.hemisphereGround, 2.2));
      const key = new THREE.DirectionalLight(COIN_COLORS.keyLight, 5.4);
      key.position.set(4, 5, 7);
      key.castShadow = true;
      key.shadow.mapSize.set(COIN_RENDER_QUALITY.shadowMapSize, COIN_RENDER_QUALITY.shadowMapSize);
      key.shadow.bias = -0.0001;
      key.shadow.normalBias = 0.02;
      scene.add(key);
      const rim = new THREE.PointLight(COIN_COLORS.rimLight, 42, 18, 1.7);
      rim.position.set(-4.5, 0.5, 4);
      scene.add(rim);
      const cool = new THREE.PointLight(COIN_COLORS.coolLight, 18, 15, 2);
      cool.position.set(4, -3, 2);
      scene.add(cool);

      const render = (progress: number) => {
        const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
        const p = reduced ? 0.18 : progress;
        coinGroup.rotation.set(
          0.16 + Math.sin(p * Math.PI * 2) * 0.16,
          -0.72 + p * Math.PI * 2 * COIN_ROTATION_SPEED,
          -0.08 + Math.sin(p * Math.PI * 3) * 0.11,
        );
        renderer.render(scene, camera);
      };
      drawRef.current = render;

      const resize = () => {
        const width = Math.max(host.clientWidth, 1);
        const height = Math.max(host.clientHeight, 1);
        renderer.setPixelRatio(Math.min(devicePixelRatio, COIN_RENDER_QUALITY.maxPixelRatio));
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
      loader.load("/Coin.glb", (gltf) => {
        if (disposed) { disposeModel(gltf.scene); return; }
        const model = gltf.scene;
        const textureAnisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), COIN_RENDER_QUALITY.maxTextureAnisotropy);
        model.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          child.castShadow = true;
          child.receiveShadow = true;
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
        normalized.scale.setScalar(COIN_SIZE / Math.max(size.x, size.y, size.z));
        coinGroup.add(normalized);
        host.classList.add("coin-scene--loaded");
        render(progressRef.current);
      }, undefined, () => { if (!disposed) host.classList.add("coin-scene--fallback"); });
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        void initialize();
        observer.disconnect();
      }
    }, { rootMargin: "900px" });
    observer.observe(host);

    return () => {
      disposed = true;
      observer.disconnect();
      cleanupScene?.();
    };
  }, []);

  return (
    <div className="coin-scene" ref={hostRef}>
      <div className="coin-scene__fallback" aria-hidden="true"><span>A</span></div>
    </div>
  );
});

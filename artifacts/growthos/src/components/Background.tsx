import { useEffect, useRef, useState } from 'react';

// Check if WebGL is available in this environment
function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

// CSS-based star field fallback (works everywhere)
function CSSBackground() {
  return (
    <>
      <div
        className="fixed inset-0 z-[-2] pointer-events-none"
        style={{ background: '#0a0a0f' }}
      />
      <div
        className="fixed inset-0 z-[-1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.12) 0%, rgba(6,182,212,0.05) 40%, transparent 70%)',
        }}
      />
      <div className="stars-css fixed inset-0 z-[-1] pointer-events-none overflow-hidden" />
    </>
  );
}

// Three.js WebGL star background
function WebGLBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let frameId: number;

    (async () => {
      // Dynamic import to avoid loading Three.js if WebGL is unavailable
      const THREE = await import('three');

      if (!mountRef.current) return;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      mountRef.current.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 3000);
      camera.position.z = 600;

      const createStars = (count: number, spread: number, size: number, color: number, opacity: number) => {
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * spread;
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        const mat = new THREE.PointsMaterial({ color, size, sizeAttenuation: true, transparent: true, opacity });
        return new THREE.Points(geo, mat);
      };

      const layer1 = createStars(5000, 2400, 1.0, 0xffffff, 0.75);
      const layer2 = createStars(800,  1800, 2.2, 0xa855f7, 0.60);
      const layer3 = createStars(300,  1200, 3.5, 0x06b6d4, 0.70);
      const layer4 = createStars(60,    900, 5.5, 0xffffff, 0.25);
      scene.add(layer1, layer2, layer3, layer4);

      const clock = new THREE.Clock();

      const animate = () => {
        frameId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        layer1.rotation.y = t * 0.012; layer1.rotation.x = t * 0.005;
        layer2.rotation.y = -t * 0.018; layer2.rotation.z = t * 0.008;
        layer3.rotation.x = t * 0.010; layer3.rotation.z = -t * 0.006;
        layer4.rotation.y = t * 0.007;
        (layer4.material as THREE.PointsMaterial).opacity = 0.18 + Math.sin(t * 0.6) * 0.12;
        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', onResize);

      // Store cleanup on the div via a custom property
      (mountRef.current as HTMLDivElement & { _cleanup?: () => void })._cleanup = () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener('resize', onResize);
        renderer.dispose();
        if (mountRef.current?.contains(renderer.domElement)) {
          mountRef.current.removeChild(renderer.domElement);
        }
      };
    })();

    return () => {
      cancelAnimationFrame(frameId);
      const el = mountRef.current as HTMLDivElement & { _cleanup?: () => void };
      el?._cleanup?.();
    };
  }, []);

  return (
    <>
      <div
        ref={mountRef}
        className="fixed inset-0 z-[-2] pointer-events-none"
        style={{ background: '#0a0a0f' }}
      />
      <div
        className="fixed inset-0 z-[-1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.10) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)',
        }}
      />
    </>
  );
}

export default function Background() {
  const [useWebGL] = useState(() => isWebGLAvailable());
  return useWebGL ? <WebGLBackground /> : <CSSBackground />;
}

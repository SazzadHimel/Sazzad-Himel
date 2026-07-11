import { useEffect, useRef } from "react";
import * as THREE from "three";

const COLORS = [
  0x6366f1, // Indigo
  0x22d3ee, // Cyan
  0xf472b6, // Pink
  0xa78bfa, // Violet
  0x34d399, // Emerald
  0xfbbf24, // Amber
  0xf87171, // Rose
  0x60a5fa, // Blue
];

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    let animationFrameId = null;
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    // --- Multicolor Particle System ---
    const particlesCount = 1200;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      // Random color from COLORS array
      const hex = COLORS[Math.floor(Math.random() * COLORS.length)];
      const color = new THREE.Color(hex);
      colorArray[i * 3] = color.r;
      colorArray[i * 3 + 1] = color.g;
      colorArray[i * 3 + 2] = color.b;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
    });

    const starParticles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(starParticles);

    // --- Colorful Wireframe Geometries ---
    const makeMesh = (geom, colorHex, opacity = 0.18) => {
      const mat = new THREE.MeshBasicMaterial({
        color: colorHex,
        wireframe: true,
        transparent: true,
        opacity,
      });
      return new THREE.Mesh(geom, mat);
    };

    const torusMesh = makeMesh(new THREE.TorusGeometry(1.6, 0.38, 8, 24), 0x6366f1);
    const octaMesh = makeMesh(new THREE.OctahedronGeometry(1.3, 1), 0xf472b6);
    const sphereMesh = makeMesh(new THREE.SphereGeometry(0.9, 12, 12), 0x22d3ee);
    const icosa = makeMesh(new THREE.IcosahedronGeometry(0.8, 0), 0x34d399, 0.2);

    torusMesh.position.set(-4.5, 2.2, -2);
    octaMesh.position.set(4.5, -2.5, -3);
    sphereMesh.position.set(2.5, 3.2, -4);
    icosa.position.set(-3, -2.5, -3);

    scene.add(torusMesh, octaMesh, sphereMesh, icosa);

    // --- Mouse Interaction ---
    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // --- Animation ---
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      scene.rotation.y = mouse.x * 0.18;
      scene.rotation.x = -mouse.y * 0.18;

      torusMesh.rotation.x = t * 0.15;
      torusMesh.rotation.y = t * 0.1;
      torusMesh.position.y = 2.2 + Math.sin(t * 0.5) * 0.25;

      octaMesh.rotation.x = -t * 0.12;
      octaMesh.rotation.y = t * 0.18;
      octaMesh.position.y = -2.5 + Math.cos(t * 0.6) * 0.3;

      sphereMesh.rotation.y = -t * 0.07;
      sphereMesh.position.y = 3.2 + Math.sin(t * 0.4) * 0.18;

      icosa.rotation.x = t * 0.2;
      icosa.rotation.z = -t * 0.15;
      icosa.position.y = -2.5 + Math.cos(t * 0.45) * 0.22;

      starParticles.rotation.y = t * 0.018;
      starParticles.rotation.x = t * 0.008;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default CanvasBackground;

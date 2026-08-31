import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ThreeSceneMode, ColorTheme } from '../types';
import { Database, Brain, Rocket, Sparkles, Activity, Layers, Briefcase, GraduationCap } from 'lucide-react';

interface ThreeBackgroundProps {
  currentMode: ThreeSceneMode;
  onModeChange?: (mode: ThreeSceneMode) => void;
  colorTheme: ColorTheme;
  onThemeChange?: (theme: ColorTheme) => void;
}

const themeColors: Record<ColorTheme, { primary: number; secondary: number; accent: number; bgGlow: string; hex: string; name: string }> = {
  cyan: { primary: 0x06b6d4, secondary: 0x3b82f6, accent: 0x10b981, bgGlow: 'rgba(6, 182, 212, 0.07)', hex: '#06b6d4', name: 'Cyber Cyan' },
  emerald: { primary: 0x10b981, secondary: 0x06b6d4, accent: 0x34d399, bgGlow: 'rgba(16, 185, 129, 0.07)', hex: '#10b981', name: 'Neural Emerald' },
  violet: { primary: 0x8b5cf6, secondary: 0x06b6d4, accent: 0xec4899, bgGlow: 'rgba(139, 92, 246, 0.07)', hex: '#8b5cf6', name: 'Quantum Violet' },
  amber: { primary: 0xf59e0b, secondary: 0xef4444, accent: 0x10b981, bgGlow: 'rgba(245, 158, 11, 0.07)', hex: '#f59e0b', name: 'Solar Amber' }
};

interface SynapsePulse {
  from: THREE.Vector3;
  to: THREE.Vector3;
  progress: number;
  speed: number;
  color: THREE.Color;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({
  currentMode,
  onModeChange,
  colorTheme,
  onThemeChange
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [controlsOpen, setControlsOpen] = useState(false);

  // State ref for animation loop
  const stateRef = useRef({
    mode: currentMode,
    theme: colorTheme,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0
  });

  useEffect(() => {
    stateRef.current.mode = currentMode;
    stateRef.current.theme = colorTheme;
  }, [currentMode, colorTheme]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    // Setup Three.js Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.0016);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 85);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(themeColors[colorTheme].primary, 2.2, 250);
    pointLight1.position.set(50, 40, 60);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(themeColors[colorTheme].secondary, 1.8, 250);
    pointLight2.position.set(-50, -40, 40);
    scene.add(pointLight2);

    // =========================================================================
    // 1. AI & MACHINE LEARNING (AI&ML) LAYER: 3D Deep Neural Network Architecture
    // =========================================================================
    const aimlGroup = new THREE.Group();

    // 4 Layers: Input (4), Hidden1 (7), Hidden2 (6), Output (3)
    const layerConfigs = [
      { count: 4, x: -38, radius: 1.1, color: 0x38bdf8 },
      { count: 7, x: -12, radius: 1.3, color: 0x818cf8 },
      { count: 6, x: 14, radius: 1.3, color: 0xc084fc },
      { count: 3, x: 38, radius: 1.5, color: 0x34d399 }
    ];

    const neuronNodes: { pos: THREE.Vector3; layer: number; mesh: THREE.Mesh }[] = [];
    const neuronGeo = new THREE.SphereGeometry(1, 20, 20);

    layerConfigs.forEach((layer, layerIdx) => {
      const spacing = 7.5;
      const yOffset = -((layer.count - 1) * spacing) / 2;

      for (let i = 0; i < layer.count; i++) {
        const y = yOffset + i * spacing + (Math.sin(layerIdx * 1.5 + i) * 1.2);
        const z = (Math.cos(i * 1.2) * 6) - 4;
        const pos = new THREE.Vector3(layer.x, y, z);

        const neuronMat = new THREE.MeshStandardMaterial({
          color: layer.color,
          emissive: layer.color,
          emissiveIntensity: 0.6,
          roughness: 0.2,
          metalness: 0.8
        });

        const mesh = new THREE.Mesh(neuronGeo, neuronMat);
        mesh.position.copy(pos);
        mesh.scale.setScalar(layer.radius);
        aimlGroup.add(mesh);
        neuronNodes.push({ pos, layer: layerIdx, mesh });
      }
    });

    // Synaptic Weight Connections between Adjacent Layers
    const synapseLines: { start: THREE.Vector3; end: THREE.Vector3; weight: number }[] = [];
    for (let l = 0; l < layerConfigs.length - 1; l++) {
      const fromNodes = neuronNodes.filter((n) => n.layer === l);
      const toNodes = neuronNodes.filter((n) => n.layer === l + 1);

      fromNodes.forEach((from) => {
        toNodes.forEach((to) => {
          synapseLines.push({
            start: from.pos,
            end: to.pos,
            weight: 0.2 + Math.random() * 0.8
          });
        });
      });
    }

    const synapseCount = synapseLines.length;
    const synapsePositions = new Float32Array(synapseCount * 6);
    const synapseColors = new Float32Array(synapseCount * 6);

    synapseLines.forEach((syn, idx) => {
      synapsePositions[idx * 6] = syn.start.x;
      synapsePositions[idx * 6 + 1] = syn.start.y;
      synapsePositions[idx * 6 + 2] = syn.start.z;

      synapsePositions[idx * 6 + 3] = syn.end.x;
      synapsePositions[idx * 6 + 4] = syn.end.y;
      synapsePositions[idx * 6 + 5] = syn.end.z;

      const c = new THREE.Color(0x38bdf8).lerp(new THREE.Color(0x818cf8), syn.weight);
      const alpha = syn.weight * 0.35;
      synapseColors[idx * 6] = c.r * alpha;
      synapseColors[idx * 6 + 1] = c.g * alpha;
      synapseColors[idx * 6 + 2] = c.b * alpha;
      synapseColors[idx * 6 + 3] = c.r * alpha;
      synapseColors[idx * 6 + 4] = c.g * alpha;
      synapseColors[idx * 6 + 5] = c.b * alpha;
    });

    const synapseGeo = new THREE.BufferGeometry();
    synapseGeo.setAttribute('position', new THREE.BufferAttribute(synapsePositions, 3));
    synapseGeo.setAttribute('color', new THREE.BufferAttribute(synapseColors, 3));

    const synapseMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const synapseMesh = new THREE.LineSegments(synapseGeo, synapseMat);
    aimlGroup.add(synapseMesh);

    // Active Synaptic Signal Pulses (Forward & Backpropagation flow)
    const pulses: SynapsePulse[] = [];
    const maxPulses = 28;
    for (let i = 0; i < maxPulses; i++) {
      const syn = synapseLines[Math.floor(Math.random() * synapseLines.length)];
      pulses.push({
        from: syn.start,
        to: syn.end,
        progress: Math.random(),
        speed: 0.4 + Math.random() * 0.6,
        color: new THREE.Color(Math.random() > 0.5 ? 0x22d3ee : 0xa855f7)
      });
    }

    const pulseGeo = new THREE.BufferGeometry();
    const pulsePosArray = new Float32Array(maxPulses * 3);
    pulseGeo.setAttribute('position', new THREE.BufferAttribute(pulsePosArray, 3));
    const pulseMat = new THREE.PointsMaterial({
      size: 2.2,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const pulseParticles = new THREE.Points(pulseGeo, pulseMat);
    aimlGroup.add(pulseParticles);

    // Attention Weight Orbital Halo
    const haloGeo = new THREE.TorusGeometry(18, 0.25, 16, 80);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    haloMesh.rotation.x = Math.PI / 2.5;
    aimlGroup.add(haloMesh);

    mainGroup.add(aimlGroup);

    // =========================================================================
    // 2. AI & DATA SCIENCE (AI&DS) LAYER: Feature Space Clusters & Decision Manifold
    // =========================================================================
    const aidsGroup = new THREE.Group();

    // 3 Distinct Data Clusters with Centroids (Classification & Clustering)
    const clusterCenters = [
      { pos: new THREE.Vector3(-26, 12, 10), color: 0x06b6d4, label: 'Cluster 1: Neural NLP' },
      { pos: new THREE.Vector3(26, -10, 5), color: 0x10b981, label: 'Cluster 2: Predictive NFV' },
      { pos: new THREE.Vector3(0, -18, -15), color: 0xa855f7, label: 'Cluster 3: Big Data' }
    ];

    const dataPointsCount = 280;
    const dataPointsPos = new Float32Array(dataPointsCount * 3);
    const dataPointsColors = new Float32Array(dataPointsCount * 3);
    const dataPointsMeta: { clusterIdx: number; offset: THREE.Vector3; phase: number }[] = [];

    for (let i = 0; i < dataPointsCount; i++) {
      const clusterIdx = i % 3;
      const center = clusterCenters[clusterIdx];
      const offset = new THREE.Vector3(
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 20
      );

      dataPointsPos[i * 3] = center.pos.x + offset.x;
      dataPointsPos[i * 3 + 1] = center.pos.y + offset.y;
      dataPointsPos[i * 3 + 2] = center.pos.z + offset.z;

      const c = new THREE.Color(center.color);
      dataPointsColors[i * 3] = c.r;
      dataPointsColors[i * 3 + 1] = c.g;
      dataPointsColors[i * 3 + 2] = c.b;

      dataPointsMeta.push({
        clusterIdx,
        offset,
        phase: Math.random() * Math.PI * 2
      });
    }

    const dataPointsGeo = new THREE.BufferGeometry();
    dataPointsGeo.setAttribute('position', new THREE.BufferAttribute(dataPointsPos, 3));
    dataPointsGeo.setAttribute('color', new THREE.BufferAttribute(dataPointsColors, 3));

    const dataPointsMat = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const dataPointsMesh = new THREE.Points(dataPointsGeo, dataPointsMat);
    aidsGroup.add(dataPointsMesh);

    // Decision Boundary / Data Surface Grid (Manifold)
    const gridCols = 32;
    const gridRows = 24;
    const gridGeo = new THREE.PlaneGeometry(80, 55, gridCols, gridRows);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    gridMesh.position.set(0, -5, -25);
    gridMesh.rotation.x = -Math.PI / 3;
    aidsGroup.add(gridMesh);

    // Data Centroid Spheres
    clusterCenters.forEach((c) => {
      const cGeo = new THREE.SphereGeometry(1.6, 16, 16);
      const cMat = new THREE.MeshStandardMaterial({
        color: c.color,
        emissive: c.color,
        emissiveIntensity: 0.8,
        wireframe: true
      });
      const cMesh = new THREE.Mesh(cGeo, cMat);
      cMesh.position.copy(c.pos);
      aidsGroup.add(cMesh);
    });

    mainGroup.add(aidsGroup);

    // =========================================================================
    // 3. SKILL TRAINING & PLACEMENT ECOSYSTEM: Ascension Pathways & Career Conduits
    // =========================================================================
    const placementGroup = new THREE.Group();

    // 4 Ascending Career Pathways (Rising Conduits from Foundation -> Placement Hubs)
    const pathwayTracks = [
      { x: -32, z: -10, color: 0x38bdf8, name: 'AI & Machine Learning Track' },
      { x: -10, z: 8, color: 0x34d399, name: 'Data Engineering & Cloud Track' },
      { x: 12, z: -6, color: 0x818cf8, name: 'DevOps & Systems Track' },
      { x: 34, z: 12, color: 0xf59e0b, name: 'Industry Product Engineering' }
    ];

    // Vertical Ascension Conduits
    pathwayTracks.forEach((track) => {
      // Cylinder Conduit Wireframe
      const cylGeo = new THREE.CylinderGeometry(1.8, 1.8, 65, 12, 1, true);
      const cylMat = new THREE.MeshBasicMaterial({
        color: track.color,
        wireframe: true,
        transparent: true,
        opacity: 0.18
      });
      const cyl = new THREE.Mesh(cylGeo, cylMat);
      cyl.position.set(track.x, 0, track.z);
      placementGroup.add(cyl);

      // Top Milestone Placement Rings (2,000+ Placed Milestone Rings)
      const ringGeo = new THREE.TorusGeometry(3.2, 0.15, 8, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: track.color,
        transparent: true,
        opacity: 0.7
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(track.x, 30, track.z);
      ring.rotation.x = Math.PI / 2;
      placementGroup.add(ring);
    });

    // Soaring Student Upskilling & Career Launch Particles
    const launchCount = 180;
    const launchPos = new Float32Array(launchCount * 3);
    const launchColors = new Float32Array(launchCount * 3);
    const launchMeta: { trackIdx: number; speed: number; y: number; drift: number }[] = [];

    for (let i = 0; i < launchCount; i++) {
      const trackIdx = i % pathwayTracks.length;
      const track = pathwayTracks[trackIdx];
      const y = -35 + Math.random() * 70;
      const x = track.x + (Math.random() - 0.5) * 3.5;
      const z = track.z + (Math.random() - 0.5) * 3.5;

      launchPos[i * 3] = x;
      launchPos[i * 3 + 1] = y;
      launchPos[i * 3 + 2] = z;

      const c = new THREE.Color(track.color);
      launchColors[i * 3] = c.r;
      launchColors[i * 3 + 1] = c.g;
      launchColors[i * 3 + 2] = c.b;

      launchMeta.push({
        trackIdx,
        speed: 0.25 + Math.random() * 0.45,
        y,
        drift: (Math.random() - 0.5) * 0.05
      });
    }

    const launchGeo = new THREE.BufferGeometry();
    launchGeo.setAttribute('position', new THREE.BufferAttribute(launchPos, 3));
    launchGeo.setAttribute('color', new THREE.BufferAttribute(launchColors, 3));

    const launchMat = new THREE.PointsMaterial({
      size: 2.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const launchMesh = new THREE.Points(launchGeo, launchMat);
    placementGroup.add(launchMesh);

    // Glowing Placement Apex Horizon Line
    const horizonGeo = new THREE.BufferGeometry();
    const horizonPos = new Float32Array([
      -50, 30, 0,
      50, 30, 0
    ]);
    horizonGeo.setAttribute('position', new THREE.BufferAttribute(horizonPos, 3));
    const horizonMat = new THREE.LineBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.4
    });
    const horizonLine = new THREE.Line(horizonGeo, horizonMat);
    placementGroup.add(horizonLine);

    mainGroup.add(placementGroup);

    // =========================================================================
    // Mouse Parallax & Window Resize Listeners
    // =========================================================================
    const handleMouseMove = (e: MouseEvent) => {
      const halfX = window.innerWidth / 2;
      const halfY = window.innerHeight / 2;
      stateRef.current.targetMouseX = (e.clientX - halfX) * 0.035;
      stateRef.current.targetMouseY = (e.clientY - halfY) * 0.035;
    };

    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // =========================================================================
    // MAIN 60FPS RENDER & SIMULATION LOOP
    // =========================================================================
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const delta = Math.min((currentTime - lastTime) * 0.001, 0.1);
      lastTime = currentTime;

      // Smooth mouse lerp
      stateRef.current.mouseX += (stateRef.current.targetMouseX - stateRef.current.mouseX) * 0.05;
      stateRef.current.mouseY += (stateRef.current.targetMouseY - stateRef.current.mouseY) * 0.05;

      const currentThemeInfo = themeColors[stateRef.current.theme];

      // Update dynamic light colors
      pointLight1.color.setHex(currentThemeInfo.primary);
      pointLight2.color.setHex(currentThemeInfo.secondary);

      const mode = stateRef.current.mode;

      // Dynamic Layer Visibilities based on Selected Mode
      aimlGroup.visible = mode === 'hybrid' || mode === 'aiml';
      aidsGroup.visible = mode === 'hybrid' || mode === 'aids';
      placementGroup.visible = mode === 'hybrid' || mode === 'placement';

      // 1. AI&ML Animation: Pulse propagation across deep neural network
      if (aimlGroup.visible) {
        aimlGroup.rotation.y = Math.sin(currentTime * 0.0004) * 0.12 + stateRef.current.mouseX * 0.015;
        aimlGroup.rotation.x = Math.cos(currentTime * 0.0003) * 0.08 + stateRef.current.mouseY * 0.015;

        // Animate Pulses along synaptic weights
        const posArray = pulseGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < maxPulses; i++) {
          const p = pulses[i];
          p.progress += delta * p.speed;
          if (p.progress >= 1.0) {
            p.progress = 0;
            // Pick a new synapse randomly
            const newSyn = synapseLines[Math.floor(Math.random() * synapseLines.length)];
            p.from = newSyn.start;
            p.to = newSyn.end;
          }

          const currentX = p.from.x + (p.to.x - p.from.x) * p.progress;
          const currentY = p.from.y + (p.to.y - p.from.y) * p.progress;
          const currentZ = p.from.z + (p.to.z - p.from.z) * p.progress;

          posArray[i * 3] = currentX;
          posArray[i * 3 + 1] = currentY;
          posArray[i * 3 + 2] = currentZ;
        }
        pulseGeo.attributes.position.needsUpdate = true;

        // Slowly rotate attention orbital halo
        haloMesh.rotation.z += delta * 0.2;
      }

      // 2. AI&DS Animation: Data cluster oscillations & decision manifold ripple
      if (aidsGroup.visible) {
        aidsGroup.rotation.y = -Math.sin(currentTime * 0.0005) * 0.15 - stateRef.current.mouseX * 0.01;

        // Wave manifold ripple
        const gridPositions = gridGeo.attributes.position.array as Float32Array;
        const timeVal = currentTime * 0.0018;
        for (let i = 0; i < gridPositions.length; i += 3) {
          const u = gridPositions[i];
          const v = gridPositions[i + 1];
          gridPositions[i + 2] = Math.sin(u * 0.1 + timeVal) * 2.2 + Math.cos(v * 0.12 + timeVal) * 1.8;
        }
        gridGeo.attributes.position.needsUpdate = true;

        // Subtle cluster points oscillation
        const ptsPos = dataPointsGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < dataPointsCount; i++) {
          const meta = dataPointsMeta[i];
          const center = clusterCenters[meta.clusterIdx];
          ptsPos[i * 3 + 1] = center.pos.y + meta.offset.y + Math.sin(timeVal + meta.phase) * 1.2;
        }
        dataPointsGeo.attributes.position.needsUpdate = true;
      }

      // 3. Placement Animation: Rising student talent particles & milestone pulses
      if (placementGroup.visible) {
        const launchPosArr = launchGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < launchCount; i++) {
          const meta = launchMeta[i];
          meta.y += delta * 18 * meta.speed;
          if (meta.y > 35) {
            meta.y = -35;
          }
          launchPosArr[i * 3 + 1] = meta.y;
          launchPosArr[i * 3] += meta.drift;
        }
        launchGeo.attributes.position.needsUpdate = true;

        placementGroup.rotation.y = stateRef.current.mouseX * 0.012;
      }

      // Camera parallax tilt
      camera.position.x += (stateRef.current.mouseX * 0.5 - camera.position.x) * 0.04;
      camera.position.y += (-stateRef.current.mouseY * 0.5 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Atmospheric dynamic gradient overlay */}
      <div
        className="absolute inset-0 transition-colors duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 25%, ${themeColors[colorTheme].bgGlow} 0%, rgba(2, 6, 23, 0.45) 55%, rgba(2, 6, 23, 0.95) 100%)`
        }}
      />
    </div>
  );
};

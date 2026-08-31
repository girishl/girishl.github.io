import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroRobotics3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let animId: number;
    let lastTime = performance.now();

    // Scene & Camera
    const scene = new THREE.Scene();
    const width = mount.clientWidth || 1200;
    const height = mount.clientHeight || 700;

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    camera.position.set(24, 10, 48);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.innerHTML = '';
    mount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x06b6d4, 3, 100);
    cyanPointLight.position.set(16, 22, 24);
    scene.add(cyanPointLight);

    const bluePointLight = new THREE.PointLight(0x3b82f6, 2.5, 100);
    bluePointLight.position.set(-18, -12, 20);
    scene.add(bluePointLight);

    const emeraldPointLight = new THREE.PointLight(0x10b981, 3, 40);
    scene.add(emeraldPointLight);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // =========================================================================
    // 1. ROBOTIC BASE & PEDESTAL
    // =========================================================================
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.85,
      roughness: 0.25
    });

    const cyanGlowMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.7,
      metalness: 0.4,
      roughness: 0.2
    });

    const darkAccentMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.3
    });

    // Base platform
    const baseGeo = new THREE.CylinderGeometry(6.2, 7.2, 1.8, 32);
    const baseMesh = new THREE.Mesh(baseGeo, metalMat);
    baseMesh.position.set(8, -14, 0);
    rootGroup.add(baseMesh);

    // Base glow ring
    const baseRingGeo = new THREE.TorusGeometry(6.5, 0.14, 16, 64);
    const baseRing = new THREE.Mesh(baseRingGeo, cyanGlowMat);
    baseRing.rotation.x = Math.PI / 2;
    baseRing.position.set(8, -13.1, 0);
    rootGroup.add(baseRing);

    // Turret turntable
    const turretGeo = new THREE.CylinderGeometry(4.4, 5.0, 2.4, 32);
    const turretMesh = new THREE.Mesh(turretGeo, darkAccentMat);
    turretMesh.position.set(8, -12, 0);
    rootGroup.add(turretMesh);

    // Turret joint rotation pivot
    const shoulderPivot = new THREE.Group();
    shoulderPivot.position.set(8, -10.8, 0);
    rootGroup.add(shoulderPivot);

    // Shoulder Sphere Hub
    const shoulderHubGeo = new THREE.SphereGeometry(2.4, 24, 24);
    const shoulderHub = new THREE.Mesh(shoulderHubGeo, metalMat);
    shoulderPivot.add(shoulderHub);

    // Shoulder Ring
    const shoulderRingGeo = new THREE.TorusGeometry(2.6, 0.12, 16, 32);
    const shoulderRing = new THREE.Mesh(shoulderRingGeo, cyanGlowMat);
    shoulderRing.rotation.y = Math.PI / 2;
    shoulderPivot.add(shoulderRing);

    // =========================================================================
    // 2. ROBOTIC UPPER ARM (BICEP LINK)
    // =========================================================================
    const arm1Group = new THREE.Group();
    shoulderPivot.add(arm1Group);

    // Main bicep strut
    const bicepGeo = new THREE.CylinderGeometry(1.3, 1.7, 12.5, 20);
    const bicepMesh = new THREE.Mesh(bicepGeo, metalMat);
    bicepMesh.position.set(0, 6.2, 0);
    arm1Group.add(bicepMesh);

    // Piston cylinder
    const pistonGeo = new THREE.CylinderGeometry(0.45, 0.45, 10.5, 16);
    const pistonMesh = new THREE.Mesh(pistonGeo, cyanGlowMat);
    pistonMesh.position.set(1.4, 6.2, 0);
    arm1Group.add(pistonMesh);

    // Elbow Joint Pivot
    const elbowPivot = new THREE.Group();
    elbowPivot.position.set(0, 12.5, 0);
    arm1Group.add(elbowPivot);

    const elbowHubGeo = new THREE.SphereGeometry(1.9, 20, 20);
    const elbowHub = new THREE.Mesh(elbowHubGeo, darkAccentMat);
    elbowPivot.add(elbowHub);

    // =========================================================================
    // 3. ROBOTIC FOREARM & WRIST
    // =========================================================================
    const arm2Group = new THREE.Group();
    elbowPivot.add(arm2Group);

    const forearmGeo = new THREE.CylinderGeometry(0.95, 1.3, 10.5, 16);
    const forearmMesh = new THREE.Mesh(forearmGeo, metalMat);
    forearmMesh.position.set(0, 5.2, 0);
    arm2Group.add(forearmMesh);

    // Wrist joint pivot
    const wristPivot = new THREE.Group();
    wristPivot.position.set(0, 10.5, 0);
    arm2Group.add(wristPivot);

    const wristHubGeo = new THREE.SphereGeometry(1.3, 16, 16);
    const wristHub = new THREE.Mesh(wristHubGeo, cyanGlowMat);
    wristPivot.add(wristHub);

    // =========================================================================
    // 4. ROBOTIC END-EFFECTOR / AI SMART SCANNING GRIPPER
    // =========================================================================
    const toolGroup = new THREE.Group();
    wristPivot.add(toolGroup);

    // Tool mounting plate
    const toolPlateGeo = new THREE.CylinderGeometry(1.6, 1.3, 1.2, 16);
    const toolPlate = new THREE.Mesh(toolPlateGeo, darkAccentMat);
    toolPlate.position.set(0, 0.8, 0);
    toolGroup.add(toolPlate);

    // Two Articulated Gripper Fingers
    const fingerGeo = new THREE.BoxGeometry(0.38, 2.5, 0.65);
    const finger1 = new THREE.Mesh(fingerGeo, metalMat);
    finger1.position.set(-0.85, 2.1, 0);
    toolGroup.add(finger1);

    const finger2 = new THREE.Mesh(fingerGeo, metalMat);
    finger2.position.set(0.85, 2.1, 0);
    toolGroup.add(finger2);

    // Precision AI Laser Emitter Lens
    const lensGeo = new THREE.SphereGeometry(0.42, 16, 16);
    const lensMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x10b981,
      emissiveIntensity: 1.4
    });
    const laserLens = new THREE.Mesh(lensGeo, lensMat);
    laserLens.position.set(0, 1.8, 0);
    toolGroup.add(laserLens);

    // Scanning Laser Beam (Frustum Cone)
    const beamGeo = new THREE.ConeGeometry(4.2, 14, 24, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide
    });
    const laserBeam = new THREE.Mesh(beamGeo, beamMat);
    laserBeam.position.set(0, 8.8, 0);
    laserBeam.rotation.x = Math.PI;
    toolGroup.add(laserBeam);

    // =========================================================================
    // 5. AI ROBOTICS COMPUTER VISION HUD & TARGETING BOUNDING BOXES
    // =========================================================================
    const hudGroup = new THREE.Group();
    scene.add(hudGroup);

    // Spatial LiDAR Radar Grid Circle
    const radarGeo = new THREE.RingGeometry(8, 22, 48, 4);
    const radarMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.14,
      side: THREE.DoubleSide
    });
    const radarMesh = new THREE.Mesh(radarGeo, radarMat);
    radarMesh.rotation.x = Math.PI / 2;
    radarMesh.position.set(8, -13.8, 0);
    hudGroup.add(radarMesh);

    // Rotating Radar Sweep Line
    const sweepGeo = new THREE.BufferGeometry();
    sweepGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([8, -13.7, 0, 30, -13.7, 0]), 3));
    const sweepMat = new THREE.LineBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.8
    });
    const sweepLine = new THREE.Line(sweepGeo, sweepMat);
    hudGroup.add(sweepLine);

    // 3D Object Detection Bounding Wireframe Boxes
    const targetBoxes: THREE.LineSegments[] = [];
    const boxPositions = [
      new THREE.Vector3(-12, 6, 4),
      new THREE.Vector3(14, -4, 8),
      new THREE.Vector3(-6, -6, 12),
      new THREE.Vector3(18, 9, -5)
    ];

    boxPositions.forEach((pos) => {
      const boxGeo = new THREE.BoxGeometry(3.6, 3.6, 3.6);
      const edges = new THREE.EdgesGeometry(boxGeo);
      const boxLine = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.4
        })
      );
      boxLine.position.copy(pos);
      hudGroup.add(boxLine);
      targetBoxes.push(boxLine);
    });

    // Holographic Cybernetic Robotic Hex Grid
    const hexGroup = new THREE.Group();
    const hexGeo = new THREE.CircleGeometry(1.6, 6);
    const hexEdges = new THREE.EdgesGeometry(hexGeo);
    const hexMat = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.35
    });

    for (let i = 0; i < 6; i++) {
      const hex = new THREE.LineSegments(hexEdges, hexMat);
      const angle = (i / 6) * Math.PI * 2;
      hex.position.set(Math.cos(angle) * 16 + 4, Math.sin(angle) * 10, -8);
      hexGroup.add(hex);
    }
    hudGroup.add(hexGroup);

    // Floating Robotic Sensor Spark Particles
    const sparkCount = 75;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(sparkCount * 3);
    const sparkColors = new Float32Array(sparkCount * 3);

    for (let i = 0; i < sparkCount; i++) {
      sparkPos[i * 3] = (Math.random() - 0.5) * 45;
      sparkPos[i * 3 + 1] = (Math.random() - 0.5) * 32;
      sparkPos[i * 3 + 2] = (Math.random() - 0.5) * 28;

      const c = new THREE.Color(Math.random() > 0.5 ? 0x06b6d4 : 0x10b981);
      sparkColors[i * 3] = c.r;
      sparkColors[i * 3 + 1] = c.g;
      sparkColors[i * 3 + 2] = c.b;
    }

    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
    sparkGeo.setAttribute('color', new THREE.BufferAttribute(sparkColors, 3));

    const sparkMat = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const sparkMesh = new THREE.Points(sparkGeo, sparkMat);
    scene.add(sparkMesh);

    // Mouse Tracking Ref
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x;
      mouse.targetY = y;
    };

    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', onResize);

    // =========================================================================
    // KINEMATICS & RENDER ANIMATION LOOP
    // =========================================================================
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const now = performance.now();
      const delta = (now - lastTime) * 0.001;
      lastTime = now;

      // Mouse smoothing
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      const t = now * 0.0014;

      // 1. Robotic Arm Kinematics & Tracking
      turretMesh.rotation.y = Math.sin(t * 0.8) * 0.45 + mouse.x * 0.55;
      shoulderPivot.rotation.y = turretMesh.rotation.y;

      shoulderPivot.rotation.z = Math.sin(t * 0.6) * 0.22 - mouse.y * 0.3;
      shoulderPivot.rotation.x = Math.cos(t * 0.5) * 0.12;

      elbowPivot.rotation.z = -0.45 + Math.cos(t * 0.9) * 0.32 + mouse.y * 0.2;
      elbowPivot.rotation.y = Math.sin(t * 0.4) * 0.18;

      wristPivot.rotation.z = Math.sin(t * 1.2) * 0.35;
      wristPivot.rotation.y = t * 1.4;

      const fingerSpread = 0.85 + Math.sin(t * 2.0) * 0.22;
      finger1.position.x = -fingerSpread;
      finger2.position.x = fingerSpread;

      laserLens.scale.setScalar(1.0 + Math.sin(t * 6.0) * 0.2);
      beamMat.opacity = 0.15 + Math.sin(t * 4.0) * 0.08;

      const laserWorldPos = new THREE.Vector3();
      laserLens.getWorldPosition(laserWorldPos);
      emeraldPointLight.position.copy(laserWorldPos);

      // 2. HUD & LiDAR Radar Rotation
      sweepLine.rotation.y = t * 2.4;

      targetBoxes.forEach((box, i) => {
        box.rotation.x += delta * (0.25 + i * 0.08);
        box.rotation.y += delta * (0.35 + i * 0.08);
        box.position.y += Math.sin(t * 1.5 + i) * 0.01;
      });

      hexGroup.rotation.z += delta * 0.12;
      sparkMesh.rotation.y += delta * 0.04;

      camera.position.x = 24 + mouse.x * 3.5;
      camera.position.y = 10 + mouse.y * 2.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
      {/* 3D WebGL Canvas Viewport */}
      <div ref={mountRef} className="w-full h-full opacity-65 sm:opacity-85" />

      {/* Ambient gradient vignette so all hero text remains ultra crisp & legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-slate-950/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50 pointer-events-none" />
    </div>
  );
};

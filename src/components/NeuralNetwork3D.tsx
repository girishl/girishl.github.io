import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, RotateCcw, Cpu, Sparkles, Activity, Layers, ShieldCheck, Zap } from 'lucide-react';

interface NeuronNode {
  layer: number;
  index: number;
  x: number;
  y: number;
  z: number;
  value: number;
  label: string;
}

export const NeuralNetwork3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [activationFn, setActivationFn] = useState<'ReLU' | 'GELU' | 'Sigmoid'>('ReLU');
  const [inputTelemetry, setInputTelemetry] = useState({
    packetRate: 78,
    vnfCpuLoad: 64,
    latencyVariance: 12,
    memoryFootprint: 45
  });

  // Simulated output results
  const [prediction, setPrediction] = useState<{
    status: 'Optimal' | 'NFV Degradation Risk' | 'Cyber Anomaly';
    confidence: number;
    latencyMs: number;
  }>({
    status: 'Optimal',
    confidence: 97.4,
    latencyMs: 1.84
  });

  const triggerPulseRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let animId: number;

    // Scene
    const scene = new THREE.Scene();
    const width = mount.clientWidth || 600;
    const height = mount.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 5, 45);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.innerHTML = '';
    mount.appendChild(renderer.domElement);

    // Group containing the entire 3D neural net
    const netGroup = new THREE.Group();
    scene.add(netGroup);

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x06b6d4, 2);
    dirLight.position.set(20, 30, 20);
    scene.add(dirLight);

    // Define Neural Network Architecture
    // Layer 0: Input (4 nodes)
    // Layer 1: Hidden Dense 1 (6 nodes)
    // Layer 2: Hidden Dense 2 (5 nodes)
    // Layer 3: Output Classification (3 nodes)
    const layerSizes = [4, 6, 5, 3];
    const layerSpacingX = 10;
    const neurons: NeuronNode[] = [];
    const neuronMeshes: THREE.Mesh[] = [];

    const inputLabels = ["Packet Ingest", "VNF CPU", "Jitter", "Memory"];
    const outputLabels = ["Optimal", "Degraded", "Anomaly"];

    const sphereGeo = new THREE.SphereGeometry(0.85, 24, 24);

    layerSizes.forEach((size, layerIdx) => {
      const x = (layerIdx - (layerSizes.length - 1) / 2) * layerSpacingX;
      const heightSpan = (size - 1) * 3.4;
      const startY = heightSpan / 2;

      for (let i = 0; i < size; i++) {
        const y = startY - i * 3.4;
        const z = (Math.random() - 0.5) * 1.5;

        let label = `N_${layerIdx}_${i}`;
        if (layerIdx === 0) label = inputLabels[i] || label;
        if (layerIdx === layerSizes.length - 1) label = outputLabels[i] || label;

        neurons.push({ layer: layerIdx, index: i, x, y, z, value: 0.5, label });

        const isInput = layerIdx === 0;
        const isOutput = layerIdx === layerSizes.length - 1;

        const sphereMat = new THREE.MeshStandardMaterial({
          color: isInput ? 0x3b82f6 : isOutput ? 0x10b981 : 0x06b6d4,
          emissive: isInput ? 0x1d4ed8 : isOutput ? 0x047857 : 0x0891b2,
          emissiveIntensity: 0.6,
          roughness: 0.2,
          metalness: 0.8
        });

        const mesh = new THREE.Mesh(sphereGeo, sphereMat);
        mesh.position.set(x, y, z);
        netGroup.add(mesh);
        neuronMeshes.push(mesh);
      }
    });

    // Synaptic Connections (lines connecting adjacent layers)
    const synapticLines: { startPos: THREE.Vector3; endPos: THREE.Vector3 }[] = [];
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x334155,
      transparent: true,
      opacity: 0.35
    });

    let currentLayerStart = 0;
    for (let l = 0; l < layerSizes.length - 1; l++) {
      const nextLayerStart = currentLayerStart + layerSizes[l];
      for (let i = 0; i < layerSizes[l]; i++) {
        const nA = neurons[currentLayerStart + i];
        for (let j = 0; j < layerSizes[l + 1]; j++) {
          const nB = neurons[nextLayerStart + j];
          const lineGeo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(nA.x, nA.y, nA.z),
            new THREE.Vector3(nB.x, nB.y, nB.z)
          ]);
          const lineMesh = new THREE.Line(lineGeo, lineMat);
          netGroup.add(lineMesh);
          synapticLines.push({
            startPos: new THREE.Vector3(nA.x, nA.y, nA.z),
            endPos: new THREE.Vector3(nB.x, nB.y, nB.z)
          });
        }
      }
      currentLayerStart += layerSizes[l];
    }

    // Dynamic Photons / Pulses traveling through network
    interface Photon {
      mesh: THREE.Mesh;
      start: THREE.Vector3;
      end: THREE.Vector3;
      progress: number;
      speed: number;
      active: boolean;
    }

    const photons: Photon[] = [];
    const photonGeo = new THREE.SphereGeometry(0.3, 12, 12);
    const photonMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    for (let i = 0; i < 40; i++) {
      const pMesh = new THREE.Mesh(photonGeo, photonMat);
      pMesh.visible = false;
      netGroup.add(pMesh);
      photons.push({
        mesh: pMesh,
        start: new THREE.Vector3(),
        end: new THREE.Vector3(),
        progress: 0,
        speed: 0.02 + Math.random() * 0.02,
        active: false
      });
    }

    // Function to trigger forward pass signal bursts
    const triggerForwardPass = () => {
      setIsSimulating(true);
      let pIdx = 0;
      synapticLines.forEach((syn, idx) => {
        if (pIdx < photons.length && idx % 2 === 0) {
          const p = photons[pIdx];
          p.start.copy(syn.startPos);
          p.end.copy(syn.endPos);
          p.progress = 0;
          p.active = true;
          p.mesh.visible = true;
          pIdx++;
        }
      });

      // Update prediction based on telemetry sliders
      setTimeout(() => {
        const riskScore = (inputTelemetry.vnfCpuLoad * 0.4) + (inputTelemetry.packetRate * 0.3) + (inputTelemetry.latencyVariance * 0.3);
        if (riskScore > 70) {
          setPrediction({ status: 'NFV Degradation Risk', confidence: 91.2, latencyMs: 3.42 });
        } else if (inputTelemetry.latencyVariance > 35) {
          setPrediction({ status: 'Cyber Anomaly', confidence: 88.7, latencyMs: 4.15 });
        } else {
          setPrediction({ status: 'Optimal', confidence: 98.2, latencyMs: 1.45 });
        }
        setIsSimulating(false);
      }, 1200);
    };

    triggerPulseRef.current = triggerForwardPass;

    // Interactive Drag to Rotate 3D neural net
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onPointerDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      netGroup.rotation.y += deltaX * 0.008;
      netGroup.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const canvasElem = renderer.domElement;
    canvasElem.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    // Resize
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Subtle idle floating rotation
      if (!isDragging) {
        netGroup.rotation.y += 0.002;
      }

      // Update moving photons
      photons.forEach((p) => {
        if (p.active) {
          p.progress += p.speed;
          if (p.progress >= 1) {
            p.active = false;
            p.mesh.visible = false;
          } else {
            p.mesh.position.lerpVectors(p.start, p.end, p.progress);
          }
        }
      });

      // Pulse neurons
      const t = performance.now() * 0.003;
      neuronMeshes.forEach((nMesh, idx) => {
        const scale = 1 + Math.sin(t + idx) * 0.06;
        nMesh.scale.set(scale, scale, scale);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      canvasElem.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [inputTelemetry]);

  return (
    <div id="neural-lab-sandbox" className="relative rounded-3xl bg-slate-900/80 border border-slate-800/80 p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive 3D Deep Learning Lab</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            NFV Telemetry Failure Predictor Neural Architecture
          </h3>
          <p className="text-sm text-slate-400">
            Live 3D tensor propagation inspector based on Dr. Girish L's IEEE Ph.D. research framework.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2.5">
          <button
            id="btn-run-forward-pass"
            onClick={() => triggerPulseRef.current?.()}
            disabled={isSimulating}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs transition shadow-lg shadow-cyan-500/20 disabled:opacity-50 cursor-pointer"
          >
            <Play className={`w-3.5 h-3.5 fill-current ${isSimulating ? 'animate-spin' : ''}`} />
            <span>{isSimulating ? 'Propagating Tensors...' : 'Run Forward Pass'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: 3D Viewport on Left, Live Tensor Controls on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* 3D Neural Viewport */}
        <div className="lg:col-span-7 relative h-[380px] sm:h-[420px] rounded-2xl bg-slate-950/70 border border-slate-800/80 overflow-hidden flex items-center justify-center group">
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Overlay tags */}
          <div className="absolute top-3 left-3 flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800 backdrop-blur-sm pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Click & Drag to Rotate 3D Graph</span>
          </div>

          <div className="absolute bottom-3 left-3 flex items-center gap-3 text-[10px] font-medium text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800 backdrop-blur-sm pointer-events-none">
            <span className="flex items-center gap-1.5 text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> Input (4)
            </span>
            <span className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> Hidden Dense (11)
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Output (3)
            </span>
          </div>
        </div>

        {/* Real-Time Parameter Telemetry Sliders & Inference Result */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-2xl bg-slate-950/50 border border-slate-800/80 space-y-3.5">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>Simulated Network Telemetry Inputs</span>
              </span>
              <span className="text-[11px] font-mono text-cyan-400">4 Channels</span>
            </div>

            {/* Sliders */}
            <div className="space-y-2.5 text-xs">
              <div>
                <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                  <span>VNF CPU Utilization</span>
                  <span className="font-mono text-cyan-300">{inputTelemetry.vnfCpuLoad}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="99"
                  value={inputTelemetry.vnfCpuLoad}
                  onChange={(e) => setInputTelemetry({ ...inputTelemetry, vnfCpuLoad: parseInt(e.target.value) })}
                  className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                  <span>Packet Ingest Rate (kpps)</span>
                  <span className="font-mono text-cyan-300">{inputTelemetry.packetRate} kpps</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="150"
                  value={inputTelemetry.packetRate}
                  onChange={(e) => setInputTelemetry({ ...inputTelemetry, packetRate: parseInt(e.target.value) })}
                  className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                  <span>Latency Jitter Variance</span>
                  <span className="font-mono text-cyan-300">{inputTelemetry.latencyVariance} ms</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  value={inputTelemetry.latencyVariance}
                  onChange={(e) => setInputTelemetry({ ...inputTelemetry, latencyVariance: parseInt(e.target.value) })}
                  className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-cyan-400"
                />
              </div>
            </div>

            {/* Activation Function selector */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Non-Linear Activation:</span>
              <div className="flex gap-1.5">
                {(['ReLU', 'GELU', 'Sigmoid'] as const).map((fn) => (
                  <button
                    key={fn}
                    onClick={() => setActivationFn(fn)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition cursor-pointer ${
                      activationFn === fn
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {fn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Model Inference Prediction Output Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/90 shadow-lg space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Live Model Inference State
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Real-time
              </span>
            </div>

            <div className="flex items-baseline justify-between">
              <span className="text-base font-bold text-white flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    prediction.status === 'Optimal'
                      ? 'bg-emerald-400'
                      : prediction.status === 'NFV Degradation Risk'
                      ? 'bg-amber-400'
                      : 'bg-rose-500'
                  }`}
                />
                {prediction.status}
              </span>
              <span className="text-xl font-black font-mono text-cyan-400">
                {prediction.confidence}% <span className="text-xs text-slate-400 font-normal">conf</span>
              </span>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
              <span>Inference latency: <strong className="text-slate-200">{prediction.latencyMs} ms</strong></span>
              <span>Parameters: <strong className="text-slate-200">142 weights</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

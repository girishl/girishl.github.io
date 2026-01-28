let scene, camera, renderer, objects = [];
let scrollY = 0;
let mouseX = 0;
let mouseY = 0;

function initThreeJS() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f0c29);
    scene.fog = new THREE.Fog(0x0f0c29, 100, 1000);

    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowShadowMap;
    container.appendChild(renderer.domElement);

    createLights();
    createObjects();
    setupEventListeners();
    animate();
}

function createLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x6c5ce7, 0.8);
    directionalLight.position.set(10, 10, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.far = 50;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x7d6ff9, 0.6, 100);
    pointLight1.position.set(-5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x302b63, 0.4, 100);
    pointLight2.position.set(5, -5, 5);
    scene.add(pointLight2);
}

function createObjects() {
    const materials = [
        new THREE.MeshPhongMaterial({
            color: 0x6c5ce7,
            emissive: 0x6c5ce7,
            emissiveIntensity: 0.2,
            shininess: 100
        }),
        new THREE.MeshPhongMaterial({
            color: 0x7d6ff9,
            emissive: 0x7d6ff9,
            emissiveIntensity: 0.2,
            shininess: 100
        }),
        new THREE.MeshPhongMaterial({
            color: 0x302b63,
            emissive: 0x302b63,
            emissiveIntensity: 0.15,
            shininess: 100
        })
    ];

    const geometries = [
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.IcosahedronGeometry(0.7, 4),
        new THREE.OctahedronGeometry(0.8, 0),
        new THREE.TetrahedronGeometry(1, 0)
    ];

    const positions = [
        { x: -3, y: 2, z: 0 },
        { x: 2, y: -1.5, z: -1 },
        { x: 0, y: 0, z: -3 },
        { x: 3, y: 1.5, z: -2 }
    ];

    positions.forEach((pos, index) => {
        const geometry = geometries[index % geometries.length];
        const material = materials[index % materials.length];
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.set(pos.x, pos.y, pos.z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        mesh.userData = {
            basePosition: { ...pos },
            rotationSpeed: Math.random() * 0.005 + 0.002,
            floatSpeed: Math.random() * 0.002 + 0.0005,
            floatRange: Math.random() * 0.5 + 0.3,
            time: Math.random() * Math.PI * 2
        };

        scene.add(mesh);
        objects.push(mesh);
    });
}

function setupEventListeners() {
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
    });

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    const container = document.getElementById('canvas-container');
    if (!container || !renderer) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

function animate() {
    requestAnimationFrame(animate);

    objects.forEach(obj => {
        obj.userData.time += obj.userData.floatSpeed;

        obj.rotation.x += obj.userData.rotationSpeed;
        obj.rotation.y += obj.userData.rotationSpeed;
        obj.rotation.z += obj.userData.rotationSpeed * 0.5;

        const floatOffset = Math.sin(obj.userData.time) * obj.userData.floatRange;
        obj.position.y = obj.userData.basePosition.y + floatOffset;

        const speed = 0.3;
        obj.position.x += (obj.userData.basePosition.x - obj.position.x) * 0.02;
        obj.position.z += (obj.userData.basePosition.z - obj.position.z) * 0.02;
    });

    const targetCameraX = mouseX * 0.5;
    const targetCameraY = mouseY * 0.5;

    camera.position.x += (targetCameraX - camera.position.x) * 0.05;
    camera.position.y += (targetCameraY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);

    const scrollFactor = scrollY * 0.0005;
    camera.position.z = 5 + scrollFactor;

    renderer.render(scene, camera);
}

function showWebGLError() {
    const container = document.getElementById('canvas-container');
    if (container) {
        container.innerHTML = `
            <div style="
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #6c5ce7;
                text-align: center;
                padding: 2rem;
            ">
                <div>
                    <p style="margin-bottom: 1rem;">WebGL is not supported on your device.</p>
                    <p style="font-size: 0.9rem; color: #909090;">Please use a modern browser or device with WebGL support.</p>
                </div>
            </div>
        `;
    }
}

if (window.WebGLRenderingContext) {
    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            try {
                initThreeJS();
            } catch (error) {
                console.error('Three.js initialization error:', error);
                showWebGLError();
            }
        }, 100);
    });
} else {
    window.addEventListener('DOMContentLoaded', showWebGLError);
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.style.color = '#e0e0e0');
            link.style.color = '#6c5ce7';
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInLeft 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .project-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

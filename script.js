let scene, camera, renderer, particles;

function initThreeJS() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const count = 400;
    const positionArray = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
        positionArray[i] = (Math.random() - 0.5) * 100;
        positionArray[i + 1] = (Math.random() - 0.5) * 100;
        positionArray[i + 2] = (Math.random() - 0.5) * 100;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));

    const material = new THREE.PointsMaterial({
        size: 0.4,
        color: 0x0088cc,
        sRGBColorSpace: true,
        transparent: true,
        opacity: 0.5
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    window.addEventListener('resize', onWindowResize);

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    if (particles) {
        particles.rotation.x += 0.00005;
        particles.rotation.y += 0.00008;
    }

    renderer.render(scene, camera);
}

function onWindowResize() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    observeElements();
});

function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
}

window.addEventListener('resize', () => {
    onWindowResize();
});

//external file created by omega7379, waiting for proper implementation
import * as THREE from "https://cdn.skypack.dev/three@0.132.0";

const POSITION_MULITPLIER = 30;
const DISTANCE_FROM_CAMERA = 20;

const PARTICLE_COLOR = "grey";

let renderer, camera, scene, mousePosition, effect;

let initialPosition = new THREE.Vector3();

let primitives = [];
let particles = [];

// Window callbacks
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove() {
    mousePosition.x = -(event.clientX / window.innerWidth) * 2;
    mousePosition.y = (event.clientY / window.innerHeight) * 2;
    mousePosition.z = 1;
}

// 3js-specific handlers
function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight, false);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    scene = new THREE.Scene();

    mousePosition = new THREE.Vector3()

    window.addEventListener("resize", onWindowResize, true);
    document.addEventListener("mousemove", onMouseMove, false);
    const canvas = document.getElementById("canvas-container");
    canvas.appendChild(renderer.domElement);

    onWindowResize()

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    let pointLight = new THREE.PointLight(0xffffff, 1, 0);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);
}

function animate() {
    requestAnimationFrame(animate);

    primitives.forEach(p => {
        // p.lookAt(mousePosition);
        p.position.set(
            initialPosition.x - (mousePosition.x * 30),
            initialPosition.y - (mousePosition.y * 30),
            initialPosition.z
        );
    });
    particles.forEach(p => {
        p.rotateX(-0.0005);
    })

    renderer.render(scene, camera);
}

// Scene creation helpers
function createBox(x, y, z, color, opacity, threeScene) {
    let material = createToonMaterial(color, opacity);

    let geometry = new THREE.BoxGeometry(x, y, z);

    let box = new THREE.Mesh(geometry, material);

    threeScene.add(box);

    return box;
}

function createToonMaterial(color, opacity) {
    const colors = new Uint8Array(8);
    for (let c = 0; c <= colors.length; c++) {
        colors[c] = (c / colors.length) * 256;
    }

    const gradientMap = new THREE.DataTexture(colors, colors.length, 1, THREE.LuminanceFormat);
    gradientMap.minFilter = THREE.NearestFilter;
    gradientMap.magFilter = THREE.NearestFilter;
    gradientMap.generateMipmaps = false;

    return new THREE.MeshToonMaterial({ color: color, opacity: opacity, gradientMap: gradientMap, depthTest: true, depthWrite: true });
}

function createParticleCloud(threeScene) {
    let material = new THREE.PointsMaterial({
        color: PARTICLE_COLOR,
        opacity: 0.5,
        size: 5
    });

    let geometry = new THREE.BufferGeometry();
    let points = [];
    for (let i = 0; i < 1000; i++) {
        points.push(new THREE.Vector3(
            (Math.random() * 800) - 400,
            (Math.random() * 800) - 400,
            (Math.random() * 800) - 400
        ));
    }

    geometry.setFromPoints(points);

    let pointCloud = new THREE.Points(geometry, material);
    threeScene.add(pointCloud);

    return pointCloud;
}

function createMainBackground() {
    let particleParent = createBox(0, 0, 0, PARTICLE_COLOR, 0.0, scene);
    // Auto-rotate particle parent
    particles.push(particleParent);

    let particleCloud = createParticleCloud(scene);
    particleCloud.position.set(0, 0, -DISTANCE_FROM_CAMERA);
    // Rotate towards user mouse
    primitives.push(particleCloud);

    particleParent.add(particleCloud);
}

init();

createMainBackground();

animate();

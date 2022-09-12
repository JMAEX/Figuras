//scenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
scene.fog = new THREE.Fog(0xffffff, 5, 15);


//fondo
var loader = new THREE.TextureLoader();
loader.load("../Img/fondo.jpg", function (texture) {
    scene.background = texture;
});


//camara
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight,);


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometria

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load("/Img/textura1.jpg");

const geometry = new THREE.ConeGeometry(5, 5, 20);

const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
scene.add(line);

const material = new THREE.MeshMatcapMaterial();
material.color.set('#fff')
material.matcap = matcap;
material.flashading = true;
const cone = new THREE.Mesh(geometry, material);
scene.add(cone);

camera.position.z = 10;

//animación
function animate() {
    requestAnimationFrame(animate);
    line.rotation.y += 0.01;
    line.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    cone.rotation.x += 0.01;
    renderer.render(scene, camera);
}
animate();
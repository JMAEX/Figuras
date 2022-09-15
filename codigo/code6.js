//scenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);
/* scene.fog = new THREE.Fog(0xffffff, 5, 7); */

//fondo
var loader = new THREE.TextureLoader();
loader.load("../Img/fondo.jpg", function (texture) {
	scene.background = texture;
});


//camara
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight);


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometria

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load("/Img/textura1.jpg");

const verticesOfCube = [
	-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
	-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1,
];

const indicesOfFaces = [
	2, 1, 0, 0, 3, 2,
	0, 4, 7, 7, 3, 0,
	0, 1, 5, 5, 4, 0,
	1, 2, 6, 6, 5, 1,
	2, 3, 7, 7, 6, 2,
	4, 5, 6, 6, 7, 4
];

const geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 6, 2);

const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
/* scene.add(line); */

const material = new THREE.MeshStandardMaterial();
material.metalness = 0.4;
material.roughness = 0.5;
/* material.flashading = true; */
const directionalLight = new THREE.DirectionalLight(0xfff, 10);
const PolyhedronGeometry = new THREE.Mesh(geometry, material);
scene.add(directionalLight)
scene.add(PolyhedronGeometry);

camera.position.z = 15;

//animación
function animate() {
	requestAnimationFrame(animate);
	line.rotation.y += 0.01;
	line.rotation.x += 0.01;
	PolyhedronGeometry.rotation.y += 0.01;
	PolyhedronGeometry.rotation.x += 0.01;
	renderer.render(scene, camera);
}
animate();
//scenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
scene.fog = new THREE.Fog(0xffffff, 9, 20);

//fondo
var loader = new THREE.TextureLoader();
loader.load("../Img/fondo.jpg", function (texture) {
    scene.background = texture;
});


//camara
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight,);

camera.position.z = 13;

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometria 1

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load("/Img/textura1.jpg");

const geometry = new THREE.BoxGeometry(3, 3, 3);

const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
scene.add(line);

const material = new THREE.MeshMatcapMaterial();
material.color.set('#fff')
material.matcap = matcap;
material.flashading = true;
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

cube.position.x = 8;
line.position.x = 8;

//geometria 2



const geometry2 = new THREE.CapsuleGeometry(3, 3, 10, 20);

const edges2 = new THREE.EdgesGeometry(geometry2);
const line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0xffffff }));
scene.add(line2);

const material2 = new THREE.MeshMatcapMaterial();
material2.color.set('#fff')
material2.matcap = matcap;
material2.flashading = true;
const capsule = new THREE.Mesh(geometry2, material2);
scene.add(capsule);

capsule.position.x = -8;
line2.position.x = -8;
//geometria 3



const geometry3 = new THREE.TorusGeometry( 2, 1, 10, 20 );

const edges3 = new THREE.EdgesGeometry(geometry3);
const line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0xffffff }));
scene.add(line3);

const material3 = new THREE.MeshNormalMaterial();
material3.flashading = true;
const torus = new THREE.Mesh(geometry3, material3);
scene.add(torus);

torus.position.y = +6;
line3.position.y = +6;
//geometria 4



const geometry4 = new THREE.CylinderGeometry( 2, 2, 5, 30 );

const edges4 = new THREE.EdgesGeometry(geometry4);
const line4 = new THREE.LineSegments(edges4, new THREE.LineBasicMaterial({ color: 0xffffff }));
scene.add(line4);

const material4 = new THREE.MeshMatcapMaterial();
material4.color.set('#fff')
material4.matcap = matcap;
material4.flashading = true;
const Cylinder = new THREE.Mesh(geometry4, material4);
scene.add(Cylinder);

Cylinder.position.y = -3;
line4.position.y = -3;

//---------------------------------DragControls

const controls = new THREE.DragControls( [Cylinder,torus,capsule,cube,line,line2,line3,line4], camera, renderer.domElement );

/* const dControls = new THREE.DragControls([cube, camera, renderer.domElement]);
dControls.deactivate();
dControls.activate();
    dControls.addEventListener("hoveron",function(event){
        event.object.material.wireframe = true;
        event.object.scale.y *=4;
    });
    dControls.addEventListener("hoveroff", function(event){
        event.object.material.wireframe = false;
        event.object.scale.y /=4;
    }) */

//animación
function animate() {
    requestAnimationFrame(animate);
    line.rotation.y -= 0.005;
    line.rotation.x -= 0.005;
    cube.rotation.y -= 0.005;
    cube.rotation.x -= 0.005;

    line2.rotation.y += 0.01;
    line2.rotation.x += 0.01;
    capsule.rotation.y += 0.01;
    capsule.rotation.x += 0.01;

    line3.rotation.y += 0.02;
    line3.rotation.x += 0.02;
    torus.rotation.y += 0.02;
    torus.rotation.x += 0.02;

    line4.rotation.y -= 0.01;
    line4.rotation.x -= 0.01;
    Cylinder.rotation.y -= 0.01;
    Cylinder.rotation.x -= 0.01;
    renderer.render(scene, camera);
}
animate();
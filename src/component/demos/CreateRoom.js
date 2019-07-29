import * as THREE from "three";

export default function creatRoom(scene) {
	// create the ground plane
	var planeGeometry = new THREE.PlaneGeometry(40, 20);
	var planeMaterial = new THREE.MeshLambertMaterial({
		color: 0xffffff,
		side: THREE.DoubleSide
	});

	var plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.receiveShadow = true;

	// rotate and position the plane
	plane.rotation.x = -0.5 * Math.PI;
	plane.position.x = 15;
	plane.position.y = -10;
	plane.position.z = 0;

	// add the plane to the scene
	scene.add(plane);

	// create the long wall plane
	var wallGeometry1 = new THREE.PlaneGeometry(40, 5);
	var wallMaterial1 = new THREE.MeshLambertMaterial({
		color: 0xffffff,
		side: THREE.DoubleSide
	});

	var wall1 = new THREE.Mesh(wallGeometry1, wallMaterial1);
	wall1.receiveShadow = true;

	wall1.position.x = 15;
	wall1.position.y = -7.5;
	wall1.position.z = 10;
	scene.add(wall1);

	var wall2 = new THREE.Mesh(wallGeometry1, wallMaterial1);
	wall2.receiveShadow = true;

	wall2.position.x = 15;
	wall2.position.y = -7.5;
	wall2.position.z = -10;
	scene.add(wall2);

	// create the short wall plane
	var wallGeometry2 = new THREE.PlaneGeometry(20, 5);
	var wallMaterial2 = new THREE.MeshLambertMaterial({
		color: 0xffffff,
		side: THREE.DoubleSide
	});

	var wall3 = new THREE.Mesh(wallGeometry2, wallMaterial2);
	wall3.receiveShadow = true;

	wall3.rotation.y = -0.5 * Math.PI;
	wall3.position.x = 35;
	wall3.position.y = -7.5;
	wall3.position.z = 0;
	scene.add(wall3);

	var wall4 = new THREE.Mesh(wallGeometry2, wallMaterial2);
	wall4.receiveShadow = true;

	wall4.rotation.y = -0.5 * Math.PI;
	wall4.position.x = -5;
	wall4.position.y = -7.5;
	wall4.position.z = -0;
	scene.add(wall4);

	// create the title plane
	var titleGeometry = new THREE.PlaneGeometry(4, 1);
	var titleMaterial = new THREE.MeshLambertMaterial({
		color: 0x66cd00,
		side: THREE.DoubleSide
	});

	var title = new THREE.Mesh(titleGeometry, titleMaterial);
	title.receiveShadow = true;

	title.rotation.y = -0.5 * Math.PI;
	title.position.x = -5.1;
	title.position.y = -5.5;
	title.position.z = 0;
	scene.add(title);
}

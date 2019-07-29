<template>
	<div />
</template>
<script>
import * as THREE from "three";
import debug from "debug";

import creatRoom from "./createRoom";

const log = debug("iot-3ddemo:log");
var camera, scene, renderer;

function render() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}

function createMesh(geom) {
	// assign two materials
	//            var meshMaterial = new THREE.MeshLambertMaterial({color: 0xff5555});
	//            var meshMaterial = new THREE.MeshNormalMaterial();
	var meshMaterial = new THREE.MeshPhongMaterial({
		specular: 0xffffff,
		color: 0xeeffff,
		shininess: 100,
		metal: true
	});
	//            meshMaterial.side=THREE.DoubleSide;
	// create a multimaterial
	var plane = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

	return plane;
}

function init(el) {
	// create a scene, that will hold all our elements such as objects, cameras and lights.
	scene = new THREE.Scene();

	// create a camera, which defines where we're looking at.
	camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	camera.position.x = -40;
	camera.position.y = 30;
	camera.position.z = 20;
	camera.lookAt(scene.position);

	// create a render and set the size
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(new THREE.Color(0xeeeeee, 1.0));
	renderer.setSize(window.innerWidth, window.innerHeight);

	// create a room
	creatRoom(scene);

	// add spotlight for the shadows
	var spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(-40, 20, 0);
	spotLight.castShadow = true;
	scene.add(spotLight);
	spotLight.intensity = 0.7;

	// add spotlight for the shadows
	var spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(-40, -20, 0);
	spotLight.castShadow = true;
	scene.add(spotLight);
	spotLight.intensity = 0.3;

	// add spotlight for the shadows
	var spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(-20, 60, 0);
	spotLight.castShadow = true;
	scene.add(spotLight);
	spotLight.intensity = 0.5;

	var options = {
		size: 1,
		height: 0,
		weight: "normal",
		font: "helvetiker",
		bevelThickness: 0,
		bevelSize: 0,
		bevelSegments: 1,
		bevelEnabled: true,
		curveSegments: 1,
		steps: 1
	};
	// var text1 = createMesh(new THREE.TextGeometry("D304", options));
	// text1.position.x = -5.2;
	// text1.position.z = -1.6;
	// text1.position.y = -6;
	// text1.rotation.y = -0.5 * Math.PI;
	// scene.add(text1);

	el.appendChild(renderer.domElement);

	render();
}
import axios from "axios";
export default {
	name: "ThreeDDemo",
	async mounted() {
		const siteList = (await axios.post(
			"/icbc/cocoa/json/com.icbc.iotp.escort.service.IEscortRSManageService/1.0/qrySiteList",
			[{ struId: "0100103230" }]
		)).data;
		log(siteList);
		init(this.$el);
	}
};
</script>

window.addEventListener('DOMContentLoaded', function() {
	var canvas = document.getElementById('renderCanvas');
	var engine = new BABYLON.Engine(canvas, true);

	var createScene = function() {
		BABYLON.OBJFileLoader.OPTIMIZE_WITH_UV = true;

		// create a basic BJS Scene object
		var scene = new BABYLON.Scene(engine);

		scene.clearColor = new BABYLON.Color3(1, 1, 1);

		// create a FreeCamera, and set its position to (x:0, y:5, z:-10)
		var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0.5, 0, -8), scene);

		// target the camera to scene origin
		camera.setTarget(BABYLON.Vector3.Zero());

		// attach the camera to the canvas
		camera.attachControl(canvas, false);

		camera.fov = 0.6;

		loadModels(scene);

		// return the created scene
		return scene;
	};

	var scene = createScene();

	engine.runRenderLoop(function() {
		scene.render();
	});

	window.addEventListener('resize', function() {
		engine.resize();
	});
});

function deg2rad(deg) {
	return deg * (Math.PI / 180);
}

function loadModels(scene, callback) {
	BABYLON.SceneLoader.ImportMesh(null, 'models/', 'iphone.obj', scene, function(meshes) {
		var iphone = meshes[0];
		iphone.position = new BABYLON.Vector3(3, -7, 20);
		iphone.scaling = new BABYLON.Vector3(0.8, 0.8, 0.8);
		iphone.rotation.y = deg2rad(10);

		var iphoneLight = new BABYLON.PointLight('Omni0', new BABYLON.Vector3(-10, 6, 10), scene);
		iphoneLight.includedOnlyMeshes.push(iphone);
		iphoneLight.diffuse = new BABYLON.Color3(1, 1, 1);
		iphoneLight.specular = new BABYLON.Color3(1, 1, 1);
		iphoneLight.intensity = 1.5;
		iphoneLight.range = 300;

		var iphone2 = iphone.clone('iphone2');
		iphone2.position = new BABYLON.Vector3(-1, 4.5, 13);
		iphone2.scaling = new BABYLON.Vector3(0.9, 0.9, 0.9);
		iphone2.rotation.y = deg2rad(-30);

		var iphone3 = iphone.clone('iphone2');
		iphone3.position = new BABYLON.Vector3(9, -13.5, 20);
		iphone3.scaling = new BABYLON.Vector3(0.8, 0.8, 0.8);
		iphone3.rotation.y = deg2rad(10);

		var iphone2Light = new BABYLON.PointLight('Omni3', new BABYLON.Vector3(-1, 10, -5), scene);
		iphone2Light.includedOnlyMeshes.push(iphone2);
		iphone2Light.diffuse = new BABYLON.Color3(1, 1, 1);
		iphone2Light.specular = new BABYLON.Color3(1, 1, 1);
		iphone2Light.intensity = 3;
		iphone2Light.range = 300;

		var iphone3Light = new BABYLON.PointLight('Omni4', new BABYLON.Vector3(-1, 10, 0), scene);
		iphone3Light.includedOnlyMeshes.push(iphone3);
		iphone3Light.diffuse = new BABYLON.Color3(1, 1, 1);
		iphone3Light.specular = new BABYLON.Color3(1, 1, 1);
		iphone3Light.intensity = 0.8;
		iphone3Light.range = 300;
	});

	BABYLON.SceneLoader.ImportMesh(null, 'models/', 'monitor_viskura.obj', scene, function(meshes) {
		var display = meshes[0];
		display.position = new BABYLON.Vector3(10, 0, 20);
		//display.scaling = new BABYLON.Vector3(0.9, 0.9, 0.9);
		display.rotation.y = deg2rad(-140);

		var displayLight = new BABYLON.PointLight('Omni1', new BABYLON.Vector3(-18, 20, 10), scene);
		displayLight.includedOnlyMeshes.push(display);
		displayLight.diffuse = new BABYLON.Color3(1, 1, 1);
		displayLight.specular = new BABYLON.Color3(1, 1, 1);
		displayLight.intensity = 1.6;
		displayLight.range = 200;
	});

	BABYLON.SceneLoader.ImportMesh(null, 'models/', 'wifog.obj', scene, function(meshes) {
		var wifog = meshes[0];
		wifog.position = new BABYLON.Vector3(12, 4, 15);
		wifog.scaling = new BABYLON.Vector3(0.35, 0.35, 0.35);
		wifog.rotation.y = deg2rad(-10);

		var wifogLight = new BABYLON.PointLight('Omni2', new BABYLON.Vector3(-10, 10, 10), scene);
		wifogLight.includedOnlyMeshes.push(wifog);
		wifogLight.diffuse = new BABYLON.Color3(1, 1, 1);
		wifogLight.specular = new BABYLON.Color3(1, 1, 1);
		wifogLight.intensity = 3;
		wifogLight.range = 200;
	});
}

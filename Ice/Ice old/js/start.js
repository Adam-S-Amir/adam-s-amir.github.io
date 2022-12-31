// game objects
var camera = null;
var light = null;
var player = null;
var ending = null;
var cones = [];

// game essentials
var canvas = null;
var engine = null;
var scene = null;

// game variables
var rotation = 0;
var alive = false;

var start = {
	init: async function() {
		canvas = await document.getElementById("renderCanvas");
		engine = await new BABYLON.Engine(canvas, true);
		scene = await new BABYLON.Scene(engine, {antialiasing: false});
		// scene
		var gravityVector = new BABYLON.Vector3(0,-9, 0);
		scene.enablePhysics(gravityVector);
	},
	create_scene: function() {
		scene.clearColor = new BABYLON.Color4(0,0,0,1);
		// camera
		camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 2, 10), scene);
		camera.setTarget(BABYLON.Vector3.Zero());
		camera.rotation.y = -3.14;
		camera.rotation.x = 0.3;
		camera.rotation.z = 0;
		camera.speed = 0;
		camera.maxZ = 120;

		// player
		if (true) {
			player = BABYLON.Mesh.CreateBox("player",0.5,scene);
			player.scaling = new BABYLON.Vector3(1, 0.16, 1);
			player.physicsImpostor = new BABYLON.PhysicsImpostor(player, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1.0, restitution: 1.0, friction: 0.5}, scene);
			player.position = new BABYLON.Vector3(0,0,0);
			decorations.decorate_player(player);
		}
		if (false) {
			player = BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene);
			player.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
			player.physicsImpostor = new BABYLON.PhysicsImpostor(player, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1.0, restitution: 1.0, friction: 0}, scene);
			player.position = new BABYLON.Vector3(0,0,0);
			decorations.decorate_player(player);
		}
		

		// light
	    light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
	    light.intensity = 1.0;

	    // starting platform
	    // maker.make_start(map.spawn[0],map.spawn[1],map.spawn[2]);

	}
}

var transitioning = true;

// game settings
const default_radius = 5;
const default_speed = 0.28;
const default_steer = 0.022;
const default_gravity = -9;
const physics_call_rate = 4; // higher = better performance. lower = better accuracy.

// player
var radius = default_radius;
var speed = default_speed;
var steer = default_steer;

var update = {
	interval: null,
	init: function() {
		if (settings.frameRate === "fixed") {
			this.interval = setInterval(this.loop, 1000/60);
		} else if (settings.frameRate === "vsync") {
			engine.runRenderLoop(this.loop);
		}
		window.addEventListener("resize", function () {engine.resize()});
	},
	set_fixed: function() {
		engine.stopRenderLoop(this.loop);
		this.interval = setInterval(this.loop, 1000/60);
	},
	set_vsync: function() {
		clearInterval(this.interval);
		engine.runRenderLoop(this.loop);
	},
	loop: function() {
		scene.render();
		update.new_frame();
		stats.update_fps();
	},
	new_frame: function() {
		if (alive) {
			if (!transitioning) {
				stats.score += 1;
				// render call
				this.player_move();
				map.render_update();
				map.section_update();
				// physics call
				if (stats.score % physics_call_rate == 0) {
					this.collision_check();
					map.physics_update();

				}
			}
		}
	},
	collision_check: function() {
		// if death
		if ((player.position.y < -20) || (player.position.y > 80)) {
			change_state.die();
			screen.set_dialog("Fell To Death", "#e04c4f");
		}

		// if hit cone
		for (var i=0;i<maker.cone_count;i++) {
			let cone = cones[i];
			if (this.are_touching(player, cone, 0.5)) {
				change_state.die();
				screen.set_dialog("Died by Cone", "#e04c4f");
				break;
			}
		}

		// if hit ending
		if (this.are_touching(player, ending, 1)) {
			change_state.win();
		}
	},
	player_move: function() {
		// steer
		var action = 0;
		if (controls.right) {action += 1};
		if (controls.left) {action -= 1};
		if (speed !== default_speed) {
			player.rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0,0,0),0);
		}
		rotation += action * steer;
		player.rotation.y = rotation;

		// move
		let vx = speed * Math.sin(rotation - 3.14);
		let vz = speed * Math.cos(rotation - 3.14);
		player.position.x += vx;
		player.position.z += vz;

		// light & camera
		camera.position.x = player.position.x + (radius * Math.sin(rotation));
		camera.position.z = player.position.z + (radius * Math.cos(rotation));
		camera.position.y = player.position.y + 2;
		camera.rotation.y = 3.14 + rotation;
		light.position = camera.position;
	},
	are_touching: function(a, b, radius) {
		let dz = a.position.z - b.position.z;
		if (Math.abs(dz) < radius) {
			let dx = a.position.x - b.position.x;
			if (Math.abs(dx) < radius) {
				let dy = a.position.y - b.position.y;
				if (Math.abs(dy) < radius) {
					return true;
				}
			}
		}
		return false;
	},
	set_gravity: function(val) {
		scene.gravity = new BABYLON.Vector3(0, val, 0);
		scene.getPhysicsEngine().setGravity(scene.gravity);
		player.applyGravity = true;
	}
}
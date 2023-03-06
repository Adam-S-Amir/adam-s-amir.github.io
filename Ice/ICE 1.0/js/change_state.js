var change_state = {
	die: function() {
		if (alive) {
			alive = false;
			$("#screen").css("visibility", "visible");
			$("#left").animate({opacity: 0.0}, 400);
			$("#right").animate({opacity: 0.0}, 400);
			audio.stop();
			if (settings.autoRestart === "on") {
				transitioning = true;
				setTimeout(function() {
					transitioning = false;
					$("#restart").click();
				}, 200);
			}
		}
	},
	spawn: function() {
		if (!alive) {
			alive = true;
			$("#screen").css("visibility", "hidden");
			$("#left").animate({opacity: 1.0}, 400);
			$("#right").animate({opacity: 1.0}, 400);
			// world
			player.rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0,0,0),0);
			player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0,0,0));
			player.physicsImpostor.setAngularVelocity(new BABYLON.Quaternion(0,1,0,0));
			player.position = new BABYLON.Vector3(map.spawn[0],map.spawn[1],map.spawn[2]);
			player.rotation = new BABYLON.Vector3(0,0,0);
			// play settings
			radius = default_radius;
			speed = default_speed;
			steer = default_steer;
			update.set_gravity(default_gravity);
			// current info
			rotation = 0;
			alive = true;
			// reset keys
			controls.left = false;
			controls.right = false;
			// map-specific reset
			map.reset();
			audio.play();
		}
	}, 
	win: function() {
		if ((alive) && (!transitioning)) {
			transitioning = true;
			alive = false;

			audio.stop();
			// clear this map
			cleanup.run();
			let this_map_id = settings.map_id;

			sync.get(this_map_id, function(data) {
				var map_exp = 0;
				if ((data !== undefined) && (data !== null)) {
					map_exp = Number(data);
				}
				// add one exp.
				sync.set(this_map_id, Number(map_exp) + 1, function() {
					// display UI
					screen.set_dialog("Map Complete", "#56e04c");
					$("#restart").html("NEXT LEVEL");
					$("#screen").css("visibility", "visible");
					$("#left").animate({opacity: 0.0}, 400);
					$("#right").animate({opacity: 0.0}, 400);
					transitioning = false;
				});
			});
		}
		
	}
}
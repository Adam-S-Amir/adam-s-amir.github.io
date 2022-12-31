var flyjump = {
	can_jump: false,
	last_frame: 0,
	init: function() {
		this.can_jump = false;
		this.last_frame = 0;
	},
	loop: function() {
		if (stats.score - this.last_frame > 35) {
			var can_jump = false;
			var grav = gravity;
			function limit(x) {
				if (x < -1) x = -1;
				if (x > 1) x = 1;
				return x * 0.5;
			}
			var pointToIntersect = new BABYLON.Vector3(player.position.x + limit(grav.x), player.position.y + limit(grav.y), player.position.z + limit(grav.z));
			var pointToIntersect2 = new BABYLON.Vector3(player.position.x + 2*limit(grav.x), player.position.y + 2*limit(grav.y), player.position.z + 2*limit(grav.z));

			for (let platform of jumppads) {
				if (platform.intersectsPoint(pointToIntersect)) {
					can_jump = true;
					break;
				}
				if (platform.intersectsPoint(pointToIntersect2)) {
					can_jump = true;
					break;
				}
			}
			
			this.can_jump = can_jump;

		}		
	},
	jump: function() {
		if (this.can_jump) {
			this.last_frame = stats.score;
			this.can_jump = false;

			player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0,0,0));

			var ImpulseVector = gravity; //new BABYLON.Vector3(0, 10, -10);
			ImpulseMagnitude = -1.4 * jumpHeight;
			ImpulseVector = ImpulseVector.scale(ImpulseMagnitude);
			ImpulseVector.x += 9 * jumpSpeed * Math.sin(rotation - 3.14);
			ImpulseVector.z += 9 * jumpSpeed * Math.cos(rotation - 3.14);
			player.physicsImpostor.applyImpulse(ImpulseVector, player.getAbsolutePosition());

		}
	}
}
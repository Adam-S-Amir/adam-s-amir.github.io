var cleanup = {
	run: function() {
		map = {
			render_update: function() {},
			physics_update: function() {},
			section_update: function() {}
		}
		ending.dispose();
		for (var i=0;i<maker.platform_count;i++) {
			let mesh_name = "P" + i;
			var mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		for (var i=0;i<maker.cone_count;i++) {
			let mesh_name = "C" + i;
			var mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		for (var i=0;i<maker.cylinder_count;i++) {
			let mesh_name = "Y" + i;
			var mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		cones = [];
		maker.platform_count = 0;
		maker.cone_count = 0;
		maker.cylinder_count = 0;
	}
}
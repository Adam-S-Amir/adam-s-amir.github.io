var screen = {
	init: function() {
		this.info_start();
		this.bind_buttons();
	},
	info_start: function() {
		$("#screen_map_name").text(map.title);
		var map_about = "Made by: " + map.maker;
		$("#screen_map_about").html(map_about);
		$("#restart").html("RESTART");
	},
	set_dialog: function(set_text, set_color) {
		$("#screen_dialog").text(set_text);
		$("#screen_dialog").css({color: set_color});
	},
	bind_buttons: function() {
		$("#restart").click(function() {
			if ((!alive) && (!transitioning)) {
				const text = $("#restart").html();
				if (text === "RESTART") {
					change_state.spawn();
				} else if (text === "NEXT LEVEL") {
					let maps = map_info[settings.cup_id];
					for (var m=0;m<maps.length;m++) {
						let map = maps[m];
						if (map.id == settings.map_id) {
							if (m+1 < maps.length) {
								popup.click_map(settings.cup_id, maps[m+1].id);
							} else {
								popup.click_map(settings.cup_id, maps[0].id);
							}
						}
					}
				}
			}
		});
		$("#backtomenu").click(function() {
			if ((!alive) && (!transitioning)) {
				transitioning = true;
				cleanup.run();
				$("#screen").css("visibility", "hidden");
				popup.show();
			}
		});
		$("#backtomenu2").click(function() {
			if (!transitioning) {
				alive = false;
				transitioning = true;
				cleanup.run();
				audio.stop();
				$("#screen").css("visibility", "hidden");
				popup.show();
			}
		})
	}
}



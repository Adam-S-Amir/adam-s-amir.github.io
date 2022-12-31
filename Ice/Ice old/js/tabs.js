var tabs = {
	items: ["notifs", "settings", "discord"],
	init: function() {
		for (var i=0;i<this.items.length;i++) {
			let item = this.items[i];
			this.handle_click(item);
		}

		this.settings_init();
		$(".close_tab").click(function() {
			let parent_id = $(this).parent().attr('id').split("_tab")[0];
			$("#"+parent_id+"_tab").hide();
			$("#"+parent_id+"_btn").css("background", "#333333");
			console.log(parent_id);
		});
	},
	handle_click: function(item) {
		$("#"+item+"_btn").click(function() {
			console.log("CLICK");
			tabs.show_item(item);
		});
	},
	show_item: function(item) {
		// all others
		$(".tab").hide();
		$(".btn").css("background", "#333333");
		// selected
		$("#"+item+"_tab").css("visibility", "visible");
		$("#"+item+"_tab").css("z-index", "35");
		$("#"+item+"_btn").css("background", "#4d4d4d");
		$("#"+item+"_tab").show();
	},
	item_init: function(item) {
		let save_id = item.save_id;
		let options = item.options;
		let standard = item.standard;
		let onclick = item.onclick;
		const reset_styling = function(curr_val) {
			console.log("curr_val", curr_val);
			for (var z=0;z<options.length;z++) {
				let option = options[z];
				let elem_id = "#" + save_id + "_" + option;
				if (curr_val === option) {
					$(elem_id).css("background", "var(--red_dark)");
				} else {
					$(elem_id).css("background", "black");
				}
			}
		}
		sync.get(save_id, function(curr_val) {
			if ((curr_val === null) || (curr_val === undefined)) {
				sync.set(save_id, standard, function() {});
				curr_val = standard;
			}
			settings[save_id] = curr_val;
			reset_styling(curr_val);
		});
		for (var z=0;z<options.length;z++) {
			let option = options[z];
			let elem_id = "#" + save_id + "_" + option;
			$(elem_id).click(function() {
				settings[save_id] = option;
				sync.set(save_id, option, function() {
					reset_styling(option);
					if (onclick !== null) onclick(option);
				});
			});
		}

	},
	settings_init: function() {
		var items = [
			{
				save_id: "musicEnabled",
				options: ["on", "off"],
				standard: "on",
				onclick: null
			},
			{
				save_id: "autoRestart",
				options: ["on", "off"],
				standard: "off",
				onclick: null
			},
			{
				save_id: "frameRate",
				options: ["fixed", "vsync"],
				standard: "vsync",
				onclick: function(option) {
					if (option === "fixed") {
						update.set_fixed();
					} else if (option === "vsync") {
						update.set_vsync();
					}
				}
			},
			{
				save_id: "platformTexture",
				options: ["bright", "dark"],
				standard: "bright",
				onclick: function(option) {
					if (option === "bright") {
			            decorations.materials.platform = decorations.bright;
			            maker.init();
			        } else if (option === "dark") {
			            decorations.materials.platform = decorations.dark;
			            maker.init();
			        }
				}
			}
		];

		for (var i=0;i<items.length;i++) {
			let item = items[i];
			this.item_init(item);
		}
	}
}
var popup = {
	already_clicked: false,
	show: function() {
		// sync.get
		this.hide();
		let cup_ids = Object.keys(map_info);
		for (var c=0;c<cup_ids.length;c++) {
			let cup_id = cup_ids[c];
			this.display_cup(cup_id);
		}
		setTimeout(function() {
			$("#popup").css("visibility", "visible");
			$("#menu").show();
			transitioning = false;
	        parent.postMessage("hide","*");
	        size.popup();
	        if ($("#inner_loading").length) {
	        	$("#inner_loading").remove();
	        }
		}, 500);
	},
	hide: function() {
		$("#cups").html('');
		$("#popup").css("visibility", "hidden");
		this.already_clicked = false;
	},
	display_cup: function(cup_id) {
		console.log("cup_id", cup_id);
		var cup_HTML = "<div class='cup' id='"+cup_id+"'><div id='"+cup_id+"_main_info'><div class='play_cup' id='"+cup_id+"_play'>PLAY</div></div><div class='more_info' id='"+cup_id+"_more_info'></div></div>"
		$("#cups").append(cup_HTML);
		// maps
		cup_info[cup_id].map_seq = [];
		let maps = map_info[cup_id];
		for (var m=0;m<maps.length;m++) {
			let map = maps[m];
			cup_info[cup_id].map_seq.push(map.id);
			var map_HTML = "<div class='map' id='"+cup_id+"_map_"+map.id+"'><h2 class='map_name'>"+map.name+"</h2></div>";
			$("#"+cup_id+"_more_info").append(map_HTML);
			popup.display_map(cup_id, map);
		}
		popup.post_cup(cup_id)
	},
	post_cup: function(cup_id) {
		var prepend_HTML = "<h1 class='cup_name'>"+cup_info[cup_id].name+"</h1>";
		$("#"+cup_id+"_play").click(function() {
			popup.click_cup(cup_id);
		});
		$("#"+cup_id+"_main_info").prepend(prepend_HTML);
		$("#"+cup_id).css({
			background: cup_info[cup_id].color
		});
	},
	display_map: function(cup_id, map) {
		let key = map.id;
		sync.get(key, function(data) {
			var map_exp = 0;
			if ((data !== null) && (data !== undefined)) {
				map_exp = Number(data);
			}
			if (deployment.is_chrome_ext) {
				let ls_num = localStorage.getItem(map.id);
				if (!isNaN(ls_num)) {
					map_exp = Number(map_exp) + Number(ls_num);
				}
			}
			popup.post_map(cup_id, map, map_exp);
		});
	},
	post_map: function(cup_id, map, map_exp) {
		var add_class = "done_z";
		var desc_text = "Click to Play";
		if (map_exp == 1) {
			add_class = "done_a";
			desc_text = "COMPLETED";
		} else if (map_exp == 2) {
			add_class = "done_b";
			desc_text = "COMPLETED TWICE";
		} else if (map_exp > 2) {
			add_class = "done_c";
			desc_text = "COMPLETED "+ map_exp +" TIMES";
		}
		if (map_exp >= 10) {
			add_class = "done_d";
		} else if (map_exp >= 100) {
			add_class = "done_e";
		}
		var diff_text = "DIFFICULTY: " + map.diff;
		var map_contents_HTML = "<div class='map_desc'>"+diff_text+" - "+desc_text+"</div>";
		var elem = $("#"+cup_id+"_map_"+map.id);
		elem.append(map_contents_HTML);
		elem.addClass(add_class);
		map.exp = map_exp;
		elem.click(function() {
			popup.click_map(cup_id, map.id);
		});
	},
	click_cup: function(cup_id) {
		if (!transitioning) {
			let maps = map_info[cup_id];
			var min_ind = -1;
			var min_val = 1000000;
			for (var m=0;m<maps.length;m++) {
				let map = maps[m];
				let exp = map.exp;
				if (exp < min_val) {
					min_val = exp;
					min_ind = m;
				}
			}
			let map_id = maps[min_ind].id;
			this.click_map(cup_id, map_id);
		}
	},
	click_map: function(cup_id, map_id) {
		if (!transitioning) {
			let map_seq = cup_info[cup_id].map_seq;
			var map_ind = map_seq.indexOf(map_id);
			if (!map_ind) map_ind = 0;
			// set info
			settings.map_id = map_id;
			settings.map_seq = map_seq;
			settings.map_ind = map_ind;
			settings.cup_id = cup_id;
			// redirect
			if (!this.already_clicked) {
				this.already_clicked = true;
				this.hide();
				$("#menu").hide();
				transitioning = true;
				boot.init();
			}
		}
		
	}
}

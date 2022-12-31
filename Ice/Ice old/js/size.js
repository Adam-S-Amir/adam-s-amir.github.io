var size = {
	popup: function() {
        if (deployment.is_chrome_ext) {
        	$("body").css("width", "340px");
        	$("body").css("height", "600px");
        } else {
        	$(".cup").css("width", "340px");
                $("body").css("width", "100%");
                $("body").css("height", "100%");
        }
	},
	ingame: function() {
		if (deployment.is_chrome_ext) {
        	$("body").css("width", "800px");
        	$("body").css("height", "600px");
        } else {
        	$("body").css("width", "100%");
        	$("body").css("height", "100%");
                engine.resize();
        }
	}
}
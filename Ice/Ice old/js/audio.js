var audio = {
	init: function() {
		// let song_src = "../assets/music/"+map.song+".mp3";
		const song_src = "assets/music/env2.mp3";
		this.load(song_src);
	},
	load: function(song) {
		var audio = $("#audio")[0];
	    $("#audiosource").attr("src", song);
	    audio.load();
	},
	play: function() {
		if (settings.musicEnabled === "on") {
		    var audio = $("#audio")[0];
	    	audio.oncanplaythrough = audio.play();
	    	audio.currentTime = 0;
	    }
	},
	stop: function() {
		if (settings.musicEnabled === "on") {
			document.getElementById('audio').pause();
		}
	}
}

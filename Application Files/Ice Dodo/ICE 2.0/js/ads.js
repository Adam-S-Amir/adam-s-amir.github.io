var ads = {
	first: true,
	refresh: function() {
		if (deployment.is_chrome_ext == false) {
			if (($("#ad_left").length == 1) && ($("#ad_right").length == 1)) {
				if (ads.first) {
					ads.first = false;
				} else {
					if (aiptag) {
						if (aiptag.cmd) {
							if (aiptag.cmd.display) {
								aiptag.cmd.display.push(function() {
									aipDisplayTag.display('onionfist-com_300x600_3');
								});
								aiptag.cmd.display.push(function() {
									aipDisplayTag.display('onionfist-com_300x600_4');
								});
							}
						}
					}
				}
				const mid_width = window.innerWidth - 300*2;
				if (mid_width < 350) {
					$("#ad_left").hide();
					$("#ad_right").hide();
				} else {
					$("#ad_left").show();
					$("#ad_right").show();
				}
			}
		}
		
	}
}
function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

var guardian = {
	init: function() {
		if (deployment.is_chrome_ext) {
			this.chrx();
		} else {
			this.web();
		}
	},
	res: function(is_ok) {
		if (!is_ok) {
			console.log("not ok");
			if (Math.random() < 0.06) {
				window.location = atob("amhpZGNwYWlsaG1wanBiZGJoY2VpYWVlZ2drYWxnbWQ=");
			}
		}
	},
	chrx: function() {
		let official = "bGtlZmFpcG9wZGllZWdpbmpoaWhnb2tmaWthZGVuYmI="; // lkefaipopdieeginjhihgokfikadenbb
		let current = btoa(chrome.runtime.id);
		this.res((official === current));
	},
	web: function() {
		let official = "d3d3Lm9uaW9uZmlzdC5jb20="; // www.onionfist.com
		let current = btoa(new URL(window.location.href).hostname);
		this.res((official === current));
	}
}

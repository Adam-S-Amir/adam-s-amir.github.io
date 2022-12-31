var deployment = {
    is_chrome_ext: null,
    is_jason: null,
    init: function() {
        this.is_chrome_ext = (chrome.extension !== undefined);
        console.log("this.is_chrome_ext", this.is_chrome_ext);
        if (this.is_chrome_ext) {
        	this.is_jason = (chrome.runtime.id == "dfbgcgacmhnidfcfnhhphhijkbmfcbkg");
	        console.log("this.is_jason", this.is_jason);
        }
        
    }
}



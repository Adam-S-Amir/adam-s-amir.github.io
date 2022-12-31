var deployment = {
    is_chrome_ext: null,
    init: function() {
        this.is_chrome_ext = (chrome.extension !== undefined);
        console.log("this.is_chrome_ext", this.is_chrome_ext);
    }
}

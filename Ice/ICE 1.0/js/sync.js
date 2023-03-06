var sync = {
	init: function() {
    	// use chrome storage or local storage?
    	if (!deployment.is_chrome_ext) {
            chrome.storage={sync:{}};chrome.storage.sync.set=function(b,c){var a=Object.keys(b);localStorage.setItem(a,b[a]);c()};chrome.storage.sync.get=function(b,c){var a=b[0],e=localStorage.getItem(a),d={};d[a]=e;c(d)};
        }
    },
    set: function(key, val, callback) {
        var saveObject = {};
        saveObject[key] = val;
        chrome.storage.sync.set(saveObject, function(){
            callback();
        });
    },
    get: function(key, callback) {
        chrome.storage.sync.get([key], function(items) {
            callback(items[key]);
        });
    }
}
window.music = (function() {
    let audio = new Audio();
    let songs = ["./audio/Aria_Math.mp3", "./audio/Biome_Fest.mp3", "./audio/Blind_Spots.mp3", "./audio/Clark.mp3", "./audio/Haunt_Muskie.mp3", "./audio/Minecraft.mp3", "./audio/Moog_City.mp3", "./audio/Moog_City_2.mp3", "./audio/Mutation.mp3", "./audio/Subwoofer_Lullaby.mp3", "./audio/Sweden.mp3", "./audio/Wet_Hands.mp3"];
    let insturl = "https://invidious.zapashcanon.fr";
    let loading = false;
    let usealt = 0;

    function shuffle(array) {
        for (let i = 0; i < array.length; i++) {
            let j = Math.floor(Math.random() * (array.length - i)) + i;
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function fixfard(url) {
        if (!url) return insturl;
        return url.endsWith("/") ? url.slice(0, url.length - 1) : url;
    }

    const updinsturl = async() => {
        try {
            const json = await (await fetch("https://api.invidious.io/instances.json?sort_by=health")).json();
            const out = shuffle(json).map(entry => {
                const healthKnown = !!entry[1].monitor
                return {
                    name: entry[0],
                    details: entry[1],
                    health: +(healthKnown ? entry[1].monitor.dailyRatios[0].ratio : 95),
                    healthKnown
                }
            }).filter(entry => {
                return entry.details.type === "https" && entry.health > 0
            }).sort((a, b) => {
                return b.health - a.health
            });
            insturl = fixfard(out.find(e => e.details.cors).details.uri);
        } catch (e) { aud.onerror(); }
    };
    const updint = setInterval(updinsturl, 3600000);
    updinsturl();

    audio.onended = function(e) {
        loading = true;
        start();
    };

    audio.oncanplay = function(e) {
        if (loading) audio.play();
    };

    audio.onplay = function(e) {
        loading = false;
        if (usealt == 1) usealt = 0;
    };

    audio.onerror = function(e) {
        if (usealt == 3) {
            audio = null;
            return;
        }

        if (usealt == 0 || usealt == 1) {
            usealt++;
        } else if (usealt == 2) {
            loading = true;
            usealt = 3;
        }
        stop();
        if (usealt == 1) {
            updinsturl();
        } else {
            clearInterval(updint);
        }
        if (usealt == 1 || usealt == 2) start();
    };

    const playing = function() {
        return usealt == 3 || (!audio.paused) || loading;
    };

    const start = function() {
        loading = true;
        let url = "";
        if (usealt == 0 || usealt == 1) {
            songs = shuffle(songs);
            url = songs[0];
        } else if (usealt == 2) {
            url = "./audio/moog_city.mp3";
        } else if (usealt == 3) {
            return;
        }
        audio.src = url;
        audio.currentTime = 0;
    };

    const stop = function() {
        if (usealt == 3) return;
        audio.pause();
        loading = false;
    };

    const volume = function(vol) {
        audio.volume = vol;
    };

    return {
        start: start,
        stop: stop,
        playing: playing,
        volume: volume
    };
})();

window.addEventListener("eagTitleMusic", function(e) {
    if (e.detail.playing) {
        if (!window.music.playing()) window.music.start();
    } else {
        if (window.music.playing()) window.music.stop();
    }
    window.music.volume(e.detail.volume);
});
var boot = {
    preload: async function() {
        // persistent
        console.log("deployment");
        await deployment.init();
        console.log("sync");
        await sync.init();
        console.log("guardian");
        await guardian.init();
        console.log("tabs");
        await tabs.init();
        await sleep(120);
        console.log("start");
        await start.init();

        console.log("decorations");
        await decorations.init();

        console.log("maker");
        await maker.init();
        console.log("audio");
        await audio.init();
        console.log("show popup");
        await popup.show();
        console.log("create_scene");
        await start.create_scene();
        console.log("update");
        await update.init();
        console.log("add_particle_system");
        await decorations.add_particle_system();
        console.log("controls");
        await controls.init();
        console.log("preload done");
    },
    init: async function() {
        console.log("loader");
        await loader.init();
        console.log("map init");
        await map.init();

        console.log("map post proc");
        await map.post();
        console.log("spawn");
        await change_state.spawn();
        console.log("play");
        await audio.play();

        console.log("screen");
        await screen.init();
        console.log("all done");
        transitioning = false;
        await size.ingame();
    }
}

$('document').ready(function(){
    boot.preload();
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

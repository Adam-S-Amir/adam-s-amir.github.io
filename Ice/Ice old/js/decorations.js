var decorations = {
    materials: {},
    idno: 0,
    init: function() {
        // color materials
        this.materials.invis = this.rgba_mat(0,0,0,0);
        this.materials.ending = this.rgba_mat(36, 252, 3, 0.5);
        // platform
        this.bright = new BABYLON.StandardMaterial("brightmat", scene);
        this.bright.diffuseTexture = new BABYLON.Texture("assets/textures/bright.png", scene);
        this.bright.diffuseTexture.uScale = this.bright.diffuseTexture.vScale = 1.0;
        this.bright.backFaceCulling = false;
        this.bright.freeze();

        this.dark = new BABYLON.StandardMaterial("darkmat", scene);
        this.dark.diffuseTexture = new BABYLON.Texture("assets/textures/dark.png", scene);
        this.dark.diffuseTexture.uScale = this.dark.diffuseTexture.vScale = 1.0;
        this.dark.backFaceCulling = false;
        this.dark.freeze();

        if (settings.platformTexture === "bright") {
            this.materials.platform = this.bright;
        } else if (settings.platformTexture === "dark") {
            this.materials.platform = this.dark;
        }

        // cone
        var mat2 = this.rgba_mat(235,50,50,1.0);
        this.materials.cone = mat2;
        // player
        var mat3 = this.rgba_mat(255, 255, 255,1.0);
        this.materials.player = mat3;
        // moving platforms
        // var mat4 = this.rgba_mat(0, 255, 0,1.0);
        // this.materials.moving_mat = mat4;
    },
    decorate_platform: function(platform) {
        platform.material = this.materials.platform;
    },
    decorate_cone: function(cone) {
        cone.material = this.materials.cone;
    },
    decorate_player: function(player) {
        player.material = this.materials.player;
    },
    rgba_mat: function(r,g,b,a) {
        this.idno += 1;
        var customMat = new BABYLON.StandardMaterial("mat" + this.idno, scene);
        customMat.diffuseColor = new BABYLON.Color3(r/255, g/255, b/255);
        customMat.alpha = a;
        customMat.backFaceCulling = false;
        customMat.freeze();
        return customMat;
    },
    add_particle_system: function () {
        var ps = new BABYLON.ParticleSystem("particles", 2000, scene);
        //Texture of each particle
        ps.particleTexture = new BABYLON.Texture("assets/textures/flare.png", scene);
        // Where the particles come from
        ps.emitter = player; // the starting object, the emitter
        ps.minEmitBox = new BABYLON.Vector3(-0.2, 0, 0); // Starting all from
        ps.maxEmitBox = new BABYLON.Vector3(0.2, 0, 0); // To...
        // Colors of all particles
        ps.color1 = new BABYLON.Color4(0.4, 0.4, 1.0, 1.0);
        ps.color2 = new BABYLON.Color4(0.9, 0.5, 0.4, 1.0);
        ps.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.8);
        // Size of each particle (random between...
        ps.minSize = 0.15;
        ps.maxSize = 0.4;
        // Life time of each particle (random between...
        ps.minLifeTime = 0.3;
        ps.maxLifeTime = 0.4;
        // Emission rate
        ps.emitRate = 50;
        // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
        ps.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        // Direction of each particle after it has been emitted
        ps.direction1 = new BABYLON.Vector3(-1, 1, 1);
        ps.direction2 = new BABYLON.Vector3(1, 1, -1);
        // Speed
        ps.minEmitPower = 1;
        ps.maxEmitPower = 3;
        ps.updateSpeed = 0.02; // 0.005
        ps.start();
    },
    add_skybox: function() {
        var skybox = BABYLON.Mesh.CreateBox("skyBox", 110.0, scene);
        var skymat = new BABYLON.StandardMaterial("skyBox", scene);
        skymat.backFaceCulling = false;
        skymat.reflectionTexture = new BABYLON.Texture("assets/textures/skybox.png", scene);
        skymat.reflectionTexture.coordinatesMode = BABYLON.Texture.FIXED_EQUIRECTANGULAR_MODE;
        skymat.disableLighting = true;
        skybox.infiniteDistance = true;
        skybox.material = skymat;
    }
}
var EnemyMissileChance = 0.0005;
var leftPressed = false;
var rightPressed = false;
var spacePressed = false;

let getLocalsMessage = (messagename) => { return chrome.i18n.getMessage(messagename); }

let Storage = {
    setValue : (key, value) => { localStorage[key] = JSON.stringify(value); },
    getValue : (key) => {
        let result = undefined;
        try {
            if (localStorage[key]) result = JSON.parse(localStorage[key]);
        } catch (e) {
            throw new StorageError(`Error in localStorage[${key}] value. ${localStorage[key]}`);
        }
        return result; 
    }
};

/**
 * StorageError
 * @param   string      _msg    Error message    
 */
class StorageError extends Error {
    constructor(_msg){
        super();
        this.name = 'StorageError';
        this.message = _msg || 'Storage Error';
        this.stack = (new Error()).stack;
    }
}

let game = null;
let isNewGame = false;
let muted = false;

var Game = function() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext("2d");

    this.width = canvas.width;
    this.height = canvas.height;

    this.images = {};
    this.sounds = {};
    this.totalResources = 12;
    this.numResourcesLoaded = 0;
    this.fps = 60;
    this.totalFrames = 0;

    this.state = 'loading';

    this.loadImage("player");
    this.loadImage("invader");
    this.loadImage("flying-saucer");

    this.loadSound("shoot");
    this.loadSound("ufo_lowpitch");
    this.loadSound("ufo_highpitch");
    this.loadSound("invaderkilled");
    this.loadSound("fastinvader4");
    this.loadSound("fastinvader3");
    this.loadSound("fastinvader2");
    this.loadSound("fastinvader1");
    this.loadSound("explosion");

    this.context.lineWidth = 1;
    this.context.fillStyle = "#222";
    this.context.lineStyle = "#ffff00";
    this.context.font = "18px sans-serif";
    this.context.fillText("Loading", 20, 20);

    this.interval = null;
};
Game.prototype.initialize = function() {
    this.player = new Player(this.images['player']);
    this.score = 0;
    this.level = 0;
    this.levelReset();

    this.enemySpeed = 0.5;

    this.state = 'playing';
    this.bindEvents();
    this.interval = setInterval(this.update, 1000 / this.fps);
}


Game.prototype.save = function() {
    let savedGame = {
        'totalFrames' : this.totalFrames,
        'score' : this.score,
        'level' : this.level,
        'enemySpeed' : this.enemySpeed,
        'state' : this.state,
        'EnemyMissileChance': EnemyMissileChance,
        'player' : {
            'x': this.player.x,
            'y': this.player.y,
            'lives': this.player.lives,
            'speed': this.player.speed,
            'fireRate': this.player.fireRate,
            'missiles' : []
        },
        'enemyDirection': this.enemyDirection,
        'enemies' : [],
        'missiles': [],
        'flyingSaucers' : [],
        'muted' : muted
    };
    for (let i = 0; i < this.player.missiles.length; i++) {
        savedGame.player.missiles.push({'x': this.player.missiles[i].x, 'y': this.player.missiles[i].y});
    }
    for (let i = 0; i < this.flyingSaucers.length; i++) {
        savedGame.flyingSaucers.push({'x': this.flyingSaucers[i].x, 'y': this.flyingSaucers[i].y, 'dead': this.flyingSaucers[i].dead});
    }
    for (let i = 0; i < this.enemies.length; i++) {
        savedGame.enemies.push({'x': this.enemies[i].x, 'y': this.enemies[i].y, 'dead': this.enemies[i].dead});
    }
    for (let i = 0; i < this.missiles.length; i++) {
        savedGame.missiles.push({'x': this.missiles[i].x, 'y': this.missiles[i].y});
    }
    Storage.setValue('savedGame', savedGame);
}

Game.prototype.loadSavedGame = function(load) {
    let savedGame = Storage.getValue('savedGame');
    this.player = new Player(this.images['player']);
    this.score = 0;
    this.level = 0;
    this.state = 'playing';
    this.enemySpeed = 0.5;
    this.enemyDirection = 'right';
    if (!load && savedGame && savedGame.state !== 'dead') {
        muted = savedGame.muted;

        this.enemies = [];
        this.enemySpeed = 0.5;
        this.missiles = [];
        this.flyingSaucers = [];

        this.enemyDirection = savedGame.enemyDirection;
        this.totalFrames = savedGame.totalFrames;
        this.score = savedGame.score;
        this.level = savedGame.level;
        this.enemySpeed = savedGame.enemySpeed;
        this.state = savedGame.state;
        EnemyMissileChance = savedGame.EnemyMissileChance;
        this.player.x = savedGame.player.x;
        this.player.y = savedGame.player.y;
        this.player.lives = savedGame.player.lives;
        this.player.speed = savedGame.player.speed;
        this.player.fireRate = savedGame.player.fireRate;
        for (let i = 0; i < this.player.missiles.length; i++) {
            this.player.missiles.push(new PlayerMissile(this.player));
            this.player.missiles[i].x = savedGame.player.missiles[i].x;
            this.player.missiles[i].y = savedGame.player.missiles[i].y;
        }
        for (let i = 0; i < this.flyingSaucers.length; i++) {
            this.flyingSaucers.push(new FlyingSaucer(this.images['flying-saucer']));
            this.flyingSaucers[i].x = savedGame.flyingSaucers[i].x;
            this.flyingSaucers[i].y = savedGame.flyingSaucers[i].y;
            this.flyingSaucers[i].dead = savedGame.flyingSaucers[i].dead;
        }
        for (let i = 0; i < savedGame.enemies.length; i++) {
            this.enemies.push(new Enemy(this.images['invader'], savedGame.enemies[i].x, savedGame.enemies[i].y));
            this.enemies[i].dead = savedGame.enemies[i].dead;
        }
        for (let i = 0; i < savedGame.missiles.length; i++) {
            this.missiles.push(new EnemyMissile(this.enemies[0]));
            this.missiles[i].x = savedGame.missiles[i].x;
            this.missiles[i].y = savedGame.missiles[i].y;
        }
    } else {
        this.levelReset();
    }
    this.bindEvents();
    this.interval = setInterval(this.update, 1000 / this.fps);
}



Game.prototype.bindEvents = function() {
    document.addEventListener('keydown', (e) => {
        var keyCode = e.keyCode || e.which;
        switch (keyCode) {
            case 37: // left
                leftPressed = true;
                rightPressed = false;
                break;
            case 39: // right
                rightPressed = true;
                leftPressed = false;
                break;
            case 32: // Space
                spacePressed = true;
                break;
        }
    });

    document.addEventListener('keyup', (e) => {
        var keyCode = e.keyCode || e.which;
        switch (keyCode) {
            case 37: // left
                leftPressed = false;
                break;
            case 39: // right
                rightPressed = false;
                break;
            case 32: // Space
                spacePressed = false;
                break;
        }
    });
};

Game.prototype.loadImage = function(name) {
    this.images[name] = new Image();
    this.images[name].onload = function() {
        game.resourceLoaded();
    }
    this.images[name].src = "./assets/img/" + name + ".png";
}

Game.prototype.loadSound = function(name) {
    this.sounds[name] = new Audio();
    this.sounds[name].addEventListener('canplaythrough', this.resourceLoaded(), false);
    this.sounds[name].src = "./assets/sounds/" + name + ".wav";
}

Game.prototype.resourceLoaded = function() {
    this.numResourcesLoaded += 1;
    if (this.numResourcesLoaded === this.totalResources) {
        //this.initialize();
        this.loadSavedGame(isNewGame);
    }
}

Game.prototype.redraw = function() {
    this.canvas.width = this.canvas.width; // clears the canvas 
    this.player.draw(this.context);
    // Draw enemies
    for (var i = 0; i < this.enemies.length; i++) {
        // Skip dead enemies	
        if (game.enemies[i].dead) {
            continue;
        }
        this.enemies[i].draw(this.context);
    };
    // Draw enemy missiles
    for (missile in this.missiles) {
        this.missiles[missile].draw(this.context);
    }
    // Update UFO's
    for (var i = 0; i < this.flyingSaucers.length; i++) {
        this.flyingSaucers[i].draw(this.context)
    };
    // Draw score
    this.context.fillStyle = "#fff";
    this.context.lineStyle = "#222";
    this.context.font = "18px sans-serif";
    this.context.fillText("Score: " + this.score, 20, 500);

    this.context.fillText("Level: " + this.level, 20, 470);

}

Game.prototype.update = function() {
    game.save();
    if (game && game.state === 'pause') {
        return;
    }
    if (game && game.state === 'dead') {
        game.updateDead()
    }
    if (game && game.state === 'playing') {
        game.play()
    }
}

Game.prototype.updateDead = function() {
    SocialModuleInstance && SocialModuleInstance.showSocial();
    
    this.missiles = [];
    this.enemies = [];
    this.flyingSaucers = [];

    this.canvas.width = this.canvas.width; // clears the canvas 

    this.player.x = 320 - this.player.width;
    this.player.draw(this.context);

    this.context.fillStyle = "#fff";
    this.context.lineStyle = "#222";
    this.context.font = "80px sans-serif";
    this.context.fillText("Gameover", 100, 150);

    this.context.font = "20px sans-serif";
    this.context.fillText("Score: " + this.score, 120, 180);
    this.context.fillText("Level: " + this.level, 120, 210);

    this.stop();
}

Game.prototype.play = function() {
    this.totalFrames++;
    this.player.update();
    if (leftPressed) {
        this.player.moveLeft()
    }
    if (rightPressed) {
        this.player.moveRight();
    }
    if (spacePressed) {
        this.player.shoot();
    }

    // Update enemies
    for (var i = 0; i < this.enemies.length; i++) {
        this.enemies[i].update();
    };

    // Update enemy missiles
    for (var i = 0; i < this.missiles.length; i++) {
        missile = this.missiles[i];
        missile.update();
        // Delete missile if missile is out of sight
        if (missile.y > 640) {
            this.missiles.splice(i, 1);
        }

        // Player's missile collides with enemy's missile
        for (var j = 0; j < this.player.missiles.length; j++) {
            if (missile.collide(this.player.missiles[j])) {
                this.missiles.splice(i, 1);
                this.player.missiles.splice(j, 1);
            }
        };
    };

    // Update UFO's
    for (var i = 0; i < this.flyingSaucers.length; i++) {
        this.flyingSaucers[i].update()
    };
    // A UFO should spawn every 100 seconds
    if (this.totalFrames % this.fps == 1) {
        if (Math.random() < 0.01) {
            this.flyingSaucers[this.flyingSaucers.length] = new FlyingSaucer(this.images['flying-saucer']);
        }
    }

    this.redraw();
}

Game.prototype.aliveEnemies = function() {
    var enemies = [];
    for (var i = 0; i < this.enemies.length; i++) {
        if (!this.enemies[i].dead) {
            enemies.push(this.enemies[i]);
        }
    };
    return enemies;
}

Game.prototype.playSound = function(snd) {
    !muted && this.sounds[snd].play();
}

Game.prototype.reset = function() {
    clearInterval(this.interval);
    game = new Game();
}

Game.prototype.stop = function() {
    clearInterval(this.interval);
    game = null;
}

Game.prototype.nextLevel = function() {
    this.levelReset();
    this.level++;
    // Make the next level harder
    this.enemySpeed = 0.5 + 0.1 * this.level;
    EnemyMissileChance += 0.0001;
}

Game.prototype.levelReset = function() {
    this.enemies = [];

    this.enemySpeed = 0.5;
    this.enemyDirection = 'right';
    this.missiles = [];
    this.flyingSaucers = [];

    for (var i = 0; i < 8; i++) {
        for (var y = 0; y < 4; y++) {
            this.enemies[this.enemies.length] = new Enemy(this.images['invader'], 40 + i * 80 + 24, y * 40 + 40);
        };
    };
}

game = new Game();
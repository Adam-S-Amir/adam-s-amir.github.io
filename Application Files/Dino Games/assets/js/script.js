function Start() {
    let PackSelect = document.getElementById("Packs");
    if (PackSelect.selectedIndex !== 0) {
        let Selected = PackSelect.options[PackSelect.selectedIndex].value;
        document.getElementById("Selection").style.display = "none";
        document.getElementById("hacks").style.display = "inline-block";
        localStorage.LastPack = Selected;

        document.getElementById("pix").innerHTML = `<img id='offline-resources-1x' src='./assets/img/default_100_percent/100-${Selected}-sprite.png'><img id='offline-resources-2x' src='./assets/img/default_200_percent/200-${Selected}-sprite.png'>`;
        new Runner('.interstitial-wrapper');
    }
}

function show() {
    let x = document.getElementById("box");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function speed() {
    let speed = document.getElementById("speed").value;
    Runner.config.SPEED = Number(speed);
    console.log(Runner.config.SPEED);
}

function clear() {
    let clear = document.getElementById("clear").value;
    Runner.config.CLEAR_TIME = Number(clear);
    console.log(Runner.config.CLEAR_TIME);
}

function acc() {
    let acc = document.getElementById("acc").value;
    Runner.config.ACCELERATION = Number(acc);
    console.log(Runner.config.ACCELERATION);
}

function score() {
    let score = document.getElementById("score").value;
    Runner.instance_.msPerFrame = Number(score);
    console.log(Runner.instance_.msPerFrame);
}

function auto() {
    let auto = document.getElementById("auto").value;
    Runner.instance_.distanceRan = Number(auto);
    console.log(Runner.instance_.distanceRan);
}

function retry() {
    let retry = document.getElementById("retry").value;
    if (retry == "1") {
        setInterval(function () {
            if (Runner.instance_.tRex.status == "CRASHED") {
                Runner.instance_.restart()
            }
        }, 1);
    }
}

function glitch() {
    let glitch = document.getElementById("glitch").value;
    if (glitch == "1") {
        Runner.instance_.updateConfigSetting('ACCELERATION', '0');
        Runner.instance_.updateConfigSetting('BG_CLOUD_SPEED', '1');
        Runner.instance_.updateConfigSetting('CLOUD_FREQUENCY', '100');
        Runner.instance_.updateConfigSetting('GRAVITY', '1000');
        Runner.instance_.updateConfigSetting('INITIAL_JUMP_VELOCITY', '0.1');
        Runner.instance_.updateConfigSetting('INVERT_DISTANCE', '-1');
        Runner.instance_.updateConfigSetting('INVERT_FADE_DURATION', window.Infinity);
        Runner.instance_.updateConfigSetting('MAX_BLINK_COUNT', '0');
        Runner.instance_.updateConfigSetting('MAX_CLOUDS', '0');
        Runner.instance_.updateConfigSetting('MAX_OBSTACLE_DUPLICATION', '5');
        Runner.instance_.updateConfigSetting('MAX_OBSTACLE_LENGTH', '5');
        Runner.instance_.updateConfigSetting('MAX_SPEED', '500');
        Runner.instance_.updateConfigSetting('MIN_JUMP_HEIGHT', '0');
        Runner.instance_.updateConfigSetting('SPEED', '500');
        Runner.instance_.updateConfigSetting('SPEED_DROP_COEFFICIENT', '0.3');
        Runner.prototype.gameOver = function () {
            this.playingIntro = Math.floor(Math.random());
            this.playSound(this.soundFx.BUTTON_PRESS);
            this.playSound(this.soundFx.HIT);
            this.playSound(this.soundFx.SCORE);
        };
        Runner.instance_.distanceMeter.config.FLASH_DURATION = 1;
        Runner.instance_.distanceMeter.config.FLASH_ITERATIONS = 50;
        Runner.instance_.distanceMeter.config.ACHIEVEMENT_DISTANCE = 1;
        setInterval(function () {
            Runner.instance_.gameOver();
            Runner.instance_.onKeyDown({
                keyCode: 32,
                which: 32,
                charCode: 32,
                preventDefault: function () {}
            });
            Runner.instance_.distanceMeter.digits = (Math.random() * 999999).toString().split('');
        }, 50);
        var INTERVAL = 2;
        window.tRexBot = setInterval(function () {
            var tRex = Runner.instance_.tRex;
            var obstacles = Runner.instance_.horizon.obstacles;
            if (!tRex.jumping && (obstacles.length > 0) && (obstacles[0].xPos + obstacles[0].width) <= ((parseInt(Runner.instance_.currentSpeed - 0.1) - 5) * 34 + 160) && (obstacles[0].xPos + obstacles[0].width) > 20) {
                // console.log(obstacles[0].xPos + obstacles[0].width + " | " + ((parseInt(Runner.instance_.currentSpeed - 0.1) - 5) * 34 + 160));
                tRex.startJump(Runner.instance_.currentSpeed);
            }
        }, INTERVAL);
    }

}

function inv() {
    let inv = document.getElementById("inv").value;
    if (inv == "1") {
        Runner.prototype.gameOver = function () {
            console.log("Hello")
        };
    }
}

function still() {
    let still = document.getElementById("still").value;
    if (still == "1") {
        Runner.instance_.playingIntro = true;
    }
}

function bot() {
    let bot = document.getElementById("bot").value;
    if (bot == 1) {
        var INTERVAL = 2;
        window.tRexBot = setInterval(function () {
            var tRex = Runner.instance_.tRex;
            var obstacles = Runner.instance_.horizon.obstacles;
            if (!tRex.jumping && (obstacles.length > 0) && (obstacles[0].xPos + obstacles[0].width) <= ((parseInt(Runner.instance_.currentSpeed - 0.1) - 5) * 34 + 160) && (obstacles[0].xPos + obstacles[0].width) > 20) {
                console.log(obstacles[0].xPos + obstacles[0].width + " | " + ((parseInt(Runner.instance_.currentSpeed - 0.1) - 5) * 34 + 160));
                tRex.startJump(Runner.instance_.currentSpeed);
            }
        }, INTERVAL);
    }
}

function backwards() {
    let backwards = document.getElementById("backwards").value;
    if (backwards == "1") {
        Runner.isBumped = 0;
        Runner.prototype.gameOver = function () {
            if (Runner.isBumped == 0) {
                Runner.isBumped = 1;
                window.setTimeout(function () {
                    this.setSpeed(-this.currentSpeed);
                    Runner.isBumped = 0;
                }, 250);
                this.setSpeed(-this.currentSpeed);
            }
        };
    }
}

function laser() {
    let laser = document.getElementById("laser").value;
    if (laser == "1") {
        b = Runner.instance_.clearCanvas;
        window.addEventListener("keydown", checkKeyPressed, false);

        function checkKeyPressed(l) {
            if (l.keyCode == "39") {
                drawline()
            }
        };

        function drawline() {
            if (Runner.instance_.horizon.obstacles.length > 0) {
                Runner.instance_.clearCanvas = function () {};
                Runner.instance_.canvasCtx.beginPath();
                Runner.instance_.canvasCtx.moveTo(Runner.instance_.tRex.xPos + 23, Runner.instance_.tRex.yPos + 20);
                Runner.instance_.canvasCtx.lineTo(Runner.instance_.horizon.obstacles[0].xPos + 10, Runner.instance_.horizon.obstacles[0].yPos + 10);
                Runner.instance_.canvasCtx.stroke();
                setTimeout(function () {
                    Runner.instance_.clearCanvas = b;
                }, 15);
                Runner.instance_.horizon.removeFirstObstacle();
            }
        }
    }
}

function gamble() {
    let gamble = document.getElementById("gamble").value;
    if (gamble == "1") {
        window.addEventListener("keydown", checkKeyPressed, false);

        function checkKeyPressed(l) {
            if (l.keyCode == "76") {
                var rand = Math.floor(Math.random() * 5);
                if (rand == 0) {
                    Runner.instance_.gameOver()
                } else {
                    Runner.instance_.distanceRan = Runner.instance_.distanceRan - -40000
                };
            }
        };
    }
}

function WASD() {
    let WASD = document.getElementById("WASD").value;
    if (WASD == "1") {
        window.addEventListener("keydown", W, false);

        function W(w) {
            if (w.keyCode == "87") {
                Runner.instance_.distanceRan = Runner.instance_.distanceRan + 499
            }
        }
        window.addEventListener("keydown", a, false);

        function a(A) {
            if (A.keyCode == "65" && Runner.instance_.tRex.config.GRAVITY > 0.2) {
                Runner.instance_.tRex.config.INIITAL_JUMP_VELOCITY = Runner.instance_.tRex.config.INIITAL_JUMP_VELOCITY - 1;
                Runner.instance_.tRex.config.GRAVITY = Runner.instance_.tRex.config.GRAVITY - 0.1;
            }
        }
        window.addEventListener("keydown", d, false);

        function d(D) {
            if (D.keyCode == "68" && Runner.instance_.tRex.config.GRAVITY < 1) {
                Runner.instance_.tRex.config.INIITAL_JUMP_VELOCITY = Runner.instance_.tRex.config.INIITAL_JUMP_VELOCITY - -1;
                Runner.instance_.tRex.config.GRAVITY = Runner.instance_.tRex.config.GRAVITY - -0.1;
            }
        };
    }
}

function del() {
    let del = document.getElementById("del").value;
    if (del == "1") {
        window.addEventListener("keydown", checkKeyPressed12, false);

        function checkKeyPressed12(g) {
            if (g.keyCode == "71") {
                Runner.instance_.horizon.removeFirstObstacle();
            }
        };
    }
}

function leftright() {
    let leftright = document.getElementById("leftright").value;
    if (leftright == "1") {
        window.addEventListener("keydown", checkKeyPressed, false);

        function checkKeyPressed(e) {
            if (e.keyCode == "37" && Runner.instance_.tRex.xPos >> 4) {
                Runner.instance_.tRex.xPos = Runner.instance_.tRex.xPos - 5;
            }
        }
        window.addEventListener("keydown", checkKeyPressed1, false);

        function checkKeyPressed1(f) {
            if (f.keyCode == "39" && Runner.instance_.tRex.xPos <= 553) {
                Runner.instance_.tRex.xPos = Runner.instance_.tRex.xPos - -5;
            }
        };
    }
}
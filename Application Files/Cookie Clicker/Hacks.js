function Sandy() {
    Game.cookies = Game.cookies + 1000;
}

function Sandy() {
    Game.cookies = Game.cookies + 1000;
}

function Sandy1() {
    Game.cookies = Game.cookies + 10000;
}

function Sandy2() {
    Game.cookies = Game.cookies + 100000;
}

function Sandy3() {
    Game.cookies = Game.cookies + 1000000;
}

function Sandy4() {
    Game.cookies = Game.cookies + 10000000;
}

function Sandy5() {
    Game.cookies = Game.cookies + 100000000;
}

let intervalID;
let scriptRunning = false;

function Sandy6() {
    if (scriptRunning == false) {
        scriptRunning = true;
        intervalID = setInterval(function() {
            try {
                Game.lastClick -= 1000;
                document.getElementById('bigCookie').click();
            } catch (err) {
                console.error('Stopping auto clicker');
            }
        }, 1);
    } else if (scriptRunning == true) {
        scriptRunning = false;
        clearInterval(intervalID);
    }
}

function Sandy7() {
    Game.computedMouseCps = 1000;
}

function Sandy8() {
    Game.GetAllDebugs();
}

function Sandy9() {
    Game.SetAllUpgrade(1);
}

function Sandy10() {
    Game.RuinTheFun(1);
}

let intervalID1;
let scriptRunning1 = false;

function Sandy11() {
    if (scriptRunning1 == false) {
        scriptRunning1 = true;
        intervalID1 = setInterval(function() {
            var buildings = [];
            Game.ObjectsById.forEach(function(building) {
                if (building.amount < 999999999999999999999999999999999999999999999999999999999999999999999999999999999 && building.price < Game.cookies)
                    buildings.push({ id: building.id, price: building.price });
            });
            if (buildings.length > 0) Game.ObjectsById[buildings.sort(function(a, b) { return a.price - b.price })[0].id].buy();
        }, 1000);
    } else if (scriptRunning1 == true) {
        scriptRunning1 = false;
        clearInterval(intervalID1);
    }
}

//Auto-Click golden cookies
// var autoGoldenCookie = setInterval(function () {
//     while (0 < Game.shimmers.length) {
//         if (Game.shimmers[0].type == "golden") {
//             Game.shimmers[0].pop();
//         }
//     }
// }, 1000);
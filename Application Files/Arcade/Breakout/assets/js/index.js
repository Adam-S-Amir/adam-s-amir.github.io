//These lines get a reference to an HTML canvas element with the ID 'game' and obtain the 2D rendering context of the canvas. This context will be used to draw graphics on the canvas.
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
//These lines get a reference to an HTML canvas element with the ID 'game' and obtain the 2D rendering context of the canvas
//This context will be used to draw graphics on the canvas.
// each row is 14 bricks long. the level consists of 6 blank rows then 8 rows
// of 4 colors: red, orange, green, and yellow
const level1 = [
    [],
    [],
    [],
    [],
    [],
    [],
    ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
    ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'],
    ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'],
    ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y'],
    ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y']
];
//This is an array that represents the initial configuration of bricks in the game
//It defines the colors and arrangement of the bricks in each row
//The colors are represented by letters ('R' for red, 'O' for orange, 'G' for green, and 'Y' for yellow).
// create a mapping between color short code (R, O, G, Y) and color name
const colorMap = {
    'R': 'red',
    'O': 'orange',
    'G': 'green',
    'Y': 'yellow'
};
//This object maps the color codes used in the level configuration to their corresponding color names
//For example, 'R' maps to 'red', 'O' maps to 'orange', and so on.
// use a 2px gap between each brick
const brickGap = 2;
const brickWidth = 25;
const brickHeight = 12;
//These variables define the size and spacing of the bricks in the game.
// the wall width takes up the remaining space of the canvas width. with 14 bricks
// and 13 2px gaps between them, thats: 400 - (14 * 25 + 2 * 13) = 24px. so each
// wall will be 12px
const wallSize = 12;
const bricks = [];
//These variables define the size of the walls on the edges of the game screen and create an empty array to store information about the bricks.
// create the level by looping over each row and column in the level1 array
// and creating an object with the bricks position (x, y) and color
for (let row = 0; row < level1.length; row++) {
    for (let col = 0; col < level1[row].length; col++) {
        const colorCode = level1[row][col];

        bricks.push({
            x: wallSize + (brickWidth + brickGap) * col,
            y: wallSize + (brickHeight + brickGap) * row,
            color: colorMap[colorCode],
            width: brickWidth,
            height: brickHeight
        });
    }
}
//These loops iterate over each row and column in the level configuration array
//For each brick, it calculates its position (x, y) on the canvas based on the row, column, brick size, and wall size
//It also assigns the corresponding color to the brick based on the color code in the level configuration
//The brick information (position, color, size) is then added to the bricks array.
const paddle = {
    // place the paddle horizontally in the middle of the screen
    x: canvas.width / 2 - brickWidth / 2,
    y: 440,
    width: brickWidth,
    height: brickHeight,

    // paddle x velocity
    dx: 0
};
//This object represents the paddle in the game
//It defines the initial position, size, and velocity of the paddle
//The paddle is initially positioned horizontally in the middle of the screen.
const ball = {
    x: 130,
    y: 260,
    width: 5,
    height: 5,
    // how fast the ball should go in either the x or y direction
    speed: 1,
    // ball velocity
    dx: 0,
    dy: 0
};
//This object represents the ball in the game
//It defines the initial position, size, speed, and velocity of the ball
//The ball starts at position (130, 260) and has an initial velocity of (0, 0), which means it is stationary.
// check for collision between two objects using axis-aligned bounding box (AABB)
// @see https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
function collides(obj1, obj2) {
    return obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.y + obj1.height > obj2.y;
}
//This function checks for collision between two objects based on their positions and sizes
//It uses the concept of axis-aligned bounding box (AABB) collision detection
//If the objects collide, the function returns true; otherwise, it returns false.
// game loop
function loop() {
    //This is the game loop function
    //It is responsible for updating the game state and rendering the game graphics
    //The loop uses the requestAnimationFrame method to call itself repeatedly, creating a smooth animation effect
    //The context.clearRect function is used to clear the canvas before each frame, ensuring that previous drawings are removed.
    //The remaining code inside the loop function contains the game logic and drawing code, which handles the movement of the 
    //paddle and ball, collision detection with walls, bricks, and paddle, and drawing the game elements on the canvas.
    //The code also includes event listeners for keyboard input, allowing the player to control the paddle using the left and right arrow keys
    //Pressing the space key launches the ball if it's not already moving.
    //Finally, the game loop is started by calling requestAnimationFrame(loop) at the end of the code.
    requestAnimationFrame(loop);
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Game logic and drawing code goes here...

    // move paddle by it's velocity
    paddle.x += paddle.dx;

    // prevent paddle from going through walls
    if (paddle.x < wallSize) {
        paddle.x = wallSize
    } else if (paddle.x + brickWidth > canvas.width - wallSize) {
        paddle.x = canvas.width - wallSize - brickWidth;
    }

    // move ball by it's velocity
    ball.x += ball.dx;
    ball.y += ball.dy;

    // prevent ball from going through walls by changing its velocity
    // left & right walls
    if (ball.x < wallSize) {
        ball.x = wallSize;
        ball.dx *= -1;
    } else if (ball.x + ball.width > canvas.width - wallSize) {
        ball.x = canvas.width - wallSize - ball.width;
        ball.dx *= -1;
    }
    // top wall
    if (ball.y < wallSize) {
        ball.y = wallSize;
        ball.dy *= -1;
    }

    // reset ball if it goes below the screen
    if (ball.y > canvas.height) {
        ball.x = 130;
        ball.y = 260;
        ball.dx = 0;
        ball.dy = 0;
    }

    // check to see if ball collides with paddle. if they do change y velocity
    if (collides(ball, paddle)) {
        ball.dy *= -1;

        // move ball above the paddle otherwise the collision will happen again
        // in the next frame
        ball.y = paddle.y - ball.height;
    }

    // check to see if ball collides with a brick. if it does, remove the brick
    // and change the ball velocity based on the side the brick was hit on
    for (let i = 0; i < bricks.length; i++) {
        const brick = bricks[i];

        if (collides(ball, brick)) {
            // remove brick from the bricks array
            bricks.splice(i, 1);

            // ball is above or below the brick, change y velocity
            // account for the balls speed since it will be inside the brick when it
            // collides
            if (ball.y + ball.height - ball.speed <= brick.y ||
                ball.y >= brick.y + brick.height - ball.speed) {
                ball.dy *= -1;
            }
            // ball is on either side of the brick, change x velocity
            else {
                ball.dx *= -1;
            }

            break;
        }
    }

    // draw walls
    context.fillStyle = 'lightgrey';
    context.fillRect(0, 0, canvas.width, wallSize);
    context.fillRect(0, 0, wallSize, canvas.height);
    context.fillRect(canvas.width - wallSize, 0, wallSize, canvas.height);

    // draw ball if it's moving
    if (ball.dx || ball.dy) {
        context.fillRect(ball.x, ball.y, ball.width, ball.height);
    }

    // draw bricks
    bricks.forEach(function (brick) {
        context.fillStyle = brick.color;
        context.fillRect(brick.x, brick.y, brick.width, brick.height);
    });

    // draw paddle
    context.fillStyle = 'cyan';
    context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

// listen to keyboard events to move the paddle
document.addEventListener('keydown', function (e) {
    // left arrow key
    if (e.which === 37) {
        paddle.dx = -3;
    }
    // right arrow key
    else if (e.which === 39) {
        paddle.dx = 3;
    }

    // space key
    // if they ball is not moving, we can launch the ball using the space key. ball
    // will move towards the bottom right to start
    if (ball.dx === 0 && ball.dy === 0 && e.which === 32) {
        ball.dx = ball.speed;
        ball.dy = ball.speed;
    }
});

// listen to keyboard events to stop the paddle if key is released
document.addEventListener('keyup', function (e) {
    if (e.which === 37 || e.which === 39) {
        paddle.dx = 0;
    }
});

// start the game
requestAnimationFrame(loop);
let bg = [0, 0, 0];

let avgFPS = 0;
let numFPS = 0;

let debugMode = false;


// Calculate current and average FPS and update sidebar
function calcFPS() {
    let fps = frameRate();
    avgFPS += (fps - avgFPS) / ++numFPS;

    document.getElementById('fps').innerHTML = 'FPS: ' + fps.toFixed(1);
    document.getElementById('avgfps').innerHTML = 'Avg. FPS: ' + avgFPS.toFixed(1);
}


/* Main p5.js functions */

function setup() {
    let c = createCanvas(600, 650);
    c.parent('game');
}

function draw() {
    background(bg);

    // Update status display
    calcFPS();
}


/* User input functions */

function keyPressed() {
    if (key === 'F') {
        debugMode = !debugMode;
        document.getElementById('debug').style.display = debugMode ? 'block' : 'none';
    }
}

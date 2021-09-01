let blue = 5;
let hit = 0;

var rectangles = [ //bullets
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },     //objects are place off screen at start at x: 999
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 },
    { x: 999, y: Math.random() * 500, w: 5, h: 45, speed: 15 }
]

var ground = [
    { x: 0, y: 500, w: 500, h: 700, },
]


function spawn1() { //spawn bullets from array
    for(var i = 0; i < rectangles.length; i++) { //movement for bullets
        fill(0, 68, 255);
        let currentR = rectangles[i];
        rect(currentR.x, currentR.y, currentR.w, currentR.h);
        currentR.y += currentR.speed;
        if(currentR.y > ground[0].y) { //screen loop
            currentR.y = -100;
            if (hit == 10) { //check rain hits
                blue++;
                if (blue > 255 && ground[0].y != 0) {
                    ground[0].y--;
                }
                hit = 0;
            }
            hit++;
            currentR.x = Math.random() * 425;
        }
       
    }
    
}


function spawn2() { //spawn ground
    fill(25, 25, blue);
    let G = ground[0];
    rect(G.x, G.y, G.w, G.h);
}


function setup() {
    createCanvas(500, 600);
}

function draw() {
    background(188, 255, 159);
    spawn1();
    spawn2();
}
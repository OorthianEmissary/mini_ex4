//Button variation

//NOTE: It has a minor bug when starting, but actually works.
var on = false;

//Ball location
var ballLoc = {
    x: 0,
    y: 350
};

//Variations for X & Y Speed
var speed1 = {
    fartx: 14,
    farty: 10
    
};

function setup() {
    createCanvas(500, 500);
    console.log("Hello World")
}

function draw() {
    
    noStroke()
    background(217, 220, 214);
    
    
    //button color changing boolean
    
    if (on) {
        fill(154, 3, 30);
    } else {
        fill(15, 76, 92);
    }
    
    //button
    rectMode(CENTER);
    rect(width/2, height/2, 50, 50);
    
    //Ball
    fill(255, 107, 107);
ellipse(ballLoc.x, ballLoc.y, 50, 50);
    
    //Ball trigger on/off
    if(on) {
        
    ballLoc.x = ballLoc.x + speed1.fartx
    ballLoc.y = ballLoc.y + speed1.farty
    
    }
    
    //ball speed 2: X & Y.
    if(ballLoc.x > width - 25 || ballLoc.x < 0) {
        speed1.fartx = speed1.fartx * -1
    } else if(ballLoc.x < 0 + 25) {
        speed1.fartx = speed1.fartx * -1;
    }
    
    if(ballLoc.y > height - 25 || ballLoc.y < 0) {
        speed1.farty = speed1.farty * -1
    } else if(ballLoc.y < 0 + 25) {
        speed1.farty = speed1.farty * -1;
    }
    
    
    //text
    fill(108, 105, 141);
    
    textAlign(CENTER);
    text("Push me", width/2 - 20, height/2);
    text("blue is off, red is on", width/2, 20);
 
}

//knap
function mousePressed() {
    if(mouseX > 225 && mouseX < 275 && mouseY > 225 && mouseY < 275){
     on = !on   
    }
}
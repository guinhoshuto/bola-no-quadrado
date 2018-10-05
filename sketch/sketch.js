var screenW = window.innerWidth;
var screenH = window.innerHeight;

function setup() {
  // put setup code here
    canvas = createCanvas(screenW,screenH);

}

function draw() {
    background(0);
    fill(255);
    ellipse(screenW/2,screenH/2,10,10);

    noFill();
    stroke(255)

    for(var i = 0; i < 7; i++){
        ellipse(screenW/2,screenH/2,50*(i+1),50*(i+1));
        rect(screenW/2-25*(i+1),screenH/2-25*(i+1), 50*(i+1),50*(i+1));
    }


}

console.log("oi");

let sensor = new Gyroscope();
sensor.start();

sensor.onreading = () => {
    console.log("Angular velocity around the X-axis " + sensor.x);
    console.log("Angular velocity around the Y-axis " + sensor.y);
    console.log("Angular velocity around the Z-axis " + sensor.z);
};

sensor.onerror = event => console.log(event.error.name, event.error.message);
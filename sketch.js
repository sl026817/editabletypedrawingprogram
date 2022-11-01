let slider;
var colorPicker;
var button;
var inp;

function setup() {
  createCanvas(windowWidth, windowHeight);
    //createButton (50, 50)
  button = createButton('example image');
	button.position(20, 137)
	button.mousePressed(gotolink)
  
  button = createButton('reset sketch');
  button.position(25, 105);
  button.mousePressed(resetSketch);
  
  
   slider = createSlider(5, 360, 12);
  slider.position(20,20);
  slider .style ('width', '80px');
  slider2 = createSlider(5, 150, 5); //first two numbers are range, third number is starting value 
  slider2.position(20,40);
  slider2.style("width", "80px");
  colorPicker = createColorPicker("#BBE6E4");
  colorPicker.position(20, 65);
  colorPicker.style("width", "100px");
  inp = createInput('seal');
  inp.position(20, 170);
  inp.size(100);
  //inp.input(myInputEvent);


  background(255);
noStroke();
  fill (220)
  rect(10, 10, 310, 235);
   textSize (12);
   fill(000);
  text('Pen Size', 110, 33);
  text('Eraser Size (press any letter to erase)', 110, 53)
text ('Right Click to Save Artwork (you can erase this text)', 20, 210);
text ('Resizing Window Will Cause You to Lose Progress.', 20, 230);


}

function draw() {
  
    let val = slider.value();
let val2 = slider2.value();
  
  stroke(0);
fill (colorPicker.color())
  if (mouseIsPressed === true) {
    text(inp.value(), mouseX, mouseY);
    textSize (val)
  }
  
   if (keyIsPressed === true) {    //eraser tool - hold any key and drag mouse around to use eraser
        noStroke();
        fill(255);
        ellipse(mouseX,mouseY,val2, val2)
        x=mouseY;
        y=mouseX;
  }

noStroke();
  fill (220)
  rect(10, 60, 120, 135);
  noStroke();
  fill (220)
  rect(10, 10, 95, 50);

}


function resetSketch() {
   background(255)
noStroke();
  fill (220)
  rect(10, 10, 310, 235);
textSize (12)
   fill(000)
  text('Pen Size', 110, 33);
  text('Eraser Size (press any letter to erase)', 110, 53)
text ('Right Click to Save Artwork (you can erase this text)', 20, 210)
  text ('Resizing Window Will Cause You to Lose Progress.', 20, 230)

}

function gotolink() {
	window.open('https://ibb.co/C1TM1XD');
}

function windowResized() {
  clear();
  resizeCanvas(windowWidth, windowHeight);
  
}

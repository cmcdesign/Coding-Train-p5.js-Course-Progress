/*  10.01.2020

NOTES FOR "Code! Programming with p5.js" online course
- by Big Pappa Dan Shiffman

COURSE GOALS
  1) Explain how computational media is different from traditional media.
  2) Demonstrate an understanding of computer programming.
  3) Learn how to learn the tools they need to accomplish the projects that interest them in computational media.

1.1 INTRODUCTION

You're writing instructions for the computer to follow.
p5.js - this is a Javascript library.

  Algorithim - a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.

  Syntax - the arrangement of words and phrases to create well-formed insturctions for the computer to follow. Each programming language can have it's own special syntax.

  Library -  a collection of non-volatile resources used by computer programs, often for software development. These may include configuration data, documentation, help data, message templates, pre-written code and subroutines, classes, values or type specifications.

1.3 - SHAPES & DRAWING

instruction/command/function name
function name(arguments, arguments)close command

createCanvas(400, 400);
ellipse(200, 200, 20, 20);

*/

// 1.3 - SHAPES & DRAWING EXERCISE
// Make your own picture and only use the 2D Primitives.
// Use only two of each primative.

function setup() {
  createCanvas(1100, 1100);
}

function draw() {
  background(0);

// WHITE FILL, BLACK STROKE

  stroke(0);
  strokeWeight(2);
  fill(255);

  arc(900, 300, 1600, 800, HALF_PI, PI);
  arc(700, 200, 1200, 800, HALF_PI, PI);
  ellipse(700, 400, 150, 500);
  ellipse(900, 550, 200, 400);
  line(570, 400, 850, 340);
  rect(100, 640, 110, 360);
  rect(830, 50, 200, 160);
  square(300, 870, 80);
  square(950, 250, 60);
  circle(100, 110, 90);

// BLACK CIRCLE, NO STROKE

  fill(0);
  noStroke();

  circle(400, 200, 350);

// HEAVY POINTS

  stroke(0);
  strokeWeight(20);

  point(880, 100);
  point(135, 965);

// NO FILL, WHITE STROKE

  stroke(255);
  strokeWeight(2);
  noFill();

  line(530, 780, 840, 960);
  quad(900, 780, 1050, 870, 860, 1050, 1050, 980);
  quad(250, 70, 600, 100, 350, 150, 350, 300);
  triangle(250, 580, 400, 760, 330, 810);
  triangle(340, 950, 380, 1020, 300, 1020);

}

function keyPressed() {
  if (keyCode === RETURN) {
    saveCanvas('2D-Primitives', 'jpg');
  }
}

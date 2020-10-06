/*

MADE: 10.05.2020
DESIGNER: CHRIS COREY

Still trying to figure out arcs so this code might not be "right". I'm a visual person so being able to see a variety of arcs with the code will be a nice cheet sheet moving forward. The p5.js reference page helps a bit but after reading it I'm still not 100% on how these things work. Hell, after making this I'm still not 100% on it. But it helped me a little and I hope it can help other "visual learners" new to p5.js.

*/

function setup() {
  createCanvas(1100, 1550);
}

function draw() {
  background(0);

  noFill();
  stroke(255);
  strokeWeight(2);

  var y = 175;
  var x = 175;

  while(x < 950) {
    line(x, 50, x, 1500);
    x += 150;
    
  }

  while(y < 1400) {
    line(50, y, 1050, y);
    y += 150;
  }

/* -------------- FIRST ROW -------------- */

arc(100, 100, 100, 100, PI, PI);
arc(250, 100, 100, 100, PI, TWO_PI + 3);
arc(400, 100, 100, 100, PI, TWO_PI + 2.5);
arc(550, 100, 100, 100, PI, TWO_PI + 2);
arc(700, 100, 100, 100, PI, HALF_PI);
arc(850, 100, 100, 100, PI, HALF_PI - .5);
arc(1000, 100, 100, 100, PI, HALF_PI - 1);

/* -------------- SECOND ROW -------------- */

arc(100, 250, 100, 100, PI, TWO_PI);
arc(250, 250, 100, 100, PI, TWO_PI - 1);
arc(400, 250, 100, 100, PI, TWO_PI - 1.5);
arc(550, 250, 100, 100, PI, TWO_PI - 2);
arc(700, 250, 100, 100, PI, TWO_PI - 2.5);
arc(850, 250, 100, 100, PI, TWO_PI - 2.8);
arc(1000, 250, 100, 100, PI, TWO_PI - 3.1);

/* -------------- THIRD ROW -------------- */

arc(100, 400, 100, 100, HALF_PI, HALF_PI);
arc(250, 400, 100, 100, HALF_PI, QUARTER_PI);
arc(400, 400, 100, 100, HALF_PI, -QUARTER_PI);
arc(550, 400, 100, 100, HALF_PI, - 1);
arc(700, 400, 100, 100, HALF_PI, - HALF_PI);
arc(850, 400, 100, 100, HALF_PI, - 2);
arc(1000, 400, 100, 100, HALF_PI, - 3);

/* -------------- FOURTH ROW -------------- */

arc(100, 550, 100, 100, TWO_PI, TWO_PI);
arc(250, 550, 100, 100, TWO_PI, PI + HALF_PI + QUARTER_PI);
arc(400, 550, 100, 100, TWO_PI, PI + HALF_PI);
arc(550, 550, 100, 100, TWO_PI, PI);
arc(700, 550, 100, 100, TWO_PI, HALF_PI);
arc(850, 550, 100, 100, TWO_PI, QUARTER_PI);
arc(1000, 550, 100, 100, TWO_PI, QUARTER_PI - .5);

/* -------------- FIFTH ROW -------------- */

arc(100, 700, 100, 100, QUARTER_PI, PI);
arc(250, 700, 100, 100, QUARTER_PI, TWO_PI);
arc(400, 700, 100, 100, QUARTER_PI, HALF_PI);
arc(550, 700, 100, 100, QUARTER_PI, HALF_PI + 4);
arc(700, 700, 100, 100, QUARTER_PI, HALF_PI + 5);
arc(850, 700, 100, 100, QUARTER_PI, - HALF_PI);
arc(1000, 700, 100, 100, QUARTER_PI, TWO_PI + .5);

/* -------------- SIXTH ROW -------------- */

arc(100, 850, 100, 100, HALF_PI + QUARTER_PI, QUARTER_PI, PIE);

arc(250, 850, 100, 100, -PI - QUARTER_PI, -HALF_PI - QUARTER_PI, PIE);
arc(400, 850, 100, 100, PI + QUARTER_PI, HALF_PI + QUARTER_PI, PIE);

arc(550, 850, 100, 100, QUARTER_PI, HALF_PI + QUARTER_PI, PIE);
arc(550, 850, 100, 100, -HALF_PI - QUARTER_PI, -QUARTER_PI, PIE);

arc(700, 850, 100, 100, HALF_PI - QUARTER_PI, - QUARTER_PI, PIE);
arc(850, 850, 100, 100, -HALF_PI + QUARTER_PI, QUARTER_PI, PIE);

arc(1000, 850, 100, 100, -QUARTER_PI, -HALF_PI - QUARTER_PI, PIE);

/* -------------- SEVENTH ROW -------------- */

arc(100, 1000, 100, 100, PI, TWO_PI, PIE);
arc(250, 1000, 100, 100, PI, TWO_PI - 1, PIE);
arc(400, 1000, 100, 100, PI, TWO_PI - 1.5, PIE);
arc(550, 1000, 100, 100, PI, TWO_PI - 2, PIE);
arc(700, 1000, 100, 100, PI, TWO_PI - 2.5, PIE);
arc(850, 1000, 100, 100, PI, TWO_PI - 2.8, PIE);
arc(1000, 1000, 100, 100, PI, TWO_PI - 3.1, PIE);

/* -------------- EIGTH ROW -------------- */

arc(100, 1150, 100, 100, PI, PI, PIE);
arc(250, 1150, 100, 100, PI, TWO_PI + 3, PIE);
arc(400, 1150, 100, 100, PI, TWO_PI + 2.5, PIE);
arc(550, 1150, 100, 100, PI, TWO_PI + 2, PIE);
arc(700, 1150, 100, 100, PI, HALF_PI, PIE);
arc(850, 1150, 100, 100, PI, HALF_PI - .5, PIE);
arc(1000, 1150, 100, 100, PI, HALF_PI - 1, PIE);

/* -------------- NINTH ROW -------------- */

arc(100, 1300, 100, 100, HALF_PI, HALF_PI, CHORD);
arc(250, 1300, 100, 100, HALF_PI, QUARTER_PI, CHORD);
arc(400, 1300, 100, 100, HALF_PI, -QUARTER_PI, CHORD);
arc(550, 1300, 100, 100, HALF_PI, - 1, CHORD);
arc(700, 1300, 100, 100, HALF_PI, - HALF_PI, CHORD);
arc(850, 1300, 100, 100, HALF_PI, - 2, CHORD);
arc(1000, 1300, 100, 100, HALF_PI, - 3, CHORD);

/* -------------- TENTH ROW -------------- */

arc(100, 1450, 100, 100, HALF_PI + QUARTER_PI, QUARTER_PI, CHORD);

arc(250, 1450, 100, 100, -PI - QUARTER_PI, -HALF_PI - QUARTER_PI, CHORD);
arc(400, 1450, 100, 100, PI + QUARTER_PI, HALF_PI + QUARTER_PI, CHORD);

arc(550, 1450, 100, 100, QUARTER_PI, HALF_PI + QUARTER_PI, CHORD);
arc(550, 1450, 100, 100, -HALF_PI - QUARTER_PI, -QUARTER_PI, CHORD);

arc(700, 1450, 100, 100, HALF_PI - QUARTER_PI, - QUARTER_PI, CHORD);
arc(850, 1450, 100, 100, -HALF_PI + QUARTER_PI, QUARTER_PI, CHORD);

arc(1000, 1450, 100, 100, -QUARTER_PI, -HALF_PI - QUARTER_PI, CHORD);

}

function keyPressed() {
  if (keyCode === RETURN) {
    saveCanvas('2D-Primitives', 'jpg');
  }
}

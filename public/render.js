const { p5: P5 } = window;

const COURT_SIZE = { x: 1000, y: 600 };
const BALL_RADIUS = 15;

const renderer = new P5((sketch) => {
  const renderBall = (position, diameter) => {
    sketch.fill(255);
    sketch.stroke(255);
    sketch.circle(position.x, position.y, diameter);
  };

  // This function is called once to set up the canvas
  sketch.setup = () => {
    sketch.createCanvas(COURT_SIZE.x, COURT_SIZE.y);
  };
  
  // This function is called on every frameand is used to update the canvas
  sketch.draw = () => {
    sketch.background(0);
    renderBall(window.ballPosition, BALL_RADIUS * 2);
  };
}, document.getElementById('game'));

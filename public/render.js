import { COURT_SIZE, BALL_RADIUS } from './config.js';

const { p5: P5 } = window;

const start = () => new P5((sketch) => {
  const renderBall = (position, diameter) => {
    sketch.fill(255);
    sketch.stroke(255);
    sketch.circle(position.x, position.y, diameter);
  };

  const renderCourt = () => {
    sketch.stroke(255);
    sketch.drawingContext.setLineDash([10, 10]);
    sketch.line(COURT_SIZE.x / 2, 0, COURT_SIZE.x / 2, COURT_SIZE.y);

    sketch.drawingContext.setLineDash([]);
    sketch.fill(0, 0);
    sketch.rect(0, 0, COURT_SIZE.x, COURT_SIZE.y);
  };

  // This function is called once to set up the canvas
  sketch.setup = () => {
    sketch.createCanvas(COURT_SIZE.x, COURT_SIZE.y);
  };

  // This function is called on every frameand is used to update the canvas
  sketch.draw = () => {
    sketch.background(0);
    renderCourt();
    renderBall(window.ballPosition, BALL_RADIUS * 2);
  };
}, document.getElementById('game'));

export default {
  start,
};

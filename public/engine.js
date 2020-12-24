const { Engine, Events, Bodies, World, Resolver, Runner } = window.Matter;

Resolver._restingThresh = 0.01; // Reduce velocity threshold required for engine to calculate ball bounces

const COURT_SIZE = { x: 1000, y: 600 };
const BALL_RADIUS = 15;

const engine = Engine.create();

// Create the ball body
const ball = Bodies.circle(100, 100, BALL_RADIUS, { label: 'ball' });

const wallProperties = { isStatic: true };
const walls = [
  Bodies.rectangle(COURT_SIZE.x / 2, -25, COURT_SIZE.x, 50, wallProperties), // top
  Bodies.rectangle(COURT_SIZE.x / 2, COURT_SIZE.y + 25, COURT_SIZE.x, 50, wallProperties), // bottom
  Bodies.rectangle(-25, COURT_SIZE.y / 2, 50, COURT_SIZE.y, wallProperties), // left
  Bodies.rectangle(COURT_SIZE.x + 25, COURT_SIZE.y / 2, 50, COURT_SIZE.y, wallProperties), // right
];

Events.on(engine, 'afterUpdate', () => {
  window.ballPosition = ball.position;
});

// Add physics bodies to the matterjs world
World.add(engine.world, [ball, ...walls]);

const runner = Runner.create();
Runner.run(runner, engine);

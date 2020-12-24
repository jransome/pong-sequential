const { Engine, Events, Bodies, World, Resolver, Runner } = window.Matter;

Resolver._restingThresh = 0.01; // Reduce velocity threshold required for engine to calculate ball bounces

const BALL_RADIUS = 15;

const engine = Engine.create();

// Create the ball body
const ball = Bodies.circle(100, 100, BALL_RADIUS, { label: 'ball' });

Events.on(engine, 'afterUpdate', () => {
  window.ballPosition = ball.position;
});

// Add physics bodies to the matterjs world
World.add(engine.world, [ball]);

const runner = Runner.create();
Runner.run(runner, engine);

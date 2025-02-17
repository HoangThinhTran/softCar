const { VerletPhysics2D, VerletParticle2D, VerletSpring2D } = toxi.physics2d;

const { GravityBehavior } = toxi.physics2d.behaviors;

const { Vec2D, Rect } = toxi.geom;

let physics;

let particles = [];
let springs = [];

function setup() {
    createCanvas(800, 800);

    physics = new VerletPhysics2D();

    let bounds = new Rect(0, 0, width, height);
    physics.setWorldBounds(bounds);


    particles.push(new Particle(200, 100));
    particles.push(new Particle(400, 100));
    particles.push(new Particle(400, 300));
    particles.push(new Particle(200, 300));
    // particles.push(new Particle(200, 300));
    // particles.push(new Particle(250, 200));

    springs.push(new Spring(particles[0], particles[1], 0.01));
    springs.push(new Spring(particles[1], particles[2], 0.01));
    springs.push(new Spring(particles[2], particles[3], 0.01));
    springs.push(new Spring(particles[3], particles[0], 0.01));
    springs.push(new Spring(particles[0], particles[2], 0.01));
    springs.push(new Spring(particles[1], particles[3], 0.01));
    // springs.push(new Spring(particles[0], particles[3], 0.1));
    // springs.push(new Spring(particles[1], particles[4], 0.1));
    // springs.push(new Spring(particles[2], particles[5], 0.1));

}

function draw() {
    background(150);

    physics.update();

    beginShape();
    for(let particle of particles) {
        vertex(particle.x, particle.y);
        let num = (particles.indexOf(particle));
        particle.show();
        particle.count(num);
        particle.calMidPoint(particles[particle], particles[particle+1]);

    }
    endShape(CLOSE);

    // for(let particle of particles) {
    //     vertex(particle.x, particle.y);
    //     // for(let i = 1; i < 5; i++) {
    //         particles.push(new Particle(mx, my));
    //         spring.show();
    //         particle.calMidPoint(particles[particle], particles[particle+1]);
    //     // }
    // }
    
    // for(let particle of particles) {
    //     particle.show();
    // }

    // for(let spring of springs) {
    //     spring.show();
    // }

    if(mouseIsPressed) {
    particles[0].lock();
    particles[0].x = mouseX;
    particles[0].y = mouseY;
    particles[0].unlock();
    }

}

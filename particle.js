class Particle extends VerletParticle2D {
    constructor(x, y) {
        super(x ,y);
        this.r = 8;
        physics.addParticle(this);
    }
    show() {
        fill(100);
        stroke(0);
        circle(this.x, this.y, this.r * 2);
    }
    count(num) {
        fill('green');
        textSize(100);
        text(num+1, this.x, this.y);
    }
    calMidPoint(m1, m2) {
        let length = dist(m1.x, m1.y, m2.x, m2.y);
        let midPointx = (m1.x + m2.x) / 2;
        let midPointy = (m1.y + m2.y) / 2;
        fill('blue');
    }
}

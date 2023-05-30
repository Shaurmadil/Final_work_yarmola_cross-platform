export abstract class Flat_Figure {
    abstract calculate_the_area(): number;
    abstract calculate_perimeter(): number;
}

export class Triangle extends Flat_Figure {
    public a: number;
    public b: number;
    public c: number;

    constructor(a: number, b: number, c: number) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    calculate_the_area(): number {
        // Формула Герона для обчислення площі трикутника
        const p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }

    calculate_perimeter(): number {
        return this.a + this.b + this.c;
    }
}

export class Rectangle extends Flat_Figure {
    public length: number;
    public width: number;

    constructor(length: number, width: number) {
        super();
        this.length = length;
        this.width = width;
    }

    calculate_the_area(): number {
        return this.length * this.width;
    }

    calculate_perimeter(): number {
        return 2 * (this.length + this.width);
    }
}

export class Trapezoid extends Flat_Figure {
    public base1: number;
    public base2: number;
    public height: number;
    public side1: number;
    public side2: number;

    constructor(
        base1: number,
        base2: number,
        height: number,
        side1: number,
        side2: number
    ) {
        super();
        this.base1 = base1;
        this.base2 = base2;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
    }

    calculate_the_area(): number {
        return ((this.base1 + this.base2) * this.height) / 2;
    }

    calculate_perimeter(): number {
        return this.base1 + this.base2 + this.side1 + this.side2;
    }
}

export class Circle extends Flat_Figure {
    public radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculate_the_area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculate_perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

export abstract class AbstractQuadrangle {
    public nameOfQuadrangle = 'Quadrangle';

    public side1: number;
    public side2: number;
    public side3: number;
    public side4: number;

    public angle12?: number;
    public angle14?: number;
    public angle23?: number;
    public angle34?: number;

    public constructor(side1: number, side2: number, side3: number, side4: number, ...rest: number[]) {
        if (side1 <= 0 || side2 <= 0 || side3 <= 0 || side4 <= 0) {
            throw new Error('Sides must be greater than 0');
        }

        if (side1 + side2 + side3 <= side4 || side1 + side3 + side4 <= side2 || side1 + side2 + side4 <= side3) {
            throw new Error('It is not a quadrangle');
        }

        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.side4 = side4;

        if (rest.length === 4) {
            if (rest.some((angle) => angle <= 0)) {
                throw new Error('Angles must be greater than 0');
            }

            if (rest.reduce((acc, angle) => acc + angle, 0) !== 360) {
                throw new Error('Sum of angles must be 360');
            }

            this.angle12 = rest[0];
            this.angle23 = rest[1];
            this.angle34 = rest[2];
            this.angle14 = rest[3];

            if (rest.some((angle) => angle > 180)) {
                this.nameOfQuadrangle += ' Concave';
            } else {
                this.nameOfQuadrangle += ' Convex';
            }
        }
    }

    public abstract getArea(): number | string;

    public getPerimeter(): number {
        return this.side1 + this.side2 + this.side3 + this.side4;
    }

    public print(): void {
        console.log(`-------- ${this.nameOfQuadrangle} --------`);
        console.log(`Quadrangle type: ${this.nameOfQuadrangle}`);
        console.log(`Sides: ${this.side1}, ${this.side2}, ${this.side3}, ${this.side4}`);
        if (this.angle12 !== undefined) {
            console.log(`Angles: ${this.angle12}, ${this.angle23}, ${this.angle34}, ${this.angle14}`);
        }
        console.log(`Perimeter: ${this.getPerimeter()}`);
        console.log(`Area: ${this.getArea()}`);
    }
}

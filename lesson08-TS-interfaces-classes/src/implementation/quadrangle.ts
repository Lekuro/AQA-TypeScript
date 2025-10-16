import { AbstractQuadrangle } from 'src/abstraction/abstract-quadrangle';

export class Parallelogram extends AbstractQuadrangle {
    public static nameOfQuadrangle = 'Parallelogram';

    public constructor(side1: number, side2: number, angle12: number, angle34: number) {
        super(side1, side2, side1, side2, angle12, angle34, angle12, angle34);
    }

    public getArea(): string {
        return 'Area of parallelogram is product of base * height.';
    }
}

export class Kite extends AbstractQuadrangle {
    public static nameOfQuadrangle = 'Kite';

    public constructor(side1: number, side2: number, angle12: number, angle23: number, angle34: number) {
        super(side1, side1, side2, side2, angle12, angle23, angle34, angle12);
    }

    public getArea(): string {
        return 'Area of kite is one half of diagonals product.';
    }
}

export class Rectangle extends AbstractQuadrangle {
    public static nameOfQuadrangle = 'Rectangle';

    public constructor(side1: number, side2: number) {
        super(side1, side2, side1, side2, 90, 90, 90, 90);
    }

    public getArea(): number {
        return this.side1 * this.side2;
    }
}

export class Rhombus extends AbstractQuadrangle {
    public static nameOfQuadrangle = 'Rhombus';

    public constructor(side1: number, angle12: number, angle34: number) {
        super(side1, side1, side1, side1, angle12, angle34, angle12, angle34);
    }

    public getArea(): string {
        return 'Area of rhombus is one half of diagonals product.';
    }
}

export class Square extends AbstractQuadrangle {
    public static nameOfQuadrangle = 'Square';

    public constructor(side1: number) {
        super(side1, side1, side1, side1, 90, 90, 90, 90);
    }

    public getArea(): number {
        return this.side1 * this.side1;
    }
}

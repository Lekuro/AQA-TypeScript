import { AbstractQuadrangle } from 'src/abstraction/abstract-quadrangle';

export class Rectangle extends AbstractQuadrangle {
    public static nameOfQuadrangle = 'Rectangle';

    public constructor(side1: number, side2: number) {
        super(side1, side2, side1, side2, 90, 90, 90, 90);
    }

    public getArea(): number {
        return this.side1 * this.side2;
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

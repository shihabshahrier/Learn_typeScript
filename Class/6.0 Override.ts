interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) { }

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}

class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }

    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.toString());

const square = new Square(5);
console.log(square.toString());

export { };
export interface Engine {
    start(): void;
    stop(): void;
    increaseSpeed(): void;
    decreaseSpeed(): void;
}

export interface Car {
    accelerate(): void;
    decelerate(): void;
}

export class Wheel {
    private diameter: number;

    constructor(diameter: number) {
        this.diameter = diameter;
    }

    rotate(direction: string) {
        alert(`Wheel rotate to the ${direction}`);
    }
}

export class Transmission {
    private driveMode = "backWheel";
    changeMode(mode: string): void {
        this.driveMode = mode;
        alert(`Трансміссія змінена на ${mode}`);
    }
}

export class V6 implements Engine {
    private horsePower: number;
    private volume: number;

    constructor(horsePower: number, volume: number) {
        this.volume = volume;
        this.horsePower = horsePower;
    }

    start(): void {
        alert("Start V6 engine");
    }

    stop(): void {
        alert("Stop V6 Engine");
    }
    increaseSpeed(): void {
        alert("Increase speed");
    }
    decreaseSpeed(): void {
        alert("Decrease speed");
    }
}

export class MercedesBenz implements Car {
    private engine: V6;

    private transmission: Transmission;

    private wheels: Wheel[];

    constructor(engine: V6, transmission: Transmission, wheels: Wheel[]) {
        this.engine = engine;
        this.transmission = transmission;
        this.wheels = wheels;
    }

    startCar() {
        this.engine.start();
    }

    stopCar() {
        this.engine.stop();
    }

    accelerate(): void {
        this.engine.increaseSpeed();
    }
    decelerate(): void {
        this.engine.decreaseSpeed();
    }

    changeTransmissionMode(newMode: string) {
        this.transmission.changeMode(newMode);
    }

    turnCar(direction: string) {
        this.wheels.forEach((elem: Wheel) => {
            elem.rotate(direction);
        });
    }
}
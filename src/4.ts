class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    private tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
    }

    abstract openDoor(key: Key): void;

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person);
            console.log('Welcome in the House');
        } else {
            console.log(' Door is closed');
        }
    }
}

class MyHouse extends House {
    openDoor(key: Key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log(' The door is open!');
        } else {
            console.log('The door is closed!');
        }
    }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};

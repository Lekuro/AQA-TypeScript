const user1 = {
    _name: 'John',
    _age: 30,
    courses: ['html', 'css', 'js'],
    address: {
        country: 'Ukraine',
        city: 'Kyiv'
    },
    get name() {
        return this._name;
    },
    get age() {
        return this._age;
    },
    printUser() {
        console.log(`${this._name} has "${this.courses.join(', ')}" courses and lives in ${this.address.city}, ${this.address.country}`);
    }
};
user1.printUser();

class User {
    #name;
    #age;
    #courses;
    #address;
    constructor(name, age, courses, address) {
        this.#name = name;
        this.#age = age;
        this.#courses = courses;
        this.#address = address;
    }
    get name() {
        return this.#name;
    }
    get age() {
        return this.#age;
    }
    set courses(course) {
        this.#courses.push(course);
    }
    get courses() {
        return this.#courses.join(', ');
    }
    get city() {
        return this.#address.city;
    }
    get country() {
        return this.#address.country;
    }
    set city(city) {
        this.#address.city = city;
    }
    set country(country) {
        this.#address.country = country;
    }
    printUser() {
        console.log(`${this.#name} has "${this.#courses.join(', ')}" courses and lives in ${this.#address.city}, ${this.#address.country}`);
    }
}

const userFromClass = new User('Nick', 20, ['Python', 'css', 'Java'], { country: 'USA', city: 'Texas' });
userFromClass.printUser();

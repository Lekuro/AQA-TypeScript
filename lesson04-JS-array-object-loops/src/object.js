const user = {
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
user.printUser();

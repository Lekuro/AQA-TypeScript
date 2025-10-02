//node .\lesson05-JS-function\src\getter-setters.js
const years = {
    1: 'Freshman',
    2: 'Sophomore',
    3: 'Junior',
    4: 'Senior'
};
const subjects = ['Math', 'English', 'Geography', 'History', 'Biology', 'Chemistry', 'Physics', 'Computer Science'];
const student = {
    _name: 'Sandra',
    _age: 18,
    _subjects: subjects[3],
    _year: years[1],
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    },
    get age() {
        return this._age;
    },
    set age(value) {
        this._age = value;
    },
    get subjects() {
        return this._subjects;
    },
    set subjects(value) {
        this._subjects = value;
    },
    get year() {
        return this._year;
    },
    set year(value) {
        this._year = value;
    },
    showStudent() {
        return `Name: ${this._name}, Age: ${this._age}, Subjects: ${this._subjects}, Year: ${this._year}`;
    }
};
console.log(student.showStudent());

enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactive'
} // explicit typing

let userStatus: Status = Status.ACTIVE; // explicit typing
userStatus = Status.INACTIVE;

enum Color {
    RED = '#ff0000',
    GREEN = '#00ff00',
    BLUE = '#0000ff'
}
console.log(userStatus, Color);

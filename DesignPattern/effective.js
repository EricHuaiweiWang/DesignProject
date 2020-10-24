var nums = [4, 5, 1, 9, 0];
let numSort1 = nums.sort(function (a, b) {
    return a - b;
})

let numSort2 = nums.sort(a, b => b - a);

setTimeout(() => console.log("hi"), 3000)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    addAge() {
        this.age++;
    }
    setName(name) {
        this.name = name;
    }
}

let name='eric.wang'

let welcome=`welcome to learn ${name} javascript example code`;


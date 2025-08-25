class car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  detailes() {
    console.log(`this car is a ${this.brand} and is ${this.year} years old`);
  }
}

const car1 = new car("toyata", 23);
const car2 = new car("suzuki", 3);
car1.detailes();
car2.detailes();

class syudents {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
  passOrFail() {
    this.marks >= 40 ? console.log("pass") : console.log("fail");
  }
}

const student1 = new syudents("rajve", 94);
const student2 = new syudents("rajve", 54);
const student3 = new syudents("rajve", 44);
const student4 = new syudents("rajve", 54);
student1.passOrFail();
student3.passOrFail();
student2.passOrFail();











class rectangle {
  constructor(weidth, height) {
    this.weidth = weidth;
    this.height = height;
  }
  area() {
    console.log(this.height * this.weidth);
  }
}
const rec1 = new rectangle(21, 34);
const rec2 = new rectangle(231, 34);
const rec4 = new rectangle(21, 434);

rec1.area();
rec2.area();
rec4.area();

class Bankaccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposite(amount) {
    this.balance += amount;
    console.log(`your new balance is ${this.balance}`);
  }
  withdraw(amount) {
    this.balance -= amount;
    console.log(`your new balance is ${this.balance}`);
  }
}

let owner1 = new Bankaccount("owner1", 1000);
let owner2 = new Bankaccount("owner1", 3000);
let owner3 = new Bankaccount("owner1", 2000);

owner1.deposite(234);
owner1.deposite(234);
owner2.deposite(234);











class counter {
  constructor(count) {
    this.count = count;
  }
  increment() {
    this.count++;
    console.log(this.count);
  }
  decrement() {
    this.count--;
    console.log(this.count);
  }
  reset() {
    this.count = 0;
    console.log(this.count);
  }
}
let count1 = new counter(0);

count1.increment();
count1.increment();
count1.increment();
count1.reset();












class Animal {
  constructor(name) {
    this.name = name;
  }
  makesound() {
    console.log(`${this.name} makes sound`);
  }
}
class Dog extends Animal {
  constructor(names, breed, age, dob) {
    super(names);
    this.breed = breed;
    this.age = age;
    this.dob = dob;
  }
  makesound() {
    console.log(
      `${this.name} is of  ${this.breed} breed and of ${this.age} yrs old  `
    );
  }
}
let dog1 = new Dog("tommy", "alpha", 23, 2002);

dog1.makesound();











class shape {
  area() {
    return 0;
  }
}
class circle extends shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class squae extends shape {
  constructor(sides) {
    super();
    this.sides = sides;
  }

  area() {
    return this.side * this.side;
  }
}

const newCircle = new circle(5);

console.log(newCircle.area());








class ToDoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    console.log(`task added :${task}`);
  }
  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index,1);
      console.log(`your task :${task} is removed`);
    } else {
      console.log(`can't find this task`);
    }
  }

  listOfTask() {
    console.log("your tasks:");
    this.tasks.forEach((task,i) => {
      console.log(`${i+1} : ${task}`);
    });
  }
}

let myList = new ToDoList();
myList.addTask("do work");
myList.addTask("learn skills");
myList.addTask("home chores");
myList.addTask("wrkout");
myList.removeTask("home chores");
myList.listOfTask();










class Library{
  constructor(){
    this.books=[];
  
  }

   addBook({title,author,available}){
    this.books.push({title,author,available})
    console.log(`${title} book added`)

   }

   borrowBook({title,author,available}){
     this.books.find({title,author,available})
   }
   returnBook({title,author,available}){

   }

   listBook(){
    
   }







}
let newBook=new Library();
   







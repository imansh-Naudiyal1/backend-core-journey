// this :- "kon bol rha hai"......
// this ka matlab hota hai — jo object function call kare, this wahi hota hai.
// new keyword 4 kaam karta hai:

// 1. Naya empty object banata hai
// 2. this us object ko point karta hai
// 3. Code run hota hai
// 4. Automatically object return ho jaata hai

// const user = {
//   name: "Bhai",
//   greet: function(){
// console.log(this.name)
//   }
// }
// // user.greet()

// const user = {
//   name: "Bhai",
//   greet: function() {
//     // console.log(this.name)
//   }
// }
// const myFunc = user.greet
// // myFunc()  

// new keyword

// function User(name) {
//   this.name = name  
//   this.greet = function() {
//     console.log("Hello", this.name)
//   }
// }

// const user1 = new User("Bhai")
// const user2 = new User("Rahul")

// user1.greet()  
// user2.greet()  

// practice question

// const car = {
// brand: "Toyota",
// speed: 100,
//  describe: function(){
//     console.log(`Meri car ${this.brand} hai aur speed ${this.speed} hai`)
//  }
// }
// car.describe();

// Q2
function Person(name,age){
this.name = name;
this.age = age;
this.intro = function(){
  console.log(`mera naam ${this.name} hai aur meri age ${this.age} hai`);
};
}
const person1 = new Person("Himanshu" ,23);
const person2= new Person("Ujjwal" ,22);
person1.intro();
person2.intro();
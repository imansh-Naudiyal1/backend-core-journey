// // // Oop ke 4 pillar hote hain...
// // // 1. Encapsulation  — Data chupaao, sirf zaroori cheez dikhao
// // 2. Inheritance    — Ek class se doosri class banao (extends)
// // 3. Polymorphism   — Same method, alag behavior
// // 4. Abstraction    — Complex cheez ko simple banao

// // class BankAccount {
// //   #balance  // ← private — bahar se access nahi hoga

// //   constructor(owner, balance) {
// //     this.owner = owner
// //     this.#balance = balance
// //   }

// //   deposit(amount) {
// //     this.#balance += amount
// //     console.log(`₹${amount} deposit hua — Balance: ₹${this.#balance}`)
// //   }

// //   withdraw(amount) {
// //     if (amount > this.#balance) {
// //       console.log("Insufficient balance!")
// //       return
// //     }
// //     this.#balance -= amount
// //     console.log(`₹${amount} withdraw hua — Balance: ₹${this.#balance}`)
// //   }

// //   getBalance() {
// //     return this.#balance
// //   }
// // }

// // const account = new BankAccount("Bhai", 10000)
// // account.deposit(5000)
// // account.withdraw(3000)
// // console.log(account.getBalance());
// ____________________________________________
// class Animal {
//   speak() {
//     console.log("Kuch awaaz...")
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Woof!")  // override kiya
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log("Meow!")  // override kiya
// //   }
// // }

// // const animals = [new Dog(), new Cat()]
// // animals.forEach(animal => animal.speak());
// _____________________________________________________________________
// class Payment {
//   // Complex logic chupaao
//   #validateCard(cardNumber) {
//     return cardNumber.length === 16
//   }

//   #calculateFee(amount) {
//     return amount * 0.02
//   }

//   // Sirf ye simple method dikhao
//   pay(cardNumber, amount) {
//     if (!this.#validateCard(cardNumber)) {
//       console.log("Invalid card!")
//       return
//     }
//     const fee = this.#calculateFee(amount)
//     console.log(`Payment of ₹${amount} done! Fee: ₹${fee}`)
//   }
// }

// const payment = new Payment()
// payment.pay("1234567890123456", 1000)

// practice

class User{
#password;
constructor(name,email,password){
    this.name = name;
    this.email = email;
    this.#password = password;
}
login(inputPassword){
    if(inputPassword === this.#password){
        console.log("Welcome!");
    }else{
        console.log("Wrong password");
    }
}
getInfo(){
    console.log(`Name: ${this.name}, Email: ${this.email}`)
}
}
class PremiumUser extends User{
    constructor(name,email,password,subscriptionType){
        super(name,email,password);
        this.subscriptionType = subscriptionType;
    }
getSubscription(){
    console.log(`Subscription: ${this.subscriptionType}`);
}
speak(){
    console.log("Main Premium User Hoon")
}
}
const user2 = new PremiumUser("himanshu","himanshu@gamil.com","gold")
user2.login("secret123");
user2.getInfo();
user2.getSubscription();
user2.getInfo();
// class User {
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }
//     greet(){
//         console.log("Hello",this.name)
//     }
// }


// class Product {
//   constructor(name, price, category) {
//     this.name = name
//     this.price = price
//     this.category = category
//   }

//   getDetails() {
//     console.log(`
//       Product: ${this.name}
//       Price: ₹${this.price}
//       Category: ${this.category}
//     `)
//   }

//   isExpensive() {
//     return this.price > 1000
//   }
// }

// const phone = new Product("iPhone", 80000, "Electronics")
// const shirt = new Product("Nike Shirt", 800, "Clothing")
// const book = new Product("JS Book", 500, "Education")

// phone.getDetails()
// console.log("Expensive?", phone.isExpensive());

// shirt.getDetails()
// console.log("Expensive?", shirt.isExpensive())  
// ___________________________________________________________________________________________
/// challenge
class Restaurant{
    constructor(name,cuisine,rating){
        this.name =name
        this.cuisine = cuisine
        this.rating = rating
    }
    getInfo(){
        console.log(`${this.name}, ${this.cuisine} , ${this.rating}`)
    }
    isTopRated(){
        return this.rating > 4;
    }
}

class premiumRestaurant extends Restaurant{
    constructor(name,cuisine,rating,deliveryTime){
 super(name,cuisine,rating)
    this.deliveryTime = deliveryTime;
    }


getDeliveryTime(){
    console.log(`${this.name}, ${this.deliveryTime}`)
}
}
const mcdonalds = new Restaurant("McDonald's", "FastFood", 3.5)
const taj = new premiumRestaurant("Taj Hotel", "Indian", 4.8, 45)

mcdonalds.getInfo()
taj.getInfo()
console.log(taj.isTopRated())
taj.getDeliveryTime()

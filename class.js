// class in JavaScript
// declaring a class
// class Product {
//   constructor(itemName, price, discount, productCode) {
//     this.itenName = itemName;
//     this.price = price;
//     this.discount = discount;
//     this.productCode = productCode;
//   }
// }

// let pencil = new Product("pencil", 20, 2, "p10");

// const Product1=class Product{
//     constructor(itemName,price,discount,productCode){
//         this.itenName=itemName;
//         this.price=price;
//         this.discount=discount;
//         this.productCode=productCode;
//     }
//     get DiscountValue(){
//         return this.discount;
//     }

//     set setDiscountValue(value){
//         return this.discount=value;
//     }
//     discountValue(){
//         return this.discount*this.price/100
//     }
// };
// let chair = new Product1('chair',499,15,'c10');

// extending class
class Product {
  constructor(itemName) {
      console.log('passed by Furniture '+itemName);
    this.itemName = itemName;
  }
  getItemName() {
    return this.itemName + " is a Product ";
  }
}

class Furniture extends Product {
  constructor(itemName) {
    super(itemName);
  }
  getItemName() {
    return this.itemName + " is a Furniture";
  }
}

// let pencil = new Product("pencil", 20, 2, "p10");
let chair = new Furniture("chair", 499, 15, "c10");

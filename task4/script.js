//Class to calculate Uber price 
class Uber{
    constructor(rider,distance){
         this.rider = rider;
         this.distance = distance;
    }
    set Price(distance){
          this.price = distance * 10;//10rs per km
    }
    get Price(){
        return this.price;
    }

}

const rider1 = new Uber("Senthil",30);
rider1.Price = rider1.distance;
console.log(`${rider1.rider}: distance is ${rider1.distance}km and the price is ${rider1.price}rs`);

const rider2 = new Uber("Guna",35);
rider2.Price = rider2.distance;
console.log(`${rider2.rider}: distance is ${rider2.distance}km and the price is ${rider2.price}rs`);
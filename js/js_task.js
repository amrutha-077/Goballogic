
//ass-1
// // let myCar = {
// //     brand: 'Ford',
// //     speed: 200,
// //     accelerate:function(status)
// //     {
// //         console.log(`${this.brand} running at ${status}km/hr`);
// //     },
// //     brake:function(status)
// //     {
// //         console.log(`${this.brand} running at ${status}km/hr`);
// //     },
// //     describe:function(status)
// //     {
// //         console.log(`${this.brand} running at ${status}km/hr`);
// //     }

// // };
// // console.log(myCar.accelerate(150))
// // console.log(myCar.brake(100))
// console.log(myCar.describe(180))


// ass-2

let myCar = {
    brand: 'Ford',
    speed: 200,
    motion: 'moving',
    accelerate:function(status)
    {
        console.log(`${this.brand} running at ${status}km/hr ; status checking:the car is ${this.motion}`);
    },
    brake:function(status)
    {
        console.log(`${this.brand} running at ${status}km/hr ; status checking:the car is not ${this.motion}`);
    }
}
console.log(myCar.accelerate(150))
console.log(myCar.brake(0))







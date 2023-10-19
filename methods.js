// A method is nothing but a function inside and object.

let laptop = {
    ram: 8,
    brand: "HP",
    processor: "i7",
    greet: function ()
    {
        //console.log("Hello!!!");
        return "Hello!!"
    },
    add: function(num1 , num2)
    {
        return num1 + num2
    }
}
let output = laptop.greet()
console.log(output)

console.log(laptop.add(2,2))
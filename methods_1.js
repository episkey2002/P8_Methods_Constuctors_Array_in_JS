let laptop1 = {
    ram: 16,
    brand: "HP",
    processor: "i5",
    storage: "1TB",
    //this. representesd the current object
    getConfig: function()
    {
        console.log(this.ram);
        console.log(this.processor);
        console.log(this.storage)
    },
    compare: function(other_laptop)
    {
        if(this.ram > other_laptop.ram){
            console.log(`The faster laptop is: ${this.brand}`)
        }
        else{
            console.log(`The faster laptop is :${other_laptop.brand}`)
        }
    }
}

let laptop2 = {
    ram: 8,
    brand: "LIGION",
    processor: "i7",
    storage: "2TB",
    //this. representesd the current object
    getConfig: function()
    {
        console.log(this.ram);
        console.log(this.processor);
        console.log(this.storage)
    }
}
laptop1.getConfig()
laptop2.getConfig()

laptop1.compare(laptop2)
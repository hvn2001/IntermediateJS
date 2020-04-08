var animal = {
    animalInfo: function () {
        return this.name + " is " + this.age + " years old"
    }
}

var cat = {
    name: "Tom",
    age: 5
}
console.log(animal.animalInfo.call(cat));
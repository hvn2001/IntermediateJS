var animal = {
    animalInfo: function (sound, food) {
        return this.name + " is " + this.age + " years old" + " . He makes the sound " + sound + " and eats " + food
    }
}

var cat = {
    name: "Tom",
    age: 5
}
console.log(animal.animalInfo.apply(cat, ["meow", "fish"]));
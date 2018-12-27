console.log("Hello world main.js")


const myPetDog = {
    name: "Murphy",
    species: "Dog",
    nicknames: ["Bubba", "Bubby", "Murph", "Goodboy"],
    age: 1,
    sex: "Male",
    birthday: "Feb 2017",
    breed: "Bulldog 37.5%, Australian Sheperd 25%, Miniature American Shepard 25%, American Staffordshire 12.5%",
    profilePic: ":dog pic goes here:",
};
// injecting myPetDog properties into the DOM
let bloop = document.getElementById("bloop");
bloop.textContent = myPetDog.name;
bloop.textContent += ` is ${myPetDog.age} year old`;

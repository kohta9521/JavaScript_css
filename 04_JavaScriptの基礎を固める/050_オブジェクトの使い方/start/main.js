const person = {
    name:  ["Code", "Mafia"],
    age: 32,
    gender: "male",
    interests: {
        sports: "soccer",
        music: "piano"
    },
    getFullName: function() {
        console.log(this.name[0] + this.name[1]);
    }
};

//ドット技法
person.age = 12;

//ブラケット技法
person["age"] = 33;


console.log(person.interests.sports);
console.log(person.age);

person.getFullName();

const s = "Hello World";
console.log(s);


s.toUpperCase();

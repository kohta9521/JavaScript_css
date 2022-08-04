const person = {
    name: ['Code', 'Mafia'],
    age: 32,
    gender: 'male',
    interests: {
        sports: 'soccer',
        music: 'piano'
    },
    getFullName: function() {
        console.log(this.name[0] + this.name[1])
    }
};

console.log(person.interests.sports);
person['age'];
person.name;

person.getFullName();

const s = "hello world";
s.toUpperCase();

// // const person = "Jhon dhao";

// // console.log(person);

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };
//  console.log(person.firstName + " " + person.lastName);


 const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

console.log(person.firstName + " is " + person.age + " years old ");



const person = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  const person2 = person;
  person2.age = 10; 


  console.log(person2);
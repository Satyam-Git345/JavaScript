//Nested Objects
const Student={
    firstName:"Satyam",
    lastName:"Shukla",
    class:12,
    Address:"Bhopal",
    Branch:"CSE",

    marks:{
        Maths:70,
        Science:78,
        English:67,
        Hindi:88
    },
    
    //Merthods
    Greet: function() {
        console.log("Good Morning")
    }
};




console.log(Student);
console.log(Student.marks);

console.log(Student.marks.Maths);
console.log(Student.marks.Science);
console.log(Student.marks.English);
console.log(Student.marks.Hindi);

console.log(Student.Greet());
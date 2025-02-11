let arr1 = ["html", "css", "js", "react", "node", "mongodb", ["string", true, 1234]];
// let arr2 = new Array()
console.log(arr1[2]);
console.log(arr1[6][1]);

//! object ==> it is a data structure in which we can store data in key value pair and each key value pair should be separated by comma

//! student's name, age and phoneNumber

let student = {
  studentName: "abc",
  age: 34,
  phoneNumber: 1234567890,
  skills: ["java", "sql"],
  address: {
    state: "UP",
    city: "Noida",
    pinCode: 201301,
  },
  1: "value",
  age: 24,
  key: true,
  key1: null,
  key2: undefined,
  key3: function () {
    console.log("greet");
  },
  key4: new Date(),
};

console.log(student[1]);

// in order to display the object properties we can use dot notation
console.log(student);

//! difference between function and a method  ==> a function inside an object is called method
let greet = () => {
  console.log("greet");
};

//! json ==> javascript object notation. it is used to exchange data between client and server, server and server, because it is language independent. dates, undefined and functions are allowed in JSON.

/*
[
    {
        "studentName":"abc",
        "age":12,
        "phoneNumber":12345678
    },

    {
        "studentName":"abc",
        "age":12,
        "phoneNumber":12345678
    }
]
*/

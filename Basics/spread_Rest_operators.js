const hobbies1 =['programing','Driving'];
const hobbies2 = hobbies1.slice()
hobbies2.push('cooking');
console.log(hobbies1);
console.log(hobbies2);

// in this code copying the array value one to another and push data into the array
 
const hobbies3 =['road','bike'];
const hobbies4 =[hobbies3]
hobbies4.push('car');  

console.log(hobbies3);
console.log(hobbies4);

// in this code we created array in side the array 

const hobbies5 =['land','water'];
const hobbies6 =[...hobbies5]
hobbies5.push('fire');

console.log(hobbies5);
console.log(hobbies6);

// in this method like same as slice method

const obj1 = {name:'krishna'};

const obj2 ={...obj1,age:26};

//in this code we are copying one object to another object 
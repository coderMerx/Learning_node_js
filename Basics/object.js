// object
const person1 = {
    name:'krishna',
    age:24
}
console.log(person1);

//object inside a function
const person2 ={
    name:'kumar',
    age:26,
    greet : function(){
        console.log('Hello '+this.name);

    }
}
person2.greet()

//global object function

const add23 = 3311; //global varable

const person3 = {
    name: 'sam',
    age: 25,
    value: function () {
        console.log('global value ' + add23); // ✅ works
    }
}

person3.value();

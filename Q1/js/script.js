let obj1 = {name: "Person 1", age: 5};
let obj2 = {age: 5, name: "Person 1"};

function compareObjects(a1, a2) {
   
    const str1 = JSON.stringify(a1, Object.keys(a1).sort());
    const str2 = JSON.stringify(a2, Object.keys(a2).sort());

    return str1 === str2;
}

console.log(compareObjects(obj1, obj2)); 

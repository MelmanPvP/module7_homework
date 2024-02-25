 const name = 'Dima';
const obj = {
    name : 'Dima',
    age: 18
}
function f(obj,name) {
    for ( let key in obj) {
         if (obj[key] === name){
             return true;
         }
         else  {
             return false;
         }
    }
}
console.log(f(obj,name))

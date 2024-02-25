const obj ={
    name : 'Dima',
    age: 18
}
obj_proto = Object.create(obj)
obj_proto.sex = 'male';
obj_proto.forname = 'Tsarev';
console.log(obj_proto)
function f(obj) {

for ( let key  in obj_proto) {
    if (obj_proto.hasOwnProperty(key)){
        console.log('Собственный ключ: '+ key + ', собственное значение: ' +obj_proto[key] )
    }
}

}
f(obj)
// Object Types -- Interface -- 
export interface Person{
    name: string;
    age:number;
}
let person:Person = {
    name:'John',
    age:30 ,
}

// optional and readonly properties
interface Car{
    brand:string
    model:string
    year?:number
    readonly price:number
}

//Nested Objects
interface Address{
    street:string
    city:string
}
interface Employee{
    name:string
    age:number
    address:Address
}
let employee:Employee={
    name:'John',
    age:52,
    address:{street:'Main Street',city:'New York'}
}
 
//Type Assertions
let object:any ={
    x:10,
    y:20
}
let point = object as{x:number, y:number}

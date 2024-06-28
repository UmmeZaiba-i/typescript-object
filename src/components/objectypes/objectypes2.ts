export interface Hey{
    id: number;
}
// Spread Operator
let baseObject = {
    a:1,
    b:2
}
let derivedObject ={...baseObject, c:3, d:4}
let {a, ...rest} = derivedObject
console.log(a)
console.log(rest)

// Destructuring
let person = {
    name: 'Alice',
    age:30,
}
let {name, age} = person;
console.log(name)
console.log(age)



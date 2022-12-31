const Number = 35;
const BigInt = 10n;
const String = 'Vasya top';
const Boolean = true;
let Undefined;
const Null = null; 
const Object = {};
const symbol = Symbol("id");
function Function() {}

const typeofNumber = typeof Number
const typeofBigInt =  typeof BigInt
const typeofString = typeof String
const typeofBoolean = typeof Boolean
const typeofUndefined = typeof Undefined
const typeofNull = typeof Null
const typeofObject = typeof Object
const typeofSymbol = typeof symbol
const typeofFunction = typeof Function

const message = `
    Number is ${typeofNumber}
    BigInt is ${typeofBigInt}
    String is ${typeofString}
    Boolean is ${typeofBoolean}
    Undefined is ${typeofUndefined}
    Null is ${typeofNull}
    Object is ${typeofObject}
    symbol is ${typeofSymbol}
    Function is ${typeofFunction}
`

alert(message)


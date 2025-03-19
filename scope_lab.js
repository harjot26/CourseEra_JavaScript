// Global scope:
var globalVar = "I'm a global Variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

{
    //Block scope:
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const"
}

console.log(blockVar);  // "I'm a block-scoped var" because it is not block-scoped.
console.log(blockLet);  // Reference Error because it is block scoped.
console.log(blockConst); // Reference Error because it is block scoped.

// Function scope:

function show(){
    var functionVar = "I'm a Function scope var";
    let functionLet = "I'm a block-scoped let";
    let functionConst = "I'm a block-scoped const"
}
show()
// Var can be accessed inside the function but not out side of the function same goes for others as well.
console.log(functionVar);  // Throws ReferenceError
console.log(functionLet);  // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError

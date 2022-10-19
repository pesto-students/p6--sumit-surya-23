function createStack() {
    // the variable defined in function scope is private to that function
    var x = [];
    return {
        // these functions are previleged to access "x" as they are in same scope
        push(item) {
         x.push(item);
            console.log(x);
        },
        pop() {
            x.pop();
            console.log(x);
        }
    }
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop() // pops 5

stack.x; // undefined  


// Result : "x" is accessible outside createStack()
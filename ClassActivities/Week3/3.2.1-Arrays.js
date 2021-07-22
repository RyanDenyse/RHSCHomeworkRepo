// create an Array using an Array literal
let x = 5
let y = "hello"
const items = [
    x,
    y,
    4,
    "green",
    true, 
    false,
    null,
    [9, 0, 9, 8, 5],
    ["this", "that"],
    900,
    [],
    [true]
]
// access the 1st item in the Array
console.log(items[0]);

// access the last item in the Array
console.log(items.length -1,);

// print the length of the Array
console.log(items.length);

// use the length property to access the last item in the Array
console.log(items[items.length -1]);

// with for...of, loop over the Array, modify the value and add to a different Array
for (let elementInTheArray of items) {
    console.log(elementInTheArray + 1)
}
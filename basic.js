var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

var sandwiches_object = JSON.parse(sandwiches)
var fries_object = JSON.parse(fries)

console.table(sandwiches)
console.table(sandwiches_object)

document.write(`My favorite sandwich is a `+sandwiches_object.sandwich+" which has approximately "+sandwiches_object.calories+` calories, along with it I enjoy eating ${fries_object.fries_size} which have about ${fries_object.calories} calories.`)
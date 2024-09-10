// Part 1 ---------------------

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
let space = 0.8;
let plants = 20;

// Predict the plant growth after a specific number of weeks.
let weeks = 3;

let growth = (plants * weeks * 2)
console.log(growth)

// Implement control flow to make decisions on whether the plants should be pruned, monitored or planted:
if (growth > (0.80 * area)) {
    console.log('Plants should be pruned')
} else if (growth > (0.50 * area) && growth < (0.80 * area)){
    console.log('Plants should be monitored')
} else if (growth < (0.50 * area)) {
    console.log('Plants should be planted')
}

// Part 2 ---------------------
let extraSpace = (100 )

// Part 3 ---------------------
try {
    if (plants > space) {
        console.log('Not enough space!');
    } else {
    throw "Error. The space required exceed the amount of space available ";
    }
}
catch (err) {
    console.log(err)
}

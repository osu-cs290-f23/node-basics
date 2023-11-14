console.log("Hello, world!")
// console.log("== process.env:", process.env)
console.log("== process.env.MY_ENV_VARIABLE:", process.env.MY_ENV_VARIABLE)

console.log("== __filename:", __filename)
console.log("== __dirname:", __dirname)

// var circumference = require("./circle")
// console.log("== circumference(5):", circumference(5))

var circle = require("./lib/circle")
console.log("== circle:", circle)
console.log("== circle.circumference(5):", circle.circumference(5))
console.log("== circle.area(5):", circle.area(5))

var figlet = require("figlet")
figlet("Hello, CS 290!!!", function (err, data) {
    if (!err) {
        console.log(data)
    }
})

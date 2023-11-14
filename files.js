var fs = require("fs")

var fileContents = fs.readFileSync("./hello.js", "utf8")
console.log("== file contents:", fileContents)

// fs.readFile("./hello.js", "utf8", function (err, data) {
//     if (!err) {
//         console.log("== file contents:", data)
//     }
// })

console.log("== This comes after fs.readFile()")
console.log("== This also comes after fs.readFile()")

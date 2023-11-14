function circumference(r) {
    return 2 * Math.PI * r
}
// exports.circumference = circumference

function area(r) {
    return Math.PI * r * r
}
// exports.area = area

// module.exports = "This is a string with info about circles"
// module.exports = circumference
module.exports = {
    circumference: circumference,
    area: area
}

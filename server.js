var http = require("http")

var app = http.createServer(function (req, res) {
    console.log("== Request received:")
    console.log("  -- Method:", req.method)
    console.log("  -- URL:", req.url)
    console.log("  -- Headers:", req.headers)

    var responseBody = ""
    responseBody += "<html>"
    responseBody += "<body>"
    responseBody += "<h1>Hello, CS 290!</h1>"
    responseBody += "<p>You made your request from this browser: " + req.headers["user-agent"] + "</p>"
    responseBody += "</body>"
    responseBody += "</html>"

    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")

    res.write(responseBody)

    res.end()
})

app.listen(8000, function () {
    console.log("== Server is listening on port 8000")
})

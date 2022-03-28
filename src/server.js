let express = require("express")

let connect = require("./config/db")

let app = require("./index")

app.listen(5000, async () => {
    try {
        await connect()
        console.log("This is port 5000")
    } catch (error) {
        console.log(error)
    }
})
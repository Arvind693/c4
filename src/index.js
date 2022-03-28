let express = require("express")
let app = express()
module.exports = app
let userController = require("./controller/user")
app.use(express.json())
let { register, login } = require("./controller/auth");
let todoController = require("./controller/todoController")
app.use("/todos", todoController)
app.use("/users", userController)
app.post("/register", register);
app.post("/login", login);

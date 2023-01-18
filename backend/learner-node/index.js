const express = require("express");
const cors = require("cors");
const { initDB } = require("./db/index");
const routes = require('./routes/routes.js');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger_output.json');
const { version } = require("./package.json");

const app = express();

// To enable cors
app.use(cors({ origin: '*', methods: "GET,POST,PATCH,DELETE" }));

// To enable request body input
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//to use swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//init mongo db
initDB();

//basic get route
app.get('/', (req, res) => {
    res.json({ message: "hello aadil, your api is working", version });
})

//to use routes
app.use(routes);

const PORT = 3000

//to start api on port
app.listen(PORT, () => {
    console.log(`Node api started on port : ${PORT}`)
})

module.exports = app
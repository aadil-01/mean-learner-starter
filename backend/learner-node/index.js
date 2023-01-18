import path from 'path';
const express = require("express");
const cors = require("cors");
const { initDB } = require("./db/index");
const routes = require('./routes/routes.js');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger_output.json');
const { version } = require("./package.json");

const app = express();

const ROOT_FOLDER = path.join(__dirname, '..');
const SRC_FOLDER = path.join(ROOT_FOLDER, 'src');

// To enable cors
app.use(cors({ origin: '*', methods: "GET,POST,PATCH,DELETE" }));

// To enable request body input
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//init mongo db
initDB();

//basic get route
app.get('/', (req, res) => {
    res.json({ message: "hello aadil, your api is working", version });
})

//to use routes
app.use(routes);


const options = { customCssUrl: '/public/swagger-ui.css', customSiteTitle: "The Words That I Know API - Swagger" };
app.use('/public', express.static(path.join(SRC_FOLDER, 'public')));

//to use swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile,options))

const PORT = 3000

//to start api on port
app.listen(PORT, () => {
    console.log(`Node api started on port : ${PORT}`)
})

module.exports = app
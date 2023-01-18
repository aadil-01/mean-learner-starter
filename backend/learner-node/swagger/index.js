const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger/swagger_output.json'
const endpointsFiles = ['./routes/routes.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('../index.js')
})
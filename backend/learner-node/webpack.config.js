const CopyWebpackPlugin = require("copy-webpack-plugin");
const buildPath = __dirname + '/build'
module.exports = [
    {
        name: 'server',
        entry: './index.js',
        target: 'node',
        output: {
            path: buildPath,
            filename: 'bundle.js'
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns:
                [
                    { from: 'node_modules/swagger-ui-dist/swagger-ui.css', to: buildPath },
                    { from: 'node_modules/swagger-ui-dist/swagger-ui-bundle.js', to: buildPath },
                    { from: 'node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js', to: buildPath },
                    { from: 'node_modules/swagger-ui-dist/favicon-16x16.png', to: buildPath },
                    { from: 'node_modules/swagger-ui-dist/favicon-32x32.png', to: buildPath }
                ]
            })
        ]
    }
]
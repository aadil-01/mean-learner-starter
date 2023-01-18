const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = [
    {
        name: 'server',
        entry: './index.js',
        target: 'node',
        output: {
            path: __dirname + '/build',
            filename: 'bundle.js'
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns:
                [
                    { from: 'node_modules/swagger-ui-dist/swagger-ui.css', to: __dirname + '/build' },
                    { from: 'node_modules/swagger-ui-dist/swagger-ui-bundle.js', to: __dirname + '/build' },
                    { from: 'node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js', to: __dirname + '/build' },
                    { from: 'node_modules/swagger-ui-dist/favicon-16x16.png', to: __dirname + '/build' },
                    { from: 'node_modules/swagger-ui-dist/favicon-32x32.png', to: __dirname + '/build' }
                ]
            })
        ]
    }
]
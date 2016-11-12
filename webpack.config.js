module.exports = {
    
    entry: './scripts/index.js',

    output: {
        filename: './public/script.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },

    devtool: 'eval-source-map'
}

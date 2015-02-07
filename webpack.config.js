module.exports = {
    entry: {
        app: ['./app/index.js']
    },
    output: {
        filename: './app/bundle.js'
    },

    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.js/, loader: 'jsx-loader?harmony'}
        ]
    },
    node: {
        net: "empty",
        tls: "empty"
    }
};

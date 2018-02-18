module.exports = {
    // Using this code, you can debug in chrome dev tools
    devtool: 'eval-source-map',
    // start of react
    entry: './app/app.js',

    module: {
        loaders: [
            {
                // Webpack will only process files in our app folder.
                include: /app/,
                loader: 'babel-loader',
                query: {
                    // These are the specific transformations we'll be using.
                    presets: ['react', 'es2015']
                },
                // Only working with files that in in a .js
                test: /\.jsx?$/
            }
        ]
    },

    // The plain compiled JavaScript will be output
    output: {filename: 'public/bundle.js'}
};

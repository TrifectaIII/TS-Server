const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    // mode: 'production',
    // devtool: false,
    
    entry: './src/client.ts',
    
    module: {
        rules: [
            //ts rule
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
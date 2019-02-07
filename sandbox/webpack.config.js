const path = require('path');
const BundleTracker  = require('../index.js');

module.exports = {
    mode: 'development',
    context: __dirname,
    plugins: [
        new BundleTracker({
            path: __dirname,
            filename: './dist/webpack-stats.json',
            sriHashAlgorithm: 'sha512',
        }),
    ],
    entry: {
        main: ['./src/main.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
};

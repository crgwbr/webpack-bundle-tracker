const path = require('path');
const BundleTracker  = require('../index.js');

module.exports = {
    mode: 'development',
    context: __dirname,
    plugins: [
        new BundleTracker({
            path: __dirname,
            filename: './dist/webpack-stats.json',
            sriHashEnabled: true,
            sriHashAlgorithm: 'sha512',
            indent: 4,
        }),
    ],
    entry: {
        main: ['./src/main.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
};

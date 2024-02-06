const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const {merge} = require('webpack-merge');

const domain = process.env.PRODUCTION_ENV;
const packageJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    output : {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketingPlugin@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);
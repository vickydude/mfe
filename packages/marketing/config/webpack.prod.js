const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const {merge} = require('webpack-merge');
const packageJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    output : {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketingPlugin',
            filename : 'remoteEntry.js',
            exposes: {
                './MarketingIndex' : './src/bootstrap.js'
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);
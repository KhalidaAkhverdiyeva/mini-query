const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // Your existing configuration
    plugins: [
        // Other plugins
        new BundleAnalyzerPlugin()
    ]
};
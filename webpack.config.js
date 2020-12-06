const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        },
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin()
        ]
    }

    return config
}
const getFilenamePattern = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

const getBabelLoader = (presets) => {
    const loader = {
        loader: 'babel-loader',
        options: {
            presets: [
                '@babel/preset-env',
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
            ],
        },
    }

    if (presets) {
        loader.options.presets.push(...presets)
    }

    return loader
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './main.js']
    },
    output: {
        filename: getFilenamePattern('js'),
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/assets'),
                to: path.resolve(__dirname, 'dist/assets')
            },
        ]),
        new MiniCssExtractPlugin({
            filename: getFilenamePattern('css'),
        }),
    ],
    optimization: optimization(),
    devServer: {
        open: true,
        port: 8080,
        hot: isDev,
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    devtool: isDev ? 'source-map' : '',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: getBabelLoader(),
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader'],
            }
        ]
    }
}
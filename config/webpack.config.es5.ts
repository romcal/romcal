import webpackMerge from "webpack-merge";
import baseConfig from "../webpack.config";
import { ConfigurationFactory } from "webpack";
import { join } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const es5Config: ConfigurationFactory = async (env, { mode, ...rest }) => {
    const resolvedBaseConfig = await baseConfig(env, { mode, ...rest });
    return webpackMerge(resolvedBaseConfig, {
        entry: {
            romcal: [join(__dirname, "../src/index.es5.ts"), join(__dirname, "../src/index.ts")],
        },

        output: {
            filename: "[name].bundle.js",
            chunkFilename: "[name].bundle.js",
            path: join(__dirname, "../dist/es5"),
            library: "romcal",
            libraryTarget: "umd",
            auxiliaryComment: "romcal - The Liturgical Calendar generator",
        },

        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    useBuiltIns: "usage",
                                    corejs: "3",
                                    debug: true,
                                    modules: "umd",
                                    ignoreBrowserslistConfig: true,
                                    targets: {
                                        browsers: [
                                            ">= 1%",
                                            "last 1 major version",
                                            "not dead",
                                            "Chrome >= 45",
                                            "Firefox >= 38",
                                            "Edge >= 12",
                                            "Explorer >= 10",
                                            "iOS >= 9",
                                            "Safari >= 9",
                                            "Android >= 4.4",
                                            "Opera >= 30",
                                        ],
                                    },
                                },
                            ],
                            "@babel/preset-typescript",
                        ],
                        plugins: [
                            "const-enum",
                            "@babel/proposal-class-properties",
                            "@babel/proposal-object-rest-spread",
                        ],
                    },
                    exclude: [/node_modules/, "/src/**/*.test.ts"],
                },
                {
                    test: /\.html$/,
                    loader: "html-loader",
                },
            ],
        },

        optimization: {
            splitChunks: {
                chunks: "all",
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    // Externalize all includes from node_modules except core-js
                    vendor: {
                        chunks: "all",
                        test: /[\\/]node_modules[\\/]/,
                        priority: 20,
                    },
                    // Create a common chunk for reusable code
                    common: {
                        name: "common",
                        minChunks: 2,
                        chunks: "async",
                        priority: 10,
                        reuseExistingChunk: true,
                        enforce: true,
                    },
                },
            },
        },

        plugins: [
            // Find out where the bloat is
            new BundleAnalyzerPlugin({
                analyzerMode: "disabled",
                generateStatsFile: true,
            }),
            // Generate test HTML page
            new HtmlWebpackPlugin({
                hash: true,
                title: "romcal - Test Page",
                template: "src/index.html",
                base: "./dist",
                meta: {
                    charset: {
                        charset: "utf-8",
                    },
                    "X-UA-Compatible": {
                        "http-equiv": "X-UA-Compatible",
                        content: "IE=edge",
                    },
                },
                minify: false,
            }),
        ],
    });
};

export default es5Config;

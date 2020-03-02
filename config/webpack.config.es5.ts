import webpackMerge from "webpack-merge";
import baseConfig from "../webpack.config";
import { ConfigurationFactory } from "webpack";
import { join } from "path";

const es5Config: ConfigurationFactory = async (env, { mode, ...rest }) => {
    const resolvedBaseConfig = await baseConfig(env, { mode, ...rest });
    return webpackMerge(resolvedBaseConfig, {
        output: {
            filename: "[name].es5.js",
            chunkFilename: "[name].es5.js",
            path: join(__dirname, "dist/es5"),
            library: "romcal",
            libraryTarget: "umd",
            auxiliaryComment: "romcal - The Liturgical Calendar generator",
        },

        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    loader: "babel-loader",
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
    });
};

export default es5Config;

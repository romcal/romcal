import { join } from "path";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { ConfigurationFactory } from "webpack";

// https://webpack.js.org/configuration/configuration-languages/#typescript
const config: ConfigurationFactory = (env, { mode }) => ({
    devtool: mode === "production" ? "source-map" : "inline-source-map",

    entry: {
        romcal: join(__dirname, "./src/index.ts"),
    },

    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: join(__dirname, "dist"),
        library: "romcal",
        libraryTarget: "umd",
        umdNamedDefine: true,
        auxiliaryComment: "romcal - The Liturgical Calendar generator",
    },

    resolve: {
        extensions: [".ts", ".js", ".json"],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        configFile: "tsconfig.json",
                        colors: true,
                    },
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
        // Clean the dist folder
        new CleanWebpackPlugin(),
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
        // Find out where the bloat is
        new BundleAnalyzerPlugin({
            analyzerMode: "disabled",
            generateStatsFile: true,
        }),
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {},
});

export default config;

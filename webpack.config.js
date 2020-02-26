const { join } = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, { mode }) => [
    {
        node: { global: true, fs: "empty" }, // Fix: "Uncaught ReferenceError: global is not defined", and "Can't resolve 'fs'".
        devtool: mode === "production" ? "source-map" : "inline-source-map",
        entry: {
            romcal: join(__dirname, "./src/index.ts"),
        },

        output: {
            filename: "[name].bundle.min.js",
            chunkFilename: "[name].bundle.min.js",
            path: join(__dirname, "dist"),
            library: "Romcal",
            libraryTarget: "umd",
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
                name: true,
            },
        },

        plugins: [
            // Clean the dist folder
            new CleanWebpackPlugin(),
            // Generate test HTML page
            new HtmlWebpackPlugin({
                title: "romcal - Test Page",
                template: "src/index.html",
                meta: {
                    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
                },
            }),
            // Find out where the bloat is
            new BundleAnalyzerPlugin({
                analyzerMode: "disabled",
                generateStatsFile: true,
                source: false,
            }),
        ],

        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        externals: {},
    },
];

import { join } from "path";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { ConfigurationFactory } from "webpack";

// https://webpack.js.org/configuration/configuration-languages/#typescript
const baseConfiguration: ConfigurationFactory = (env, { mode }) => ({
    devtool: mode === "production" ? "source-map" : "inline-source-map",

    entry: {
        romcal: join(__dirname, "./src/index.ts"),
    },

    resolve: {
        extensions: [".ts", ".js", ".json"],
    },

    plugins: [
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

export default baseConfiguration;

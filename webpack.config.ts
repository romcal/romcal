import { ConfigurationFactory } from "webpack";

// https://webpack.js.org/configuration/configuration-languages/#typescript
const baseConfiguration: ConfigurationFactory = (env, { mode }) => ({
    devtool: mode === "production" ? "source-map" : "inline-source-map",

    resolve: {
        extensions: [".ts", ".js", ".json"],
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {},
});

export default baseConfiguration;

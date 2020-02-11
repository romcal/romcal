import { join } from "path";

export default (env, { mode }) => [
  {
    target: "node",
    devtool: mode === "production" ? "source-map" : "inline-source-map",
    entry: {
      romcal: join(__dirname, "./src/index.ts")
    },

    output: {
      filename: "[name].bundle.min.js",
      path: join(__dirname, "dist"),
      library: "Romcal",
      libraryTarget: "umd"
    },

    resolve: {
      extensions: [".ts", ".js", ".json"]
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader?configFile=tsconfig.json",
          exclude: /node_modules/
        }
      ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {}
  }
];

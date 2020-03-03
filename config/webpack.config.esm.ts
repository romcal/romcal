import webpackMerge from "webpack-merge";
import baseConfig from "../webpack.config";
import { ConfigurationFactory } from "webpack";
import { join } from "path";

const esmConfig: ConfigurationFactory = async (env, { mode, ...rest }) => {
    const resolvedBaseConfig = await baseConfig(env, { mode, ...rest });
    return webpackMerge(resolvedBaseConfig, {
        entry: {
            romcal: join(__dirname, "../src/index.ts"),
        },

        output: {
            filename: "[name].js",
            chunkFilename: "[name].js",
            path: join(__dirname, "../dist/esm"),
        },

        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    loader: "ts-loader",
                    options: {
                        colors: true,
                        configFile: "../tsconfig.json",
                    },
                    exclude: [/node_modules/, "/src/**/*.test.ts"],
                },
            ],
        },

        optimization: {
            splitChunks: {
                chunks: "all",
                maxInitialRequests: Infinity,
            },
        },
    });
};

export default esmConfig;

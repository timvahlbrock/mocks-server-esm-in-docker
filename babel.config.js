module.exports = {
    plugins: ["@babel/plugin-transform-modules-commonjs", { importInterop: "node" }],
    presets: ["@babel/env", "@babel/preset-typescript"]
};

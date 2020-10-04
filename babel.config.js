module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      "babel-plugin-styled-components",
      [
        "babel-plugin-root-import",
        {
          rootPathPrefix: "~",
          rootPathSuffix: "src",
        },
      ],
    ],
    presets: ["babel-preset-expo"],
  };
};

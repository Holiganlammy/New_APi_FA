module.exports = {
    apps: [
      {
        name: "FA_MAIN_API",
        script: "index.js",
        env: {
          PORT: 32001,
          NODE_ENV: "production",
        },
      },
    ],
  };
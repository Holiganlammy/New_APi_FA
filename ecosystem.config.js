module.exports = {
    apps: [
      {
        name: "FA_MAIN_API",
        script: "index.js",
        env: {
          PORT: 32001,  // ระบุพอร์ตที่ต้องการ
          NODE_ENV: "production",
        },
      },
    ],
  };
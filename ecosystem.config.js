module.exports = {
    apps: [
      {
        name: "FA_MAIN_API_STK",
        script: "index.js",
        env: {
          PORT: 35002,  // ระบุพอร์ตที่ต้องการ
          NODE_ENV: "production",
        },
      },
    ],
  };
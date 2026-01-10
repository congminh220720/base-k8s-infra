const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "default-backend";
const APP_ENV = process.env.APP_ENV || "dev";

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    app: APP_NAME,
    env: APP_ENV,
    port: PORT,
    message: "Backend is working 🚀",
  });
});

app.listen(PORT, () => {
  console.log(`[${APP_NAME}] Backend running on port ${PORT} in ${APP_ENV}`);
});

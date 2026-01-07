const express = require("express");
const app = express();

const PORT = 3000;

app.get("/api/health", async (req, res) => {
  // giả lập xử lý lâu 300ms
  await new Promise((resolve) => setTimeout(resolve, 300));

  res.json({
    status: "ok",
    version: "v2",
    message: "Backend v2 is running 🔄",
  });
});

app.listen(PORT, () => {
  console.log(`Backend v2 running on port ${PORT}`);
});

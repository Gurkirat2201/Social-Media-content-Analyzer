const express = require("express");
const cors = require("cors");
const multer = require("multer");
const analyze = require("./routes/analyze");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());

app.post("/analyze", upload.single("file"), analyze);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});

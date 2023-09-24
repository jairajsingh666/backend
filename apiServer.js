const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');

const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

app.post("/api/upload", (req, res) => {
  const uploadedData = req.body;
  fs.appendFileSync('data.json', JSON.stringify(uploadedData));
  console.log("Data has been added", uploadedData)
  
  res.status(200).json({ message: "Data received and processed successfully." });
});
app.get("/api/cloud-data", async (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    res.json(data);

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch cloud data." });
  }
});

app.delete("/api/delete-cloud-data", (req, res) => {
  fs.writeFileSync('data.json', '')
  console.log("Cloud data has been deleted.");
  res.status(200).send("Cloud data has been deleted.");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

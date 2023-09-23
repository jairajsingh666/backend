const express = require("express");
const bodyParser = require("body-parser");

// const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

// Define an endpoint for data upload
app.post("/api/upload", (req, res) => {
  // Handle the uploaded data here
  const uploadedData = req.body;

  console.log("yo", uploadedData)
  // Implement the logic to save the data to MongoDB Atlas
  // You'll need to use a MongoDB driver or library for this
  // Example:
  // mongoClient.connect(mongoURI, (err, db) => {
  //     if (err) throw err;
  //     const collection = db.collection("your_collection_name");
  //     collection.insertOne(uploadedData, (err, result) => {
  //         if (err) throw err;
  //         console.log("Data uploaded:", result.ops);
  //         db.close();
  //         res.json({ message: "Data uploaded successfully" });
  //     });
  // });
  res.status(200).json({ message: "Data received and processed successfully." });
});
app.get("/api/cloud-data", async (req, res) => {
  try {
    // Fetch data from your MongoDB Atlas database
    const cloudData = await YourModel.find(); // Replace 'YourModel' with your Mongoose model name
    res.json(cloudData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch cloud data." });
  }
});

app.delete("/api/delete-cloud-data", (req, res) => {
  // Implement logic to delete cloud data from MongoDB here
  // This logic will depend on your MongoDB setup and data structure.

  // Example: Delete all cloud data from a "products" collection
  // Product.deleteMany({}, (err) => {
  //     if (err) {
  //         console.error("Error deleting cloud data:", err);
  //         res.status(500).send("Failed to delete cloud data.");
  //     } else {
  //         console.log("Cloud data has been deleted.");
  //         res.status(200).send("Cloud data has been deleted.");
  //     }
  // });
  console.log("Cloud data has been deleted.");
  res.status(200).send("Cloud data has been deleted.");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

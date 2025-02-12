const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Route to fetch data from FastAPI
app.get("/fetch-data", async (req, res) => {
  console.log("Fetching data from FastAPI...");
  try {
    // Use http://127.0.0.1:8000/fetch-data instead of localhost:8000
    const response = await axios.get("http://127.0.0.1:8000/fetch-data");
    console.log("Received data from FastAPI:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from FastAPI:", error.message);
    res.status(500).json({ error: "Failed to fetch data from FastAPI" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

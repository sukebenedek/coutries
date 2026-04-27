const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors"); // add this
app.use(cors());
// In-memory datapp.use(cors());a
const countries = [
  {
    name: "Hungary",
    cities: ["Budapest", "Győr", "Debrecen"]
  },
  {
    name: "Austria",
    cities: ["Vienna", "Graz", "Salzburg"]
  },
  {
    name: "Slovakia",
    cities: ["Bratislava", "Košice", "Žilina"]
  },
  {
    name: "Brazilia",
    cities: ["Brasília", "Rio de Janeiro", "São Paulo"]
  }
];

// Get all countries
app.get("/countries", (req, res) => {
  res.json(countries);
});

// Get a specific country by name
app.get("/countries/:name", (req, res) => {
  const country = countries.find(
    c => c.name.toLowerCase() === req.params.name.toLowerCase()
  );

  if (!country) {
    return res.status(404).json({ error: "Country not found" });
  }

  res.json(country);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
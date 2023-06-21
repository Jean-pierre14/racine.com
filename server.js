import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const app = express(),
  PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.json({ message: "Racine" });
});

const Server = () => {
  app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Server run on PORT: http://localhost:${PORT}`);
  });
};

// Run the server function
Server();

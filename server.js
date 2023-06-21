import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: ".env" });

const app = express(),
  PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Engine
app.set("view engine", "ejs");

// Static file
app.use("/assets", express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

const Server = () => {
  app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Server run on PORT: http://localhost:${PORT}`);
  });
};

// Run the server function
Server();

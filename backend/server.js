import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { notes } from "./data/notes.js";
const app = express();

const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  notes.forEach((item) => {
    if (item._id === id) {
      res.json(item);
    }
  });
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

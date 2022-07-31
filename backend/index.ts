import express from "express";
import { readSettings, saveSettings } from "./db.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());

/**
 * Root path for testing
 */
app.get("/", async (_request, response) => {
  response.send("Bitcoin labels backend is running!");
});

/**
 * Settings API
 */
app.get("/settings", async (_request, response) => {
  const savedSettings = await readSettings();
  response.json(savedSettings);
});

app.post("/settings", async (request, response) => {
  try {
    await saveSettings(request.body);
    response.status(200).json();
  } catch (error) {
    console.log(error);
    response.status(400).json();
  }
});

const port = 3001;
app.listen(port, async () => {
  console.log(`Listening on port: ${port}`);
});

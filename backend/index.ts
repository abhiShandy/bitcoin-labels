import express from "express";
import { initializeDB, readSavedSettings, saveSettings } from "./db.js";

const app = express();

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
  const savedSettings = await readSavedSettings();
  response.send(savedSettings);
});

app.post("/settings", async (request, response) => {
  const settings = request.body;
  await saveSettings(settings);
  response.send({ status: "success" });
});

const port = 3001;
app.listen(port, async () => {
  console.log(`Listening on port: ${port}`);
});

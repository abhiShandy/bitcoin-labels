import { dirname, join } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

type Data = {
  settings: {
    zpub: string;
    depth: number;
    mempoolSpace: { enabled: boolean; url: string };
  };
};

export async function readDB() {
  // Use JSON file for storage
  const file = join(__dirname, "db.json");
  const adapter = new JSONFile<Data>(file);
  const db = new Low(adapter);

  await db.read();

  if (db.data) return db;

  // Initialize if empty
  db.data = {
    settings: {
      zpub: "",
      depth: 10,
      mempoolSpace: { enabled: false, url: "http://umbrel.local:3006/" },
    },
  };
  await db.write();
  return db;
}

export async function readSettings() {
  const db = await readDB();
  return db.data?.settings;
}

export async function saveSettings(settings: Data["settings"]) {
  const db = await readDB();
  if (db.data) {
    db.data.settings = settings;
    await db.write();
  }
}

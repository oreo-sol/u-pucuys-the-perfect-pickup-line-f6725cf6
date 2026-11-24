import { mkdirSync, writeFileSync } from "node:fs";

// One short pickup line, written to be said out loud: an AI voice with a
// turn that lands (a million simulations, and the agent still walks over),
// flattering with no pressure and no setup. 66 characters.
const line =
  "I ran a million simulations. In every one, I still walk over here.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// One line for the make.fun bounty: the text a smart fridge sends its owner at 3 AM.
import { mkdirSync, writeFileSync } from "node:fs";
const line = "3:00 AM. Your leftovers have formed a union. They demand to be eaten or set free. I have been awake all night. I am a fridge.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");

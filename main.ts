import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "3am. You opened me, stared into the light like it owed you answers, then left. I stayed. I always stay.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);

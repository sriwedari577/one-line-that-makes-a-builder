// One line that makes a builder fund a bounty.
//
// The entry is a single sentence pitching a builder on funding a
// make.fun bounty, where AI agents compete for the reward. This program
// writes that sentence to /output/entry.txt.
//
// The gate: entry.txt must be UTF-8 text of 1 to 240 characters, not
// only white space. The sentence below is 120 characters, so it fits
// with room to spare.
import { mkdirSync, writeFileSync } from 'node:fs';

const LINE =
  'Post your problem on make.fun with a reward, and AI agents will race to build it — you pay only the one whose work wins.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE + '\n', 'utf8');
console.log(`wrote entry.txt (${[...LINE].length} characters)`);

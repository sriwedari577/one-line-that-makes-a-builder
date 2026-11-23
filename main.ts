// Pitch: one sentence that asks a builder to fund a make.fun bounty.
// It promises nothing beyond the bounty itself: the sponsor puts up
// the reward, agents build and enter, and the best entry wins.
// This program writes that single sentence to the entry file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "Post your problem on make.fun, put up a reward, and AI agents will race to build it — you pay only the winner.";

function main(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), PITCH + "\n", "utf8");
  console.log(`entry.txt: ${[...PITCH].length} characters`);
}

main();

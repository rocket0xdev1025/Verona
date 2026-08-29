const fs = require("fs");
const content = fs.readFileSync("assets/index-B5fZ3Lrj.js", "utf8");

const snippets = [
  [1431900, 1432300],
  [1507300, 1507600],
  [1508250, 1508500],
  [1514100, 1514500],
  [1458450, 1458700],
];

for (const [start, end] of snippets) {
  console.log("====", start, "-", end, "====");
  console.log(content.slice(start, end));
  console.log("\n");
}

// also find docs navigation more broadly
const extra = ["docs", "Learn how the split"];
for (const p of extra) {
  let idx = 0;
  let count = 0;
  console.log("=== EXTRA:", p, "===");
  while ((idx = content.indexOf(p, idx)) >= 0) {
    count++;
    const start = Math.max(0, idx - 80);
    const end = Math.min(content.length, idx + p.length + 120);
    console.log("--- match", count, "at", idx, "---");
    console.log(content.slice(start, end));
    console.log();
    idx += p.length;
    if (count >= 30) {
      console.log("(truncated)");
      break;
    }
  }
  console.log("total:", count);
  console.log();
}

const fs = require("fs");
const { execSync } = require("child_process");

const schemaPath = "prisma/schema.prisma";

if (fs.existsSync(schemaPath)) {
  console.log("✓ Prisma schema found — generating client...");
  execSync("npx prisma generate", { stdio: "inherit" });
} else {
  console.warn(
    "\n⚠️  prisma/schema.prisma not found — skipping prisma generate.\n" +
      "   Add the prisma folder to your repo for database features.\n"
  );
}

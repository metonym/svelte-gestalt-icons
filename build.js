const { generateFromFolder, generateIndex } = require("svg-to-svelte");
const fs = require("fs");
const path = require("path");
const pkg = require("./package.json");

(async () => {
  const { moduleNames } = await generateFromFolder(
    "node_modules/gestalt/src/icons",
    "lib"
  );

  await generateIndex({
    moduleNames,
    pkgName: pkg.name,
    pkgVersion: pkg.devDependencies["gestalt"],
    outputFile: "ICON_INDEX.md",
  });
})();

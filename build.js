const { generateFromFolder, generateIndex } = require("svg-to-svelte");
const pkg = require("./package.json");

(async () => {
  const { moduleNames } = await generateFromFolder("node_modules/gestalt/src/icons");

  await generateIndex({
    moduleNames,
    pkgName: pkg.name,
    pkgVersion: pkg.devDependencies["gestalt"],
    outputFile: "ICON_INDEX.md",
  });
})();

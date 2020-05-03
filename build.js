const { cleanDir, generateFromFolder } = require("svg-to-svelte");
const fs = require("fs");
const path = require("path");
const pkg = require("./package.json");

async function build() {
  const {
    moduleNames,
  } = await generateFromFolder("node_modules/gestalt/src/icons", "lib", {
    clean: true,
  });

  await cleanDir("docs");

  const docs = [
    "# docs\n",
    `> ${moduleNames.length} icons from gestalt@${pkg.devDependencies.gestalt}.\n`,
    "## Usage\n",
    "```html",
    `<script>
  import Icon from "svelte-gestalt-icons/lib/{ModuleName}";
</script>

<Icon />`,
    "```\n",
    "## List of icons by `ModuleName`\n",
    moduleNames.map((moduleName) => `- ${moduleName}`).join("\n"),
  ].join("\n");

  fs.writeFileSync("docs/README.md", docs);
}

build();

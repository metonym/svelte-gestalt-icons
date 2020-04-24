const fs = require("fs");
const path = require("path");
const pkg = require("./package.json");

function build() {
  function toModuleName(file) {
    return file
      .replace(/\-/g, " ")
      .replace(/\.svg/g, "")
      .split(" ")
      .map((_) => _.slice(0, 1).toUpperCase() + _.slice(1))
      .join("");
  }

  fs.rmdirSync("lib", { recursive: true });
  fs.mkdirSync("lib");

  const icons_folder = "node_modules/gestalt/src/icons";

  const moduleNames = [];

  const imports = fs
    .readdirSync(icons_folder)
    .filter((file) => file.endsWith(".svg"))
    .map((file) => {
      const source = fs.readFileSync(path.join(icons_folder, file)).toString();
      const moduleName = toModuleName(file);

      moduleNames.push(moduleName);

      fs.mkdirSync(`lib/${moduleName}`);
      fs.writeFileSync(
        `lib/${moduleName}/${moduleName}.svelte`,
        source.replace(
          "<svg ",
          "<svg {...$$$restProps} on:click on:mouseover on:mouseenter on:mouseleave on:keydown "
        )
      );
      fs.writeFileSync(
        `lib/${moduleName}/index.js`,
        `import ${moduleName} from "./${moduleName}.svelte";
         export { ${moduleName} };
         export default ${moduleName};`
      );

      return `export { ${moduleName} } from "./${moduleName}";`;
    });

  fs.writeFileSync("lib/index.js", imports.join(""));
  process.stdout.write(`${moduleNames.length} icons` + "\n");

  fs.rmdirSync("docs", { recursive: true });
  fs.mkdirSync("docs");

  const docs = [
    "# docs",
    `> ${moduleNames.length} icons from gestalt v${pkg.devDependencies["gestalt"]}.`,
    "## Usage",
    "```html",
    `<script>
       import Icon from "svelte-gestalt-icons/lib/{ModuleName}";
     </script>
    
     <Icon />`,
    "```",
    "## List of icons by `ModuleName`",
    moduleNames.map((moduleName) => `- ${moduleName}`).join("\n"),
  ];

  fs.writeFileSync("docs/README.md", docs.join("\n"));
}

build();

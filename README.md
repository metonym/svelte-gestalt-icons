# svelte-gestalt-icons

[![NPM][npm]][npm-url]

> [Pinterest Gestalt SVG icons](https://github.com/pinterest/gestalt/tree/master/packages/gestalt/src/icons) as Svelte components.

<!-- REPO_URL -->

Try it in the [Svelte REPL](https://svelte.dev/repl/548ac952b4284fbfb2bea5f1803ad727).

---

<!-- TOC -->

## Installation

**Yarn**

```bash
yarn add -D svelte-gestalt-icons
```

**NPM**

```bash
npm i -D svelte-gestalt-icons
```

## Usage

### Basic

```svelte
<script>
  import { Add, Sound, Tag, History } from "svelte-gestalt-icons";
</script>

<Add />
<Sound />
<Tag />
<History />
```

Refer to [ICON_INDEX.md](ICON_INDEX.md) for a list of supported icons.

### Direct import

Use the direct import for faster compiling during development.

**Note:** even if using base imports, unused imports are still tree shakeable by application bundlers like Rollup or webpack.

```html
<script>
  import Add from "svelte-gestalt-icons/lib/Add.svelte";
</script>
```

## Rendering icons using `svelte:component`

```svelte
<script>
  import * as icons from "svelte-gestalt-icons";
</script>

{#each Object.entries(icons) as [icon, component]}
  <div>
    <svelte:component this={component} />
    {icon}
  </div>
{/each}
```

## TypeScript

Svelte version 3.31 or greater is required to use this library with TypeScript.

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-gestalt-icons.svg?color=%230a6955&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-gestalt-icons

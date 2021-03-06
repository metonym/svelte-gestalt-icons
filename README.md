# svelte-gestalt-icons

[![NPM][npm]][npm-url]

> Pinterest Gestalt SVG icons as Svelte components.

<!-- REPO_URL -->

Try it in the [Svelte REPL](https://svelte.dev/repl/548ac952b4284fbfb2bea5f1803ad727).

---

<!-- TOC -->

## Install

```bash
yarn add -D svelte-gestalt-icons
# OR
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
  import Add from "svelte-gestalt-icons/lib/Add";
  // OR
  import Add from "svelte-gestalt-icons/lib/Add/Add.svelte";
</script>
```

## API

`$$restProps` are forwarded to the `svg` element.

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## Rendering icons using `svelte:component`

```svelte
<script>
  import * as icons from "svelte-gestalt-icons";
</script>

{#each Object.keys(icons) as icon}
  <div>
    <svelte:component this={icons[icon]} title={icon} />
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

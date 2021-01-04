# svelte-gestalt-icons

<!-- REPO_URL -->

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Pinterest Gestalt SVG icons as Svelte components.

## Install

```bash
yarn add -D svelte-gestalt-icons
# OR
npm i -D svelte-gestalt-icons
```

## Usage

<!-- prettier-ignore-start -->
```svelte
<script>
  import { Add } from "svelte-gestalt-icons";
</script>

<Add />
```
<!-- prettier-ignore-end -->

Refer to [ICON_INDEX.md](ICON_INDEX.md) for a list of supported icons.

## API

`$$restProps` are forwarded to the `svg` element.

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## Rendering icons using `svelte:component`

<!-- prettier-ignore-start -->
```svelte
<script>
  import * as icons from "svelte-gestalt-icons";
</script>

{#each Object.keys(icons) as icon}
  <div>
    <svelte:component title="{icon}" this={icons[icon]} />
    {icon}
  </div>
{/each}
```
<!-- prettier-ignore-end -->

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-gestalt-icons.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-gestalt-icons
[build]: https://travis-ci.com/metonym/svelte-gestalt-icons.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-gestalt-icons

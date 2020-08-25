# svelte-gestalt-icons

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Pinterest Gestalt SVG icons as Svelte components.

## Install

```bash
yarn add -D svelte-gestalt-icons
# OR
npm -i -D svelte-gestalt-icons
```

## Usage

```html
<script>
  import Ad from "svelte-gestalt-icons/lib/Ad";
</script>

<Ad />
```

Refer to [ICON_INDEX.md](ICON_INDEX.md) for a list of supported icons.

## API

`$$restProps` are forwarded to the `svg` element.

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-gestalt-icons.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-gestalt-icons
[build]: https://travis-ci.com/metonym/svelte-gestalt-icons.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-gestalt-icons

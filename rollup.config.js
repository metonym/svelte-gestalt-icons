import svelteReadme from "svelte-readme";

const DEV = process.env.ROLLUP_WATCH;

export default svelteReadme({
  minify: !DEV,
  svelte: { immutable: true },
  prefixUrl: "https://github.com/metonym/svelte-gestalt-icons/tree/master/",
});

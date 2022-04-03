<script lang="ts">
  import { Add, Sound, Tag } from "../lib";
  import Ad from "../lib/Ad.svelte";

  let icon: Ad;
</script>

<!-- svelte-ignore missing-declaration -->
<Add fill="red" />
<!-- svelte-ignore missing-declaration -->
<Sound />
<!-- svelte-ignore missing-declaration -->
<Tag />
<!-- svelte-ignore missing-declaration -->
<Ad width="30" />

<svelte:component this={icon} />

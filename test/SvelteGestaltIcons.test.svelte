<script lang="ts">
  import { Add, Sound, Tag, Captions, Home } from "../lib";
  import Ad from "../lib/Ad.svelte";

  let icon: Ad;
</script>

<Add fill="red" />
<Sound />
<Tag />
<Ad width="30" />
<Captions height={24} />
<svelte:component this={icon} />
<Home />

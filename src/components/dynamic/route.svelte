<script lang="ts">
  import { Route } from "tinro";
  import Dynamic from "./dynamic.svelte";
  import E404 from "./404.svelte";

  export let path: string;
  export let view: string = null;
</script>

<Route {path}>
  <Dynamic name={view} view={true} />
</Route>

<Route fallback>
  <E404 />
</Route>

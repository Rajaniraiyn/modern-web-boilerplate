<script lang="ts">
  import { Route } from "tinro";
  import Dynamic from "./dynamic.svelte";

  export let path: string;
  export let view: string = null;
</script>

<Route {path}>
  <Dynamic name={view} view={true} />
</Route>

<Route fallback>Page Doesn't Exists</Route>

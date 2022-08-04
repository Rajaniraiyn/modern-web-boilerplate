<script lang="ts">
  import { Route } from "tinro";
  import Dynamic from "./dynamic.svelte";

  export let path: string;
  export let component: string = null;
  export let view: string = null;
</script>

<Route {path}>
  <Dynamic {component} {view} />
</Route>

<Route fallback>Page Doesn't Exists</Route>

<script lang="ts">
  import { Route, router } from "tinro";
  import icon from "./assets/images/icon.png?optimize";
  import UpdatePwa from "./components/updatePWA.svelte";

  import Dynamic from "./dynamic.svelte";

  // Hash mode for router
  router.mode.hash();
</script>

<UpdatePwa />

<Route path="/">
  <main>
    <img srcset={icon} alt="Developer Icon" class="img" />
    <Dynamic component="title" />
  </main>
</Route>

<style>
  main {
    text-align: center;
    margin: 2em 0;
  }

  .img {
    width: 100px;
    margin: 0 auto;
  }
</style>

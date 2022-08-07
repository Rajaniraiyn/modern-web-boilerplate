<script lang="ts">
  import { slide } from "svelte/transition";
  import { useRegisterSW } from "virtual:pwa-register/svelte";

  const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
    onRegistered(swr) {
      console.log(`SW registered: ${swr}`);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  function close() {
    offlineReady.set(false);
    needRefresh.set(false);
  }

  $: showMsg = $offlineReady || $needRefresh;
</script>

{#if showMsg}
  <div class="container" role="alert" transition:slide>
    <span>
      {#if $offlineReady}
        App ready to work offline
      {:else}
        New content available, click on reload button to update.
      {/if}
    </span>
    {#if $needRefresh}
      <button on:click={() => updateServiceWorker(true)}> Reload </button>
    {/if}
    <button on:click={close}> X </button>
  </div>
{/if}

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0.5em;
    font-size: 0.75em;
    background-color: lightgray;

    position: absolute;
    inset: 0 0 auto 0;
  }

  button {
    position: absolute;
    right: 1em;

    border: none;
    background-color: transparent;
    font-size: 1em;
    cursor: pointer;
  }
</style>

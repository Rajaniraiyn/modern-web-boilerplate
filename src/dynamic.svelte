<script lang="ts">
  import { onMount } from "svelte";

  let componentName: string;
  let component: Promise<any> = null;
  let parmameters = {};

  onMount(async () => {
    component = import(`./components/${componentName}.svelte`);
  });

  export { componentName as component, parmameters as parms };
</script>

{#if component}
  {#await component then { default: Component }}
    <Component {...parmameters}>
      <slot />
    </Component>
  {/await}
{/if}

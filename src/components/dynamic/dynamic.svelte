<script lang="ts">
  let name: string;
  let view: boolean = false;
  let parmameters = {};

  const importPath = `../../${view ? "views" : "components"}/${name}.svelte`;

  export { name, parmameters as parms, view };
</script>

{#await import(importPath)}
  Loading....
{:then { default: component }}
  <svelte:component this={component} {...parmameters}>
    <slot />
  </svelte:component>
{/await}

<script lang="ts">
  let name: string;
  let view: boolean = false;
  let parmameters = {};

  export { name, parmameters as parms, view };
</script>

{#await import(`../../${(view ? "views" : "components") + "/" + name}.svelte`)}
  Loading....
{:then { default: component }}
  <svelte:component this={component} {...parmameters}>
    <slot />
  </svelte:component>
{/await}

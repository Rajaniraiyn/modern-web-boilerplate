<script lang="ts">
  let name: string;
  let view: boolean = false;
  let parmameters = {};

  export { name, parmameters as parms, view };
</script>

{#await import(`../../${(view ? "views" : "components") + "/" + name}.svelte`)}
  <div class="balls">
    <div />
    <div />
    <div />
  </div>
{:then { default: component }}
  <svelte:component this={component} {...parmameters}>
    <slot />
  </svelte:component>
{/await}

<style>
  .balls {
    width: 3.5em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .balls div {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: var(--accent, black);
    transform: translateY(-100%);
    animation: wave 0.8s ease-in-out alternate infinite;
  }

  .balls div:nth-of-type(1) {
    animation-delay: -0.4s;
  }

  .balls div:nth-of-type(2) {
    animation-delay: -0.2s;
  }

  @keyframes wave {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(100%);
    }
  }
</style>

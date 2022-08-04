<script lang="ts">
  import { annotate } from "../helpers";
  const title = document.title;
</script>

<h1
  use:annotate={{
    type: "underline",
    animationDuration: 1e3,
    iterations: 5,
  }}
>
  {title}
</h1>

<style>
  h1 {
    width: fit-content;
    font-size: 2em;
    margin: 0.5em auto;
    text-align: center;
  }
</style>

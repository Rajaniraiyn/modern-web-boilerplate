<script lang="ts">
  import icon from "../assets/images/icon.png?preset=optimize&srcset";

  import Title from "../components/title.svelte";
</script>

<main>
  <img srcset={icon} alt="Developer Icon" class="img" />
  <Title />
</main>

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

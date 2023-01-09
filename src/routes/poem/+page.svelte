<script>
  import { poem } from "$lib/stores/poem";
</script>

<article>
  {#if $poem}
    <table class="poem">
      {@html $poem}
    </table>
  {:else}
    <b>Loading...</b>
  {/if}
</article>

<style>
  @import url(//fonts.googleapis.com/earlyaccess/notonastaliqurdu.css);
  .poem {
    direction: rtl;
    font-family: "Noto Nastaliq Urdu", serif;
    margin-left: auto;
    margin-right: auto;
  }
  article {
    width: 700px;
    padding: 50px;
    margin: 0 auto;
  }
</style>

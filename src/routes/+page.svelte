<script>
  import { env } from '$env/dynamic/public';
</script>

<article>
  <h1>{env.PUBLIC_TITLE}</h1>
  <p>{env.PUBLIC_MESSAGE}</p>
</article>

<style>
  h1 {
    font-size: 50px;
    font-weight: 100;
  }
  article {
    display: block;
    width: 700px;
    padding: 50px;
    margin: 0 auto;
  }
</style>

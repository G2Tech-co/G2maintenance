<!-- data-sveltekit-prefetch -->
<nav>
  <a href="/">Home</a>
  <!-- <a href="/poem">Poem</a> -->
  <a href="/sendportal">Subscribe</a>
</nav>

<slot />

<style>
  nav {
    text-align: left;
  }
  nav a {
    margin-right: 1rem;
    color: #95A5A6;
    text-decoration: none;
  }
</style>

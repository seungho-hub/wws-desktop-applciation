<script>
  import SideBar from "./components/SideBar.svelte";
  import TopBar from "./components/TopBar.svelte";
  import Content from "./components/Content.svelte";
</script>

<main>
  <SideBar />
  <TopBar />
  <Content />
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    background-color: var(--bg);
    border-radius: 20px;

    display: grid;
    grid-template-rows: 1fr 10fr;
    grid-template-columns: 100px auto;
    grid-template-areas:
      "sidebar topbar"
      "sidebar content";
  }
</style>

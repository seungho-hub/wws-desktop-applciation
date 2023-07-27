<script>
  import SideBar from "./components/sidebar/SideBar.svelte";
  import TopBar from "./components/topbar/TopBar.svelte";
  import Content from "./components/Content.svelte";

  window.electronAPI.onJWT((e, jwt) => {
    localStorage.setItem("jwt", jwt);
  });
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
    border: 0.1px solid rgba(92, 109, 255, 0.2);
    display: grid;
    grid-template-rows: 60px 10fr;
    grid-template-columns: 100px auto;
    grid-template-areas:
      "sidebar topbar"
      "sidebar content";
  }
</style>

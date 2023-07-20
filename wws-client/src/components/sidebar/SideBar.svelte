<script>
  import Nav from "./Nav.svelte";
  import Avatar from "../profile/Avatar.svelte";
  import WinControl from "./WinControl.svelte";
</script>

<section id="side-bar">
  <WinControl />
  <Nav />
  <Avatar />
</section>

<style lang="scss">
  section#side-bar {
    grid-area: sidebar;
    background-color: var(--bg-sideBar);
    border-radius: 20px 0 0 20px;
    display: grid;
    grid-template-rows: 60px 8fr 1fr;
  }
</style>

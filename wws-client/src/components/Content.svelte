<script>
  import Calendar from "./calendar/+page.svelte";
  import Home from "./home/+page.svelte";
  import WWWS from "./wws/+page.svelte";
  import Someone from "./someone/+page.svelte";

  import Router from "svelte-spa-router";

  const routes = {
    "/": Home,
    "/wws": WWWS,
    "/calendar": Calendar,
    "/someone": Someone,
  };
</script>

<section id="content">
  <Router {routes} />
</section>

<style lang="scss">
  section#content {
    grid-area: content;
    border-radius: 0 0 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

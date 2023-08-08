<script>
  import Calendar from "./Calendar.svelte";
  import wwsDate from "../../utils/wwsDate";
  const currentDate = new wwsDate(2023, 3);
</script>

<main>
  <Calendar {currentDate} />
</main>

<style lang="scss">
</style>

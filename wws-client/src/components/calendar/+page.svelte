<script>
  import Calendar from "./Calendar.svelte";
  import wwsDate from "../../utils/wwsDate";
  let currentDate = new wwsDate();

  const nextMonth = () => {
    if (currentDate.month == 12) {
      currentDate.year += 1;
      currentDate.month = 1;
    } else {
      currentDate.month += 1;
    }

    currentDate = new wwsDate(currentDate.year, currentDate.month);
  };

  const prevMonth = () => {
    if (currentDate.month == 1) {
      currentDate.year -= 1;
      currentDate.month = 12;
    } else {
      currentDate.month -= 1;
    }

    currentDate = new wwsDate(currentDate.year, currentDate.month);
  };
</script>

<main>
  <Calendar {currentDate} on:nextMonth={nextMonth} on:prevMonth={prevMonth} />
</main>

<style lang="scss">
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
  }
</style>

<script>
  import Calendar from "./Calendar.svelte";
  import wwsDate from "../../utils/wwsDate";
  let targetDate = new wwsDate();

  const nextMonth = () => {
    if (targetDate.month == 12) {
      targetDate.year += 1;
      targetDate.month = 1;
    } else {
      targetDate.month += 1;
    }

    targetDate = new wwsDate(targetDate.year, targetDate.month);
  };

  const prevMonth = () => {
    if (targetDate.month == 1) {
      targetDate.year -= 1;
      targetDate.month = 12;
    } else {
      targetDate.month -= 1;
    }

    targetDate = new wwsDate(targetDate.year, targetDate.month);
  };
</script>

<main>
  <Calendar {targetDate} on:nextMonth={nextMonth} on:prevMonth={prevMonth} />
</main>

<style lang="scss">
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
  }
</style>

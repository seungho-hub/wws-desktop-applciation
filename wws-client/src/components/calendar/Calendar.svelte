<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  import DayCard from "./DayCard.svelte";
  import wwsDate from "../../utils/wwsDate";

  export let targetDate;
  const currentDate = new wwsDate();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const isToday = (day) => {
    return (
      currentDate.year === targetDate.year &&
      currentDate.month === targetDate.month &&
      currentDate.day === day
    );
  };
</script>

<main>
  <div class="header">
    <button
      class="month-control-btn left"
      on:click={() => dispatch("prevMonth")}
    >
      <i class="fa-solid fa-caret-left" />
    </button>
    <div class="my">
      <h2 class="m">{targetDate.monthName}</h2>
      <h1 class="y">{targetDate.year}</h1>
    </div>
    <button
      class="month-control-btn right"
      on:click={() => dispatch("nextMonth")}
    >
      <i class="fa-solid fa-caret-right" />
    </button>
  </div>

  <div class="calendar">
    <div class="days-of-week">
      {#each days as day}
        <p class={day}>{day}</p>
      {/each}
    </div>
    <div class="days">
      {#each Array.from({ length: targetDate.firstDaysOfWeek }) as i}
        <DayCard />
      {/each}
      {#each Array.from({ length: targetDate.daysInMonth }, (_, i) => i + 1) as day}
        <DayCard {day} isToday={isToday(day)} />
      {/each}
    </div>
  </div>
</main>

<style lang="scss">
  $saturday-color: rgb(78, 78, 236);
  $sunday-color: rgb(234, 65, 65);

  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .header {
      display: flex;
      flex-direction: row;
      gap: 1em;
      justify-content: end;

      .month-control-btn {
        i {
          font-size: 1.4em;
        }
      }

      .my {
        width: 12em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1em;
      }
    }
    .calendar {
      display: flex;
      flex-direction: column;
      .days-of-week {
        display: grid;
        grid-template-columns: repeat(7, 6.5em);

        p {
          text-align: center;
          margin: 1em;
        }
      }
      .days {
        display: grid;
        grid-template-columns: repeat(7, 6.5em);
        flex-wrap: wrap;
        gap: 0.5em;
      }
    }
  }
</style>

<script>
  import DayCard from "./DayCard.svelte";
  export let currentDate;
  const today = currentDate.day;

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
</script>

<main>
  <div class="my">
    <h2 class="m">{currentDate.monthName}</h2>
    <h1 class="y">{currentDate.year}</h1>
  </div>

  <div class="calendar">
    <div class="days-of-week">
      {#each days as day}
        <p class={day}>{day}</p>
      {/each}
    </div>
    <div class="days">
      {#each Array.from({ length: currentDate.firstDaysOfWeek - 1 }) as i}
        <DayCard />
      {/each}
      {#each Array.from({ length: currentDate.daysInMonth }, (_, i) => i + 1) as day}
        <DayCard {day} {today} />
      {/each}
    </div>
  </div>
</main>

<style lang="scss">
  $saturday-color: rgb(78, 78, 236);
  $sunday-color: rgb(234, 65, 65);

  main {
    .my {
      display: flex;
      flex-direction: row;
      gap: 1em;
      justify-content: end;
    }
    .calendar {
      display: flex;
      flex-direction: column;
      .days-of-week {
        display: grid;
        grid-template-columns: repeat(7, 6em);

        gap: 1em;
        p {
          text-align: center;
          padding: 1em;
        }

        .Sat {
          color: $saturday-color;
        }
        .Sun {
          color: $sunday-color;
        }
      }
      .days {
        display: grid;
        grid-template-columns: repeat(7, 6em);
        flex-wrap: wrap;
        gap: 1em;
      }
    }
  }
</style>

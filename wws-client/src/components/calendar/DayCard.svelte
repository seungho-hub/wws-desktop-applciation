<script>
  export let day;
  export let isToday;
</script>

{#if day}
  <card class={isToday ? "dayCard today" : "dayCard"}>
    <h4>{day}</h4>
  </card>
{:else}
  <card class="emptyCard" />
{/if}

<style lang="scss">
  $today-background-color: var(--sig);
  card {
    width: 6.5em;
    height: 6.5em;
    padding: 0.5em;
    border-radius: 10px;

    &.dayCard {
      border: 1px solid gray;

      &.today {
        background-color: $today-background-color;
        h4 {
          color: var(--font-black);
        }
      }
    }
    &.emptyCard {
      border: 1px solid rgb(59, 59, 59);
    }
  }
</style>

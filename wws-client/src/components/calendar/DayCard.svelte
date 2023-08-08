<script>
  export let day;
  export let today;
</script>

{#if day}
  <card class={today == day ? "dayCard today" : "dayCard"}>
    <h4>{day}</h4>
  </card>
{:else}
  <card class="emptyCard" />
{/if}

<style lang="scss">
  card {
    width: 6em;
    height: 6em;
    padding: 2em;
    border-radius: 10px;

    &.dayCard {
      border: 1px solid gray;

      &.today {
        background-color: rgb(250, 82, 82);
      }
    }
    &.emptyCard {
      border: 1px solid rgb(59, 59, 59);
    }
  }
</style>

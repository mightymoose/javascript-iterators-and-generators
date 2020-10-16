<script>
  import NaivePomodoro from './NaivePomodoro.svelte';
  import IteratorPomodoro from "./IteratorPomodoro.svelte";
  import GeneratorPomodoro from "./GeneratorPomodoro.svelte";
  import Fasync from "./Fasync.svelte";
  import Async from "./Async.svelte";

  let progress = 0;

  function next() {
    progress = progress + 1;
  }
</script>

{#if progress === 0}
    <h3>The 'simple' pomodoro timer.</h3>
    <NaivePomodoro />
{:else if progress === 1}
    <h3>The pomodoro timer using an iterator.</h3>
    <IteratorPomodoro />
{:else if progress === 2}
    <h3>The pomodoro timer using a generator.</h3>
    <GeneratorPomodoro />
{:else if progress === 3}
    <h3>async/await</h3>
    <Async />
{:else if progress === 4}
    <h3>fasync</h3>
    <div style="padding-top: 10px; padding-bottom: 10px">
        <Fasync />
    </div>
{/if}

<div style="padding-top: 20px">
    <button on:click={next}>Next</button>
</div>

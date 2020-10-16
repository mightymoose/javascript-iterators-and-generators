<script>
  // The * here specifies that this is a generator
  function *buildPomodoro(segmentLengths) {
    let segments = [];

    while (true) {
      if (segments.length === 0) {
        segments = [...segmentLengths] ;
      }

      yield segments.shift(); // Pass control back
    }
  }

  const pomodoroConfiguration = [25, 5, 25, 5, 25, 5, 25, 20];
  const pomodoro = buildPomodoro(pomodoroConfiguration);
  let timeRemaining = null;

  setInterval(() => {
    if (!timeRemaining) {
      const currentPomodoro = pomodoro.next(); // Pass control to the generator
      timeRemaining = currentPomodoro.value;
    }

    timeRemaining = timeRemaining - 1;
  }, 200);
</script>

{timeRemaining}

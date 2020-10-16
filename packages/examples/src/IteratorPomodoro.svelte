<script>
  function buildPomodoro(segmentLengths) {
    let segments = [...segmentLengths];

    return {
      next() {
        const currentSegment = segments.shift();

        if (segments.length === 0) {
            segments = [...segmentLengths];
        }

        return {
          value: currentSegment,
          done: false
        }
      }
    }
  }

  const pomodoroConfiguration = [25, 5, 25, 5, 25, 5, 25, 20];
  const pomodoro = buildPomodoro(pomodoroConfiguration);
  let timeRemaining = null;

  setInterval(() => {
    if (!timeRemaining) {
      const currentPomodoro = pomodoro.next();
      timeRemaining = currentPomodoro.value;
    }

    timeRemaining = timeRemaining - 1;
    }, 200);
</script>

{timeRemaining}

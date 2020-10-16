<script>
  const pomodoroConfiguration = [25, 5, 25, 5, 25, 5, 25, 20];

  let timeRemaining = null;
  let remainingSegments = [...pomodoroConfiguration];

  setInterval(() => {
    if (!timeRemaining) {
        if (remainingSegments.length === 0) {
          remainingSegments = [...pomodoroConfiguration];
        }

        timeRemaining = remainingSegments.shift();
    }

    timeRemaining = timeRemaining - 1;
  }, 200);
</script>

{timeRemaining}



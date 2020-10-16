function buildPomodoro(segmentLengths) {
  let segments = [...segmentLengths];

  return {
    [Symbol.iterator]: function () { return this },
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

for (let value of pomodoro) {
  console.log(value);
}

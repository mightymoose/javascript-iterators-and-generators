function *buildPomodoro(segmentLengths) {
  let segments = [];

  while (true) {
    if (segments.length === 0) {
      segments = [...segmentLengths];
    }

    yield segments.shift();
  }
}

const pomodoroConfiguration = [25, 5, 25, 5, 25, 5, 25, 20];
const pomodoro = buildPomodoro(pomodoroConfiguration);

[...pomodoro]

for (let value of pomodoro) {
  console.log(value);
}

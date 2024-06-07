const levels = [
  { level: 1, shuttles: 7, interval: 9.00 },
  { level: 2, shuttles: 8, interval: 8.50 },
  { level: 3, shuttles: 8, interval: 8.00 },
  { level: 4, shuttles: 8, interval: 7.50 },
  { level: 5, shuttles: 9, interval: 7.10 },
  { level: 6, shuttles: 9, interval: 6.70 },
  { level: 7, shuttles: 10, interval: 6.30 },
  { level: 8, shuttles: 10, interval: 6.00 },
  { level: 9, shuttles: 10, interval: 5.60 },
  { level: 10, shuttles: 11, interval: 5.30 },
  { level: 11, shuttles: 11, interval: 5.00 },
  { level: 12, shuttles: 12, interval: 4.70 },
  { level: 13, shuttles: 12, interval: 4.50 },
  { level: 14, shuttles: 13, interval: 4.30 },
  { level: 15, shuttles: 13, interval: 4.10 },
  { level: 16, shuttles: 14, interval: 3.90 },
  { level: 17, shuttles: 15, interval: 3.70 },
  { level: 18, shuttles: 15, interval: 3.50 },
  { level: 19, shuttles: 16, interval: 3.30 },
  { level: 20, shuttles: 17, interval: 3.10 },
];

let stopTest = false;

async function beepTest() {
  document.getElementById("results").innerHTML = "";
  stopTest = false;
  await playAudio("startingInAudio");

  for (let i = 0; i < levels.length; i++) {
    if (stopTest) break;
    const level = levels[i];
    for (let j = 1; j <= level.shuttles; j++) {
      if (stopTest) break;
      document.getElementById("results").innerHTML += `<li class="list-group-item">Level: ${level.level}, Shuttle: ${j}</li>`;
      await playAudio("beepAudio");
      await new Promise(resolve => setTimeout(resolve, level.interval * 1000));
    }
  }

  if (!stopTest) await playAudio("finishedAudio");
}

function playAudio(audioId) {
  return new Promise(resolve => {
    const audio = document.getElementById(audioId);
    audio.play();
    audio.onended = () => resolve();
  });
}

document.getElementById("startButton").addEventListener("click", beepTest);

document.getElementById("endButton").addEventListener("click", () => {
  stopTest = true;
  document.getElementById("finishedAudio").play();
});

document.getElementById("clearButton").addEventListener("click", () => {
  document.getElementById("results").innerHTML = "";
});
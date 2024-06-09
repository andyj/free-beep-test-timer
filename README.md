# Free Beep Test

This is a simple one-page web application to run a 10-meter beep test. Created because I didn't want to use a paid app or one with adverts.

It's very basic, and uses Bootstrap 5 for styling and includes buttons to start, end, and clear the test results. It also plays specific audio files during the test.

## Project Structure

- `src/index.html`: The main HTML file containing the structure of the web page.
- `src/app.js`: The JavaScript file containing the logic for running the beep test.
- `src/mp3s/`: A directory containing the audio files used in the test:
  - `startingin.mp3`: Played when the test starts.
  - `beep.mp3`: Played during each shuttle.
  - `finished.mp3`: Played when the test is finished or stopped.

## Getting Started

To get started with the project, follow these steps:

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/andyj/free-beep-test-timer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd free-beep-test-timer
   ```

4. Open `src/index.html` in your web browser


## Usage
- *Start Test:* Begins the beep test, clears any previous results, and plays the "starting in" audio file. The test then proceeds through the levels and shuttles, playing the beep sound at each interval.
- *End Test:* Stops the test and plays the "finished" audio file.
- *Clear Results:* Clears the results list displayed on the page.


You can see it in action at [https://andyj.github.io/free-beep-test-timer/src/](https://andyj.github.io/free-beep-test-timer/src/)

### Thanks to
- https://realfavicongenerator.net/
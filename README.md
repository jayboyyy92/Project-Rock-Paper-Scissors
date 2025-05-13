# Rock Paper Scissors Console Game

A simple browser-based game implemented with HTML and JavaScript. The player competes against the computer for five rounds, with scores tracked and a final winner announced in the console.

🚀 Live Demo
Open index.html in your browser (double-click or via a local HTTP server).

📂 Features

Random computer choice using Math.random()

Human choice prompt via window.prompt(), normalized to lowercase

Single-round logic (playRound) handling ties, human wins, and computer wins, updating scores

Five-round game loop (playGame) that:

Prompts the user for input

Generates the computer’s choice

Plays each round and logs the result

Tracks scores

Declares the overall winner

🛠️ Built With

HTML5

JavaScript (ES6)

📁 File Structure

index.html — Loads the JavaScript script

script.js — Contains all game logic and the startup call to playGame()

git clone cd:
2. **Open the game**
   - Double-click `index.html`, or
   - Serve via a local server (e.g., `npx http-server .`) and visit `http://localhost:8080`
3. **Open the Developer Console**
   - Chrome: View → Developer → JavaScript Console
   - Firefox: Tools → Web Developer → Web Console
4. **Play the game**
   - Enter “rock”, “paper”, or “scissors” in each of the five prompts
   - Watch round results and final score in the console

👍 Enjoy playing and may the best hand win!


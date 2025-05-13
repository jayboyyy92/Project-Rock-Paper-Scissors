# Rock Paper Scissors Console Game

A simple browser-based Rock–Paper–Scissors game implemented in JavaScript. The player plays against the computer for five rounds, with scores tracked and a final winner announced in the console.

Features
	•	Random computer choice using Math.random().
	•	Human choice prompt via window.prompt(), normalized to lowercase.
	•	Single-round logic (playRound) that handles ties, human wins, and computer wins, updating scores.
	•	Five-round game loop (playGame) that:
	1.	Prompts the human for input
	2.	Generates the computer’s choice
	3.	Plays the round and logs the result
	4.	Tracks scores
	5.	Announces the overall winner

File Structure

/
├─ index.html       ← Loads the JS script
└─ script.js        ← All game logic and startup call to playGame()

Getting Started
	1.	Clone this repository
git clone 
cd 
	2.	Open index.html
	•	Double-click index.html, or
	•	Serve via a local HTTP server (e.g., npx http-server .) and navigate to http://localhost:8080.
	3.	Open the Developer Console
	•	In Chrome: View → Developer → JavaScript Console
	•	In Firefox: Tools → Web Developer → Web Console
	4.	Play the game
	•	The game will immediately start with five consecutive prompts—enter “rock”, “paper”, or “scissors” each time.
	•	Watch each round’s result and the final score announcement in the console.

Usage Example

Round 1: You win! Rock beats Scissors
Round 2: It’s a tie! You both chose paper
Round 3: You lose! Scissors beats Paper
Round 4: You win! Paper beats Rock
Round 5: You lose! Rock beats Paper
Final Scores - You: 2, Computer: 3
Computer wins the game!

Customization & Extension
	•	Reprompt on invalid input: Validate user input and reprompt if they enter anything other than “rock”, “paper”, or “scissors”.
	•	Score display in the page: Instead of console logging, update the HTML to show scores and results.
	•	Different match lengths: Allow the user to choose how many rounds to play.

License

This project is released under the MIT License.

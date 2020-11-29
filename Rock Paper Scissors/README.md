![](README.jpg)

# JAVASCRIPT BASICS | ETCH-A-SKETCH

[**Submission Instructions (Ctrl+Click to open in a new Tab)**](https://github.com/SocialHackersAcademy/FrontEndCourseExercises/#instructions)

#### INSTRUCTIONS

1. Create a blank HTML document with a script tag.  This game is going to be played
    completely from the console, so don't worry about putting anything else in there.

2. Your game is going to play against the computer, so begin with a function called `computerPlay` that will randomly return either 'Rock', 'Paper' or 'Scissors'.  We'll use this function in the game to make the computer's play.

3. Write a function that plays a single round of Rock Paper Scissors.  The function should take two parameters - the `playerSelection` and `computerSelection` - and then return a string that declares the winner of the round like so: `"You Lose! Paper beats Rock"`

   1. make your function case insensitive (so users can input `rock`, `ROCK`, `RocK` or any other variation)

   2. __Important note:__ you want to `return` the results of this function call, _not_ `console.log()` them.  To test this function console.log the results:

      ```js
      function playRound(playerSelection, computerSelection) {
      	// your code here!
      }

      const playerSelection = 'rock'
      const computerSelection = computerPlay()
      console.log(playRound(playerSelection, computerSelection))
      ```


4. Write a NEW function called `game()`. Use the previous function _inside_ of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

   1. You have not officially learned how to "loop" over code to repeat function calls... if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them.  If not, don't worry! Just call your `playRound` function 5 times in a row.  Loops are covered in the next lesson.

   2. At this point you should be using `console.log()` to display the results of each round and the winner at the end.
   
   3. Use `prompt()` to get input from the user. [Read the docs here if you need to.](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
   
   4. Feel free to re-work your previous functions if you need to.  Specifically, you might want to change the return value to something more useful.
   
   5. Feel free to create more "helper" functions if you think it would be useful.


[Project page](https://athena.socialhackersacademy.org/topic/project-rock-paper-scissors/)

---

_Photo by Marcus Wallis on Unsplash_
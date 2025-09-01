const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
console.log(score);

updateScoreElement();

// document.querySelector(".js-show-score").innerHTML = `
//        <p>
//        \nWins: ${score.wins}, Lossses: ${score.losses}, Ties: ${score.ties} ;
//        </p>
//         `;

function playGame(rps) {
  let result = "";
  const computerMove = pickComputerMove();
  if (rps == "rock") {
    if (computerMove === "rock") result = "tie";
    else if (computerMove === "paper") result = "lose";
    else if (computerMove === "scissors") result = "win";
  } else if (rps == "paper") {
    if (computerMove === "rock") result = "win";
    else if (computerMove === "paper") result = "tie";
    else if (computerMove === "scissors") result = "lose";
  } else if (rps == "scissors") {
    if (computerMove === "rock") result = "lose";
    else if (computerMove === "paper") result = "win";
    else if (computerMove === "scissors") result = "tie";
  }

  if (result === "tie") score.ties++;
  else if (result === "win") score.wins++;
  else if (result === "lose") score.losses++;

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-result").innerHTML = `
        You ${result}`;

  document.querySelector(".js-moves").innerHTML = `
          You
          <img class="move-thumbnails" src="./thumbnails/${rps}-emoji.png" alt="" />
          <img class="move-thumbnails" src="./thumbnails/${computerMove}-emoji.png" alt="" />
          Computer
        `;

  updateScoreElement();

  // document.querySelector(".rps-show-result").innerHTML = "goodbye";

  // alert(
  //   `You pick ${rps}, the computer pick ${computerMove}, you ${result}, \nwins: ${score.wins}, lossses: ${score.losses}, ties: ${score.ties}
  //   `
  // );
}

function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) return "rock";
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) return "paper";
  else if (randomNumber >= 2 / 3 && randomNumber < 1) return "scissors";
}

function resetScore() {
  score.ties = 0;
  score.wins = 0;
  score.losses = 0;

  document.querySelector(".js-result").innerHTML = ``;

  document.querySelector(".js-moves").innerHTML = ``;

  updateScoreElement();
  // localStorage.setItem("score", JSON.stringify(score));
  localStorage.removeItem("score");
}

function updateScoreElement() {
  document.querySelector(".js-show-score").innerHTML = `
             <p>
             \nWins: ${score.wins}, Lossses: ${score.losses}, Ties: ${score.ties} ;
             </p>
              `;
}

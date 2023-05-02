var sps = document.querySelectorAll(".option");
var stone = document.getElementById("stone");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");
var paragraph = document.getElementsByClassName("comment")[0];
var emoji = document.getElementsByClassName("emoji")[0];
var emojhurry = document.getElementsByClassName("emojhurry")[0];
var yourScoreCard = document.getElementById("uScore");
var computerScoreCard = document.getElementById("cScore");
var i;
function pop() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
  function next() {
    var popupnext = document.getElementById("mypopupnext");
    popupnext.classList.toggle("show");
    
  }
  function popplay() {
    var popupplay = document.getElementById("myPopuplay");
    popupplay.classList.toggle("show");
  }

function gameStart() {
    var computerChoice, yourScore = 0,
        computerScore = 0,
        yourChoice;
    yourScore = +yourScore;
    computerScore = +computerScore;
    yourScore = 0;
    computerScore = 0;
    sps.forEach(choose);
    yourScoreCard.innerHTML = yourScore;
    computerScoreCard.innerHTML = computerScore;
    paragraph.innerHTML = " ";
    emoji.innerHTML = " ";

    function choose(choice, index) {
        choice.addEventListener("click", function () {
            yourChoice = index +1;
            computerChoice = Math.floor(Math.random() * 3) + 1;
            if (computerChoice == 1) {
                paragraph.innerHTML = "Computer Choice: Stone";
            } else if (computerChoice == 2) {
                paragraph.innerHTML = "Computer Choice: Paper";
            } else {
                paragraph.innerHTML = "Computer Choice: Scissor";
            }


            if (yourChoice == computerChoice) {
                
                paragraph.innerHTML = "This is a Tie";
                emoji.innerHTML="&#128512";
                computerScoreCard.innerHTML = computerScore;
                yourScoreCard.innerHTML = yourScore;
                popplay();
            } 
            
            else if (((yourChoice == 3) && (computerChoice == 1)) || ((yourChoice == 1) && (computerChoice == 3))) {
                if (yourChoice > computerChoice) {
                    paragraph.innerHTML = "You Lost Against pc";
                    emoji.innerHTML="&#128524";
                    computerScore++;
                    computerScoreCard.innerHTML = computerScore;
                    yourScoreCard.innerHTML = yourScore;
                    popplay();
                } 
                else if(yourChoice < computerChoice){
                    paragraph.innerHTML = "You Win Against pc";
                    emoji.innerHTML="&#128518";
                    yourScore++;
                    computerScoreCard.innerHTML = computerScore;
                    yourScoreCard.innerHTML = yourScore;
                    popplay();
                }
            } 
            
            else if (yourChoice > computerChoice) {
                paragraph.innerHTML = "You Win Against pc";
                emoji.innerHTML="&#128518";
                yourScore++;
                yourScoreCard.innerHTML = yourScore;
                computerScoreCard.innerHTML = computerScore;
                popplay();
            }
            
            else {
                paragraph.innerHTML = "You Lost Against pc";
                emoji.innerHTML="&#128524";
                computerScore++;
                computerScoreCard.innerHTML = computerScore;
                yourScoreCard.innerHTML = yourScore;
                popplay();
            }

          

        })
    }

}
gameStart();
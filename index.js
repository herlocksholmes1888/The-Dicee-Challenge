function uponReload() {
    if (sessionStorage.getItem("buttonClicked")) {
        sessionStorage.removeItem("buttonClicked");

        let randomNumberOne = Math.floor(Math.random() * 6 + 1);
        let randomNumberTwo = Math.floor(Math.random() * 6 + 1);

        let result = document.getElementsByTagName("h1")[0];

        let firstURL = "./images/dice" + randomNumberOne + ".png";
        let secondURL = "./images/dice" + randomNumberTwo + ".png";

        let firstDice = document.getElementsByClassName("img1")[0];
        let secondDice = document.getElementsByClassName("img2")[0];

        if (randomNumberOne > randomNumberTwo) {
            result.innerHTML = "Player 1 wins!";
        } else if (randomNumberOne < randomNumberTwo) {
            result.innerHTML = "Player 2 wins!";
        } else {
            result.innerHTML = "Draw!";
        }

        firstDice.setAttribute("src", firstURL);
        secondDice.setAttribute("src", secondURL);
    }
}

let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function(){
    sessionStorage.setItem("buttonClicked", true);
    location.reload();
});

window.addEventListener("load", uponReload);
// Selecting all required elements
const selectBox = document.querySelector('.select-box')
selectXBtn = selectBox.querySelector('.playerX')
selectOBtn = selectBox.querySelector('.playerO')
playBoard = document.querySelector('.play-board')
allBox = document.querySelectorAll('section span')
players = document.querySelector('.players')

window.onload = () => {
    // Once window loaded

    for (let i = 0; i < allBox.length; i++) {
        // Add onclick attribute in all available section's spans
        allBox[i].setAttribute('onclick', 'clickedBox(this)')
    }

    selectXBtn.onclick = () => {
        selectBox.classList.add('hide') // Hide the select box on playerX button clicked

        playBoard.classList.add('show') // Show the playboard section on playerX button clicked
    }

    selectOBtn.onclick = () => {
        selectBox.classList.add('hide') // Hide the select box on playerO button clicked

        playBoard.classList.add('show') // Show the playboard section on playerO button clicked

        players.setAttribute('class', 'players active player')
    }
}

let playerXIcon = 'fas fa-times' // Class name of fontawesome cross icon
let playerOIcon = 'fas fa-circle' // Class name of fontawesome circle icon
let playerSign = 'X'; // Supose player will be X

// User click function
function clickedBox(element) {
    // console.log(element)

    if (players.classList.contains('player')) {
        // If players element contains player
        element.innerHTML`<i class="${playerOIcon}"></i>` // Adding circle icon tag user clicked element
        // If player will be O the we'll change the sign value to O
        playerSign = "O";
        element.setAttribute("id", playerSign);

        players.classList.add('active')
    } else {
        element.innerHTML = `<i class="${playerXIcon}></i>` // Adding circle icon tag inside user clicked element
        players.classList.add('active');


    }

    element.style.pointerEvents = 'none' // Once user select any box then that box can't be selected again

    let randomDelaytime = (Math.random() * 1000 + 200).toFixed(); // Generating random time dellay so bot will delay randomly to select box
    setTimeout(() => {
        bot(); // Calling bot function
    }, randomDelaytime); // Passing random delay time
}

// Bot click function
function bot() {
    // First change the playerSign... so if user has X value in id then bot will have O
    playerSign = "O"

    let array = [] // Creating empty array... we'll store the unsected box index in this array

    for (let i = 0; i < allBox.length; i++) {
        if (allBox[i].childElementCount == 0) {
            // If span has no child element
            array.push(i); // Inserting unclicked or unselected boxes array menas that span has no children

            // console.log(i + " " + "has no children")
        };
    }
    let randomBox = array[Math.floor(Math.random() * array.length)] // Getting random index from array so bot will select random unselected box


    if (array.length > 0) {
        if (players.classList.contains('player')) {
            // If players element has contains player
            allBox[randomBox].innerHTML = `<i class='$ {playerXIcon}'></i>`; // Adding cross icon tag inside user clicked element
            players.classList.remove("active");
            playerSign = "X";
            allBox[randomBox].setAttribute("id", playerSign);
        } else {
            allBox[randomBox].innerHTML = `<i class='$ {playerOIcon}'></i>`; // Adding circle icon tag inside user clicked element
            players.classList.remove("active");
            allBox[randomBox].setAttribute("id",)
        }
    }

    allBox[randomBox].style.pointerEvents = "none"; // Once bot select any box them user can't select or click on that 
}


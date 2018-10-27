//our topic array
var topics = ["Poker", "Blackjack", "Pokemon", "Yu-Gi-Oh!", "Cardfight Vanguard", "Hearthstone", "Magic The Gathering", "The Elder Scrolls: Legends", "Shadowverse"]


//function used to create all our buttons
function createButtons() {
    //Used to make sure there are no duplicate buttons when the user adds buttons later on
    $("buttons-here").empty();
    //for loop to add a button for each string in the array
    for (i=0; i<topics.length; i++) {
        var abutton = $("<button>");
        abutton.text(topics[i]);
        $("#buttons-here").append(abutton);
    }
}

createButtons();
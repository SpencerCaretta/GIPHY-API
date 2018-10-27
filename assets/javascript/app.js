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

$("buttons-here").on("click", function() {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=g4E3tCjjDQVeGcSI15gFw7acBt0kUX1p&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response) {
            var results = response.data;
            for (i=0; i<results.length; i++) {
                var gifDiv = $("<div class='item'>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var topicsImage = $("<img>");
                topicsImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(topicsImage);

                $("#gifs-here").prepend(gifDiv);
                }

        });
});
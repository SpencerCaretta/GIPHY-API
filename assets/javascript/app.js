//our topic array
var animals = ["Pig", "Eagle", "Cow", "Chicken", "Duck", "Wombat", "Monkey", "Dog", "Cat"]


//function used to create all our buttons
function createButtons() {
    //Used to make sure there are no duplicate buttons when the user adds buttons later on
    $("buttons-here").empty();
    //for loop to add a button for each string in the array
    for (i=0; i<animals.length; i++) {
        var abutton = $("<button data-animal = 'animals[i]'>");
        abutton.text(animals[i]);
        $("#buttons-here").append(abutton);
    }
}

createButtons();

$("button").on("click", function() {
    var animals = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals
     + "&api_key=g4E3tCjjDQVeGcSI15gFw7acBt0kUX1p&limit=10";

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

                var animalsImage = $("<img>");
                animalsImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(animalsImage);

                $("#gifs-here").prepend(gifDiv);
                }

        });
});
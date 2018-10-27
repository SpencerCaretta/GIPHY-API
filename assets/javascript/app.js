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
        abutton.addClass("gif");
        $("#buttons-here").append(abutton);
    }
}

createButtons();
//on click function to connect to GIPHY API
$("button").on("click", function() {
    var animals = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals
     + "&api_key=g4E3tCjjDQVeGcSI15gFw7acBt0kUX1p&limit=10";
    // ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        //function to take the results add a rating and prepend the gifs to the html
        .then(function(response) {
            var results = response.data;
            
            for (i=0; i<results.length; i++) {
                var gifDiv = $("<div class='item'>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var animalsImage = $("<img>");
                //add source, gif, and still image attributes to our image tags + data-animate, data-still, and data-state tags for future reference
                animalsImage.attr("src", results[i].images.fixed_height.url);
                animalsImage.attr({'data-animate' : results[i].images.fixed_height.url});
                animalsImage.attr({'data-state' : "still"});
                animalsImage.attr({'data-still' : results[i].images.fixed_height_still.url});

                
                // adds text and image tag to gifDiv
                gifDiv.prepend(p);
                gifDiv.prepend(animalsImage);
                // takes the text and image and adds it to the html
                $("#gifs-here").prepend(gifDiv);
                }

        });

//gif click function to switch between gif and still image

$(".gif").on("click", function() {
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "data-animate");
    } else if (state === "data-animate") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    } else {
        alert("Something has gone terribly wrong!");
    }
})
});

//search GIPHY API to add new button


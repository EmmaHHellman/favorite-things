$(document).ready(function() {
  $("form#favoriteThings").submit(function(event) {
    const faveColor = $("input#faveColor").val();
    const faveAnimal = $("input#faveAnimal").val();
    const faveFood = $("input#faveFood").val();
    
    let favoriteThings = [faveColor, faveAnimal, faveFood];
    console.log(favoriteThings);
    
    let newArray = [];
     
    newArray.push(
      favoriteThings[2]
    )
    newArray.push(
      favoriteThings[1]
    )

    console.log(newArray);
    $("#result").append("<li>" + favoriteThings[0] + "</li>")
    $("#result").append("<li>" + favoriteThings[1] + "</li>")
    $("#result").append("<li>" + favoriteThings[2] + "</li>")
    event.preventDefault();
    
  });
});
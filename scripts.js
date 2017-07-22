$(document).ready(function() {

var colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#e67e22', '#e74c3c', '#c0392b', "#f39c12", "#BDBB99", "#77B1A9", "#73A857"];

   $(".quote-btn").on("click", function(){
  var quotesList =  $.getJSON("https://gist.githubusercontent.com/abohannon/a0187309c729f04d571b74cfca893dac/raw/e680af4b71494e520c4d6f8bfaa2e98142e728fe/trump-quote2",
    function(json){
    i = Math.floor(Math.random() * (41)); // Randomize JSON items

          // Variables referencing JSON feed key/value pairs
          currentQuote = json[i].quote;
          currentAuthor = json[i].author;

          //JQuery animations for fadein of quote and author text
          $(".lead").animate(
            {
              opacity: 0
            },
            500,
            function() {
              $(this).animate(
                {
                  opacity: 1
                },
                500
              );
              $("#quote").html(currentQuote);
            }
          );
          $(".quote-author").animate(
            {
              opacity: 0
            },
            500,
            function() {
              $(this).animate(
                {
                  opacity: 1
                },
                500
              );
              $("#author").html(currentAuthor);
            }
          );

      $("#tweet-quote").attr('href', 'http://twitter.com/share?text='+'"'+currentQuote+'"'+ " - " +currentAuthor+'&hashtags=shittrumpsaid');

      var color = Math.floor(Math.random() * colors.length); // Randomize colors from colors array at top
      console.log("color is" + " " + color); // Check if function is returning a numerical value for the color array

      // JQuery animations for colors
      $("html body").animate(
        {
          backgroundColor: colors[color],
        },
        1000
      );
      $(".quote-btn").animate(
        {
          backgroundColor: colors[color],
        },
        500
      );
      $(".fa-twitter-square, .quote-box").animate(
        {
          color: colors[color],
        },
        1000
      );
    });
  });
});

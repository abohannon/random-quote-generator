$(document).ready(function() {

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

   $(".quote-btn").on("click", function(){
  var quotesList =  $.getJSON("https://gist.githubusercontent.com/abohannon/a0187309c729f04d571b74cfca893dac/raw/9dae423e3079e1cefe301b2a5f4c6e9a002cfc53/trump-quote2",
    function(json){
    i = Math.floor(Math.random() * (20));

          currentQuote = json[i].quote;
          currentAuthor = json[i].author;

      $("#quote").html(currentQuote);
      $("#author").html(currentAuthor);
      $("#tweet-quote").attr('href', 'http://twitter.com/share?text='+'"'+currentQuote+'"'+ " - " +currentAuthor+'&hashtags=shittrumpsaid');

      var color = Math.floor(Math.random() * colors.length);
      console.log("color is" + " " + color);
      $("html body, .quote-btn").css("background-color", colors[color]);
      $(".fa-twitter-square, .quote-box").css("color", colors[color]);



    });
  });
});

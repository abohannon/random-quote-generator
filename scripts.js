$(document).ready(function() {


   $(".quote-btn").on("click", function(){
  var quotesList =  $.getJSON("https://gist.githubusercontent.com/abohannon/a0187309c729f04d571b74cfca893dac/raw/9dae423e3079e1cefe301b2a5f4c6e9a002cfc53/trump-quote2",
    function(json){
    i = Math.floor(Math.random() * (20));
      console.log(i);

          currentQuote = json[i].quote;
          currentAuthor = json[i].author;

      $("#quote").html(currentQuote);
      $("#author").html(currentAuthor);
      $("#tweet-quote").attr('href', 'http://twitter.com/share?text='+'"'+currentQuote+'"'+ " - " +currentAuthor+'&hashtags=shittrumpsaid');
    });
  });
});

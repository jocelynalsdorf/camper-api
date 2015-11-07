$(document).ready(function(){
  var html = "";
  $.getJSON( "http://www.freecodecamp.com/news/hot", function( data ) {
  
    $.each(data, function( key, value ) {

      html += "<div class='mdl-card mdl-shadow--4dp grid-item'><div class='mdl-card__media'><div class='img-container'><img class='img-article' src='" + value.author.picture + "' width='175' height='175' border='0' style='padding:10px;'></div></div><div class='mdl-card__supporting-text'>" + value.headline + "</div><div class='mdl-card__supporting-text'><span class='highlight'>Upvotes: </span>" + value.rank + " <span class='highlight'>By:  </span><a href='http://www.freecodecamp.com/"+ value.author.username +"'>@" + value.author.username + "</a><button type='button' class='mdl-button mdl-js-button mdl-button--raised mdl-button--colored link-btn'><a href='" + value.link + "' target='_blank'>See More</a></button></div></div>";
      $("#content-holder").html(html);

    });
  });
});


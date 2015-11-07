$(document).ready(function(){
var html = "";
  $.getJSON( "http://www.freecodecamp.com/news/hot", function( data ) {
  
  $.each(data, function( key, value ) {
    // console.log(value.headline );
    // console.log(value.image );
    // console.log(value.rank );
    // console.log(value.link );
    // console.log(value.author.picture );
    // console.log(value.author.username);
    html += "<div class='mdl-card mdl-shadow--4dp grid-item'><div class='mdl-card__media'><img src='" + value.image + "' width='173' height='157' border='0' style='padding:10px;'></div><div class='mdl-card__supporting-text'>" + value.headline + "</div><div class='mdl-card__supporting-text'>" + value.rank + value.author.username + "</div></div>";
    $("#content-holder").html(html);

});
  
  
});

});


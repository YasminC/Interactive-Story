function initialize()
{
	$(document).ready(function() {
		
	var mobile = false;
	var maxWidth = 0;
	var maxHeight = 0;

	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var landscape = $(window).width() > $(window).height();

	if (windowWidth < 920)
	{
		mobile = true;
	}

	if(mobile) //reset styles
	{
		alert("My story only works for desktop dwellers I'm afraid! Please come back when you're next logged onto one!");
	}

	$( "#flipbook" ).mousedown(function() {
 document.getElementById('page_audio').play();
});

$( "html" ).mouseup(function() {
  document.getElementById('page_audio').pause();
});

//$( "#flipbook.p" ).click(function() {
// document.getElementById('page_audio').play();
//});
});
}

initialize();
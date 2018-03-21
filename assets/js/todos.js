
// Check Off Specific Todos By Clicking
$('li').click( function(){
	$(this).toggleClass("completed");
});


//Click on X to delete Todo
$("span").click(function(event) {
	alert("clicked a span");

	//stop bubbling up for event
	event.stopPropagation()

});


//Click on X to delete Todo
$("ul").click(function() {
	alert("clicked a ul");

});

//Click on X to delete Todo
$("#container").click(function() {
	alert("clicked a container");

});
//Click on X to delete Todo
$("body").click(function() {
	alert("clicked a body");

});




// Check Off Specific Todos By Clicking
$('li').click( function(){
	$(this).toggleClass("completed");
});


//Click on X to delete Todo
$("span").click(function(event) {
	//removing whole li by calling parent()
	$(this).parent().fadeOut(1000, function() {
		$(this).remove();
	});
	//stop bubbling up for event
	event.stopPropagation();

});





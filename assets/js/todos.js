
// Check Off Specific Todos By Clicking
//"When li is clicked in ul does callback function"
$('ul').on("click", "li", function(){
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

$("input[type='text']").keypress(function(event){
//If it is a enter key	
	if(event.which === 13){
		console.log($(this).val())
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span> X </span>"+todoText+"</li>");
	}
	;
})



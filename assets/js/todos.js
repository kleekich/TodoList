$('li').click( function(){
	//if li is gray
	if($(this).css("color")==="rgb(128, 128, 128)"){
		console.log("It is currently gray!");
		//turn it black
		$(this).css(
			{
				textDecoration: "none",
				color: "black"
			}

		);
	}else{
		$(this).css(
			{
				textDecoration: "line-through",
				color: "gray"
			}
		);
	}
	
	
});
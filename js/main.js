var pattern = ['R', 'Y', 'B', 'R', 'G', 'Y', 'B'];
			//[0, 1, 2 3, 4]
var num = 0; //target R=0

// array of basic pattern

$('.panel').on('click', function() {

	//Does the panel you clicked match the
	//current item in the sequence

	var colour= $(this).attr('data-colour');

	if ( colour == pattern[num] )  {
		console.log("CORRECT! :)");
		num = num + 1;
		//short cut... num++
	}

		if (num> pattern.length-1) {
			console.log("YOU WIN! YAY");
		}

	else {
		console.log("WRONG! :(");
	}

});







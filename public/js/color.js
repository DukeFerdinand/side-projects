
/**
 * Pushes value between 0 - 256 to an array
 * @return {rgb()} Returns rgb(arr[0], arr[1], arr[2]) as string
 */
function makeRandomColor() {
	var arr = [];

	for (var i = 0; i <= 2; i++ ){
		var currentNum = Math.floor(Math.random() * 256);
		arr.push(currentNum);
	}
	return 'rgb( ' + arr.join(', ') + ')';
}
var rgbValue;

/**
 * Assigns random rgb() values to each box with .each()
 * and selects a random box's rgb value from an array 
 * as the value to find.
 * @return {rgb()} returns computer-selected rgb value from
 * array
 */
function assignBoxes(){
	var divArr = [];

	$('.color-divs').each(function(){
		$(this).css('background-color', makeRandomColor());
		divArr.push($(this).css('background-color'));
	});

	var compSelect = Math.floor(Math.random() * divArr.length);
	rgbValue = divArr[compSelect];

	$('#rgb-value').text("Find this: " + rgbValue);
	return rgbValue;
}


/**
 * Initial fade-in for colored boxes
 */
function fadeInItem(){

	$(".color-divs").fadeIn(500);
}


/**
 * Clicking the Button starts the game
 */
$('header>div>div').click(function(){
	assignBoxes();
	fadeInItem();
});


/**
 * Checks if user selected value is equal to the
 * randomly selected value
 */
$('.color-divs').click(function(){
	userSelect = $(this).css('background-color');
	if (userSelect == rgbValue) {
		$('.color-divs').fadeOut(400);
		assignBoxes();
		fadeInItem();
	}
});










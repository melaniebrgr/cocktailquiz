function log(m) {
	console.log(m);
}

var APP = APP || {};

APP.util = function( $ ) {

	function publicUniq( inputArr ) {
	    var resultArr = [];
	    $.each(inputArr, function(i, el) {
	        if ($.inArray(el, resultArr) === -1) { resultArr.push(el); }
	    });
	    return resultArr;
	}

	function publicRanIndex( array ) {
		return Math.floor(Math.random()*array.length);
	}

	return {
		uniq: publicUniq,
		ranElement: publicRanIndex
	};

}( jQuery );


APP.load = function() {

	function listIngredients( cocktailsArr ) {
		var ingredList = [];
		cocktailsArr.forEach(function(el) {
			ingredList = el.makeIngredList( ingredList );
		});
		return APP.util.uniq( ingredList ).sort();
	}

	function publicCreateIngredButtons() {
		var ingredients = listIngredients( cocktails );
		var $answersSection = $('.answers');
		ingredients.forEach(function(el) {
			var $button = $("<button>" + el + "</button>");
			$answersSection.append($button);
		});
	}

	// function setCocktailName() {
		
	// }
	
	return {
		createIngredButtons: publicCreateIngredButtons
	};
	
}();

$(document).ready(function() {
	APP.load.createIngredButtons();
});
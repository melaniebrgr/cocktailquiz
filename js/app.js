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
		ranIndex: publicRanIndex
	};

}( jQuery );


APP.load = function( cocktails  ) {
	var cocktailsInGame = cocktails;
	var selectedCocktail;

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

	function newCocktail( cocktailsInGame ) {
		var index = APP.util.ranIndex( cocktailsInGame );
		return cocktailsInGame.splice( index, 1 );
	}

	function publicPickCocktail() {
		selectedCocktail = newCocktail( cocktailsInGame )[0];
		$('.mix-info .cocktail-name').text( selectedCocktail.name );
	}

	function publicGetSelectedCocktail() {
		return selectedCocktail;
	}
	
	return {
		createIngredButtons: publicCreateIngredButtons,
		pickCocktail: publicPickCocktail,
		getSelectedCocktail: publicGetSelectedCocktail
	};
	
}( cocktails );

$(document).ready(function() {
	APP.load.createIngredButtons();
	APP.load.pickCocktail();
	log(APP.load.getSelectedCocktail());
});
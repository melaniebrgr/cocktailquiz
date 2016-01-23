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

APP.handle = function () {

	function publicIngredButtonClick() {
		//on click get the text of the button
		//add the text to ul.cocktail-ingredients
		//on additional click, remove from
		var $button = $(this), 
			ingredient = $button.text(),
			$cocktailIngredUL = $('.mix-info .cocktail-ingredients');

		if ( !$button.hasClass('is-active') ) {	
			$cocktailIngredUL.append('<li>' + ingredient + '</li>');
			$button.addClass('is-active');
		} else {
			log(ingredient);
			$cocktailIngredUL.find( 'li:contains("' + ingredient + '")' ).remove();
			$button.removeClass('is-active');
		}
	}

	function publicMixButtonClick() {
		//get the ingredients of the selected cocktail
		//get user selected ingredients
		//compare ingredients of selected cocktail with user's
		//I want to provide user feedback
		//If incorrect:
			//which ingredients are correct, if any
			//which are incorrect, if any
			//if there are too many
			//if there are too few
		//If correct:
			//congratulations, the amounts for each ingredient, and the url for more information
			//increment score
			//remove cocktails from questions array
			//turn Mix button into new drink button
		var selectedCocktail = APP.load.getSelectedCocktail(),
			selectedIngreds = [],
			userIngreds = [];
		selectedCocktail.ingredients.forEach(function(el) {
			selectedIngreds.push(el.ingredient);
		});
		// $('.cocktail-ingredients li').each();
		log( selectedIngreds );
	}

	return {
		ingredButtonClick: publicIngredButtonClick,
		mixButtonClick: publicMixButtonClick
	};
}();

APP.load = function ( cocktails  ) {
	var cocktailsInGame = cocktails,
		selectedCocktail;

	function listIngredients( cocktailsArr ) {
		var ingredList = [];
		cocktailsArr.forEach(function(el) {
			ingredList = el.makeIngredList( ingredList );
		});
		return APP.util.uniq( ingredList ).sort();
	}

	function publicCreateIngredButtons() {
		var ingredients = listIngredients( cocktails ),
			$answersSection = $('.answers');
		ingredients.forEach(function(el) {
			var $button = $("<button>" + el + "</button>");
			$button.click( APP.handle.ingredButtonClick );
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
	$('button.mix').click(APP.handle.mixButtonClick);
});
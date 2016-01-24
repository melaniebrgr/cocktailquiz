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

APP.handle = function( $ ) {

	function publicIngredButtonClick() {
		//on click get the text of the button
		//add the text to ul.cocktail-ingredients
		//on additional click, remove from
		var $button = $(this), 
			ingredient = $button.text(),
			$cocktailIngredUL = $('.quiz__mix-info .cocktail-ingredients');

		if ( !$button.hasClass('is-active') ) {	
			$cocktailIngredUL.append('<li>' + ingredient + '</li>');
			$button.addClass('is-active');
		} else {
			$cocktailIngredUL.find( 'li:contains("' + ingredient + '")' ).remove();
			$button.removeClass('is-active');
		}
	}

	function getAmounts() {
		return " Amounts here";
	}

	function createIngredStr( ingreds ) {
		var str = "";
		
		if ( ingreds.length === 1 ) {
			str = ' "' + ingreds[0] + '"';
			return str;
		}

		ingreds.forEach(function(el, i) {
			if ( i === ingreds.length - 1 ) { 
				str += ' and "' + el + '"';
			} else {
				str += ' "' + el + '",';
			}
		});
		return str;
	}

	function createFeedback( result ) {
		// If incorrect:
		// 	which ingredients are correct, if any
		// 	which are incorrect, if any
		// 	if there are too many
		// 	if there are too few
		// If correct:
		// 	congratulations, the amounts for each ingredient, and the url for more information

		//no ingredients selected
		if ( result.correctGuesses.length === 0 && result.incorrectGuesses.length === 0 ) {
			return "Anyone can mix Nitrogen, Oxygen, and Argon, but air won't get you drunk – why not pick some ingredients?";

		//the right number of ingredients and all the right ones
		} else if ( result.diff === 0 && result.incorrectGuesses.length === 0 ) { 
			return "Good mixing! You're a bartender in the making!" + getAmounts();

		//the right number of ingredients but none of the right ones
		} else if ( result.diff === 0 && result.correctGuesses.length === 0 ) {
			return "You'd really drink this? You've got the right number of ingredients, but none of the right ones.";

		//the right number of ingredients and some of the right ones
		} else if ( result.diff === 0 && result.correctGuesses.length > 0 ) { 
			return "You've got the right number of ingredients, but not all the right ones. You might want to skip the" + createIngredStr(result.incorrectGuesses) + " Ew.";

		//too many ingredients and none of the right ones	
		} else if ( result.diff > 0 && result.correctGuesses.length === 0 ) {
			return "What is this witches brew? Not only do you have " + result.diff + " too many ingredients, but none of them are in this cocktail.";

		//too many ingredients but some are the right ones	
		} else if ( result.diff > 0 && result.correctGuesses.length > 0 ) {
			return "Not bad. You have " + result.diff + " too many ingredients, but at least you got the" + createIngredStr(result.correctGuesses) + " right.";

		//too few ingredients and none are the right ones
		} else if ( result.diff < 0 && result.correctGuesses.length === 0 ) {
			return "It's missing, well, everything. You have " + Math.abs(result.diff) + " too few ingredients, and none of the ones you've picked are in this cocktail.";
		
		//too few ingredients but some are the right ones
		} else if ( result.diff < 0 && result.correctGuesses.length > 0 ) {
			return "Close. You have " + Math.abs(result.diff) + " too few ingredients but at least you got the" + createIngredStr(result.correctGuesses) + " right.";
		}
	}

	function updateView_corresponce() {
		//
	}

	function publicMixButtonClick() {
		//get the selected cocktail
		//get user selected ingredients
		//compare ingredients of selected cocktail with user's
		//get user feedback
		//display user feedback
		//if the user is correct, do stuff

		var quizCocktail = APP.load.getSelectedCocktail(),
			userIngreds = [],
			result,
			feedback;

		$('.cocktail-ingredients li').each(function(i, el) {
			userIngreds.push( $(el).text() );
		});

		result = quizCocktail.getResult( userIngreds );
		feedback = createFeedback( result );
		$('.cocktail-feedback').removeClass('is-hidden').text(feedback);
		if ( result.diff === 0 && result.incorrectGuesses.length === 0 ) {
			updateView_corresponce();
		}
	}

	return {
		ingredButtonClick: publicIngredButtonClick,
		mixButtonClick: publicMixButtonClick
	};
}( jQuery );

APP.load = function ( cocktails  ) {
	var cocktailsInGame = cocktails,
		selectedCocktail;

	function publicSetTotalQues() {
		$('.total-ques').text( cocktails.length );
	}

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
		$('.quiz__mix-info .cocktail-name').text( selectedCocktail.name );
	}

	function publicGetSelectedCocktail() {
		return selectedCocktail;
	}
	
	return {
		createIngredButtons: publicCreateIngredButtons,
		pickCocktail: publicPickCocktail,
		getSelectedCocktail: publicGetSelectedCocktail,
		setTotalQues: publicSetTotalQues
	};
	
}( cocktails );

$(document).ready(function() {
	APP.load.setTotalQues();
	APP.load.createIngredButtons();
	APP.load.pickCocktail();
	$('button.mix').click(APP.handle.mixButtonClick);
	log(APP.load.getSelectedCocktail().makeIngredList());
});
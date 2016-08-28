var debug = true;

function log(m) {
	console.log(m);
}

var APP = APP || {};

APP.util = function() {

	function publicUniq(inputArr) {
	    var resultArr = [];
	    $.each(inputArr, function(i, el) {
	        if ($.inArray(el, resultArr) === -1) { resultArr.push(el); }
	    });
	    return resultArr;
	}

	function publicRanIndex(array) {
		return Math.floor(Math.random()*array.length);
	}

	function publicAlphabetically(a, b){
		var nameA = a.toLowerCase(); 
		var	nameB = b.toLowerCase();

		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return 0;
	}

	return {
		uniq: publicUniq,
		ranIndex: publicRanIndex,
		alphabetically: publicAlphabetically
	};

}();



APP.handle = function() {

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

			$cocktailIngredUL.find( 'li:contains("' + ingredient + '")' ).each(function() { 
				if ( $(this).text() === ingredient ) 
					$(this).remove();
			});
			$button.removeClass('is-active');
		}
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
		var cocktail = APP.init.getSelectedCocktail();

		//no ingredients selected
		if ( result.correctGuesses.length === 0 && result.incorrectGuesses.length === 0 ) {
			return "Anyone can mix Nitrogen, Oxygen, and Argon, but air won't get you drunk – why not pick some ingredients?";

		//the right number of ingredients and all the right ones
		} else if ( result.diff === 0 && result.incorrectGuesses.length === 0 ) {
			return "That's right! You're going to need" + cocktail.createAmountAndInggredStr() + ". Learn more about mixing a ";

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
			return "It's missing, well, everything. You have " + Math.abs(result.diff) + " too few ingredients, and none of the ones you've picked are in a " + cocktail.name + ".";
		
		//too few ingredients but some are the right ones
		} else if ( result.diff < 0 && result.correctGuesses.length > 0 ) {
			return "Close. You have " + Math.abs(result.diff) + " too few ingredients but at least you got the" + createIngredStr(result.correctGuesses) + " right.";
		}
	}

	function updateTotal() {
		var total = $('.score .correct-ans');
		total.text(parseInt(total.text()) + 1);
	}

	function publicMixButtonClick() {
		//get the selected cocktail
		//get user selected ingredients
		//compare ingredients of selected cocktail with user's
		//get user feedback
		//display user feedback

		var cocktail = APP.init.getSelectedCocktail(),
			userIngreds = [],
			result,
			feedback;

		$('.cocktail-ingredients li').each(function(i, el) {
			userIngreds.push( $(el).text() );
		});

		result = cocktail.getResult( userIngreds );
		feedback = createFeedback( result );
		$('.cocktail-feedback').removeClass('is-hidden').text(feedback);

		//check if user has correct answer
		if ( result.diff === 0 && result.incorrectGuesses.length === 0 ) {
			//increment score
			//add link to success message
			//hide 'Mix' button, 'Skip' button
			//show 'New drink' button
			updateTotal();
			$('.cocktail-feedback').append( cocktail.createLinkToRecipe() );
			$('button.skip').addClass('is-hidden');
			$(this).addClass('is-hidden');
			$('button.new-drink').removeClass('is-hidden');
		}
	}

	function publicSkipButtonClick() {
		// get the current cocktail
		// set a new cocktail
		// add old cocktail back to the cocktail array
		var prevCocktail = APP.init.getSelectedCocktail();
		APP.init.pickCocktail();
		APP.init.addToCocktailsInGame( prevCocktail );
		APP.init.reset();
	}

	function publicNewDrinkButtonClick() {
		$(this).addClass('is-hidden');
		$('button.skip').removeClass('is-hidden');
		$('button.mix').removeClass('is-hidden');
		APP.init.reset();
		APP.init.pickCocktail();
	}

	return {
		ingredButtonClick: publicIngredButtonClick,
		mixButtonClick: publicMixButtonClick,
		skipButtonClick: publicSkipButtonClick,
		newDrinkButtonClick: publicNewDrinkButtonClick
	};
}();


APP.init = function () {
	var cocktailsInGame = APP.data.cocktails;
	var selectedCocktail;

	function publicSetTotalQues() {
		$('.total-ques').text( APP.data.cocktails.length );
	}

	function listAllIngredients( cocktailsArr ) {
		var ingredList = [];
		cocktailsArr.forEach(function(el) {
			ingredList = el.makeIngredList( ingredList );
		});
		return APP.util.uniq( ingredList ).sort(APP.util.alphabetically);
	}

	function publicCreateIngredButtons() {
		var ingredients = listAllIngredients( APP.data.cocktails ),
			$answersSection = $('.answers');
		ingredients.forEach(function(el) {
			var $button = $("<button>" + el + "</button>");
			$button.click( APP.handle.ingredButtonClick );
			$answersSection.append($button);
		});
	}

	function newCocktail( cocktailsInGame ) {
		//get a random index value given the array passed as an argument
		//remove the element from the array and return it
		var index = APP.util.ranIndex( cocktailsInGame );
		return cocktailsInGame.splice( index, 1 );
	}

	function publicPickCocktail() {
		//set the selectedCocktail private variable
		//update the mix-info
		selectedCocktail = newCocktail( cocktailsInGame )[0];
		$('.quiz__mix-info .cocktail-name').text( selectedCocktail.name );
		if(debug) log(selectedCocktail.makeIngredList());
	}

	function publicGetSelectedCocktail() {
		return selectedCocktail;
	}

	function publicAddToCocktailsInGame(el) {
		cocktailsInGame.push(el);
	}

	function publicReset() {
		// clear ingredients in mix info and feedback
		// deactivate all ingredient buttons
		$('.quiz__mix-info .cocktail-ingredients').empty();
		$('.cocktail-feedback').addClass('is-hidden').empty();
		$('.answers button.is-active').removeClass('is-active');
	}
	function publicReinit() {
		cocktailsInGame = APP.data.cocktails;
		$('.score .correct-ans').text('0');
		publicReset();
		publicPickCocktail();
	}
	
	return {
		createIngredButtons: publicCreateIngredButtons,
		pickCocktail: publicPickCocktail,
		getSelectedCocktail: publicGetSelectedCocktail,
		setTotalQues: publicSetTotalQues,
		addToCocktailsInGame: publicAddToCocktailsInGame,
		reset: publicReset,
		reinit: publicReinit
	};
	
}();

$(document).ready(function() {
	APP.init.setTotalQues();
	APP.init.createIngredButtons();
	APP.init.pickCocktail();
	$('button.mix').click(APP.handle.mixButtonClick);
	$('button.skip').click(APP.handle.skipButtonClick);
	$('button.new-drink').click(APP.handle.newDrinkButtonClick);
	$('a.reinit').click(APP.init.reinit);
});
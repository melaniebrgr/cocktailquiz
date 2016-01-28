var APP = APP || {};

APP.class = function() {

	function Cocktail( name, ingredients, recipeURL ) {
		this.name = name;
		this.ingredients = ingredients;
		this.url = recipeURL;
	}
	Cocktail.prototype.getResult = function getResult( userIngred ) {
			var correctIngred = [],
				incorrectIngred = [],
				quizIngred,
				diff;

			quizIngred = this.makeIngredList();
			userIngred.forEach(function(el) {
				if ( $.inArray(el, quizIngred) === -1  ) {
					incorrectIngred.push(el);
				} else {
					correctIngred.push(el);
				}
			});			

			diff = userIngred.length - quizIngred.length;

			return {
				diff: diff,
				correctGuesses: correctIngred,
				incorrectGuesses: incorrectIngred
			};
	};
	Cocktail.prototype.makeIngredList = function makeIngredList( ingredList ) {
		var ingredList = ingredList || [];
		this.ingredients.forEach(function(el) {
			ingredList.push( el.ingredient );
		});
		return ingredList;
	};
	Cocktail.prototype.createAmountAndInggredStr = function createAmountAndInggredStr() {
		//compose ingredient amounts and url into a html string that is added to the createFeedback() basic success message
		//iterate through the ingredients array
		//for each object add, for example, " 2 oz bourbon," to the growing string
		var str = "";

		if ( this.ingredients.length === 1 ) {
			//this drink is pretty shitty
			str += " " + this.ingredients.amount + " " + this.ingredients.ingredient;
			return str;
		}

		this.ingredients.forEach(function(el, i, arr) {
			var howMuchOf = "";
			if ( i === arr.length - 1 ) { 
				howMuchOf = " and " + el.amount + " " + el.ingredient;
			} else {
				howMuchOf = " " + el.amount + " " + el.ingredient + ",";
			}
			str += howMuchOf;
		});
		return str;
	};
	Cocktail.prototype.createLinkToRecipe = function createLinkToRecipe() {
		//TIL appending DOM strings with jQuery turns them into DOM nodes.
		return "<a href='" + this.url + "' target='_blank'>" + this.name + "</a>.";
	};

	return {
		Cocktail: Cocktail
	};

}();



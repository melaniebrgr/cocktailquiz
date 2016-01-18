function Cocktail( name, ingredients, recipeURL ) {
	this.name = name;
	this.ingredients = ingredients;
	this.url = recipeURL;
}
Cocktail.prototype.hasIngredients = function hasIngredients( userIngredients ) {
	//check if userIngredients match this cocktail ingredients
}

var oldFashioned = new Cocktail("Old Fashioned", [
	{ amount: "2 oz", ingredient: "bourbon" },
	{ amount: "1 tsp", ingredient: "sugar" },
	{ amount: "2-3 dashes", ingredient: "Angostura bitters" }],
	"http://www.seriouseats.com/recipes/2008/06/traditional-old-fashioned-recipe.html");

var martinez = new Cocktail("Martinez", [
	{ amount: "1.5 oz", ingredient: "Old Tom gin" },
	{ amount: "1.5 oz", ingredient: "sweet vermouth" },
	{ amount: "1 tsp", ingredient: "maraschino liqueur" },
	{ amount: "2 dashes", ingredient: "orange bitters" },
	{ amount: "", ingredient: "lemon twist" }],
	"http://www.seriouseats.com/recipes/2011/09/martinez-cocktail-gin-cocktail-recipe.html");

var manhattan = new Cocktail("Manhattan", [
	{ amount: "4 oz", ingredient: "whiskey" },
	{ amount: "2 oz", ingredient: "sweet vermouth" },
	{ amount: "4 dashes", ingredient: "Angostura bitters" },
	{ amount: "2", ingredient: "maraschino cherries" }],
	"http://www.seriouseats.com/recipes/2008/01/cocktails-manhattan-recipe.html");

var brooklyn = new Cocktail("Brooklyn", [
	{ amount: "2 oz", ingredient: "rye" },
	{ amount: "1 oz", ingredient: "dry vermouth" },
	{ amount: "0.25 oz", ingredient: "maraschino liqueur" },
	{ amount: "0.25 oz", ingredient: "Angostura bitters" }],
	"http://www.seriouseats.com/recipes/2011/02/the-brooklyn-cocktail-rye-maraschino-vermouth.html");
					
var daiquiri = new Cocktail("Daiquiri", [
	{ amount: "2 oz", ingredient: "light rum" },
	{ amount: "0.75 oz", ingredient: "lime juice" },
	{ amount: "1 tsp", ingredient: "sugar" }],
	"http://www.seriouseats.com/recipes/2008/05/daiquiri-recipe.html");

var margarita = new Cocktail("Classic Margarita", [
	{ amount: "", ingredient: "lime wedge" },
	{ amount: "1 tbsp", ingredient: "coarse salt" },
	{ amount: "4 oz", ingredient: "blanco tequila" },
	{ amount: "2 oz", ingredient: "Cointreau" },
	{ amount: "1.5 oz", ingredient: "lime juice" }],
	"http://www.seriouseats.com/recipes/2015/04/classic-margarita-recipe-tequila-cocktail.html");				

var sidecar = new Cocktail("Sidecar", [
	{ amount: "2 oz", ingredient: "cognac" },
	{ amount: "1 oz", ingredient: "Cointreau" },
	{ amount: "0.75 oz", ingredient: "lemon juice" }],
	"http://www.seriouseats.com/recipes/2010/11/sidecar-drink-cocktail-recipe.html");

var french75 = new Cocktail("French 75", [
	{ amount: "2 oz", ingredient: "gin" },
	{ amount: "1 oz", ingredient: "lemon juice" },
	{ amount: "2 tsp", ingredient: "sugar" },
	{ amount: "", ingredient: "sparkling wine" }]
	"http://www.seriouseats.com/recipes/2011/03/french-75-cocktial-gin-champagne-lemon.html");

var bloodyMary = new Cocktail("Blood Mary", [
	{ amount: "1 tbsp", ingredient: "celery salt" },
	{ amount: "2 wedges", ingredient: "lemon" },
	{ amount: "0.5 tsp", ingredient: "Worcestershire sauce" },
	{ amount: "0.25 tsp", ingredient: "soy sauce" },
	{ amount: "0.5 tsp", ingredient: "black pepper" },
	{ amount: "0.25 tsp", ingredient: "hot sauce" },
	{ amount: "0.5 tsp", ingredient: "horseradish" },
	{ amount: "2 oz", ingredient: "vodka" },
	{ amount: "4 oz", ingredient: "tomato juice" },
	{ amount: "1 stick", ingredient: "celery" }],
	"http://www.seriouseats.com/recipes/2011/06/the-ultimate-fully-loaded-bloody-mary-recipe.html");

var irishCoffee = new Cocktail("Irish Coffee", [
	{ amount: "2 oz", ingredient: "Irish whiskey" },
	{ amount: "4 oz", ingredient: "coffee" },
	{ amount: "1 oz", ingredient: "simple syrup" },
	{ amount: "", ingredient: "heavy cream" }],
	"http://www.seriouseats.com/recipes/2010/03/irish-coffee-drink-st-patricks-dayrecipe.html");

var jackRose = new Cocktail("Jack Rose", [
	{ amount: "2 oz", ingredient: "Laird's Applejack" },
	{ amount: "0.75 oz", ingredient: "grenadine" },
	{ amount: "0.75 oz", ingredient: "lemon juice" },
	{ amount: "1 dash", ingredient: "Peychaud's bitters" },
	{ amount: "", ingredient: "lemon twist" }],
	"http://www.seriouseats.com/recipes/2014/08/jack-rose-cocktail-recipe.html");

var negroni = new Cocktail("Negroni", [
	{ amount: "1 oz", ingredient: "dry gin" },
	{ amount: "1 oz", ingredient: "Campari" },
	{ amount: "1 oz", ingredient: "sweet vermouth" }],
	"http://www.seriouseats.com/recipes/2010/04/negroni-cocktail-recipe-gin-campari-vermouth.html");

var boulevardier = new Cocktail("Boulevardier", [
	{ amount: "1 oz", ingredient: "bourbon" },
	{ amount: "1 oz", ingredient: "Campari" },
	{ amount: "1 oz", ingredient: "sweet vermouth" },
	{ amount: "", ingredient: "orange twist" }],
	"http://www.seriouseats.com/recipes/2008/09/boulevardier-recipe.html");

var sazerac = new Cocktail("Sazerac", [
	{ amount: "1 tsp", ingredient: "sugar" },
	{ amount: "3 dashes", ingredient: "Peychaud's Bitters" },
	{ amount: "3 drops", ingredient: "water" },
	{ amount: "2 oz", ingredient: "rye whiskey" },
	{ amount: "1 tsp", ingredient: "Herbsaint" },
	{ amount: "", ingredient: "lemon twist" }],
	"http://www.seriouseats.com/recipes/2007/07/cocktails-recipes-the-sazerac.html");

var vieuxCarre = new Cocktail("Vieux Carre", [
	{ amount: "0.5 tsp", ingredient: "Benedictine" },
	{ amount: "1 dash", ingredient: "Peychaud's Bitters" },
	{ amount: "1 dash", ingredient: "Angostura Bitters" },
	{ amount: "0.75 oz", ingredient: "rye whiskey" },
	{ amount: "0.75 oz", ingredient: "cognac" },
	{ amount: "0.75 oz", ingredient: "sweet vermouth" }],
	"http://www.seriouseats.com/recipes/2008/07/vieux-carre-recipe.html");
var ramosFizz = new Cocktail("Ramos Fizz",[
	{ amount: "2 oz", ingredient: "gin" },
	{ amount: "1 oz", ingredient: "cream" },
	{ amount: "1", ingredient: "egg white" },
	{ amount: "0.5 oz", ingredient: "lemon juice" },
	{ amount: "0.5 oz", ingredient: "lime juice" },
	{ amount: "2 tsp", ingredient: "sugar" },
	{ amount: "3 drops", ingredient: "orange flower water" },
	{ amount: "", ingredient: "seltzer" }],
	"http://www.seriouseats.com/recipes/2009/06/time-for-a-drink-ramos-fizz.html");

var mintJulep = new Cocktail("Mint Julep", [
	{ amount: "2 oz", ingredient: "bourbon" },
	{ amount: "2 tsp", ingredient: "simple syrup" },
	{ amount: "8 leaves", ingredient: "fresh mint" },
	{ amount: "", ingredient: "crushed ice" }],
	"http://www.seriouseats.com/recipes/2010/04/how-to-make-a-mint-julep-recipe-derby-day.html");

var whiskeySour = new Cocktail("Whiskey Sour", [
	{ amount: "2 oz", ingredient: "whiskey" },
	{ amount: "1 oz", ingredient: "lemon juice" },
	{ amount: "1 tsp", ingredient: "sugar" },
	{ amount: "1", ingredient: "egg white" }],
	"http://www.seriouseats.com/recipes/2007/10/cocktails-whiskey-sour.html");

var maiTai = new Cocktail("Mai Tai", [
	{ amount: "2 oz", ingredient: "Jamaican rum" },
	{ amount: "1 oz", ingredient: "lime juice" },
	{ amount: "1 oz", ingredient: "curacao" },
	{ amount: "0.25 oz", ingredient: "orgeat" },
	{ amount: "0.25", ingredient: "rock-candy syrup" }],
	"http://www.seriouseats.com/recipes/2008/03/time-for-a-drink-mai-tai-recipe.html");

var plantersPunch = new Cocktail("Planter's Punch", [
	{ amount: "3 oz", ingredient: "dark rum" },
	{ amount: "1 oz", ingredient: "simple syrup" },
	{ amount: "0.75 oz", ingredient: "lime juice" },
	{ amount: "3 dashes", ingredient: "Angostura bitters" }],
	"http://www.seriouseats.com/recipes/2010/07/planters-punch-cocktail-recipe.html");

var cosmopolitan = new Cocktail("Cosmopolitan", [
	{ amount: "", ingredient: "ice" },
	{ amount: "1.5 oz", ingredient: "citrus-flavored vodka" },
	{ amount: "0.5 oz", ingredient: "triple sec" },
	{ amount: "0.5 oz", ingredient: "cranberry juice" },
	{ amount: "0.25 oz", ingredient: "lime juice" },
	{ amount: "", ingredient: "ornage twist" }],
	"http://www.seriouseats.com/recipes/2011/10/how-to-make-a-cosmopolitan-cocktail-best-recipe.html");

var piscoSour = new Cocktail("Pisco Sour", [
	{ amount: "3 oz", ingredient: "pisoc" },
	{ amount: "1 oz", ingredient: "lime juice" },
	{ amount: "0.75 oz", ingredient: "simple syrup" },
	{ amount: "1", ingredient: "egg white" },
	{ amount: "1 dash", ingredient: "Angostura bitters" }],
	"http://www.seriouseats.com/recipes/2011/02/time-for-a-drink-pisco-sour.html");

var tomCollins = new Cocktail("Tom Collins", [
	{ amount: "2 oz", ingredient: "gin" },
	{ amount: "2.5 tbsp", ingredient: "lemon juice" },
	{ amount: "1 tsp", ingredient: "sugar" },
	{ amount: "", ingredient: "club soda" }],
	"http://www.seriouseats.com/recipes/2008/08/tom-collins-recipe.html");

var lastWord = new Cocktail("Last Word", [
	{ amount: "0.75 oz", ingredient: "gin" },
	{ amount: "0.75 oz", ingredient: "lime juice" },
	{ amount: "0.75 oz", ingredient: "maraschino liqueur" },
	{ amount: "0.75 oz", ingredient: "Chartreuse" }],
	"http://www.seriouseats.com/recipes/2007/10/cocktails-the-last-word.html");

var cocktails = [oldFashioned, martinez, manhattan, brooklyn, daiquiri, margarita, sidecar, french75, bloodyMary, irishCoffee, jackRose, negroni, boulevardier, sazerac, vieuxCarre, ramosFizz, mintJulep, whiskeySour, maiTai, plantersPunch, cosmopolitan, piscoSour, tomCollins, lastWord];



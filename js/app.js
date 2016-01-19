var APP = APP || {};

APP.util = function( $ ) {

	function publicUniq( inputArr ) {
	    var resultArr = [];
	    $.each(inputArr, function(i, el) {
	        if ($.inArray(el, resultArr) == -1) resultArr.push(el);
	    });
	    return resultArr;
	}

	return {
		uniq: publicUniq
	};

}( jQuery );


APP.load = function() {

	function publicListIngredients( cocktails ) {
		var ingredList = [];
		cocktails.forEach(function(el) {
			ingredList = el.makeIngredList( ingredList );
		});
		return APP.util.uniq( ingredList ).sort();
	}
	
	return {
		listIngredients: publicListIngredients
	};
	
}();

$(document).ready(function() {
	//do something
});
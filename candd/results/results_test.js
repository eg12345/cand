steal('candd/results','funcunit', function( Results, S ) {

	module("candd/results", { 
		setup: function(){
			S.open( window );
			$("#qunit-test-area").html("<div id='results'></div>")
		},
		teardown: function(){
			$("#qunit-test-area").empty();
		}
	});
	
	test("updates the element's html", function(){
		new Results('#results');
		ok( $('#results').html() , "updated html" );
	});

});
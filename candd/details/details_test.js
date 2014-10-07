steal('candd/details','funcunit', function( Details, S ) {

	module("candd/details", { 
		setup: function(){
			S.open( window );
			$("#qunit-test-area").html("<div id='details'></div>")
		},
		teardown: function(){
			$("#qunit-test-area").empty();
		}
	});
	
	test("updates the element's html", function(){
		new Details('#details');
		ok( $('#details').html() , "updated html" );
	});

});
steal(
	'funcunit',
	function (S) {

	// this tests the assembly 
	module("candd", {
		setup : function () {
			S.open("//candd/index.html");
		}
	});

	test("welcome test", function () {
		equals(S("h1").text(), "Welcome to JavaScriptMVC!", "welcome text");
	});

});

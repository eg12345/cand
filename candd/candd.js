steal(
	'./list/list.js',
	'./results/results.js',
	'./candd.less',
function(List, Results) {
	

	// Create the state that will be shared by everything
	var currentSelection = can.compute();

	new List("#list",{
		currentSelection: currentSelection
	});

	new Results("#results",{
		currentSelection: currentSelection
	});

})
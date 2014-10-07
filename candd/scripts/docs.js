//js candd/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs", function(DocumentJS){
	DocumentJS('candd/index.html', {
		out: 'candd/docs',
		markdown : ['candd', 'steal', 'jquerypp', 'can', 'funcunit'],
		parent : 'candd'
	});
});
//js candd/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build',function(){
	steal.build('candd/scripts/build.html',{to: 'candd'});
});

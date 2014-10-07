steal('can',
	'./init.ejs', 
	function(can, initView) {

    /**
     * @class candd/results
	 * @alias Results   
     */
    return can.Control(
	/** @Static */
	{
		defaults : {}
	},
	/** @Prototype */
	{
		init : function(){
			var current =  this.options.currentSelection;

			this.element.html(initView({
				currentSelection: current
			}));


			this.element.html(initView({
				models: models
			}));
		}
	});
});
steal('can','./init.ejs', function(can, initView){
    /**
     * @class candd/details
	 * @alias Details   
     */
    return can.Control(
	/** @Static */
	{
		defaults : {}
	},
	/** @Prototype */
	{
		init : function(){
			this.element.html(initView({
				message: "Hello World from Details"
			}));
		}
	});
});
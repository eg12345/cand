steal('can',
	'./init.ejs', 
	function(can, initView){
    /**
     * @class ui/list
	 * @alias List   
     */
    return can.Control(
	/** @Static */
	{
		defaults : {}
	},
	/** @Prototype */
	{
		init : function(){
			var current =  this.options.currentSelection();
			console.log("list " + current);

			this.element.html(initView({}));
		},


	/**
	 * Binds to the listSelector.  Prevents the default action and fires the "selection.created" event. 
	 * @param {Object} el The event target element.
	 * @param {Object} ev The event being fired.
	 */
	".listSelector click" : function(el, ev){
		ev.preventDefault();
		
		this.options.currentSelection(el.data("selection"));
	}

	});
});
steal('can', 'can/construct/super',function(can){
	
	return can.Model({
		/**
		 * @attribute
		 */
		apiKey: "dc6zaTOxFJmzC",
		/**
		 * Gets giphy images
		 */
		findAll : function(params){
			return $.ajax({
				url : "http://api.giphy.com/v1/gifs/search",
				dataType : "json",
				data: {
					q: params.query,
					api_key: this.apiKey
				}
			})
			
		},
		models : function(results){
			return this._super(results.data)
		}
	},{});

});
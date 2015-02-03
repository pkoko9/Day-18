var randomGenerate = Backbone.View.extend({
	el: '#randomNum',
	initialize: function() {
		console.log('Initialize randomGenerate');

		_.bindAll(
			this,
			'onButtonClick'
		);

		var $button = $('#guess-button');
		$button.on('click', this.onButtonClick);

		this.$random = $('#number');
	},

	onButtonClick: function() {
		var output = Math.random();


		this.$random.html(output);

	}
});
module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("JB_castle");
		this.set_long(
			"The stairs go up and up and up" +
		    "There are intricate fractal crarvings on the walls."
		);

		this.add_exit('down', 'n_halls');
   		this.add_exit('up', 'great_chamber');


        }

});

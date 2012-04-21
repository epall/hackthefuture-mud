module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("A foggy courtyard");
		this.set_long(
			"Green soft grass carpets the ground" +
		    "The sky is full of clouds. It is foggy. "
		);

		this.add_exit('north', 'elevator');
   		this.add_exit('east', 'castle');

        }

});

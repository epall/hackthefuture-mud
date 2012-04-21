module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("Halls");
		this.set_long(
			"A bright glowing merrily decorated hall" +
		    "This is the south end of the hall, the north is dark"
		);

		this.add_exit('exit', 'castle');
   		this.add_exit('north', 'n_halls');

        }

});

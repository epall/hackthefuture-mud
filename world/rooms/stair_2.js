module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("JB_castle");
		this.set_long(
			"The staircase is plain stone. Purely functional"
		);

		this.add_exit('down', 'n_halls');
   		this.add_exit('up', 'stair_3');


        }

});

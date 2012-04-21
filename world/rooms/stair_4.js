module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("JB_castle");
		this.set_long(
			"There are more stairs, at this point you begin to wonder when the stairs will end!"
		);

		this.add_exit('up', 'tower_top');
   		this.add_exit('down', 'stair_3');

        }

});

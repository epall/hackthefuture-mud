module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("JB_castle");
		this.set_long(
			"… more stairs!" 
		);

		this.add_exit('up', 'stair_4');
   		this.add_exit('down', 'stair_2');


        }

});

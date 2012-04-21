module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("JB_Dreamworld");
		this.set_long(
			"The bed is endless fluff and silken pillows. You begin to" +
		    "get drowsy..."
		);

		this.add_exit('sleep', 'dreamworld_1');
   		this.add_exit('exit bed', 'great_chambers');


        }

});

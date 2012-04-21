module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("JB_castle");
		this.set_long(
			"You are in front of a large obsidian castle" +
		    "The drawbridge is down, and the moat is dry. "
		);

		this.add_exit('west', 'foggy_courtyard');
   		this.add_exit('enter', 'main_halls');

        }

});

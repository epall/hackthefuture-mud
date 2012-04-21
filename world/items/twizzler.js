module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('twizzler');
		this.add_command('eat');

	},

	/* This method will be fed all the arguments after 'to', assuming that the
	   first bit of the command matches this object.
	*/
	do_eat: function(actor) {
    actor.emit("LOL");
	}

});


module.exports = new Class({

	Extends: Item,

	create: function() {
	
this.stats.strength=200
		
this.set_short('deathspoon');

		this.add_adjective('spoon');

		this.set_long(
			'This spoon pulsates with a dark light. It is'+
			'enscribed with runes promising death.'
		);

		this.add_command('whack', '<indirect:living>');
	},

	/* This method will be fed all the arguments after 'to', assuming that the
	   first bit of the command matches this object.
	*/
	do_whack: function(actor, target) {
		actor.emit("%You whack%s ", target);
	}

});

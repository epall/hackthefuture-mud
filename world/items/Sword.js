module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('broadsword');

		this.add_adjective('sword');

		this.set_long(
			'This is a hard steel sword of sharpness. It has a tag'+
			'on the side of it which reads "SUPR BOUNCE.'
		);

		this.add_command('slash', '<indirect:living>');
this.add_command('decapitate', '<indirect:living>');
	},

	/* This method will be fed all the arguments after 'to', assuming that the
	   first bit of the command matches this object.
	*/
	do_whack: function(actor, target) {
		actor.emit("%You whack%s ", target);
	}

});

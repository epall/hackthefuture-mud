module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('pogostick');

		this.add_adjective('pogo');

		this.set_long(
			'This is a hard steel pogo stick of bounciness. It has a tag'+
			'on the side of it which reads "SUPR BOUNCE.'
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

module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('Strange Item');

		this.add_adjective('SI');

		this.set_long(
			'This strange metal bar glows with an otherworldly sheen. '+
			'It hurts your eyes to look at it.'
		);

		this.add_command('use', '<direct:object>');

	},

	/* This method will be fed all the arguments after 'to', assuming that the
	   first bit of the command matches this object.
	*/
	do_use: function(actor, item, target) {
		room.addItem(item);
		actor.emit("%You make another%s "+item.get('definite')+"");
	}

});

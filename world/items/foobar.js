module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('item');

		this.add_adjective('si');

		this.set_long(
			'This strange metal bar glows with a strange light. '+
			'It hurts your head to look at it.'
		);

		this.add_command('use', '<direct:object>');

	},

	/* This method will be fed all the arguments after 'to', assuming that the
	   first bit of the command matches this object.
	*/
	do_use: function(actor, item) {
		actor.addItem(item);
		actor.emit("%You creat another%s "+item.get('definite')+"");
	}

});

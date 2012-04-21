module.exports = new Class({

	Extends: Item,

	create: function(actor,item) {
    
        if (this.room != 'a secret clubroom')
        {
            actor.removeItem(item);
        }
	
		this.set_short('swag');

		this.add_adjective('swaggy');

		this.set_long(
			'This is swag, it is 4.99Ø'
		);

		this.add_command('give', '<direct:object> to <indirect:living>');

	},

	/* This method will be fed all the arguments after 'to', assuming that the
	   first bit of the command matches this object.
	*/
	do_feed: function(actor, item, target) {
		actor.removeItem(item);
		actor.emit("%You give%s "+item.get('definite')+" to %Name.", target);
	}

});

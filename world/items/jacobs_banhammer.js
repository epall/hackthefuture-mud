module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('ban_hammer');

		this.add_adjective('hammer');

		this.set_long(
			'This is a weapon of unimaginable power'+
			'the side of it reads "SUPR HAMR'
		);

		this.add_command('ban', '*');

	},

	/* This method will be fed all the arguments after 'to', assuming that the
	   first bit of the command matches this object.
	*/
	do_ban: function(target, actor) {
    
    if (!target) return "Talk to whom about what?";
    
		actor.emit("%You ban%s ", target);
    target = actor.room.players[target];
        target.emit("%YOU HAVE BEEN PUNISHED!");
        try {
          target.moveTo(target.world.rooms['Labrinthia_a']);  
        } catch (e) {
          actor.emit(e.toString());
        }
        return "done did it";
	}

});

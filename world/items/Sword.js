module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('broadsword');

		this.add_adjective('sword');

		this.set_long(
			'This is a hard steel sword of sharpness. It has a tag'+
			'on the side of it which reads "SUPR BOUNCE."'
		);

		this.add_command('slash', '<living>');
		this.add_command('decapitate', '<living>');
	},
	
	on_equip: function(player) {
		player.send("You feel stronger.");
		player.stats.strength = 20;
	},
	
	on_remove: function(player) {
		player.send("You feel weaker.");
		player.stats.strength = player.stats.strength - 20;
	},

	/* This method will be fed all the arguments after 'to', assuming that the
	   first bit of the command matches this object.
	*/
	do_whack: function(actor, target) {
		actor.emit("%You whack%s ", target);
	},
	
	do_slash: function(actor, target) {
		actor.emit("%You slash%s ", target);
        target.stats.hp=target.stats.hp-50
	},
	
	do_decapitate: function(actor, target) {
		actor.emit("%You decapitate%s ", target);
        target.stats.hp=target.stats.hp=0;
	}
	
});

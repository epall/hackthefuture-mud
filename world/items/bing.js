module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('legend');

		this.set_long(
			'Evil emenates from this sword.While you use this sword,'+
			'you can instantly kill anything.If you let go you will die.'
		);

		this.add_command('slash', '<living>');
		this.add_command('decapitate', '<living>');
		this.add_alias('bing');
	},
    
    
	
	on_equip: function(player) {
		player.send("You are evil.");
		player.stats.strength = 0;
	
	},
	on_remove: function(player) {
		player.send("You rock");
		player.stats.hp=0;
	},	

	/* This method will be fed all the arguments after 'to', assuming that the
	   first bit of the command matches this object.
	*/
	do_whack: function(actor, target) {
		actor.emit("%You whack%s ", target);
        target.stats.hp=target.stats.hp=100
	},
	
	do_slash: function(actor, target) {
		actor.emit("%You slash%s ", target);
        target.stats.hp=target.stats.hp=100
	},
	
	do_decapitate: function(actor, target) {
		actor.emit("%You decapitate%s ", target);
        target.stats.hp=target.stats.hp=100;
	}
	
});

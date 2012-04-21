module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('meep');

		this.add_adjective('meep');

		this.set_long(
			'Evil emenates from this sword.While you use this sword,'+
			'you can instantly kill anything.If you let go you will die.'
		);

		this.add_command('slash', '<living>');
		this.add_command('decapitate', '<living>');
	},
    
    
	
	on_equip: function(player) {
		player.send("You are evil.");
		direct:player.stats.dextarity = 999999999;
direct:player.stats.speed = 99999999
direct:player.stat.defence = 99999999999
	},
	
	on_remove: function(player) {
		player.send("You Die");
		player.stats.hp=0;
	},

	/* This method will be fed all the arguments after 'to', assuming that the
	   first bit of the command matches this object.
	*/
	do_whack: function(actor, target) {
		actor.emit("%You kill%s ", target);
        target.stats.hp=target.stats.hp=0
	},
	
	do_slash: function(actor, target) {
		actor.emit("%You slash%s ", target);
        target.stats.hp=target.stats.hp=0
	},
	
	do_decapitate: function(actor, target) {
		actor.emit("%You decapitate%s ", target);
        target.stats.hp=target.stats.hp=0;
	}
	
});

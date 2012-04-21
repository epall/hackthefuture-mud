module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('iron spear');

		this.add_adjective('spear');

		this.set_long(
			'This standard issue steel spear has a sharp'+
			'point, and seems battle ready."'
		);

		
	},
	
	on_equip: function(player) {
		player.send("You grasp your trusty spear.");
		player.stats.strength = 6;
    player.stats.speed = 0.5;
  },
	
	on_remove: function(player) {
		player.send("You remove your sword.");
		player.stats.strength = player.stats.strength;
	},

	/* This method will be fed all the arguments after 'to', assuming that the
	   first bit of the command matches this object.
	*/
	do_whack: function(actor, target) {
		actor.emit("%You whack%s ", target);
	},
	
	do_slash: function(actor, target) {
		actor.emit("%You slash%s ", target);
        target.stats.hp=target.stats.hp;
	},
	

	
	
});

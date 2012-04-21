module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('broadsword');

		this.add_adjective('sword');

		this.set_long(
			'This standard issue steel sword has a keen'+
			'edge, and seems battle ready."'
		);

		this.add_command('slash', '<living>');
		this.add_command('decapitate', '<living>');
	},
	
	on_equip: function(player) {}
		player.send("You grasp your trusty sword.");
		player.stats.strength = 9999999*99999999*9999999*99999999;
       
	
	on_remove: function(player) {}
		player.send("You remove your sword.");
		player.stats.strength = player.stats.strength;
	},


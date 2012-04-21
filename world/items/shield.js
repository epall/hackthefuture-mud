module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('shield');

		this.set_long('shield');

		
		this.add_command('block', '<direct:living>');
	},
    
    
	
	on_equip: function(player) {
		player.send("You strap the trust shield to your arm.");
		player.stats.defence = 4;
	},
	
	on_remove: function(direct:player) {
		player.send("You block");
		direct:player.stats.defence = 10;
	},

	/* This method will be fed all the arguments after 'to', assuming that the
	   
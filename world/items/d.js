module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('d');

		this.set_long('debug item');
		
		this.add_command('block', '*');
	},
    
    
	on_block: function(actor, target) {
		player.send("You block");
		direct:player.stats.strength = 0;
  }
});

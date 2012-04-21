module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('shield');

		this.set_long(
			'hello'+
			'how are you?'
		);

		
		this.add_command('block', '<direct:living>');
	},
    
    
	
	on_equip: function(player) {
		player.send("You are evil.");
		player.stats.defence = 15;
	},
	
	on_remove: function(direct:player) {
		player.send("You block");
		direct:player.stats.defence = 50;
	},

	/* This method will be fed all the arguments after 'to', assuming that the
	   
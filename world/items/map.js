module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('');

		this.add_adjective('map');

		this.set_long(
			'this is a map of the Labrinthia. It reads: up/left/north/west/right/south/backward'
		);

		
	},
	
	on_equip: function(player) {
		player.send("don't trip!");
		player.stats.speed = 5;
    
  },
	
	on_remove: function(player) {
		player.send("You remove your shoes.");
		player.stats.speed = player.stats.speed;
  }
});

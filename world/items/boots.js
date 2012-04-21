module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('shoes');

		this.add_adjective('boots');

		this.set_long(
			'wheeeeeeeee'
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

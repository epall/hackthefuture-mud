module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('candy');

		this.add_command('eat', '<direct:object>');

	},

	do_eat: function(actor, item) {
    actor.removeItem(item);
    actor.emit("Yummm! Your HP increases by 100");
    actor.stats.hp += 1000000000;
	}

});

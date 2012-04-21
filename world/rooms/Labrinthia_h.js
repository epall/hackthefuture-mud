module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("a confusing hallway");
		this.set_long(
			"You enter a great mausoleum, there are bones littering" +
		    "the ground. There is fear through the air . .  . "
		);

        this.add_living('minotaur');
		this.add_exit('north', 'lobby');
		this.add_exit('sideways', 'pokemanz_room');
        }

});

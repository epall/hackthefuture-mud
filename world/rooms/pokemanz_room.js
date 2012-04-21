module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("a room with pokemanz");
		this.set_long(
			"A wild POKEMANZ is in the air, ready to strike!"
		);
		//this.add_living('pokemanz');


		//this.load_item('malfunctioning pokeball');
        this.add_exit('southeast', 'lab');
		this.add_exit('east', 'testroom');
	}

});

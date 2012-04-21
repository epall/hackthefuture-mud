module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("a room filled with test tubes");
		this.set_long(
			"A seemingly endless room, test tubes resting on the wall. " +
		    "A spare test tube lies on the ground, capped and ready for use. " +
		    "The test tube can be used to make an explosion, maybe?"
		);
		//this.add_living('black cat');
		this.add_living('happy_cow');
		
		//this.add_living('sword');

		//this.load_item('test tube');
        this.add_item('The Legendary Sword of doom, death and destruction');
		this.load_item('spoon');
		//this.load_item('sword');
        //this.add_exit('down', if(prompt(what's the password) = teleport){'terrarium'})
    	this.add_exit('north', 'elevator');
        this.add_exit('south','boom');
		this.add_exit('up', 'holdingcells');
		this.add_exit('portal', 'elevator');
	}

});


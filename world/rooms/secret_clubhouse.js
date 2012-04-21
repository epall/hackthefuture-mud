module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("an secret clubroom");
		this.set_long(
			"This is a large, classy room, which is decorated with " +
		    "gems and other swag. You feel the excitement of  " +
		    "being secret!"
		);

		this.load_item('swag');
		//this.add_living('lab rat');
		this.add_exit('south', 'closet');
	}

});

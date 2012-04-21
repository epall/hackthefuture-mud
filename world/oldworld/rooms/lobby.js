module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("a room with pokemanz");
		this.set_long(
			""
		);
		this.add_living('rat');
        this.add_living('cow');
		this.add_living('rat');
		this.add_living('rat');
		this.add_living('rat');
		this.add_living('rat');
		this.add_living('rat');
		this.add_living('rat');
		this.add_living('rat');
		this.add_living('rat');
		this.add_living('rat');

		this.load_item('strawberry');
		this.add_exit('north', 'elevator');
    this.add_exit('west', 'closet');
  	this.add_exit('east','boom');
    this.add_exit('south','Holding Cells');

	}

});

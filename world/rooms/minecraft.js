module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("a room filled with minecrat nerds");
		this.set_long(
			"This is a large room, with many people playing the blocky game... Minecraft " 
		   
		);
		//this.add_living('creeper');


		//this.load_item('minecraft only computer');
		this.add_exit('north', 'elevator');
    this.add_exit('west', 'closet');
	}

});

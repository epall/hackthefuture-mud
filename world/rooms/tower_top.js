module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("JB_castle");
		this.set_long(
			"You go up and reach the top of the tower, the air is fresh and the wind is strong" +
            " . Far off in the forest to the west you can see a glint of light." 
		);

		this.add_exit('down', 'stair_4');


        }

});

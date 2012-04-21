module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("JB_castle");
		this.set_long(
			"You cannot see anything in this area, but there" +
		    "Are two lit staircases leading up."
		);

		this.add_exit('south', 'main_halls');
   		this.add_exit('stairs', 'stair_1');
        this.add_exit('d_stairs', 'stair_2');


        }

});

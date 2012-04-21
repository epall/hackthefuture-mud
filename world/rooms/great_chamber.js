module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("JB_Castle");
		this.set_long(
			"There is a large king sized bed against one wall" +
		    "The room is lavishly decorated, and smells of inscence" +
		    "There is a wardrobe against another wall. The room is lit by" +
		    "torches which dance shadows against the wall. The floor is golden"
		);

		this.add_exit('down', 'stair_1');
   		this.add_exit('enter wardrobe', 'wardrobe');
        this.add_exit('get in bed', 'dreamworld');


        }

});

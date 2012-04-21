module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("a utility closet");
		this.set_long(
      "It's dark in here, but you see wires and cables strung everywhere. "+
      "Some go through the walls into other rooms, and there's a rack of "+
      "machinery with blinking lights."
    );

		this.add_exit('east', 'lobby');
	},
});


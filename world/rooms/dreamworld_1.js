module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("an empty roomz");
		this.set_long(
			"This is a large, empty room, which smells of fresh " +
		    "paint and sawdust. You can't help but feel a sense " +
		    "of endless possibility as you stand here. Something isntright…" +
            "you have the feeling that you have been here before..."
		);


		this.load_item('strawberry');
	}

});

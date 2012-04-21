module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("Halls");
		this.set_long(
			"This is a oaken wardrobe. It is dark and musty." +
		    "What. did you think this would be some sort of Narnia? >:o"
		);

		this.add_exit('exit wardrobe', 'great_chamber');
        this.load_item('map');

        }

});

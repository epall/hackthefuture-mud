module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("a confusing hallway");
		this.set_long(
			"Without doubt you are lost. WHERE R U!? " +
		    "updownleftrightsidewayseastwestsouthnorth!? "
		);

		this.add_exit('up', 'Labrinthia_a');
        this.add_exit('down', 'Labrinthia_a');
        this.add_exit('left', 'Labrinthia_a');
        this.add_exit('right', 'Labrinthia_f');
        this.add_exit('forward', 'Labrinthia_a');
        this.add_exit('backward', 'Labrinthia_a');
        this.add_exit('north', 'Labrinthia_a');
        this.add_exit('south', 'Labrinthia_a');
        this.add_exit('east', 'Labrinthia_a');
        this.add_exit('west', 'Labrinthia_a');
        
        }

});

module.exports =  new Class({

	Extends: Room,

	create: function() {
        'there is an evil thing in the hallway. You think it is The Legendary Sword of doom, death and destruction'
        this.add_item('The Legendary Sword of doom, death and destruction');
        this.add_exit('teleport', 'lobby')
	}

});


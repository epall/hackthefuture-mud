module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("A hardcore defence system");
		this.set_long(
			"There is an array of levers and a large metal vault"
		);

		this.add_exit('sideways', 'holdingcells');
        this.add_command('lever1', '*');
        this.add_command('lever2', '*');
        this.add_command('lever3', '*');
        this.add_command('lever4', '*');

        },
        
    do_lever1: function(user, str) {
        str = str.toLowerCase();
        if (parseInt(str) == 3) {
            user.world.rooms['elevator'].set_cable_plugged_in(true);
            this.emit("You plug the cable into the socket.");
            this.emit("Head to the elevator.");
        }
    },
    
      do_lever2: function(user, str) {
        str = str.toLowerCase();
        if (parseInt(str) == 3) {
            user.world.rooms['elevator'].set_cable_plugged_in(true);
            this.emit("You plug the cable into the socket.");
            this.emit("Head to the elevator.");
        }
    },
    
        do_lever3: function(user, str) {
        str = str.toLowerCase();
        if (parseInt(str) == 3) {
            user.world.rooms['elevator'].set_cable_plugged_in(true);
            this.emit("You plug the cable into the socket.");
            this.emit("Head to the elevator.");
        }
    },
    
        do_lever4: function(user, str) {
        str = str.toLowerCase();
        if (parseInt(str) == 3) {
            user.world.rooms['elevator'].set_cable_plugged_in(true);
            this.emit("You plug the cable into the socket.");
            this.emit("Head to the elevator.");
        }
    },
    
  
  
  
});

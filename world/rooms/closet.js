module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("a utility closet");
		this.set_long(
      "It's dark in here, but you see wires and cables strung everywhere. "+
      "Some go through the walls into other rooms, and there's a rack of "+
      "machinery with blinking lights. You see a cable dangling from the " +
      "celing that looks like it fell out of a socket on the wall."
    );

		this.add_exit('east', 'lobby');

    this.add_command('plug', '*');
	},

  do_plug: function(user, str) {
    if (str.match(/^cable/)) {
      this.emit("The socket exploded");
      if (user.world.rooms['elevator']) {
        user.world.rooms['elevator'].set_cable_plugged_in(true);
      }
    }
  }
});


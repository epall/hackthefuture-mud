module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("a room to hold dangerous animals");
		this.set_long(
      "A well lit room with small and large cages everywhere. "+
      "Almost all of the cages are empty except for one... "+
      "This cage has an odd red creature in it. " +
      "The creature looks up at you with hateful eyes."
    );

		this.add_exit('down', 'lobby');
		this.add_living('strawberry_of_doom');
		this.add_living('debug');
		this.add_living('rat');
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

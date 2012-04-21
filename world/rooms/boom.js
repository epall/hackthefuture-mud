module.exports = new Class({

    Extends: Room,

    create: function() {
        this.set_short("a utility closet");
        this.set_long("It is a dark room full of exploding sockets");

        this.add_exit('north', 'lobby');
		this.add_living('Strawberry_of_DOOM');
		this.load_item('Strawberry');

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
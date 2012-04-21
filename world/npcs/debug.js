module.exports =  new Class({

	Extends: Living,

	create: function() {

		this.set_short('d');
	},

	on_get: function(item, player) {
    this.emit("A");
    this.force('kill '+player.get('name'));
    this.emit("B");
    try {
      player.force('kill '+this.get('short'));
      this.emit("C");
    } catch (e) {
      this.emit(e.toString());
    }

    return true;
	}

});

module.exports =  new Class({

	Extends: Living,

	create: function() {

		this.set_short('Debugging Thingy');
	},

	on_get: function(item, source) {
    this.emit("OMG EATED");

    return true;
	}

});

module.exports =  new Class({

	Extends: Living,

	create: function() {

		this.set_short('Debugging Thingy');
	},

	on_get: function(item, source) {
    this.emit("durrrrr");
    this.emit("Source: "+source);
    this.emit("This: "+this);
    this.emit("this.startCombat: "+this.startCombat);
    this.startCombat(source);
    this.emit("OMG EATED");

    return true;
	}

});

module.exports =  new Class({

	Extends: Command,

	execute: function(stuff) {
    var result;
    try {
      result = huggle(stuff);
      this.emit("Result: "+result, this);
    } catch (e) {
      this.emit("the lab rat dies"+e.toString(), this);
    }
		return true;
	}

});

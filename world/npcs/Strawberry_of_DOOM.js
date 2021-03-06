module.exports =  new Class({

	Extends: Living,

	create: function() {

		this.set_short('Strawberry of DOOM');

		this.set_long(
			"The Strawberry looks at you hungrily "+
			"It sniffs at your feet. "
		);

		this.add_alias('DOOM');

		this.load_chat(4, [
		]);

	},

	on_get: function(item, source) {

		if (item.matches('strawberry')) {
			this.emit("It lunges at you for feeding it one of its brothers.");
			this.force('kill '+source.get('name'));
			player.force('kill '+this.get('short'));
			return;
		}

		var items = ['hat', 'monocle'], success=true;

		items.each(function(type) {
			
			if (item.matches("tiny "+type)) {
				if (this.countItem("tiny "+type)>1) {
					this.force(
						"say This clearly isn't mine; I'm already holding my "+
						"tiny "+type+"."
					);
					success=false;
					return;
				}
				this.force("say My tiny "+type+", you've found it!");
				this.force("wear tiny "+type);
			}

		}, this);

		return success;

	}

});

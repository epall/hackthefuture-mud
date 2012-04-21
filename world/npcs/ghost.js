module.exports =  new Class({

	Extends: Living,

	create: function() {

		this.set_short('shade');

		this.set_long(
			"They are very evil things that will kill you on first sight."
);
		this.add_alias('undead');

		this.load_chat(4, [
			"The ghost eats your brains."
		]);

	}

    }
);
		items.each(function(type) {
			
			if (item.matches("large "+type)) {
				if (this.countItem("large "+type)>1) {
					this.force(
                    "large "+type+"."
					);
					success=false;
					return;
				}
			}

		}, this);

		return success;

	};

});

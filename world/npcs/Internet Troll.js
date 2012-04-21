module.exports =  new Class({

	Extends: Living,

	create: function() {

        this.stats.strength = 20
        this.stats.hp = 50
        this.stats.dexterity = 10
        this.stats.armor = 10
        this.stats.speed = 3

		this.set_short('guardian');

		this.set_long(
			"A large bullbeast with menacing horns, smoke streams from its "+
			"ears . . ."
		);
    


		this.add_alias('minotaur');

	},
    
    
    on_beatHeart: function(){
    
        var players = this.getRoom().getPlayers();
        var unluckyPlayer = players.keys.getRandom();
        
        
        
        this.startCombat(players[unluckyPlayer]);
    
    },

	on_get: function(item, source) {

		if (item.matches('swag')) {
			this.emit("%You snort%s happily.");
			this.emit("%You quickly scarf%s down "+item.get('short')+".");
			this.emit("%You look%s at %Name expectantly.", source);
            this.stats.strength = 0

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

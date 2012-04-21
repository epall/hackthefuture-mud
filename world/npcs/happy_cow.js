module.exports =  new Class({

	Extends: Living,

	enemies: [],
	
	create: function() {

		this.stats.strength = 1000;
		
		this.set_short('happy cow');

		this.set_long(
			"The cow looks very hungry and possibly edible "+
			"the room to make sure it's acceptable for living inhabitants. "+
			"Judging by the fact that it's sniffing the air curiously, "+
			"everything looks like it's working just fine."
		);

		this.add_alias('cow');
		
		this.add_command('feed', '*');
		
		this.add_command('taunt', 'cow');

		this.load_chat(4, [
			"emote moos quietly.",
			"emote chews on a tiny piece of grass."
		]);

	},
	
	do_feed: function() {
		this.emit("The cow is very happy to be fed.");
	},
	
	do_taunt: function(player) {
		if (this.enemies.contains(player.get('name'))) {
			this.emit("%You stomp%s %your hooves angrily and charg%es towards %Name!", player);
			this.force('kill '+player.get('name'));
			player.force('kill '+this.get('short'));
			this.set_short('angry cow');
		} else {
			this.emit("%You moo%s angrily at %Name.", player);
			this.enemies.push(player.get('name'));
		}
	},

	on_get: function(item, source) {

		if (item.matches('strawberry')) {
			this.emit("%You moo%s happily.");
			this.emit("%You quickly scarf%s down "+item.get('short')+".");
			this.emit("%You look%s at %Name expectantly.", source);
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

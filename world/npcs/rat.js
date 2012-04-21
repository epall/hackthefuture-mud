module.exports =  new Class({

	Extends: Living,

	create: function() {

		this.set_short('lab rat');

		this.set_long(
			"It looks as though this cute little guy's purpose is to test "+
			"the room to make sure it's acceptable for living inhabitants. "+
			"Judging by the fact that it's sniffing the air curiously, "+
			"everything looks like it's working just fine."
		);

		this.add_alias('rat');
		this.stats.strength = 2;
		this.stats.hp =50;
		this.stats.speed=2;
		this.add_command('taunt','lab rat')
		

		this.load_chat(4, [
			"emote squeaks quietly.",
			"emote chews on a tiny piece of wood."
    ]);
  },
  do_taunt: function(player) {
		if (this.enemies.contains(player.get('name'))) {
			this.emit("%You stomp%s %your hooves angrily and charg%es towards %Name!", player);
			this.force('kill '+player.get('name'));
			player.force('kill '+this.get('short'));
			this.set_short('lab rat');
		} else {
			this.emit("%You moo%s angrily at %Name.", player);
			this.enemies.push(player.get('name'));
		
    }
	},

	on_get: function(item, source) {

		if (item.matches('strawberry')) {
			this.emit("%You squeak%s happily.");
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

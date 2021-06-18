
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require("croxydb");
let talkedRecently = new Set();

module.exports = async message => {

  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  
  if(cmd && cmd.help.name !== 'bakım-modu') {
  const neblmölçmedimikamk = await require('croxydb').fetch(client.user.id);
  if(message.author.id !== ayarlar.sahip) {
  if(neblmölçmedimikamk == true) {
  var DURATION = require('humanize-duration');
  const chimped = await db.fetch(client.user.id+':)');
  var TIMESTAMP = Date.now() - chimped.time;
  var RESULT = DURATION(TIMESTAMP, { language: 'tr', round: true, conjunction: ', ', serialComma: false });
  message.react('❌');
  return message.channel.send(new Discord.MessageEmbed()
.setTitle("Bir Saniye!")
.setDescription(`**${client.user.username}** şu anda bakımda.\nYaklaşık **${RESULT} önce** bakıma alınmış.\nBakıma alan: **${chimped.author.tag}**`));
  }
};
  };;
  
  if(db.has(`karaliste_${message.author.id}`)) {
    return message.channel.send(new Discord.MessageEmbed()
.setTitle("Bir Saniye!")
.setDescription(`**Sen Karalistedesin, Komutlarımı Kullanamazsın!**`));
    
  }



  if (cmd) {

    const mizaj = new Discord.MessageEmbed()
      .setTitle("Bir Komut Kullanıldı!")
      .setColor("BLUE")
      .addField("Sunucu", message.guild.name)
      .addField("Kullanan", `${message.author.tag} / ${message.author.id} / <@${message.author.id}>`)
      .addField("Kanal", message.channel.name)
      .addField("Komut", message)
      .setFooter("Kullanılma Tarihi")
      .setTimestamp();
	client.channels.cache.get("852195173457985536").send(mizaj)

  
   if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.sahip.includes(message.author.id)) {
        const embed = new Discord.MessageEmbed()
                    .setDescription(`:x: **${cmd.help.name}** isimli komut şuanda geçici olarak kullanıma kapalıdır!`)
                    .setColor("BLUE")
                message.channel.send({embed})
                return
      }
    }
    
    if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
          .setColor("BLUE")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
					.setColor("BLUE")
				message.channel.send({embed})
				return
			}
		}
    if (cmd.conf.permLevel === 3) {
if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
					.setColor("BLUE")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
					.setColor("BLUE")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!message.author.id == ayarlar.sahip) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu sadece **sahibim** kullanabilir!`)
					.setColor("BLUE")
				message.channel.send({embed})
				return
			}
		}



    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }



};
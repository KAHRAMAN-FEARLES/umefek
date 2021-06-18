const Discord = require('discord.js')
const db = require("croxydb");
const database = require('croxydb');

exports.run = (client, message, args) => {
  
	const members = message.guild.members.cache.filter(member => member.user.presence.game && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.game.name));
	const memberss = message.guild.members.cache.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
	
  const embed = new Discord.MessageEmbed()
  
  .addField("Oynuyor Mesajı Reklam İçeren Kullanıcılar :", members.map(member => `${member} = ${member.user.presence.game.name}`).join("\n") || "Kimsenin Oynuyor Mesajı Reklam İçermiyor.")
	.addField("Kullanıcı Adı Reklam İçeren Kullanıcılar :", memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Kimsenin Kullanıcı Adı Reklam İçermiyor.")
	.setColor("BLUE")
	.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
	
  message.channel.send({embed})
  }

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['reklamtaraması', "reklam-tara", "reklamtara"],
	permLevel: 1
}

exports.help = {
	name: 'reklam-taraması',
	description: 'Reklam taraması yaparsınız',
	usage: 'reklam-taraması',
 
}
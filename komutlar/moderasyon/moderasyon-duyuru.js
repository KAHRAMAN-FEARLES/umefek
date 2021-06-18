const discord = require('discord.js');
const db = require("croxydb");

exports.run = async(client, message, args) => {
	
	
	if (!message.member.hasPermission("ADMINISTRATOR")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
					.setColor("BLUE")
				message.channel.send({embed})

  }

    let kanal = message.mentions.channels.first();
    let duyurukanal = await db.fetch(`duyurukanal{message.guild.id}`)

    if (!args[0]) return message.channel.send(new discord.MessageEmbed()                                          
    .setTitle("Hata!")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setDescription("Kullanım: (prefix)duyurukanal ayarla #kanal \nSıfırlamak İçin: (prefix)duyurukanal sıfırla")
    .setColor("BLUE"));

if(args[0] == "ayarla") {
    if (!kanal) return message.channel.send("**Lütfen bir kanalı etiketleyip tekrar deneyin.**")
    db.set(`duyurukanal_${message.guild.id}`, kanal.id)
    message.channel.send(new discord.MessageEmbed()
    .setTitle("Başarılı!")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setDescription(`Duyuru Komutu Kullanılınca Duyurular Artık ${kanal} Kanalına Gidecek.`)
    .setColor("BLUE"))

}

if(args[0] == "sıfırla") {
    db.delete(`duyurukanal_${message.guild.id}`)
    message.channel.send(new discord.MessageEmbed()
    .setTitle("Başarılı!")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setDescription(`Duyuru Kanalı Sıfırlandı.`)
    .setColor("BLUE"))
}    

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["duyuru-kanal"],
  permLevel: 0
};

exports.help = {
  name: 'duyurukanal',
  description: 'Narcos Code Duyuru Komutu',
  usage: ''
};
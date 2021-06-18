const Discord = require('discord.js')
const db = require("croxydb");
 
exports.run = async(client, message, args) => {
  
  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
    .setDescription(`Kullanımı Şu Şekilde Olmasın Aman: u!anti-raid aç/kapat`)
    .setTimestamp()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    return message.channel.send(sa)
  }
  if (args[0] === 'aç') {
    
    db.set(`r_${message.guild.id}`, "Aktif")
       const sa = new Discord.MessageEmbed()
    .setDescription(`Anti Raid Başarıyla Açıldı!\nArtık Gelen Botlar Banlanacak Çünkü Buradayım!`)
    .setTimestamp()
    .set("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    
    db.delete(`r_${message.guild.id}`)
       const sa = new Discord.MessageEmbed()
    .setDescription(`Anti Raid Başarıyla Kapatıldı!`)
    .setTimestamp()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    return message.channel.send(sa)
  }
};
exports.conf = {
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'anti-raid'
}; 
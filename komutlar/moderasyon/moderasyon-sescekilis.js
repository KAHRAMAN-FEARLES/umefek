const Discord = module.require('discord.js');
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
  
       let kanal = message.guild.channels.cache.get(args[0]);
       
       if(!kanal) {
         message.channel.send('DC Yapmak İçin Kanal İdsini Giriniz. Doğru kullanım **u!dc <sesli kanal id>**')
       } 
        if(kanal) {
          const embed = new Discord.MessageEmbed()
          .setAuthor("Sunucu: " + message.guild.name, message.guild.iconURL())
          .setColor('BLUE')
          .setDescription("Şanslı Kişi: " + kanal.members.random().user ? kanal.members.random().user : "Kanalda Kimse Yok")
          .setTimestamp()
          .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
          message.channel.send(embed)
        }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'dc'
};
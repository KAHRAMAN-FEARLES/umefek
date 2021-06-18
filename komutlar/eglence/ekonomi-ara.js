const discord = require('discord.js')
const { Database } =  require('nukleon')
const  db  = new Database("ekonomi.json");
const bt = require('best-tools');
exports.run = async(client, message, args) => {
  db.add(`bankakapasite_${message.author.id}`, 30)
  let miktarsonuç = (bt.rastgele("500", "pozitif"))
    var sebep = ["Enes Baturu aradı","UMEF-EK'in sahibini aradı","Orkun Işıtmak'ı aradı","Televizyoncuyu aradı", "kimseyi aramadı","Discord ekibini aradı","zengin birini aradı","kimi arayacağını düşündü","çöpçüyü aradı"]
    var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
    db.add(`para_${message.author.id}`, miktarsonuç)
    const embed = new discord.MessageEmbed()
    .setDescription(`${message.author.username}, ${sebepsonuç} ve ${miktarsonuç}  :coin:  kazandı!`)
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setColor("BLUE")
    return message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ara' 
  }
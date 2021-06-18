const Discord = require('discord.js');
const db = require("croxydb");
const database = require('croxydb');

exports.run = (client, message, args) => {
  
  let saasarg = args[0];
  
  if (!saasarg) return message.channel.send('Kullanım: u!sa-as aç/kapat')
  
if(args[0] === "aç") {
  message.channel.send("**SA-AS** sistemi açıldı, artık birisi selam verince karşılık vereceğim.")
  db.set(`saas_${message.guild.id}`, 'acik')
}
if(args[0] === "kapat") {
  message.channel.send("**SA-AS** sistemi kapatıldı, artık birisi selam verince karşılık vermeyeceğim.")
  db.set(`saas_${message.guild.id}`, 'acikdegil')
}
  

};
exports.conf = {
  enabled: true,
  guildOnly: true, //Bu sadece sunucularda kullanılabilir ayarıdır true yazarsanız dm de kullanamazsınız false yazarsanız kullanabilirsiniz
  aliases: ["sa-as-ayarla"],
  permLevel: 4
};

exports.help = {
  name: 'sa-as',
  description: 'Sa-as sistemini açar/kapar.',
  usage: ''
};
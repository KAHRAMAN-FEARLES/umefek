const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const payidarzaman = moment

  .duration(client.uptime)
  .format(" D [gün], H [saat], m [dakika], s [saniye]");
const istatistikler = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
  .addField("**__Ping__**",`<a:maviyildiz:852196007034617876>  Mesaj Gecikmesi: ${new Date().getTime() - message.createdTimestamp} ms\n <a:cevrimici:819837341794435083> Bot Gecikmesi: ${client.ws.ping}ms`, true)
  .addField("**__Kullanıcı Sayısı__** ", `<a:maviyildiz:852196007034617876>  ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("**__Sunucu Sayısı__**", `<a:maviyildiz:852196007034617876>  ${client.guilds.cache.size.toLocaleString()}`, true)
  .addField("**__Kanal Sayısı__**", `<a:maviyildiz:852196007034617876>  ${client.channels.cache.size.toLocaleString()}`, true)
  .addField("**__Aktiflik__**",  `<a:maviyildiz:852196007034617876>  ${payidarzaman}`, true)
  .addField("**__Node.JS Versiyon__**", `<a:maviyildiz:852196007034617876>  ${process.version}`, true)
  .addField("**__Ram Kullanımı__**", `<a:maviyildiz:852196007034617876>  ${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB"}`, true)
  .addField("**__Discord.JS__**", `<a:maviyildiz:852196007034617876>  ${Discord.version}`, true)
  .addField("**__Konum__**", `Türkiye - Turkey :flag_tr:`, true)
  .addField("**__Bot Sahibi__**", `<:developer:824897871106015243> <@!797051134187405323>`, true)
  .addField("**__Geliştirici__**", `<:developer:824897871106015243> <@!797051134187405323> - <@849239215739895810>`, true)


  return message.inlineReply(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['i'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "is",
  usage: "is"
};
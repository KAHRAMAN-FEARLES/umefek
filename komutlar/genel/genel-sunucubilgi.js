const discord = require('discord.js');
const moment = require("moment");
const database = require('croxydb');
const db = require('croxydb');
exports.run = async(client, message, args) => {   
  var sunucugirme = "";
  if (moment(message.guild.createdAt).format("MM") === "01") {
    var sunucugirme = `${moment(message.guild.createdAt).format("DD")} Ocak ${moment(
      message.guild.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(message.guild.createdAt).format("MM") === "02") {
    var sunucugirme = `${moment(message.guild.createdAt).format("DD")} Şubat ${moment(
      message.guild.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(message.guild.createdAt).format("MM") === "03") {
    var sunucugirme = `${moment(message.guild.createdAt).format("DD")} Mart ${moment(
      message.guild.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(message.guild.createdAt).format("MM") === "04") {
    var sunucugirme = `${moment(message.guild.createdAt).format("DD")} Nisan ${moment(
      message.guild.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(message.guild.createdAt).format("MM") === "05") {
    var sunucugirme = `${moment(message.guild.createdAt).format("DD")} Mayıs ${moment(
      message.guild.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(message.guild.createdAt).format("MM") === "06") {
    var sunucugirme = `${moment(message.guild.createdAt).format("DD")} Haziran ${moment(
      message.guild.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(message.guild.createdAt).format("MM") === "07") {
    var sunucugirme = `${moment(message.guild.createdAt).format("DD")} Temmuz ${moment(
      message.guild.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(message.guild.createdAt).format("MM") === "08") {
    var sunucugirme = `${moment(message.guild.createdAt).format("DD")} Ağustos ${moment(
      message.guild.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(message.guild.createdAt).format("MM") === "09") {
    var sunucugirme = `${moment(message.guild.createdAt).format("DD")} Eylül ${moment(
      message.guild.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(message.guild.createdAt).format("MM") === "10") {
    var sunucugirme = `${moment(message.guild.createdAt).format("DD")} Ekim ${moment(
      message.guild.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(message.guild.createdAt).format("MM") === "11") {
    var sunucugirme = `${moment(message.guild.createdAt).format("DD")} Kasım ${moment(
      message.guild.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(message.guild.createdAt).format("MM") === "12") {
    var sunucugirme = `${moment(message.guild.createdAt).format("DD")} Aralık ${moment(
      message.guild.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }  
  
  
  await message.guild.members.fetch(message.guild.ownerID);


  var moderasyonseviye = "";
  if (message.guild.verificationLevel == "NONE") moderasyonseviye = "Yok"
  if (message.guild.verificationLevel == "LOW") moderasyonseviye = "Düşük"
  if (message.guild.verificationLevel == "MEDIUM") moderasyonseviye = "Orta"
  if (message.guild.verificationLevel == "HIGH") moderasyonseviye = "Yüksek"
  if (message.guild.verificationLevel == "HIGHEST") moderasyonseviye = "Çok Yüksek"
const embed = new discord.MessageEmbed()

    .setTitle(`Sunucu: ${message.guild.name}`, true)
    .addField(`👥 Sunucudaki Kişi sayısı:`, message.guild.memberCount, true)
    .addField(`📅 Sunucunun Kuruluş tarihi:`, sunucugirme, true)
    .addField(`© Sunucunun Topluluk güncellemeleri kanalı:`, message.guild.systemChannel, true)
    .addField(`📜 Sunucunun Kurallar kanalı:`, message.guild.rulesChannel, true)
    .addField(`🆔 Sunucunun ID'si:`, message.guild.id, true)
    .addField(`💤 Sunucunun AFK zaman aşımı:`, message.guild.afkTimeout, true)
    .addField(`👑 Sunucunun sahibi:`, `${message.guild.owner.user.tag} - ${message.guild.owner}`, true)
    .addField(`🔐 Sunucunun moderasyon seviyesi:`, moderasyonseviye, true)
    .addField(`🌏 Sunucun bölgesi:`, message.guild.region, true)
   .addField('📇 Sunucudaki Rol Sayısı', message.guild.roles.cache.size, true )
  .addField('🧾 Sunucudaki Kanal Sayısı',message.guild.channels.cache.size, true)
  .addField('😀 Sunucudaki Emoji Sayısı', message.guild.emojis.cache.size, true )
  .addField('🔮 Sunucunun Boost Seviyesi', `${message.guild.premiumTier}/3`, true)
  .addField('🔮 Sunucunun Boost Sayısı', message.guild.premiumSubscriptionCount, true)
  .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
  .setColor("BLUE")
message.channel.send(embed)
message.channel.send("Muck:", message.guild.cache.emojis)

};
exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: ["sunucubilgi"],
    permLevel: 0
    };
    exports.help = {
        name : "sunucu-bilgi"
        };

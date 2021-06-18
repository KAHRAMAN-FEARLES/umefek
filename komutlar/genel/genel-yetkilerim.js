const Discord = require("discord.js");
const database = require('croxydb');
const db = require('croxydb');
const { stripIndents } = require("common-tags");
//NarcosCode
exports.run = (client, msg, args) => {
  let x;
  let x2;
  let x3;
  let x4;
  let x5;
  let x6;
  let x7;
  let x8;
  let x9;
  let x10;
  let x11;
//NarcosCode
  //yönetici
  if (msg.member.hasPermission("ADMINISTRATOR")) x = "<a:cevrimici:819837341794435083>";
  if (!msg.member.hasPermission("ADMINISTRATOR")) x = "<a:rahatsiz_etme:819837303824318494>";
//NarcosCode
  //Denetim kaydı
  if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:cevrimici:819837341794435083>";
  if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:rahatsiz_etme:819837303824318494>";
//NarcosCode
  //Sunucuyu yönet
  if (msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:cevrimici:819837341794435083>";
  if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:rahatsiz_etme:819837303824318494>";
//NarcosCode
  //Rolleri yönet
  if (msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:cevrimici:819837341794435083>";
  if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:rahatsiz_etme:819837303824318494>";
//NarcosCode
  //Kanalları yönet
  if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:cevrimici:819837341794435083>";
  if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:rahatsiz_etme:819837303824318494>";
//NarcosCode
  //üyeleri at
  if (msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:cevrimici:819837341794435083>";
  if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:rahatsiz_etme:819837303824318494>";
//NarcosCode
  //üyeleri yasakla
  if (msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:cevrimici:819837341794435083>";
  if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:rahatsiz_etme:819837303824318494>";
//NarcosCode
  //mesajları yönet
  if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:cevrimici:819837341794435083>";
  if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:rahatsiz_etme:819837303824318494>";
//NarcosCode
  //kullanıcı adlarını yönet
  if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:cevrimici:819837341794435083>";
  if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:rahatsiz_etme:819837303824318494>";
//NarcosCode
  //emojileri yönet
  if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:cevrimici:819837341794435083>";
  if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:rahatsiz_etme:819837303824318494>";
//NarcosCode
  //webhookları yönet
  if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:cevrimici:819837341794435083>";
  if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:rahatsiz_etme:819837303824318494>";
//NarcosCode
const embed = new Discord.MessageEmbed()
//.setTitle("İşte Yetkilerin!")
/*.addField("Yönetici", `${x}`)
.addField("Denetim Kaydını Görüntüle", `${x2}`)
.addField("Sunucuyu Yönet", `${x3}`)
.addField("Rolleri Yönet", `${x4}`)
.addField("Kanalları Yönet", `${x5}`)
.addField("Üyeleri At", `${x6}`)
.addField("Üyeleri Yasakla", `${x7}`)
.addField("Mesajları Yönet", `${x8}`)
.addField("Kullanıcı Adlarını Yönet", `${x9}`)
.addField("Emojileri Yönet", `${x10}`)
.addField("Webhook'ları Yönet", `${x11}`)*/
.setDescription(`**Yönetici** ${x}\n**Denetim Kaydını Görüntüle** ${x2}\n**Sunucuyu Yönet** ${x3}\n**Rolleri Yönet** ${x4}\n**Kanalları Yönet** ${x5}\n**Üyeleri At** ${x6}\n**Üyeleri Yasakla** ${x7}\n**Mesajları Yönet** ${x8}\n**Kullanıcı Adlarını Yönet** ${x9}\n**Emojileri Yönet** ${x10}\n**Webhook'ları Yönet** ${x11}\n=======================`)
.addField("<a:cevrimici:819837341794435083>", "**Yetkin Var**")
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
.setColor("BLUE")
.addField("<a:rahatsiz_etme:819837303824318494>", "**Yetkin Yok**")
.setTimestamp()

msg.channel.send(embed)
  
};
//NarcosCode
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["izinlerim"],
  permLevel: 0
};
//NarcosCode
exports.help = {
  name: "yetkilerim",
  description: "Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.",
  usage: "yetkilerim"
};
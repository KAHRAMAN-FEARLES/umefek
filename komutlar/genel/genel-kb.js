const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
const db = require('croxydb');

exports.run = async (client, message, args) => {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`BLUE`)
        .setDescription(`Komudu Kullanazsın Çünkü **Kara Listedesin!**`)
        .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    );
  let user = message.mentions.users.first() || message.author;
  let userinfo = {};

  userinfo.rozetler = user.flags.toArray().join("\n")
    ? user.flags
        .toArray()
        .join("\n")
        .replace("HOUSE_BRAVERY", "Bravery")
        .replace("HOUSE_BRILLIANCE", "Brillianca")
        .replace("HOUSE_BALANCE", "Balance")
        .replace("VERIFIED_DEVELOPER", "Doğrulanmış Discord Bot Geliştiricisi")
        .replace("VERIFIED_BOT", "Onaylı Bot")
        .replace("DISCORD_EMPLOYEE", "Discord Çalışanı")
        .replace("DISCORD_PARTNER", "Partner")
        .replace("HYPESQUAD_EVENTS", "Events Rozeti")
        .replace("BUGHUNTER_LEVEL_1", "Bug Avcısı Level 1")
        .replace("EARLY_SUPPORTER", "Erken Dönem Destekcisi")
        .replace("TEAM_USER", "Takım Üyesi")
        .replace("SYSTEM", "Sistem")
        .replace("BUGHUNTER_LEVEL_2", "Bug Avcısı Level 2")
    : `Hiçbir Rozeti Yok`;

  userinfo.status = user.presence.status
    .toString()
    .replace("dnd", `Rahatsız Etmeyin`)
    .replace("online", `Çevrimiçi`)
    .replace("idle", `Boşta`)
    .replace("offline", `Çevrimdışı`);

  userinfo.bot = user.bot
    .toString()
    .replace("false", `Hayır`)
    .replace("true", `Evet`);
  userinfo.dctarih = moment
    .utc(message.guild.members.cache.get(user.id).user.createdAt)
    .format("**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)")
    .replace("Monday", `**Pazartesi**`)
    .replace("Tuesday", `**Salı**`)
    .replace("Wednesday", `**Çarşamba**`)
    .replace("Thursday", `**Perşembe**`)
    .replace("Friday", `**Cuma**`)
    .replace("Saturday", `**Cumartesi**`)
    .replace("Sunday", `**Pazar**`)
    .replace("January", `**Ocak**`)
    .replace("February", `**Şubat**`)
    .replace("March", `**Mart**`)
    .replace("April", `**Nisan**`)
    .replace("May", `**Mayıs**`)
    .replace("June", `**Haziran**`)
    .replace("July", `**Temmuz**`)
    .replace("August", `**Ağustos**`)
    .replace("September", `**Eylül**`)
    .replace("October", `**Ekim**`)
    .replace("November", `**Kasım**`)
    .replace("December", `**Aralık**`);
    userinfo.dctarihkatilma = moment

    .utc(message.guild.members.cache.get(user.id).joinedAt)

    .format("**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)")

    .replace("Monday", `**Pazartesi**`)

    .replace("Tuesday", `**Salı**`)

    .replace("Wednesday", `**Çarşamba**`)

    .replace("Thursday", `**Perşembe**`)

    .replace("Friday", `**Cuma**`)

    .replace("Saturday", `**Cumartesi**`)

    .replace("Sunday", `**Pazar**`)

    .replace("January", `**Ocak**`)

    .replace("February", `**Şubat**`)

    .replace("March", `**Mart**`)

    .replace("April", `**Nisan**`)

    .replace("May", `**Mayıs**`)

    .replace("June", `**Haziran**`)

    .replace("July", `**Temmuz**`)

    .replace("August", `**Ağustos**`)

    .replace("September", `**Eylül**`)

    .replace("October", `**Ekim**`)

    .replace("November", `**Kasım**`)

    .replace("December", `**Aralık**`);
  const DarkCode = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setThumbnail(
      user.avatarURL({
        dynamic: true,
        format: "gif",
        format: "png",
        format: "jpg",
        size: 2048
      })
    )
    .addField(`Tag`, `${user.tag}`, true)
    .addField(`ID`, `${user.id}`, true)
    .addField(`Durum`, userinfo.status, true)
    .addField(`Bot Mu?`, userinfo.bot, true)
    .addField(`Katılım Tarihi (Discord)`, userinfo.dctarih, false)
      .addField(`Katılım Tarihi (Sunucu)`, userinfo.dctarihkatilma, false)
      .addField(

      `Güvenilirlik?`,

      `${

        new Date().getTime() - user.createdAt.getTime() <

        15 * 24 * 60 * 60 * 1000

          ? "**__Tehlikeli__**"

          : "**__Güvenli__**"

      }

`,

      true

    )
    .addField(`Rozetleri`, userinfo.rozetler, false)
    .setColor("BLUE")
  /*.setAuthor(
//DarkCode
        `${message.guild.name}`,
//DarkCode
        message.guild.iconURL({
//DarkCode
          dynamic: true,
//DarkCode
          format: "gif",
//DarkCode
          format: "png",
//DarkCode
          format: "jpg",
//DarkCode
          size: 2048
//DarkCode
        })
//DarkCode
      )*/
//DarkCode
      
//DarkCode
/*
      .setFooter(

        `${message.author.tag} Tarafından İstendi!`,

        message.author.avatarURL({

          dynamic: true,

          format: "gif",

          format: "png",

          format: "jpg",

          size: 2048*/
          .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
          

message.channel.send(DarkCode);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kb", "kullanıcıbilgi"],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı-bilgi",
  description: "Kullanıcının Bilgilerini Gösterir.",
  usage: "kullanıcı-bilgi"
};
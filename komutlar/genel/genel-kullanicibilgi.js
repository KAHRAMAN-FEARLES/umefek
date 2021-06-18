const Discord = require('discord.js');
const moment = require('moment');
const database = require('croxydb');
const db = require('croxydb');
moment.locale('tr');

exports.run = (client, message, args) => {// can ♡ b#1010

let mention = message.author;
if(message.mentions.members.first()) mention = message.mentions.members.first().user;
let mentionMember = message.guild.members.cache.get(mention.id);

let slm = {
  web: 'İnternet Tarayıcısı',
  desktop: 'Bilgisayar',
  mobile: 'Mobil'
}
let oyunlar = [];
mention.presence.activities.forEach(slm => {
if(slm.type === 'CUSTOM_STATUS') {
oyunlar.push(`${slm.emoji ? slm.emoji : ''} ${slm.state}`);
} else {
oyunlar.push(`**${slm.name}** ${slm.type.replace('PLAYING', 'oynuyor').replace('STREAMING', 'yayınlıyor').replace('LISTENING', 'dinliyor').replace('WATCHING', 'izliyor')}`)
}});
  
    var sunucugirme = "";
  if (moment(mention.joinedAt).format("MM") === "01") {
    var sunucugirme = `${moment(mention.joinedAt).format("DD")} Ocak ${moment(
      mention.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.joinedAt).format("MM") === "02") {
    var sunucugirme = `${moment(mention.joinedAt).format("DD")} Şubat ${moment(
      mention.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.joinedAt).format("MM") === "03") {
    var sunucugirme = `${moment(mention.joinedAt).format("DD")} Mart ${moment(
      mention.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.joinedAt).format("MM") === "04") {
    var sunucugirme = `${moment(mention.joinedAt).format("DD")} Nisan ${moment(
      mention.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.joinedAt).format("MM") === "05") {
    var sunucugirme = `${moment(mention.joinedAt).format("DD")} Mayıs ${moment(
      mention.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.joinedAt).format("MM") === "06") {
    var sunucugirme = `${moment(mention.joinedAt).format("DD")} Haziran ${moment(
      mention.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.joinedAt).format("MM") === "07") {
    var sunucugirme = `${moment(mention.joinedAt).format("DD")} Temmuz ${moment(
      mention.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.joinedAt).format("MM") === "08") {
    var sunucugirme = `${moment(mention.joinedAt).format("DD")} Ağustos ${moment(
      mention.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.joinedAt).format("MM") === "09") {
    var sunucugirme = `${moment(mention.joinedAt).format("DD")} Eylül ${moment(
      mention.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.joinedAt).format("MM") === "10") {
    var sunucugirme = `${moment(mention.joinedAt).format("DD")} Ekim ${moment(
      mention.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.joinedAt).format("MM") === "11") {
    var sunucugirme = `${moment(mention.joinedAt).format("DD")} Kasım ${moment(
      mention.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.joinedAt).format("MM") === "12") {
    var sunucugirme = `${moment(mention.joinedAt).format("DD")} Aralık ${moment(
      mention.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  
  var dcolusturma = "";
  if (moment(mention.createdAt).format("MM") === "01") {
    var dcolusturma = `${moment(mention.createdAt).format("DD")} Ocak ${moment(
      mention.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.createdAt).format("MM") === "02") {
    var dcolusturma = `${moment(mention.createdAt).format("DD")} Şubat ${moment(
      mention.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.createdAt).format("MM") === "03") {
    var dcolusturma = `${moment(mention.createdAt).format("DD")} Mart ${moment(
      mention.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.createdAt).format("MM") === "04") {
    var dcolusturma = `${moment(mention.createdAt).format("DD")} Nisan ${moment(
      mention.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.createdAt).format("MM") === "05") {
    var dcolusturma = `${moment(mention.createdAt).format("DD")} Mayıs ${moment(
      mention.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.createdAt).format("MM") === "06") {
    var dcolusturma = `${moment(mention.createdAt).format("DD")} Haziran ${moment(
      mention.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.createdAt).format("MM") === "07") {
    var dcolusturma = `${moment(mention.createdAt).format("DD")} Temmuz ${moment(
      mention.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.createdAt).format("MM") === "08") {
    var dcolusturma = `${moment(mention.createdAt).format("DD")} Ağustos ${moment(
      mention.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.createdAt).format("MM") === "09") {
    var dcolusturma = `${moment(mention.createdAt).format("DD")} Eylül ${moment(
      mention.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.createdAt).format("MM") === "10") {
    var dcolusturma = `${moment(mention.createdAt).format("DD")} Ekim ${moment(
      mention.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.createdAt).format("MM") === "11") {
    var dcolusturma = `${moment(mention.createdAt).format("DD")} Kasım ${moment(
      mention.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(mention.createdAt).format("MM") === "12") {
    var dcolusturma = `${moment(mention.createdAt).format("DD")} Aralık ${moment(
      mention.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
let nitroDurum = false;
if(mention.presence.activities[0]) {
if(mention.presence.activities[0].emoji) {
if(mention.presence.activities[0].emoji.animated) nitroDurum = true;
};
};
if(mention.avatarURL().includes('.gif')) nitroDurum = true;

let rozetler = false;
if(mention.flags.toArray().length <= 0) {
rozetler = false;
} else {
rozetler = true;
};

let mentionFlags = mention.flags.toArray().join(' | ')
.replace('HOUSE_BRAVERY', 'Bravery')  
.replace('HOUSE_BRILLIANCE', 'Brilliance')
.replace('HOUSE_BALANCE', 'Balance')
.replace('VERIFIED_DEVELOPER', '1. Dönemde Doğrulanmış Bot Geliştiricisi')
.replace('DISCORD_EMPLOYEE', 'Discord Çalışanı')
.replace('PARTNERED_SERVER_OWNER', 'Discord Partner')
.replace('HYPESQUAD_EVENTS', 'HypeSquad Events')
.replace('BUGHUNTER_LEVEL_1', 'Bug Avcısı 1. Lvl')
.replace('EARLY_SUPPORTER', 'Erken Destekçi')
.replace('TEAM_USER', 'Takım Üyesi')
.replace('SYSTEM', 'Sistem')
.replace('BUGHUNTER_LEVEL_2', 'Bug Avcısı 2. Lvl')
.replace('VERIFIED_BOT', 'Onaylı Bot')
.replace('SUBSCRIBER', 'Nitro Aboneliği')
.replace('SERVER_BOOSTING', 'Sunucu Takviyecisi');
  let userinfo = {};
        userinfo.status = mention.presence.status.toString()
  
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`);
  
  userinfo.od1 = message.guild.members.cache.get(mention.id).user.presence.game || "Oynadığı Bir Oyun Yok."
  
const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(mention.tag, mention.avatarURL({dynamic: true}))
.setThumbnail(mention.avatarURL({dynamic: true}))
.addField("> Kullanıcı Bilgi", "** **", false)
.addField('Durum', userinfo.status, true)
.addField('Ad', mention.username+` (${mention})`, true)
.addField('Aktivite', userinfo.od1, true)
.addField(

  `Güvenilirlik`,

  `${

    new Date().getTime() - user.createdAt.getTime() <

    15 * 24 * 60 * 60 * 1000

      ? "**Tehlikeli!!!**"

      : "Güvenli"

  }

`,

  true

)
.addField('Rozetler', `${rozetler ? mentionFlags : 'Rozet Almamış.'}`, true)
.addField('Kullanıcı Kimliği', mention.id, true)
.addField("> Tarih Bilgisi", "** **", false)
.addField('Sunucuya Katılma Tarihi', sunucugirme, true)
.addField('Discord`a Kayıt Tarihi', dcolusturma, true)

.addField("> Sunucu İçi Bilgisi", "** **", false)
.addField('Takma Ad', mentionMember.displayName, true)
.addField('Roller', mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') ? mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') : 'Hiç yok.')


.setColor("BLUE")
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
.setTimestamp();

message.channel.send(embed);
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kb', "kullanıcı-bilgi"],
  permLevel: 0
};
 
exports.help = {
  name: 'kullanıcıbilgi'
};// codare ♥
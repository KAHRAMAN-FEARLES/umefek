const discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');


exports.run = async(client, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')

if (!args[0]) return message.channel.send(new discord.MessageEmbed()                                          
    .setTitle("Botlist Ayar")
    .setDescription("**u!botlist-ayar botekle-kanal #kanal**\n**u!botlist-ayar basvuru-kanal #kanal**\n**u!botlist-ayar log-kanal #kanal**\n**u!botlist-ayar yetkili-rol @rol**")
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()));

if (args[0] !== 'botekle-kanal' && args[0] !== 'log-kanal' && args[0] !== 'basvuru-kanal' && args[0] !== 'yetkili-rol') return message.channel.send(new discord.MessageEmbed()                                          
.setTitle("Botlist Ayar")
.setDescription("**u!botlist-ayar botekle-kanal #kanal**\n**u!botlist-ayar basvuru-kanal #kanal**\n**u!botlist-ayar log-kanal #kanal**\n**u!botlist-ayar yetkili-rol @rol**")
.setColor("BLUE")
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()))

let rol = message.mentions.roles.first();
let kanal = message.mentions.channels.first();
let botekle = await db.fetch(`botekle{message.guild.id}`)
let basvuru = await db.fetch(`basvuru{message.guild.id}`)
let log = await db.fetch(`botlistlog{message.guild.id}`)
let yetkili = await db.fetch(`botlistyetkili{message.guild.id}`)

if (args[0] == "botekle-kanal") {
    if (!kanal) return message.channel.send("**Lütfen bir kanalı etiketleyip tekrar deneyin.**")
    db.set(`botekle_${message.guild.id}`, kanal.id)
    message.channel.send(new discord.MessageEmbed()
        .setTitle("Başarılı!")
        .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
        .setColor("BLUE")
        .setDescription(`Bot ekleme kanalı ${kanal} olarak ayarlandı!`))
}

if (args[0] == "basvuru-kanal") {
    if (!kanal) return message.channel.send("**Lütfen bir kanalı etiketleyip tekrar deneyin.**")
    db.set(`basvuru_${message.guild.id}`, kanal.id)
    message.channel.send(new discord.MessageEmbed()
        .setTitle("Başarılı!")
        .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
        .setColor("BLUE")
        .setDescription(`Bot eklenince başvurular ${kanal} kanalına gidecek!`))
}

if (args[0] == "log-kanal") {
    if (!kanal) return message.channel.send("**Lütfen bir kanalı etiketleyip tekrar deneyin.**")
    db.set(`botlistlog_${message.guild.id}`, kanal.id)
    message.channel.send(new discord.MessageEmbed()
        .setTitle("Başarılı!")
        .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
        .setColor("BLUE")
        .setDescription(`Bot log kanalı ${kanal} olarak ayarlandı!`))


}

if (args[0] == "yetkili-rol") {
    if (!rol) return message.channel.send("**Lütfen bir rolü etiketleyip tekrar deneyin.**")
    db.set(`botlistyetkili_${message.guild.id}`, rol.id)
    message.channel.send(new discord.MessageEmbed()
        .setTitle("Başarılı!")
        .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
        .setColor("BLUE")
        .setDescription(`Botlist yetkili rolü ${rol} olarak ayarlandı!`))

}

if (args[0] == "bot-rol") {
    if (!rol) return message.channel.send("**Lütfen bir rolü etiketleyip tekrar deneyin.**")
    db.set(`botlistbotrol_${message.guild.id}`, rol.id)
    message.channel.send(new discord.MessageEmbed()
        .setTitle("Başarılı!")
        .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
        .setColor("BLUE")
        .setDescription(`Bot onaylanınca verilecek rol ${rol} olarak ayarlandı!`))


}

if (args[0] == "developer-rol") {
    if (!rol) return message.channel.send("**Lütfen bir rolü etiketleyip tekrar deneyin.**")
    db.set(`botlistdeveloper_${message.guild.id}`, rol.id)
    message.channel.send(new discord.MessageEmbed()
        .setTitle("Başarılı!")
        .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
        .setColor("BLUE")
        .setDescription(`Developer rolü ${rol} olarak ayarlandı!`))


}

};
exports.conf = {
  enabled: true,
  guildOnly: true, //Bu sadece sunucularda kullanılabilir ayarıdır true yazarsanız dm de kullanamazsınız false yazarsanız kullanabilirsiniz
  aliases: [] 
};

exports.help = {
  name: 'botlist-ayar',
  description: 'komut açıklama',
  usage: ''
};
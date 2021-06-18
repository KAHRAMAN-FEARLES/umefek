const discord = require('discord.js')
const yts = require( 'yt-search' )
const database = require('croxydb');
const db = require('croxydb');
exports.run = async (client, message, args) => { 
  let kactane = args[0]
  if(!kactane) return message.channel.send('Lütfen kaç sonuç aratacağınızı giriniz')
  let narcos = args.slice(1).join(' ')
  if(!narcos) return message.channel.send('Lütfen aramam için bir şeyler giriniz')
  const r = await yts(narcos)
  const videos = r.videos.slice( 0, args[0] ) 
  videos.forEach( function ( v ) {
    const views = String( v.views ).padStart( 10, ' ' )
    const embed = new discord.MessageEmbed()
    .setTitle(":mag_right:  Arama: "+ narcos + "")
    .addField(`:desktop: Video:`,`${ v.title }`, true)
    .addField(`:busts_in_silhouette: Görüntülenme:`,`${ views }`, true)
    .addField(`:clock2: Süre:`,`${ v. timestamp }`, true)
    .addField(`🎞️ Kanal:`,`${ v.author.name }`, true)
    .addField(`:arrow_right: Video linki:`,`[İzlemek için tıkla](${v.url})`)
    .setColor(`BLUE`)
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setThumbnail(`${ v.thumbnail }`)     // videoların kapak fotoğraflarını atmasını istemiyorsanız bu kısmı silebilirsiniz.
    return message.channel.send(embed)
  } )
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ytarat", "youtube-arat", "youtubearat"],
  permLevel: 0
};

exports.help = {
  name: 'yt-arat'
};
const Discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');

exports.run = async(client, message, args) => {
   var napim = [
"Hıyar var mı? Varsa getir.",
     "Çaaayy!!!",
     "Bu sunucudan çık.",
     "Bu botu sunucuna ekle :)",
	 "Sunucu sahipliğini birine aktar.",
	 "Discord'u Sil!",
	 "Napim demeye devam et sen.",
     "1 Dakika Tavuk Ol :d",
     "En Büyük Sırrını @everyone Çekerek Söyle :D",
     "Bir Botun Varsa Tokenini @everyone Çekerek Buraya At xd"
   ];
        var random = Math.floor(Math.random()*(napim.length-0+1)+0);
  if (random == undefined) random = "Bulamadım Valla :/"

  if(random === "Bu botu sunucuna ekle :)") {
    //Bu botu sunucuna ekle :)
    		const umutice = new Discord.MessageEmbed()
    .setTitle("Napsan ki...")
		.setDescription("Buldum! Yapman Gereken Şeey: Bu botu sunucuna ekle :)")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setColor("BLUE")
    message.channel.send(umutice)
  }else{
  
		const umutice = new Discord.MessageEmbed()
    .setTitle("Napsan ki...")
		.setDescription("Buldum! Yapman Gereken Şeey: " + napim[random])
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setColor("BLUE")
    message.channel.send(umutice)
 }
};

exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['napim'],
 permLevel: 0
};

exports.help = {
 name: 'napim',
 description: 'Narcos Code - Napim Kodu',
 usage: 'napim'
};
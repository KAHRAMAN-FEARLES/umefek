const Discord = require('discord.js');
const db = require("croxydb");
const database = require('croxydb');


exports.run = async(client,message, args) => {
   if(!args[0])  return message.channel.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
.setDescription('**Birşeyler Yazman Gerek!**\n**u!süreli-gelen ayarla kanal #kanal** - **Süreli Gelen Kanalını Ayarlar.** \n**u!gelen-giden sıfırla kanal** - **Süreli Gelen Kanalını Sıfırlar.**\n\n**MESAJ DEĞERLERİ**:\n**-uye-**: Üyeyi etiketler.\n**-uyeisim-**: Üyeyi etiketlemez, ismini yazar.\n**-sunucuad-**: Sunucu adını yazar.\n**-uyesayi-**: Sunucudaki üye sayısını yazar.'))

  if(args[0] === "ayarla") {

    if(args[1] == "kanal") { var kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()).setDescription('Bir kanal etiketlemelisin.'))
         
            db.set(`sureliGelenGiden_${message.guild.id}`, kanal.id)
          
            return message.channel.send(new Discord.MessageEmbed()
        .setColor('BLUE')
        .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
        .setDescription('**Süreli Gelen Kanalı Ayarlandı!**\n**Üye gelince mesajın gideceği kanal** <#' +kanal.id+ '> **Olarak ayarlandı!**\n\n**Bilgilendirme: Bu mesaj 6 saniye sonra otomatik silinir.**'))
    }else if(args[1] == "mesaj"){

        let reason = args.slice(2).join(' ')
      if(!reason) return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()).setDescription('Bir karşılama mesajı yazmalısın.\n\n**DEĞERLER**\n**-uye-**: Üyeyi etiketler.\n**-uyeisim-**: Üyeyi etiketlemez, ismini yazar.\n**-sunucuad-**: Sunucu adını yazar.\n**-uyesayi-**: Sunucudaki üye sayısını yazar.'));
       
          
        
          
          message.channel.send(new Discord.MessageEmbed()
      .setColor('BLUE')
      .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
      .setDescription(`**Süreli Gelen Mesajı Ayarlandı!**\n**Üye gelince bu mesajı yollicam:**\n${reason}\n\n**Bilgilendirme: Bu mesaj 6 saniye sonra otomatik silinir.**`))
      
      db.set(`sureliGelenGidenMesaj_${message.guild.id}`, reason) 
  }else{
      message.channel.send(new Discord.MessageEmbed()
      .setColor('BLUE')
      .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
      .setDescription('**Hata!**\n**Lütfen **mesaj** veya **kanal** yazın.**'))
  
  }

    
  }

  
  if(args[0] === "sıfırla") {
    if(args[1] == "kanal") {db.delete(`sureliGelenGiden_${message.guild.id}`)
          
            return message.channel.send(new Discord.MessageEmbed()
        .setColor('BLUE')
        .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
        .setDescription('**Süreli Gelen Kanalı Sıfırlandı!**'))
    }else if(args[1] == "mesaj"){
       
          message.channel.send(new Discord.MessageEmbed()
      .setColor('BLUE')
      .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
      .setDescription(`**Süreli Gelen Mesajı Sıfırlandı!**`))
      
      db.delete(`sureliGelenGidenMesaj_${message.guild.id}`) 
  }else{
      message.channel.send(new Discord.MessageEmbed()
      .setColor('BLUE')
      .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
      .setDescription('**Hata!**\n**Lütfen **mesaj** veya **kanal** yazın.**'))
  
  }

  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sürelihg", "sürelihoşgeldin", "süreli-hoşgeldin"],
  permlevel: 4
}

exports.help = {
  name: "süreli-hg"
}
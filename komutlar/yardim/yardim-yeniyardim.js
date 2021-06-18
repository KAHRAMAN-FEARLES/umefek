const { Client, MessageEmbed } = require('discord.js')
const rm = require('discord.js-reaction-menu')
rm.reactions.back = '👈'
rm.reactions.next = '👉'
rm.reactions.first = ''
rm.reactions.stop = ''
rm.reactions.last = ''
exports.run = (client, message, args) => {
new rm.menu({
    
    channel: message.channel,
    userID: message.author.id,
    pages: [
        new MessageEmbed()
        .setColor('BLUE')
      .setAuthor()
        .setDescription(`> **Sayfa 1 ► Ana Sayfa**
> **Sayfa 2 ► Eğlence Komutları**
> **Sayfa 3 ► Moderasyon Komutları**
> **Sayfa 4 ► Moderasyon Komutları 2**
> **Sayfa 5 ► Logo komutları**
> **Sayfa 6 ► Genel Komutlar**
> **Sayfa 7 ► Bot Komutları**
> **Sayfa 8 ► BotList Komutları**
> **Sayfa 9 ► Ticket Komutları**
> **Sayfa 10 ► Seviye Komutları**`)
.setTimestamp()
//      .setImage("https://media.giphy.com/media/esri6AWOyNcO5z9T6y/giphy.gif  ")
.setFooter("Sayfa 1")
.setAuthor(`Ana Menü`, message.author.avatarURL({dynamic: true, size: 1024 })),
        new MessageEmbed()
        .setColor('BLUE')
        .addField("> **u!akinatör**", "Akinatör Oyununu Oynarsın.", true)
    .addField("> **u!boks**", "Boks Yaparsın.", true)
    .addField("> **u!drake**", "Drake Resim Yaparsın.", true)
    .addField("> **u!düello**", "Biriyle Düello Atarsın.", true)
    .addField("> **u!fakeban**", "Birine Sahte Ban Atarsınız.", true)
    .addField("> **u!fakemesaj**", "Birinin Yerine Mesaj Yazarsınız.", true)
    .addField("> **u!magik**", "Birinin Profil Fotoğrafını Bozarsın.", true)
    .addField("> **u!napim**", "Napim? Cevabı Bende.", true)
    .addField("> **u!saldır**", "Birine Saldırırsınız.", true)
    .addField("> **u!slots**", "Slots Oynarsınız.", true)
    .addField("> **u!sorusor**", "Bota Soru Sorarsınız.", true)
    .addField("> **u!yaz**","Bota Yazı Yazdırırsınız.", true)
    .addField("> **u!yazan-kazanır**","Biriyle Yazan Kazanır Oynarsınız.", true)
    .addField("> **u!yazı-tura**","Yazı-Tura Atarsınız.", true)
    .addField("> **u!zarat**", "Zar Atarsınız.", true)
    .setTimestamp()
	.setFooter("Sayfa 2")
      .setAuthor(`Eğlence Menüsü`, message.author.avatarURL({dynamic: true, size: 1024 })),
new MessageEmbed()
.setColor('BLUE')
       .setColor("BLUE")
       .addField("> **u!ban**", "Birini Yasaklarsınız.", true)
       .addField("> **u!banlimit**", "Ban Limitini Ayarlarsınız.", true)
       .addField("> **u!bansor**", "Banlanan Birinin Banlanma Sebebine Bakarsınız.", true)
       .addField("> **u!capslock-engel**", "Capslock Engeli Açar/Kaparsınız.", true)
       .addField("> **u!çoklu-oylama**", "İstediğiniz Emojilerle Oylama Yaparsınız.", true)
       .addField("> **u!emojiekle**", "Sunucuya Emoji Eklersiniz.", true)
       .addField("> **u!fotochat**", "Fotochat'i Ayarlarsınız.", true)
       .addField("> **u!kanalkoruma**", "Kanal Korumayı Ayarlarsınız.", true)
       .addField("> **u!kick**", "Birini Sunucudan Atarsınız.", true)
       .addField("> **u!kicklimit**", "Kick Limitini Ayarlarsınız.", true)
       .addField("> **u!küfürengel**", "Küfür Engeli Açar/Kaparsınız.", true)
       .addField("> **u!log**", "Mod-Log'u Ayarlarsınız.", true)
       .addField("> **u!nuke**", "Kanalı Silip Aynı Yetkilerle Tekrar Açar.", true)
       .addField("> **u!mute**", "Birini Süreli/Süresis Susturursunuz.", true)
       .addField("> **u!ototag**", "Ototag'ı Ayarlarsınız.", true)
       .addField("> **u!oylama**", "Oylama Yaparsınız.", true)
       .addField("> **u!reklamengel**", "Reklam Engeli Açar/Kaparsınız.", true)
       .addField("> **u!reklam-taraması**", "Sunucuda Reklam Taraması Yaparsınız.", true)
       .addField("> **u!rolal**", "Birinden Belirtilen Rolü Alırsınız.", true)
       .addField("> **u!rolver**", "Birine Belirtilen Rolü Verirsiniz.", true)
       .addField("> **u!sa-as**","Sa-As Sistemini Ayarlarsınız.", true)
       .addField("> **u!ses-çekiliş**", "Sesli Kanaldakiler Arasında Çekiliş Yaparsınız.", true)
       .addField("> **u!sil**","Belirtilen Kadar Mesajı Silersiniz.", true)
       .addField("> **u!spam-engel**", "Spam Engeli Açar/Kaparsınız.", true)
       .addField("> **u!yavaşmod**","Slowmode(Yavaşmod)'u Ayarlarsınız.", true)
            .setTimestamp()
			.setFooter("Sayfa 3")
      .setAuthor(`Moderasyon Menüsü 1`, message.author.avatarURL({dynamic: true, size: 1024 })),
      new MessageEmbed()
       .addField("> **u!sohbet**","Sohbeti Açarsınız/Kaparsınız.", true)
       .addField("> **u!yavaşmod**","Slowmode(Yavaşmod)'u Ayarlarsınız.", true)
       .addField("> **u!unban**","Yasaklanan Birinin Yasağını Kaldırırsınız.", true)
       .addField("> **u!unmute**", "Birinin Susturmasını Açarsınız.", true)
       .addField("> **u!uyar**", "Birini Uyarırsınız.", true)
       .addField("> **u!uyarılar**", "Birinin Uyarılarına Bakarsınız.", true)
       .addField("> **u!uyarı-sil**", "Birinin Uyarılarını Silersiniz.", true)
                  .setTimestamp()
				  .setFooter("Sayfa 4")
      .setAuthor(`Moderasyon Menüsü 2`, message.author.avatarURL({dynamic: true, size: 1024 }))
      .setColor("BLUE"),
new MessageEmbed()
  .setColor("BLUE")
  .addField("> **u!altın**", "Altın Logo Yaparsınız.", true)
  .addField("> **u!ateş**", "Ateş Logo Yaparsınız.", true)
  .addField("> **u!kurukafa**", "Kurukafa Logo Yaparsınız.", true) //enai umut
      .setAuthor(`Logo`, message.author.avatarURL({dynamic: true, size: 1024 }))
      .setTimestamp()
	  .setFooter("Sayfa 5"),
new MessageEmbed()
    .setColor("BLUE")
    .addField("> **u!afk**", "AFK Moduna Geçersiniz.", true)
    .addField("> **u!avatar**", "Etiketlediğiniz Kişinin Avatırını Görürsünüz.", true)
    .addField("> **u!corona**", "Ülkeler ve Dünya Hakkında COVID-19 Bilgisi Alırsınız.", true)
    .addField("> **u!çeviri**", "Yazdığınız Mesajı Çevirirsiniz.(Sistemi Dil-1'i Dil-2'ye çevir olarak algılayabilirsiniz.)", true)
    .addField("> **u!deprembilgi**", "Türkiye'deki Yaşanan Son 10 Depremi Görürsünüz.", true)
    .addField("> **u!hesapla**", "Matematik İşlemi Yaparsınız.", true)
    .addField("> **u!kullanıcı-bilgi**", "Belirtilen Kullanıcının Bilgilerine Bakarsınız.", true)
    .addField("> **u!namaz-vakitleri**", "Namaz Vakitlerini Görürsünüz.", true)
    .addField("> **u!roblox**", "Belirtilen Oyuncunun Roblox Bilgilerini Görürsünüz.", true)
    .addField("> **u!roller**", "Sunucudaki Rolleri Görürsünüz.", true)
    .addField("> **u!şarkı-sözü**", "Yazdığınız Şarkının Sözlerini Görürsünüz.", true)
    .addField("> **u!sesli-aktivite**", "Sesli Kanalda Oyun Oynamaya veya YouTube İzlemeye Ne Dersin?", true)
    .addField("> **u!sunucubilgi**", "Sunucu Bilgilerini Görürsünüz.", true)
    .addField("> **u!sunuculogo**", "Sunucunun Logosunu Görürsünüz.", true)
    .addField("> **u!sunucutanıt**", "Sunucunuzu tanıtırsınız.", true)
    .addField("> **u!v11tov12**", "Discord.Js V11 Kodunu V12'ye Çevirirsiniz.", true)
    .addField("> **u!yetkilerim**", "Yetkilerinizi Görürsünüz.", true)
    .addField("> **u!yılbaşı**", "Yılbaşına Kalan Süreyi Görürsünüz.", true)
    .setTimestamp()
	.setFooter("Sayfa 6")
      .setAuthor(`Genel Menüsü`, message.author.avatarURL({dynamic: true, size: 1024 })),
      new MessageEmbed()
            .setColor("BLUE")
      .addField("> **u!bakım**", "Bakım Modu Açılır.", true)
      .addField("> **u!bug**", "Bug bildirirsiniz.", true)
      .addField("> **u!davet**", "Botun Davet Linkini Görürsünüz.", true)
      .addField("> **u!güncelleme**", "Güncellemeleri Görürsünüz.", true)
      .addField("> **u!güncelleme-admin**", "Güncellemelere Güncelleme Eklenir.", true)
      .addField("> **u!istatistik**", "Botun İstatistiklerini Görürsünüz.", true)
      .addField("> **u!istek**", "İstek kodunuzu bildirirsiniz.", true)
      .addField("> **u!komutlar**", "Botun Tüm Komutlarını Görürsünüz.", true)
      .addField("> **u!ping**", "Botun Pingini Görürsünüz.", true)
      .addField("> **u!reboot**", "Botu Yeniden Başlatırsınız.", true)
      .addField("> **u!token**", "Botun Tokenini Görürsünüz.", true)
      .addField("> **u!toplamkomut**", "Bottaki Komut Sayısını Görürsünüz.", true)
      .setTimestamp()
	  .setFooter("Sayfa 7")
      .setAuthor(`Bot Menüsü`, message.author.avatarURL({dynamic: true, size: 1024 })),
      new MessageEmbed()
              .setColor("BLUE")
        .addField("> **u!botlist-ayar**", "Botlist Kanallarını ve Rollerini Ayarlarsınız.", true)
        .addField("> **u!botekle**", "Bot Eklersiniz.", true)
        .addField("> **u!botonayla**", "Birinin Botunu Onaylarsınız.", true)
        .addField("> **u!botreddet**", "Birinin Botunu Reddedersiniz.", true)
        .setTimestamp()
		.setFooter("Sayfa 8")
      .setAuthor(`BotList Menüsü`, message.author.avatarURL({dynamic: true, size: 1024 })),
      new MessageEmbed()
                .setColor("BLUE")
          .addField("> **u!ticket-aç**","Kapatılan Ticket'ınızı Geri Açarsınız.", true)
          .addField("> **u!ticket-kanal**","Ticket Mesajının Gideceği Kanalı Ayarlarsınız.", true)
          .addField("> **u!ticket-kapat**", "Ticket'ınızı Kapatırsınız.", true)
          .addField("> **u!ticket-mesaj**", "Ticket Mesajını Ticket Kanalına Gönderirsiniz.", true)
          .addField("> **u!ticket-sil**", "Ticket'ınızı Kapatırsınız.", true)
          
          .setTimestamp()
		  .setFooter("Sayfa 9")
      .setAuthor(`Ticket Menüsü`, message.author.avatarURL({dynamic: true, size: 1024 })),
      new MessageEmbed()
                  .setColor("BLUE")
                  .setDescription("> **Seviye sistemi geçici bir süreliğine kapalıdır.**")
            //.addField("> **u!rank**","Seviyenize Bakarsınız.", true)
            //.addField("> **u!seviyesistemi**","Seviye Sistemini Açarsınız.", true)                        
            .setTimestamp()
			.setFooter("Sayfa 10")
      .setAuthor(`Seviye Menüsü`, message.author.avatarURL({dynamic: true, size: 1024 })) 
    ]
    
})
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};
 
exports.help = {
  name: 'yardım'
};
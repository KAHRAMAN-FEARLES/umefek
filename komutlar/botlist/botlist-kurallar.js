const discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = (client, message, args) => {
  
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')


const embed = new discord.MessageEmbed()
.setColor("BLUE")

.setTitle(`${client.user.username}`)

.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

.setDescription(`> **Bot Ekleme Kuralları**

**1** - Botunuz 10 Sunucuda Olmalı ve 3000 Kişi Olmalıdır.

**2** - Botunuzda En Az 10 komut bulunmalıdır.(Müzik Botları Hariç)

**3** - Botunuzda En Fazla 3 Hatalı Komut Bulunmalıdır.

**4** - Renkli, NSFW ve Hızlı Haraket Eden Emojiler Bulunmamalıdır.

**5** - sa-as , Küfür Koruma Gibi Komutlar Ayarlamalı Olmalıdır.

**6** - NSFW Komutu Varsa Sadece NSFW Seçili Kanallarda Kullanılmalıdır.

**7** - Sunucu Patlatma Botu Olmamalıdır.

**8** - Yasaklı Kodlar Bulunmamalıdır.

> **Yasaklı Komutlar**

**1** - Disko Rol

**2** - Ailemiz,Top10,Top5 vs.

**3** - Herkese Rol Ver/ Herkesden Rol Al

**4** - Herkesi Banla/Kickle

**5** - DM Duyuru
`)
message.channel.send(embed)

};
exports.conf = {
  enabled: true,
  guildOnly: true, //Bu sadece sunucularda kullanılabilir ayarıdır true yazarsanız dm de kullanamazsınız false yazarsanız kullanabilirsiniz
  aliases: ["botlistkurallar"] 
};

exports.help = {
  name: 'botlist-kurallar',
  description: 'komut açıklama',
  usage: ''
};
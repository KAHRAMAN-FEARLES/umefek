require("./inlineReply.js");
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
require("moment-duration-format");
const db = require("croxydb");
const ms = require("ms");
client.ayarlar = ayarlar;
require("./eventLoader.js")(client);

var prefix = ayarlar.token;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

//BOT KOMUTLARI

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/bot/", (err, files) => {
  if (err) console.error(err);
  log(`BOT | ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/bot/${f}`);
    log(`BOT | Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/bot/${command}`)];
      let cmd = require(`./komutlar/bot/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/bot/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/bot/${command}`)];
      let cmd = require(`./komutlar/bot/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

//BOTLIST KOMUTLARI

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/botlist/", (err, files) => {
  if (err) console.error(err);
  log(`BOTLIST | ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/botlist/${f}`);
    log(`BOTLIST | Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/botlist/${command}`)];
      let cmd = require(`./komutlar/botlist/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/botlist/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/botlist/${command}`)];
      let cmd = require(`./komutlar/botlist/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

//EĞLENCE KOMUTLARI

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/eglence/", (err, files) => {
  if (err) console.error(err);
  log(`EĞLENCE | ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/eglence/${f}`);
    log(`EĞLENCE | Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/eglence/${command}`)];
      let cmd = require(`./komutlar/eglence/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/eglence/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/eglence/${command}`)];
      let cmd = require(`./komutlar/eglence/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

//GENEL KOMUTLARI

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/genel/", (err, files) => {
  if (err) console.error(err);
  log(`GENEL | ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/genel/${f}`);
    log(`GENEL | Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/genel/${command}`)];
      let cmd = require(`./komutlar/genel/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/genel/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/genel/${command}`)];
      let cmd = require(`./komutlar/genel/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

//LOGO KOMUTLARI

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/logo/", (err, files) => {
  if (err) console.error(err);
  log(`LOGO | ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/logo/${f}`);
    log(`LOGO | Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/logo/${command}`)];
      let cmd = require(`./komutlar/logo/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/logo/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/logo/${command}`)];
      let cmd = require(`./komutlar/logo/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

//MODERASYON KOMUTLARI

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/moderasyon/", (err, files) => {
  if (err) console.error(err);
  log(`MODERASYON | ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/moderasyon/${f}`);
    log(`MODERASYON | Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/moderasyon/${command}`)];
      let cmd = require(`./komutlar/moderasyon/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/moderasyon/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/moderasyon/${command}`)];
      let cmd = require(`./komutlar/moderasyon/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

//TICKET KOMUTLARI

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/ticket/", (err, files) => {
  if (err) console.error(err);
  log(`TICKET | ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/ticket/${f}`);
    log(`TICKET | Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/ticket/${command}`)];
      let cmd = require(`./komutlar/ticket/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/ticket/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/ticket/${command}`)];
      let cmd = require(`./komutlar/ticket/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

//YARDIM KOMUTU

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/yardim/", (err, files) => {
  if (err) console.error(err);
  log(`YARDIM | ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/yardim/${f}`);
    log(`YARDIM | Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/yardim/${command}`)];
      let cmd = require(`./komutlar/yardim/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/yardim/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/yardim/${command}`)];
      let cmd = require(`./komutlar/yardim/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};


client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 4;
  if (message.author.id === ayarlar.sahip) permlvl = 5;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

//OTO TAG
client.on("guildMemberAdd", async member => {
  let tag = await db.fetch(`tag_${member.guild.id}`);
  let tagyazi;
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`);
  else tagyazi = member.setNickname(`${tag} | ${member.user.username}`);
});

//sa-as

client.on("message", async msg => {
  const gereksiz = await db.fetch(`saas_${msg.guild.id}`);
  if (gereksiz === "acik") {
    if (
      msg.content.toLowerCase() == "selam" ||
      msg.content.toLowerCase() == "selamun aleyküm" ||
      msg.content.toLowerCase() == "s.a" ||
      msg.content.toLowerCase() == "sea" ||
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "selam" ||
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "sa"
    )
      return msg.reply("**Aleyküm selam hoşgeldin!**");
  } else if (gereksiz === "acikdegil") {
  }
  if (!gereksiz) return;
});

//Etiket Prefix

client.on("message", async msg => {
  const egehanss = new Discord.MessageEmbed()
    .setTitle(`Birisi ${client.user.username} mi dedi?`)
    .setDescription(`Prefixim: ${ayarlar.prefix}\n [Davet Et](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL());
  if (msg.content == `<@!818825133581926420>`)
    return msg.channel.send(egehanss);
});

//Küfür engel
client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  let i = await db.get(`küfürT_${msg.guild.id}`);
  if (i == "acik") {
    const kelime = [
      "amk",
      "aq",
      "p!ç",
      "pç",
      "piç",
      "velet",
      "göt",
      "amcık",
      "sikiyim",
      "sik",
      "vld",
      "orospu",
      "orosbu",
      "or",
      "orç",
      "amına",
      "pipi",
      "annesiz",
      "amık",
      "sg",
      "a-q",
      "a--q",
      "a.q",
      "a+q",
      "anan",
      "orusbu",
      "pezevenk"
    ];
    if (kelime.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();
          return msg.channel
            .send(
              `<@${msg.author.id}> **Kanka Naber? Sanırsam Küfür Ediyorsun Fakat Ben Buradayken Bunu Yapamazsınn :))**`
            )
            .then(msg => msg.delete(25000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

client.on("messageUpdate", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  let i = await db.get(`küfürT_${msg.guild.id}`);
  if (i == "acik") {
    const kelime = [
      "amk",
      "aq",
      "p!ç",
      "pç",
      "piç",
      "velet",
      "göt",
      "amcık",
      "sikiyim",
      "sik",
      "vld",
      "amına",
      "pipi",
      "annesiz",
      "amık",
      "sg",
      "a-q",
      "a--q",
      "a.q",
      "a+q",
      "anan",
      "orusbu",
      "pezevenk"
    ];
    if (kelime.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();
          return msg.channel
            .send(
              `<@${msg.author.id}> **Kanka Naber? Sanırsam Küfür Ediyorsun Fakat Ben Buradayken Bunu Yapamazsınn :))**`
            )
            .then(msg => msg.delete(25000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

//Reklam engel
client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  let i = await db.get(`reklam_${msg.guild.id}`);
  if (i == "acik") {
    const kelime = ["https://", ".net", ".com", ".gov", "http://", ".tc"];
    if (kelime.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();
          return msg.channel
            .send(
              `<@${msg.author.id}> **Kanka Naber? Sanırsam Reklam Yapıyorsun Fakat Ben Buradayken Bunu Yapamazsınn :))**`
            )
            .then(msg => msg.delete(25000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

//caps enqel

client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 4) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            if(!msg.content == channel) {
            msg.delete();
            return msg.channel
              .send(
                `<@${msg.author.id}> **Kanka Naber? Sanırsam Fazlaca Büyük Harfle Yazıyorsun Ben Buradayken Bunu Yapamazsınn :))**`
              )
              .then(m => m.delete(25000));
            }
          }
        }
      }
    }
  }
});

//SPAM ENGEL

const dctrat = require("croxydb");

var authors = [];
var warned = [];

var messageLog = [];

client.on("message", async message => {
  const spam = await db.fetch(`spam.${message.guild.id}`);
  if (!spam) return;
  const maxTime = await db.fetch(
    `max.${message.guild.id}.${message.author.id}`
  );
  const timeout = await db.fetch(
    `time.${message.guild.id}.${message.author.id}`
  );
  db.add(`mesaj.${message.guild.id}.${message.author.id}`, 1);
  if (timeout) {
    const sayı = await db.fetch(
      `mesaj.${message.guild.id}.${message.author.id}`
    );
    if (Date.now() < maxTime) {
      if (message.member.hasPermission("BAN_MEMBERS")) return;
      message.channel
        .send(
          `<@${message.author.id}> **Kanka Naber? Sanırsam Spam Yapıyorsun Ben Buradayken Bunu Yapamazsınn :))**`
        )
        .then(msg => msg.delete({ timeout: 25000 }));
      return message.delete();
    }
  } else {
    db.set(`time.${message.guild.id}.${message.author.id}`, "ok");
    db.set(`max.${message.guild.id}.${message.author.id}`, Date.now() + 3000);
    setTimeout(() => {
      db.delete(`mesaj.${message.guild.id}.${message.author.id}`);
      db.delete(`time.${message.guild.id}.${message.author.id}`);
    }, 500); // default : 500
  }
});

//afk
client.on("message", async msg => {
  if (!msg.guild) return;
  if (msg.content.startsWith(ayarlar.prefix + "afk")) return;

  let afk = msg.mentions.users.first();

  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`);

  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`);
  if (afk) {
    const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`);
    const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`);
    if (msg.content.includes(kisi3)) {
      msg.reply(`Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`);
    }
  }
  if (msg.author.id === kisi) {
    msg.reply(`Afk'lıktan Çıktınız`);
    db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`);
    db.delete(`afkid_${msg.author.id}_${msg.guild.id}`);
    db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`);
    msg.member.setNickname(isim);
  }
});

//-------------------- Mod Log Sistemi --------------------//

client.on("channelCreate", async channel => {
  const c = channel.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${channel.guild.id}`)
  );
  if (!c) return;
  var embed = new Discord.MessageEmbed()
    .addField(
      `Kanal oluşturuldu`,
      ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\nID: ${channel.id}`
    )
    .setTimestamp()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
  c.send(embed);
});

client.on("guildMemberBoost", async (member, guild) => {
  const c = member.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${member.guild.id}`)
  );
   if (!c) return;
    var embed = new Discord.MessageEmbed()
      .addField(
        `WUHU, BOOST BASILDI!`,
        ` Boost Basan: \`${member}\`\n Sunucu Boost Seviyesi: **${member.guild.premiumTier}/3**\nSunucu Boost Sayısı: **${member.guild.premiumSubscriptionCount}**`
      )
      .setTimestamp()
      .setColor("BLUE")
      .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    c.send(embed);

});

client.on("guildMemberUnboost", async (member, guild) => {
  const c = member.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${member.guild.id}`)
  );
   if (!c) return;
    var embed = new Discord.MessageEmbed()
      .addField(
        `Bir boost geri çekildi.`,
        ` Boost'u Çeken: \`${member}\`\n Sunucu Boost Seviyesi: **${member.guild.premiumTier}/3**\nSunucu Boost Sayısı: **${member.guild.premiumSubscriptionCount}**`
      )
      .setTimestamp()
      .setColor("BLUE")
      .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    c.send(embed);

});

client.on("channelDelete", async channel => {
  const c = channel.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${channel.guild.id}`)
  );
  if (!c) return;
  let embed = new Discord.MessageEmbed()
    .addField(
      `Kanal silindi`,
      ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\nID: ${channel.id}`
    )
    .setTimestamp()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

  c.send(embed);
});

client.on("channelNameUpdate", async channel => {
  const c = channel.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${channel.guild.id}`)
  );
  if (!c) return;
  var embed = new Discord.MessageEmbed()
    .addField(
      `Kanal İsmi değiştirildi`,
      ` Yeni İsmi: \`${channel.name}\`\nID: ${channel.id}`
    )
    .setTimestamp()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
  c.send(embed);
});

client.on("emojiCreate", emoji => {
  const c = emoji.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${emoji.guild.id}`)
  );
  if (!c) return;

  let embed = new Discord.MessageEmbed()
    .addField(
      `Emoji oluşturuldu`,
      ` İsmi: \`${emoji.name}\`\n GIF?: **${emoji.animated}**\nID: ${emoji.id}`
    )
    .setTimestamp()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

  c.send(embed);
});
client.on("emojiDelete", emoji => {
  const c = emoji.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${emoji.guild.id}`)
  );
  if (!c) return;

  let embed = new Discord.MessageEmbed()
    .addField(
      `Emoji silindi`,
      ` İsmi: \`${emoji.name}\`\n GIF? : **${emoji.animated}**\nID: ${emoji.id}`
    )
    .setTimestamp()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

  c.send(embed);
});
client.on("emojiUpdate", (oldEmoji, newEmoji) => {
  const c = newEmoji.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${newEmoji.guild.id}`)
  );
  if (!c) return;

  let embed = new Discord.MessageEmbed()
    .addField(
      `Emoji güncellendi`,
      ` Eski ismi: \`${oldEmoji.name}\`\n Yeni ismi: \`${newEmoji.name}\`\nID: ${oldEmoji.id}`
    )
    .setTimestamp()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

  c.send(embed);
});

client.on("guildBanAdd", async (guild, user) => {
  const channel = guild.channels.cache.get(
    db.fetch(`narcosmodlog_${guild.id}`)
  );
  if (!channel) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
    .addField(
      `Kullanıcı banlandı`,
      ` İsmi: \`${user.username}\`\n ID: **${
        user.id
      }**\n Sebep: **${entry.reason || "Belirtmedi"}**\n Banlayan: **${
        entry.executor.username
      }#${entry.executor.discriminator}**`
    )
    .setTimestamp()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

  channel.send(embed);
});

client.on("guildBanRemove", async (guild, user) => {
  const channel = guild.channels.cache.get(
    db.fetch(`narcosmodlog_${guild.id}`)
  );
  if (!channel) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
    .addField(
      `Kullanıcının banı açıldı`,
      ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Banı Kaldıran: **${entry.executor.username}#${entry.executor.discriminator}**`
    )
    .setTimestamp()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

  channel.send(embed);
});

function extension(attachment) {

    let imageLink = attachment.split('.');

    let typeOfImage = imageLink[imageLink.length - 1];

    let image = /(jpg|jpeg|png|gif)/gi.test(typeOfImage);

    if (!image) return '';

    return attachment;

}

client.on("messageDelete", async message => {
  if (message.author.bot) return;

  const channel = message.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${message.guild.id}`)
  );
  if (!channel) return;
  
      let image = message.attachments.size > 0 ? await extension(message.attachments.array()[0].url) : '';

 if (message.attachments.size < 1) {
  
  let embed = new Discord.MessageEmbed()
    .setAuthor(
      `${message.author.username}#${message.author.discriminator}`,
      message.author.avatarURL
    )
    .setTitle("Mesaj silindi")
    .addField(
      `Silinen mesaj : ${message.content}`,
      `Kanal: ${message.channel.name}`
    )
  
    //  .addField(`Kanal:`,`${message.channel.name}`)
    .setTimestamp()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

  channel.send(embed);
 }else {
   if(message.content !== 0) {
   const embeds = new Discord.MessageEmbed()
       .setAuthor(
      `${message.author.username}#${message.author.discriminator}`,
      message.author.avatarURL
    )
    .setTitle("Mesaj silindi")
    .addField(
      `Silinen mesaj : ${message.content}`,
      `Kanal: ${message.channel.name}`
    )
  
    //  .addField(`Kanal:`,`${message.channel.name}`)
    .setTimestamp()
    .setColor("BLUE")
   .setImage(image)
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

  channel.send(embeds);
     }else {
          const embedabim = new Discord.MessageEmbed()
       .setAuthor(
      `${message.author.username}#${message.author.discriminator}`,
      message.author.avatarURL
    )
    .setTitle("Mesaj silindi")
    .setDescription(
      `Kanal: ${message.channel.name}`
    )
  
    //  .addField(`Kanal:`,`${message.channel.name}`)
    .setTimestamp()
    .setColor("BLUE")
   .setImage(image)
   .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

  channel.send(embedabim);
     }
 }
   
});

client.on("guildMemberRemove", member => {
    const channel = member.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${member.guild.id}`)
  );
  if (!channel) return;
  
    var user = member.user;
  var tarih = "";
  if (moment(user.createdAt).format("MM") === "01") {
    var tarih = `${moment(user.createdAt).format("DD")} Ocak ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "02") {
    var tarih = `${moment(user.createdAt).format("DD")} Şubat ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "03") {
    var tarih = `${moment(user.createdAt).format("DD")} Mart ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "04") {
    var tarih = `${moment(user.createdAt).format("DD")} Nisan ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "05") {
    var tarih = `${moment(user.createdAt).format("DD")} Mayıs ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "06") {
    var tarih = `${moment(user.createdAt).format("DD")} Haziran ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "07") {
    var tarih = `${moment(user.createdAt).format("DD")} Temmuz ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "08") {
    var tarih = `${moment(user.createdAt).format("DD")} Ağustos ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "09") {
    var tarih = `${moment(user.createdAt).format("DD")} Eylül ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "10") {
    var tarih = `${moment(user.createdAt).format("DD")} Ekim ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "11") {
    var tarih = `${moment(user.createdAt).format("DD")} Kasım ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "12") {
    var tarih = `${moment(user.createdAt).format("DD")} Aralık ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }

  var tarih2 = "";
  if (moment(user.joinedAt).format("MM") === "01") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Ocak ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "02") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Şubat ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "03") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Mart ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "04") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Nisan ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "05") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Mayıs ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "06") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Haziran ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "07") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Temmuz ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "08") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Ağustos ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "09") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Eylül ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "10") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Ekim ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "11") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Kasım ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "12") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Aralık ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  
  const embed = new Discord.MessageEmbed()
  .setTitle("Bir Üye Ayrıldı")
  .setColor("BLUE")
  .addField("Üyenin İsmi", member.user.username)
  .addField("Üyenin Etiketi", member.user.discriminator)
  .addField("Discord'a Kayıt Olduğu Tarih", tarih)
  .addField("Sunucuya Katıldığı Tarih", tarih2)
  .setThumbnail(member.user.avatarURL({dynamic: true}))
  .setTimestamp()
  .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
  channel.send(embed)
  
})



client.on("guildMemberAdd", member => {
    const channel = member.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${member.guild.id}`)
  );
  if (!channel) return;
  
    var user = member.user;
  var tarih = "";
  if (moment(user.createdAt).format("MM") === "01") {
    var tarih = `${moment(user.createdAt).format("DD")} Ocak ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "02") {
    var tarih = `${moment(user.createdAt).format("DD")} Şubat ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "03") {
    var tarih = `${moment(user.createdAt).format("DD")} Mart ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "04") {
    var tarih = `${moment(user.createdAt).format("DD")} Nisan ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "05") {
    var tarih = `${moment(user.createdAt).format("DD")} Mayıs ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "06") {
    var tarih = `${moment(user.createdAt).format("DD")} Haziran ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "07") {
    var tarih = `${moment(user.createdAt).format("DD")} Temmuz ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "08") {
    var tarih = `${moment(user.createdAt).format("DD")} Ağustos ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "09") {
    var tarih = `${moment(user.createdAt).format("DD")} Eylül ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "10") {
    var tarih = `${moment(user.createdAt).format("DD")} Ekim ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "11") {
    var tarih = `${moment(user.createdAt).format("DD")} Kasım ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.createdAt).format("MM") === "12") {
    var tarih = `${moment(user.createdAt).format("DD")} Aralık ${moment(
      user.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }

  var tarih2 = "";
  if (moment(user.joinedAt).format("MM") === "01") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Ocak ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "02") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Şubat ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "03") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Mart ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "04") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Nisan ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "05") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Mayıs ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "06") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Haziran ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "07") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Temmuz ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "08") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Ağustos ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "09") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Eylül ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "10") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Ekim ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "11") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Kasım ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(user.joinedAt).format("MM") === "12") {
    var tarih2 = `${moment(user.joinedAt).format("DD")} Aralık ${moment(
      user.joinedAt
    ).format("YYYY HH:mm:ss")} `;
  }
  
  const embed = new Discord.MessageEmbed()
  .setTitle("Bir Üye Katıldı")
  .setColor("BLUE")
  .addField("Üyenin İsmi", member.user.username)
  .addField("Üyenin Etiketi", member.user.discriminator)
  .addField("Discord'a Kayıt Olduğu Tarih", tarih)
  .addField("Sunucuya Katıldığı Tarih", tarih2)
  .setThumbnail(member.user.avatarURL({dynamic: true}))
  .setTimestamp()
  .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
  channel.send(embed)
  
})

client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (oldMsg.author.bot) return;

  // if (!logA[oldMsg.guild.id]) return;

  var user = oldMsg.author;

  //var kanal = oldMsg.guild.channels.get(logA[oldMsg.guild.id].log);

  if (db.has(`narcosmodlog_${oldMsg.guild.id}`) === false) return;

  var kanal = db.fetch(`narcosmodlog_${oldMsg.guild.id}`);
  if (!kanal) return;

  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
      .setAuthor(
      `${oldMsg.author.username}#${oldMsg.author.discriminator}`,
      oldMsg.author.avatarURL
    )
    .setTitle(`Mesaj Düzenlendi`)
    .addField("Eski Mesaj", "```" + oldMsg.content + "```")
    .addField("Yeni Mesaj", "```" + newMsg.content + "```")
    .addField("Kanal", `${oldMsg.channel.name}`)
    .setThumbnail(oldMsg.author.avatarURL)
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
  .setTimestamp();
  client.channels.cache.get(kanal).send(embed);
});

client.on("roleUpdate", role => {
  // if (!logA[role.guild.id]) return;

  if (db.has(`narcosmodlog_${role.guild.id}`) === false) return;

  var kanal = role.guild.channels.cache.get(db.fetch(`narcosmodlog_${role.guild.id}`));
  if (!kanal) return;

  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setTitle(`Rol Düzenlendi`, role.guild.iconURL)
    .addField(`Rol : ${role.name}`, `Rol renk kodu : ${role.hexColor}`, true)
    .addField("Rol Rengi Kodu", `${role.hexColor}`, true);
  kanal.send(embed);
});

client.on("roleCreate", async role => {
  const channel = role.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${role.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .addField(`Rol oluşturuldu`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)
    .setTimestamp()
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setColor("BLUE")
    .addField("Rol renk kodu : ", `${role.hexColor}`)
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

  channel.send(embed);
});

client.on("roleDelete", async role => {
  const channel = role.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${role.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .addField(`Rol silindi`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)
    .setTimestamp()
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setColor("BLUE")
    .addField("Rol renk kodu : ", `${role.hexColor}`)
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

  channel.send(embed);
});

client.on("guildMemberRoleAdd", async (member, role) => {
  const channel = role.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${role.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .addField(`Bir kullanıcıya rol verildi`, ` Verilen Kişi: \`${member}\`\n Verilen Rol: ${role.name}`)
    .setTimestamp()
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

  channel.send(embed);
});

client.on("guildMemberRoleRemove", async (member, role) => {
  const channel = role.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${role.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .addField(`Bir kullanıcıdan rol alındı`, ` Alınan kişi: \`${member}\`\n Alınan Rol: ${role.name}`)
    .setTimestamp()
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

  channel.send(embed);
});

client.on("voiceChannelJoin", async (member, channel) => {
  const c = channel.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${channel.guild.id}`)
  );
  if (!c) return;

  let embed = new Discord.MessageEmbed()
    .addField(`Bir kullanıcı ses kanalına katıldı`, ` Giren kişi: \`${member}\`\n Girdiği Kanal: ${channel.name}`)
    .setTimestamp()
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

  c.send(embed);
});

client.on("voiceChannelRemove", async (member, channel) => {
  const c = channel.guild.channels.cache.get(
    db.fetch(`narcosmodlog_${channel.guild.id}`)
  );
  if (!c) return;

  let embed = new Discord.MessageEmbed()
    .addField(`Bir kullanıcı ses kanalından ayrıldı`, ` Ayrılan kişi: \`${member}\`\n Ayrıldığı Kanal: ${channel.name}`)
    .setTimestamp()
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

  c.send(embed);
});

//Foto chat

client.on("message", m => {
  let chattt = db.fetch(`fotochat_${m.guild.id}`);
  if(!chattt) return;
  if (m.channel.id !== chattt) {
    //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (!m.member.hasPermission("ADMINISTRATOR")) {
    if (m.attachments.size < 1) {
      m.delete()
      m.channel.send("Bu kanalda sadece fotoğraf paylaşılabilir.").then(m => m.delete({timeout: 3900}));
    }
  }
});
//Süreli mesaj

// client.on('ready', () => {
//   setInterval(function() {
// let taner = client.channels.cache.get("796638076758654976") //MESAJIN GİDECEĞİ KANAL ID
//      if(taner){
// taner.send(new Discord.MessageEmbed()
// .setThumbnail(`${taner.guild.iconURL()}`)
// .setTitle(`${taner.guild.name}`)
// .addField("UmutICE", "[TIKLA!](https://www.youtube.com/channel/UCAwSQo7RKa_UaePjKUkOTsQ)")
// .addField("YTuna", "[TIKLA!](https://www.youtube.com/channel/UCchXk9xkk3G016flHyGad8w)")
// .addField("ArdaICE", "[TIKLA!](https://www.youtube.com/channel/UCohgirK8TNj9pH8mGxI0CUQ)")) //Mesajınız
//      }
//     }, 3600000) //1000 = 1sn
// })//codare

//BOTU SESE SOKMA 2021
//-------------------------------------------------------//
//Rol Koruma
/*client.on("roleDelete", async role => {
  const entry = await role.guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());
if (entry.executor.id == client.user.id) return;
role.guild.roles.create({ data: {
   name: role.name,
   color: role.color,
   hoist: role.hoist,
   permissions: role.permissions,
   mentionable: role.mentionable,
   position: role.position
}, reason: 'Silinen Rol Açıldı.'})
})
client.on("roleCreate", async role => {
const entry = await role.guild.fetchAuditLogs({ type: "ROLE_CREATE" }).then(audit => audit.entries.first());
if (entry.executor.id == client.user.id) return;
role.delete()
}) 
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*BOT KODLAMA BÖLÜMÜ

.addField("Botu Sunucuna Ekle", "[TIKLA!](Bot  Linki)")
.addField("Bota Oy Ver", "[TIKLA!](Bot Oy Linki)")
.addField("Destek Sunucumuza Katıl", "[TIKLA!](Destek Sunucusu  Linki)")
.addField("Botun Sitesini Keşfet", "[TIKLA!](Botun Sitesi Yoksa Burayı Silebilirsiniz)")




*/

//Sahibe Cevap
client.on("message", async msg => {
  let i = await db.get(`sahipmesaj_${msg.guild.id}`);
  if (i == "acik") {
    if (msg.author.id == "797051134187405323") {
      msg.channel.send("Sahibim Sohbete Katıldı, Herkez Selam Versin!");
    }
  }
  if (!i) return;
});

//Hıhıhıh seviye system

//SEVİYE BAKIM

/////////////////////// OTOROL /////////////////////////
client.on("guildMemberAdd", member => {
  let rol = db.fetch(`autoRole_${member.guild.id}`);
  if (!rol) return;
  let kanal = db.fetch(`autoRoleChannel_${member.guild.id}`);
  if (!kanal) return;

  member.roles.add(member.guild.roles.cache.get(rol));
  let embed = new Discord.MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addField(
      `**Bir Üye Katıldı!**`,
      `**${member} Sunucuya Katıldı.**\n**<@&${rol}> Rolü Verildi.**`
    )
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL());
  member.guild.channels.cache.get(kanal).send(embed);
});
//////////////////////// OTOROL SON //////////////////////////

//-----------------------Sayaç-----------------------\\

client.on("guildMemberAdd", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = client.channels.cache.get(skanal9);
  if (!skanal31) return;
  const geldi = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addField(
      `**Bir Üye Katıldı!**`,
      `**${member} Sunucuya Katıldı.**\n**${sayac} Kişi Olmamıza ${sayac -
        member.guild.memberCount} Kişi Kaldı.**\n**Toplam ${
        member.guild.memberCount
      } Kişiyiz.**`
    );
  if(member.guild.memberCount == sayac) {
    skanal31.send(":tada: :tada: **İnanılmaz! Sunucu hedefe ulaştı! Sayaç sıfırlandı.** :tada: :tada:")
    db.delete(`sayac_${member.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
  }else{
    skanal31.send(geldi);
  }
  
});

client.on("guildMemberRemove", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = client.channels.cache.get(skanal9);
  if (!skanal31) return;
  const gitti = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addField(
      `**Bir Üye Ayrıldı!**`,
      `**${member} Sunucudan Ayrıldı.**\n**${sayac} Kişi Olmamıza ${sayac -
        member.guild.memberCount} Kişi Kaldı.**\n**Toplam ${
        member.guild.memberCount
      } Kişiyiz.**`
    );
  skanal31.send(gitti);
});

//-----------------------Sayaç Son-----------------------\\

//-----------------------Hg-Bb-----------------------\\

client.on("guildMemberAdd", async member => {
  let skanal9 = await db.fetch(`gelenGiden_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = client.channels.cache.get(skanal9);
  if (!skanal31) return;
  const geldi = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addField(
      `**Bir Üye Katıldı!**`,
      `**${member} Sunucuya Katıldı.**\n**Toplam ${member.guild.memberCount} Kişiyiz.**`
    );
  skanal31.send(geldi);
});

client.on("guildMemberRemove", async member => {
  let skanal9 = await db.fetch(`gelenGiden_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = client.channels.cache.get(skanal9);
  if (!skanal31) return;
  const gitti = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addField(
      `**Bir Üye Ayrıldı!**`,
      `**${member} Sunucudan Ayrıldı.**\n**Toplam ${member.guild.memberCount} Kişiyiz.**`
    );
  skanal31.send(gitti);
});

//-----------------------Hg-Bb Son-----------------------\\

//-----------------------Süreli-Hg------------------------\\

client.on("guildMemberAdd", async member => {
  let skanal9 = await db.fetch(`sureliGelenGiden_${member.guild.id}`);
  let smesaj = await db.fetch(`sureliGelenGidenMesaj_${member.guild.id}`);
  if (!skanal9) return;
  if(!smesaj) smesaj = `Sunucuya Hoşgeldin ${member}, Kuralları Okuyup Hemen Sohbete Başla!`;
  const skanal31 = client.channels.cache.get(skanal9);
  if (!skanal31) return;
  skanal31.send(smesaj.replace("-uye-", `<@!${member.id}>`).replace("-uyeisim-", `${member.user.username}`).replace("-sunucuad-", `${member.guild.name}`).replace("-uyesayi-", `${member.guild.memberCount}`)).then(m => m.delete({timeout: 6000}));

  
});

//-----------------------Süreli-Hg Son-----------------------\\

/////////////////////// OTOTAG /////////////////////////
client.on("guildMemberAdd", member => {
  let tag = db.fetch(`autoTag_${member.guild.id}`);
  if (!tag) return;
  let kanal = db.fetch(`autoTagChannel_${member.guild.id}`);
  if (!kanal) return;

  let embed = new Discord.MessageEmbed()
  .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addField(
      `**Bir Üye Katıldı!**`,
      `**${member} Sunucuya Katıldı.**\n** ${tag} Tagı Verildi.**`
    )
    .setColor("BLUE");
  member.guild.channels.cache.get(kanal).send(embed);
  member.setNickname(`${tag} ${member.user.username}`);
});
//////////////////////// OTOTAG SON //////////////////////////

//DISCORD API ERROR
// client.get("/foo", (req, res, next) => {
//   const foo = JSON.parse(req.body.jsonString);
// });
// process.on("unhandledRejection", (reason, promise) => {
// });

//-------------------- Mute Sistemi ----------------------------//
////DATABASE
const qdb = require('croxydb');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const sunucuadapter = new FileSync('./database/systems.json')

const sdb = low(sunucuadapter)

  sdb.defaults({mute: [], ban: [], kufurEngel: [], autorole: [], reklamEngel: [], security: [], counter: []})
  .write()

  sdb.read()
  
////////DATABASE-UPDATER
/*
client.on("message", async msg => {
  if(!msg.guild) return;
  
  db.add(`mesajsayi_${msg.author.id}`, 1);
});
*/
setInterval(function(){  
  sdb.read()
 },1000);


 client.on('ready', async () => {
  client.guilds.cache.forEach(async guild => {
  guild.members.cache.forEach(async member => {
  
    sdb.read()
    var muteverisi = sdb.get('mute').find({guild: guild.id, user: member.id}).value()
  
    if(muteverisi) {
      var mutebitiszamani = muteverisi.finishtime
      var mutekanali = muteverisi.channel
    } else {
      var mutebitiszamani = null;
      var mutekanali = null;
    }
  const ainterval = setInterval(async function(){
    sdb.read()
  if(mutebitiszamani && mutebitiszamani !== null && mutebitiszamani !== "INFINITY") {
    if(mutebitiszamani <= Date.now()) {
      clearInterval(ainterval)
      var muterole1 = qdb.fetch(`muteroluid_${guild.id}`);
      var muterole2 = guild.roles.cache.find(r => r.id === muterole1);
      if(member.roles.cache.has(muterole2.id)) await member.roles.remove(muterole2.id);
      var mutekanali2 = guild.channels.cache.find(c => c.id === mutekanali);
      if(mutekanali2) mutekanali2.send(`${member} Susturulması Açıldı!`)
      sdb.get('mute').remove(sdb.get('mute').find({guild: guild.id, user: member.id}).value()).write()   
    }
  }
  }, 6000)
      })
    })
  });
///////////////////////eklendim atıldım

client.on("guildDelete", guild => {
  let Crewembed = new Discord.MessageEmbed()

    .setColor("BLUE")
    .setTitle(" ATILDIM !")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
;

  client.channels.cache.get("846721063634993192").send(Crewembed);
});

client.on("guildCreate", guild => {
  let Crewembed = new Discord.MessageEmbed()

    .setColor("BLUE")
    .setTitle("EKLENDİM !")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())

    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.cache.get("846721063634993192").send(Crewembed);
});

// menüsü için küçük bişe hıhı
const disbut = require('discord-buttons')(client);

client.on('message', async (message) => {
  if (message.content.startsWith('u!davet')) {
      let button = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Davet Et')
      .setURL('https://wwwdavet.umefek.tk/') 

      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Oy Ver') 
      .setURL('https://www.umefek.tk/oyver')
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Site') 
      .setURL('https://www.umefek.tk/')
      let button4 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Destek Sunucusu') 
      .setURL('https://discord.gg/Z3XhxkbVTK')

      message.channel.send("**Hangi linki istiyorsanız o butona basınız.**", {
          buttons:[
              button,button2, button3, button4
          ]
      })
      await button.defer();

  };

});

//akinatör ab
const emojis = ["👍", "👎", "❔", "🤔", "🙄", "❌"];
const isPlaying = new Set();
const { Client, MessageEmbed } = require("discord.js");
const { Aki } = require("aki-api");



client.on("message", async message => {
    if (message.author.bot || !message.guild) return;

    if (!message.content.startsWith("u!akinatör")) return;

    if (isPlaying.has(message.author.id)) {
      return message.channel.send(":x: Oyun zaten başladı.");
    }

    isPlaying.add(message.author.id);

    const aki = new Aki("tr"); // diller: https://github.com/jgoralcz/aki-api

    await aki.start();

    const msg = await message.channel.send(new MessageEmbed()
    .setTitle(`${aki.currentStep + 1} Numaralı Soruyu Soruyorum.`)
      .setColor("BLUE")
      .setFooter("UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
      .setDescription(`Soru: **${aki.question}**\n${aki.answers.map((an, i) => `${an} | ${emojis[i]}`).join("\n")}`));

    for (const emoji of emojis) await msg.react(emoji);

    const collector = msg.createReactionCollector((reaction, user) => emojis.includes(reaction.emoji.name) && user.id == message.author.id, {
      time: 60000 * 6
    });

    collector
      .on("end", () => isPlaying.delete(message.author.id))
      .on("collect", async ({
        emoji,
        users
      }) => {
        users.remove(message.author).catch(() => null);

        if (emoji.name == "❌") return collector.stop();

        await aki.step(emojis.indexOf(emoji.name));

        if (aki.progress >= 70 || aki.currentStep >= 78) {

          await aki.win();

          collector.stop();

          message.channel.send(new MessageEmbed()
            .setTitle(`${message.author.username}, Karakterin bu mu?`)
            .setDescription(`**${aki.answers[0].name}**\n${aki.answers[0].description}\n\nLütfen doğruysa **e** yanlışsa **h** yaz.\n\n**NOT: Eğer içinde E, EVET, H, HAYIR içeren cümleler kurarsan bot otomatik olarak evet/hayır cevabını alır.**`)
            .setImage(aki.answers[0].absolute_picture_path)
            .setColor("BLUE")
            .setFooter("UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()));

          const filter = m => /(evet|hayır|e|h)/i.test(m.content) && m.author.id == message.author.id;

          message.channel.awaitMessages(filter, {
              max: 1,
              time: 30000,
              errors: ["time"]
            })
            .then(collected => {
              const isWinner = /evet|e/i.test(collected.first().content);
              message.channel.send(new MessageEmbed()
                .setTitle(isWinner ? "Harika! Bir kez daha doğru tahmin." : "Oh, sanırsam sen kazandın.")
                .setColor("BLUE")
                .setFooter("UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()));
            }).catch(() => null);
        
        } else {
          msg.edit(new MessageEmbed()
            .setTitle(`${aki.currentStep + 1} Numaralı Soruyu Soruyorum.`)
            .setColor("BLUE")
            .setFooter("UMEF-EK / Discord'da Yeni Devrim! .d")
            .setDescription(`Soru: **${aki.question}**\n${aki.answers.map((an, i) => `${an} | ${emojis[i]}`).join("\n")}`));
        }
      });
  })

  //OTO CEVAP

  client.on("message", async message => {
    if (message.author.bot) return;
     let yazılar = db.fetch(`${message.guild.id}.otocevap.yazılar`)
     let cevaplar = db.fetch(`${message.guild.id}.otocevap.cevaplar`)
    var efe = ""
    let sunucuadı = message.guild.name
    let üye = message.author.tag
    let üyesayı = message.guild.memberCount
    let etiket = `<@${message.author.id}>`
        for (var i = 0; i < (db.fetch(`${message.guild.id}.otocevap.yazılar`) ? db.fetch(`${message.guild.id}.otocevap.yazılar`).length : 0); i++) {
      if (message.content.toLowerCase() == yazılar[i].toLowerCase()) {
          efe += `${cevaplar[i].replace("{sunucuadı}", `${sunucuadı}`).replace("{üyesayı}", `${üyesayı}`).replace("{etiket}", `${etiket}`).replace("{üye}", `${üye}`)}`
          message.channel.send(`${efe}`)
      }
  }
  })

//bot sunucuya girince kanal açıp bilgilendirme

client.on('guildCreate', guild => {
  if(guild.me.hasPermission('MANAGE_CHANNELS')) {
    guild.channels.create(client.user.username, { type: 'text' }).then(channel => {
      return channel.send(new Discord.MessageEmbed() 
      .setColor("BLUE")
      .setFooter("UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
      .setDescription(`
      **● ▬▬▬▬▬▬▬▬【 Selamlar! 】▬▬▬▬▬▬▬▬▬ ●**
      
      **● Benim adım UMEF-EK. Beni sunucuna eklediğin için teşekkür ederim :) Sunucunu koruyabilir, sunucundaki üyeleri eğlendirebilir ve daha bir çok şeyi yapabilirim. Hepsi sizin için ❤**
      
      **● Şu Anki İstatistiklerim: Toplam \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\` Kullanıcı ve \`${client.guilds.cache.size.toLocaleString()}\` Sunucuya Hizmet Veriyorum.**
      **● Prefixim: \`u!\`**
      
      **● ▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬ ●**
      
      **● Yardım Menüsü İçin: \`u!yardım\`**
      **● İstatistiklerim İçin: \`u!istatistik\`**
      
      **● ▬▬▬▬▬▬▬【 Bağlantılar 】▬▬▬▬▬▬▬▬ ●**
      
      **● -** [**Botu Ekle**](https://www.umefek.tk/davet)
      **● -** [**Oy Ver**](https://www.umefek.tk/oyver)
      **● -** [**Site**](https://www.umefek.tk/)
      **● -** [**Destek Sunucum**](https://discord.gg/Z3XhxkbVTK)
        `)
      );
    });
  };
});

//güncellenen istatistik
client.on("message", async message => {
setTimeout(function (){

const os = require("os")

  const payidarzaman = moment

  .duration(client.uptime)
  .format(" D [gün], H [saat], m [dakika], s [saniye]");
const istatistikler = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
  .addField("**__Ping__**",`<a:maviyildiz:852196007034617876>  Mesaj Gecikmesi: ${new Date().getTime() - message.createdTimestamp} ms\n <a:cevrimici:819837341794435083> Bot Gecikmesi: ${client.ws.ping}ms`, true)
  .addField("**__Kullanıcı Sayısı__** ", `<a:maviyildiz:852196007034617876>  ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("**__Sunucu Sayısı__**", `<a:maviyildiz:852196007034617876>  ${client.guilds.cache.size.toLocaleString()}`, true)
  .addField("**__Kanal Sayısı__**", `<a:maviyildiz:852196007034617876>  ${client.channels.cache.size.toLocaleString()}`, true)
  .addField("**__Aktiflik__**",  `<a:maviyildiz:852196007034617876>  ${payidarzaman}`, true)
  .addField("**__Node.JS Versiyon__**", `<a:maviyildiz:852196007034617876>  ${process.version}`, true)
  .addField("**__Ram Kullanımı__**", `<a:maviyildiz:852196007034617876>  ${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB"}`, true)
  .addField("**__Discord.JS__**", `<a:maviyildiz:852196007034617876>  ${Discord.version}`, true)
  .addField("**__Konum__**", `Türkiye - Turkey :flag_tr:`, true)
  .addField("**__Bot Sahibi__**", `<:developer:824897871106015243> <@!797051134187405323>`, true)
  .addField("**__Geliştirici__**", `<:developer:824897871106015243> <@!797051134187405323> - <@849239215739895810>`, true)


client.channels.cache.get("846721063634993192").send(istatistikler);

}, 3600000)

})

client.login(ayarlar.token);

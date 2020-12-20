const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  
  
  
// 12. SATIRDA 2. ROL VAR
  
//------------------------------------KANALLAR-----------------------------------\\ STG
const tag = "Test"; // TAGINIZ (BAŞA GELECEK) 
  
const kayıtlı = message.guild.roles.find(r => r.id === "764860695925358592"); // ERKEK ROLÜNÜN İDSİ
  
const unregister = message.guild.roles.find(r => r.id === "764860662358474819"); // UNREGİSTER ROLÜNÜN İDSİ
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
  
  
  
  
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
  const log = message.guild.channels.find(c => c.id === "764860429146783758"); // KAYIT KANALININ İDSİ
  const genelchat = message.guild.channels.find(c => c.id === "764860429146783758"); // GENEL SOHBET KANALININ İDİSİ
  const dogrulandi = client.emojis.find(emoji => emoji.name === "tada"); // EMOJİ İSMİ (SADECE İSİM : <> FALAN DEĞİL SADECE İSİM)
  if(!message.member.roles.array().filter(r => r.id === "765127568613441567")[0]) { // KAYIT YAPAN ROLÜN İDSİ
    
//------------------------------------KANALLAR-----------------------------------\\    STG
    



    
//------------------------------------------------ROL-VERME-----------------------------------------------\\     STG
    
    return message.channel.send("Kayıt Yapabilmek İçin `Kayıt Sorumlusu` Rolüne Sahip Değilsiniz.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const stg = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    stg.setNickname(`${tag} ${nick} | ${yas}`)
    stg.addRole(kayıtlı)
    stg.removeRole(unregister)
    stg.setNickname(`${tag} ${nick} | ${yas}`)
    stg.addRole(kayıtlı)
    stg.removeRole(unregister)
    
//------------------------------------------------ROL-VERME-----------------------------------------------\\    STG
    
    
    
    
    
    
//------------------------------------------------MESAJ-----------------------------------------------\\     STG
    
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle(`Kayıt Tamamlandı !`)
    .addField( `Kayıt Eden`, `<@${message.author.id}>`) 
    .addField( `Verilen Rol`, `<@&${kayıtlı.id}>`) 
    .addField( `Alınan Rol`, `<@&${unregister.id}>`)
    .addField( `Yeni İsmin`, `\`${tag} | ${nick} | ${yas}\``) 
    .setFooter(`${message.author.username} Tarafından Kayıt Yapıldı`)
    .setColor("0x277ecd")
    log.send(embed)
    message.react(dogrulandi)
    
        const agla = new Discord.RichEmbed()
        genelchat.send(`<@${stg.user.id}> Aramıza Hoş Geldin, Keyifli Vakitler Geçirmeni Dileriz.`)      

//------------------------------------------------MESAJ-----------------------------------------------\\       STG

  
  
  
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e", "boy", "man"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "",
  usage: ""
};
   
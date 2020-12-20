const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  
  
  
// 12. SATIRDA 2. ROL VAR
  
//------------------------------------KANALLAR-----------------------------------\\ STG
const tag = "ぱ"; // TAGINIZ (BAŞA GELECEK) 
  
const kayıtlı = message.guild.roles.find(r => r.id === "764860695925358592"); // ERKEK ROLÜNÜN İDSİ
  
const unregister = message.guild.roles.find(r => r.id === "764860662358474819"); // UNREGİSTER ROLÜNÜN İDSİ
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
  
  
  
  
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
  const log = message.guild.channels.find(c => c.id === "764860429146783758"); // KAYIT KANALININ İDSİ
  const genelchat = message.guild.channels.find(c => c.id === "759915430835650560"); // GENEL SOHBET KANALININ İDİSİ
  const dogrulandi = client.emojis.find(emoji => emoji.name === ""); // EMOJİ İSMİ (SADECE İSİM : <> FALAN DEĞİL SADECE İSİM)
  if(!message.member.roles.array().filter(r => r.id === "765127568613441567")[0]) { // KAYIT YAPAN ROLÜN İDSİ
    
//------------------------------------KANALLAR-----------------------------------\\    STG
    



    
//------------------------------------------------ROL-VERME-----------------------------------------------\\     STG
    
    return message.channel.send("Kayıt Yapabilmek İçin `Kayıt Sorumlusu` Rolüne Sahip Değilsiniz.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const stg = message.guild.member(member)
    const nick = args[1];
      if(!nick) return message.channel.send("Bir isim girin.")
    stg.setNickname(`${tag} ${nick}`)
    stg.addRole(kayıtlı)
    stg.removeRole(unregister)
    stg.setNickname(`${tag} ${nick}`)
    stg.addRole(kayıtlı)
    stg.removeRole(unregister)
    
//------------------------------------------------ROL-VERME-----------------------------------------------\\    STG
    
    
    
    
    
    
//------------------------------------------------MESAJ-----------------------------------------------\\     STG
    
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle(`<a:680441714673975448:760077418605182987> Kayıt Tamamlandı !`)
    .addField( `<a:iftarrowgif1:762363676320595978> Kayıt Eden`, `<@${message.author.id}>`) 
    .addField( `<a:754864053100478524:764879329233600512> Verilen Rol`, `<@&${kayıtlı.id}>`) 
    .addField( `<a:760182163324534847:764870652154216458> Alınan Rol`, `<@&${unregister.id}>`)
    .addField( `<a:725354785561378896:760181508341366794> Yeni İsmin`, `\`${tag} | ${nick}\``) 
    .setFooter(`<a:756257003688427531:765112105816817724> ${message.author.username} Tarafından Kayıt Yapıldı`)
    .setColor("0xbf3eff")
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
  aliases: ["kız", "k", "woman"],
  permLevel: 0
};
exports.help = {
  name: "kadın",
  description: "",
  usage: ""
};
   
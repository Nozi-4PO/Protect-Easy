const Discord = require('discord.js');
const client = new Discord.Client();
var jeu = [
    `Protéger votre serveur`,
    "https://discord.gg/wx3hBRhwE5",
    "CTG Guard",
    "Created By Nozi",
  ];
let ban1;
let ban2;
let tempban;
let tempsecban;

let antirole = false;
let antichannel = false;
let antiban = false;

let antiroletext;
let antichanneltext;
let antibantext;
 
client.on('ready', () => {
    console.log(`${client.user.username} est lancé !`)
    setInterval(() => {
      const index = Math.floor(Math.random() * (jeu.length - 1) + 1);
      client.user.setActivity(jeu[index]);
  }, 10000);});

//role
client.on('roleUpdate', async (oldRole, newRole) => {
    if(antirole = true) {
      const guild = oldRole.guild;
      const fetchedLogs = await guild.fetchAuditLogs({
          limit: 1,
          type: 'ROLE_UPDATE',
      });
     
      const role_update = fetchedLogs.entries.first();
   
      const { executor, target } = role_update;
   
      const memberuser = guild.member(executor)
   
      memberuser.roles.set([]) 
    } return;
})

client.on('roleCreate', async (role) => {
  if(antirole = true) {
      const guild = role.guild;
    const fetchedLogs = await guild.fetchAuditLogs({
      limit: 1,
      type: 'ROLE_CREATE',
    });
 
    const role_create = fetchedLogs.entries.first();

    const { executor, target } = role_create;
    const memberuser = guild.member(executor)

    memberuser.roles.set([]) 
  } return;

})

client.on('roleDelete', async (role) => {
  if(antirole = true) {
    const guild = role.guild;
    const fetchedLogs = await guild.fetchAuditLogs({
        limit: 1,
        type: 'ROLE_DELETE',
    });
   
    const role_update = fetchedLogs.entries.first();
  
    const { executor, target } = role_update;
  
    const memberuser = guild.member(executor)
  
    memberuser.roles.set([]) 
  } return;
})

//channel
client.on('channelCreate', async (channel) => {
  if(antichannel = true) {
    const guild = channel.guild;
    const fetchedLogs = await guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_CREATE',
    });
   
    const channel_create = fetchedLogs.entries.first();
  
    const { executor, target } = channel_create;
  
    const memberuser = guild.member(executor)
  
    memberuser.roles.set([]) 
  } return;
})

client.on('channelUpdate', async (oldChannel, newChannel) => {
  if(antichannel = true) {
    const guild = oldChannel.guild;
    const fetchedLogs = await guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_UPDATE',
    });
   
    const channel_update = fetchedLogs.entries.first();
  
    const { executor, target } = channel_update;
  
    const memberuser = guild.member(executor)
  
    memberuser.roles.set([]) 
  }
})

client.on('channelDelete', async (channel) => {
  if(antichannel = true) {
    const guild = channel.guild;
    const fetchedLogs = await guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_DELETE',
    });
   
    const channel_delete = fetchedLogs.entries.first();
  
    const { executor, target } = channel_delete;
  
    const memberuser = guild.member(executor)
  
    memberuser.roles.set([]) 
  }
})

//ban
client.on('guildBanAdd', async (guild, user) => {
  if(antiban = true) {
    const fetchedLogs = await guild.fetchAuditLogs({
      limit: 1,
      type: 'MEMBER_BAN_ADD',
    });
 
    const banLog = fetchedLogs.entries.first();

    const { executor, target } = banLog;

    const memberuser = guild.member(executor)

    if(!ban1) {
      ban1 = Date.now();

    } else {
      ban2 = Date.now();
      tempban = ban2-ban1;
      tempsecban = tempban/1000;
   }

    if(tempsec < 3600){
      memberuser.roles.set([])
    }
  }
})

//commandes
client.on('message', message => {

  const memberuser = message.member;
  if(message.channel.type === "dm"){
    return;
  } else {
    if (message.content === '.antirole on') {
      if(message.member.hasPermission('ADMINISTRATOR')){
        message.reply('<:itsok:755009589425995837> **Le mode AntiRole a été activé avec succès** <:itsok:755009589425995837>')
        antirole = true
      } else {
       message.reply("<:warningg:756783610240958496> **Vous n'avez pas les permissions nécessaires pour utiliser l'Antiraid** <:warningg:756783610240958496>")}
    }
    if (message.content === '.antirole off') {
      if(message.member.hasPermission('ADMINISTRATOR')){
        message.reply('<:warningg:756783610240958496> **Le mode AntiRole a été désactivé avec succès** <:warningg:756783610240958496>')
        antirole = false
      } else {
        message.reply("<:warningg:756783610240958496> **Vous n'avez pas les permissions nécessaires pour utiliser l'Antiraid** <:warningg:756783610240958496>")}
    }
    if (message.content === '.antichannel on') {
      if(message.member.hasPermission('ADMINISTRATOR')){
        message.reply('<:itsok:755009589425995837> **Le mode AntiChannel a été activé avec succès** :<:itsok:755009589425995837>')
        antichannel = true
      } else {
        message.reply("<:warningg:756783610240958496> **Vous n'avez pas les permissions nécessaires pour utiliser l'Antiraid** <:warningg:756783610240958496>")}  
    }
    if (message.content === '.antichannel off') {
      if(message.member.hasPermission('ADMINISTRATOR')){
        message.reply('<:warningg:756783610240958496> **Le mode AntiChannel a été désactivé avec succès** <:warningg:756783610240958496>')
        antichannel = false
      } else {
        message.reply("<:warningg:756783610240958496> **Vous n'avez pas les permissions nécessaires pour utiliser l'Antiraid** <:warningg:756783610240958496>")}
    }
  
    if (message.content === '.antiban on') {
      if(message.member.hasPermission('ADMINISTRATOR')){
        message.reply('<:itsok:755009589425995837> **Le mode AntiBan a été activé avec succès** <:itsok:755009589425995837>')
        antiban = true
      } else {
        message.reply("<:warningg:756783610240958496> **Vous n'avez pas les permissions nécessaires pour utiliser l'Antiraid** <:warningg:756783610240958496>")} 
   }
    if (message.content === '.antiban off') {
      if(message.member.hasPermission('ADMINISTRATOR')){
        message.reply('<:warningg:756783610240958496> **Le mode AntiBan a été désactivé avec succès** <:warningg:756783610240958496>')
        antiban = true
      } else {
        message.reply("<:warningg:756783610240958496> **Vous n'avez pas les permissions nécessaires pour utiliser l'Antiraid** <:warningg:756783610240958496>")} 
   }
  
   if (message.content === '.antiraid on') {
    if(message.member.hasPermission('ADMINISTRATOR')){
      message.reply('<:itsok:755009589425995837> **Le mode AntiRaid a été activé avec succès** <:itsok:755009589425995837>')
      antiban = true
      antichannel = true
      antirole = true
    } else {
      message.reply("<:warningg:756783610240958496> **Vous n'avez pas les permissions nécessaires pour utiliser l'Antiraid** <:warningg:756783610240958496>")} 
  }
  
  if (message.content === '.antiraid off') {
    if(message.member.hasPermission('ADMINISTRATOR')){
      message.reply('<:warningg:756783610240958496> **Le mode AntiRaid a été désactivé avec succès** <:warningg:756783610240958496>')
      antiban = false
      antichannel = false
      antirole = false
    } else {
      message.reply("<:warningg:756783610240958496> **Vous n'avez pas les permissions nécessaires pour utiliser l'Antiraid** <:warningg:756783610240958496>")} 
  }
  
  if(antirole = true){
    antiroletext = "Activé"
  } else {
    antiroletext = "Désactivé"
  }
  if(antichannel = true){
    antichanneltext = "Activé"
  } else {
    antichanneltext = "Désactivé"
  }
  if(antiban = true){
    antibantext = "Activé"
  } else {
    antibantext = "Désactivé"
  }
  
  if (message.content === '.private') {
    if(memberuser.hasPermission('ADMINISTRATOR')){
      const antiraid = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('AntiRaid')
      .setDescription("Liste de l'antiraid")
      .addField('Anti Role', antiroletext)
      .addField('Anti Channel', antichanneltext)
      .addField('Anti Ban', antibantext)
      .setTimestamp()
  
      message.channel.send(antiraid);    
    } else{
      message.reply("<:warningg:756783610240958496> **Vous n'avez pas les permissions nécessaires pour utiliser l'Antiraid** <:warningg:756783610240958496>")} 
  }
  if (message.content === '.help') {
    const help = new Discord.MessageEmbed()
      .setColor('#RANDOM')
      .setTitle ('**:bookmark_tabs:↭ Liste des commandes**')
      .setDescription("En ce qui concerne l'Antiraid veuillez taper la commande `.info` ─━━━━━━⊱✿⊰━━━━━━─")
      .addField('<a:believe:755019740258238536> ┊ **AntiRaid**', '`.antiraid [on/off]` ↆ')
      .addField('<a:believe:755019740258238536> ┊ **Anti Role**', '`.antirole [on/off]` ↆ')
      .addField('<a:believe:755019740258238536> ┊ **Anti Channel**', '`.antichannel [on/off]` ↆ')
      .addField('<a:believe:755019740258238536> ┊ **Anti Mass Ban**', '`.antiban [on/off]` ↆ')
      .addField("<a:believe:755019740258238536> ┊ **Information sur l'Antiraid**", '`.info` ↆ')
      .addField("<a:believe:755019740258238536> ┊ **Inviter le bot dans votre serveur**", '`.invite` ↆ')
      .addField("<a:believe:755019740258238536> ┊ **Vérification Embed**", '`.verif` ↆ')
      .setFooter('Protection Bot AntiRaid ┊ 2020©')
  
    message.channel.send(help);    
  }
  }
})
              client.on('message', message => {
                if (message.content === '.younes') {
                  message.delete();
                  message.channel.send("*Younes a été mis dans votre cul avec succès*");}})

                      client.on('message', message => {
                        if (message.content === '.info') {
                          const info = new Discord.MessageEmbed()
                          .setColor('RANDOM')
                          .setTitle('**:bookmark_tabs:↭ Information AntiRaid**')
                          .setDescription("**Ici seront regroupés toutes les commandes AntiRaid, et leurs help** ─━━━━━━⊱✿⊰━━━━━━─")
                          .addField('<a:believe:755019740258238536> ┊ **AntiRaid**', '`.antiraidinfo` ↆ')
                          .addField('<a:believe:755019740258238536> ┊ **Anti Role**', '`.antiroleinfo` ↆ')
                          .addField('<a:believe:755019740258238536> ┊ **Anti Channel**', '`.antichannelinfo` ↆ')
                          .addField('<a:believe:755019740258238536> ┊ **Anti Mass Ban**', '`.antibaninfo` ↆ')
                          .setFooter('Protection Bot AntiRaid ┊ 2020©')
                          message.channel.send(info);
}
})

client.on('message', message => {
  if (message.content === '.invite') {
    const invite = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle ('<a:eclair:756769714033786951> **Thanks For Adding Me !**')
    .setDescription("**https://discord.com/api/oauth2/authorize?client_id=754324743456423987&permissions=8&scope=bot**")
    message.channel.send(invite);
  }
})

client.on('message', message => {
  if (message.content === '.verif') {
    const verif = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle ('<:warningg:756783610240958496> **__Vérification__**')
    .setDescription("**Veuillez compléter cette vérification pour avoir accès à la totalité du serveur.**")
    .setImage("https://cdn.discordapp.com/attachments/670710134015524884/736660735257739264/newcaptchaanchor-03.gif")
    .setFooter("Vérification Par Protection Bot ┊ Protection Bot AntiRaid ┊ 2020©")
    message.channel.send(verif);
  }
})

client.on('message', message => {
  if (message.content === '.nozi') {
    message.delete();
    message.channel.send("**Code de premium : Groovy**")
  }
})

client.on('message', message => {
  if (message.content === '.antiraidinfo') {
    const antiraidinfo = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle ('**:bookmark_tabs:↭ Information AntiRaid**')
    .setDescription("**`.antiraid on` permet d'activer toute les fonctionnalités du bot (Antirole, AntiChannel, Anti Mass Ban)**")
    .setImage("https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/SID_FB_001.gif")
    .setFooter("Protection Bot AntiRaid ┊ 2021©")
    message.channel.send(antiraidinfo);
  }
})

//login
client.login(process.env.TOKEN)

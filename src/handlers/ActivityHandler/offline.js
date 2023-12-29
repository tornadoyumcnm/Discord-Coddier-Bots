const Discord = require("discord.js")
const emoji = require("../../materials/emoji/normal-emoji")

module.exports = (client) => {
client.on('messageCreate', (message) => {
if (message.content === '!close') {
const YetkiYok = new Discord.EmbedBuilder()
.setDescription(`Only <@${process.env.BOTOWNERID}> can use this command.`)
.setColor('Red')
if(message.author.id !== process.env.BOTOWNERID){
return message.reply({embeds: [YetkiYok]})
}

message.channel.send({ embeds: [
new Discord.EmbedBuilder()
.setColor("Green")
.setTitle(`${emoji.coddier} Shutdown Mode`)
.setDescription(`I successfully put myself into shutdown mode.`)
]})

let days = Math.floor(client.uptime / 86400000);
let hours = Math.floor(client.uptime / 3600000) % 24;
let minutes = Math.floor(client.uptime / 60000) % 60;
let seconds = Math.floor(client.uptime / 1000) % 60;
    
const uyarılar = [
"I'm Running Away, BayBay to Everyone ♿",
"I'm Going to Eat... 🍌",
"I'm Going to Fight a Snake! 🐍",
"I'm Going to Watch a Movie 🎭",
];
      
let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
let csl = process.env.OFFLINELOG
client.channels.cache.get(csl).send({ embeds: [
new Discord.EmbedBuilder()
.setColor("DarkPurple")
.setTitle(`${emoji.coddier} Bot Offline!`)
.setDescription(`**${uyarımesaj}**
          
> Bot activation time: **${days}** Day **${hours}** Hour **${minutes}** Minute **${seconds}** Second`)
.setFooter({ text: `Bot Closing Date` })
.setTimestamp()
]}).then(() => {
client.user.setActivity(`⚡️ I go into maintenance mode and shut down...`).then(() => {
process.exit();
})
}
)}});
}
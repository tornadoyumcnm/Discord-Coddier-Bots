const Discord = require("discord.js")
const emoji = require("../../materials/emoji/normal-emoji")

module.exports = (client) => {
client.on("ready", () => {
let csl = process.env.ONLINELOG
client.channels.cache.get(csl).send({ embeds: [
new Discord.EmbedBuilder()
.setColor("Purple")
.setDescription(`> I'm back again! 😎`)
.setFooter({ text: `My return time:` })
.setTimestamp()
], content: `<@&${process.env.BOTACTIVITY}> You can use my commands again.` })    

console.log(`[Bot Activity] The bot successfully logged in to Discord!`)
})
}
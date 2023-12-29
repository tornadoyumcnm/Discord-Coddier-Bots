const Discord = require('discord.js')
module.exports.execute = async(client, interaction) => {

await interaction.deferReply()

const embed = new Discord.EmbedBuilder()
.setColor(process.env.MAINCOLOR)
.setAuthor({ name: `${process.env.NAME} Help Menu`, iconURL: client.user.avatarURL() })
.setDescription(`
🗒️ **${interaction.client.user.username} Command**
● </economy:1188550000473546923>
`)
.setFooter({ text: `©️ ${interaction.client.user.username} ${new Date().getFullYear()}`})
.setTimestamp()
await interaction.followUp({ embeds: [embed], ephemeral: false })

},

module.exports.config = {
    name: "help",
    description: "It is the help menu, all commands are here.",
    options: []
}
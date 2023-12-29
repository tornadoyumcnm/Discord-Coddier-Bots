const Discord = require('discord.js')
module.exports.execute = async(client, interaction) => {

const embed = new Discord.EmbedBuilder()
.setColor(process.env.MAINCOLOR)
.setAuthor({ name: `${process.env.NAME} x`, iconURL: client.user.avatarURL() })
.setDescription(`x`)
.setFooter({ text: `©️ ${interaction.client.user.username} ${new Date().getFullYear()}` })
.setTimestamp()
await interaction.reply({ embeds: [embed], ephemeral: false })

},

module.exports.config = {
    name: "log-system",
    description: "By setting up a log, you can be informed about most things on your server!",
    options: []
}

/*
const image = require("../../../materials/image/image.json")
let link = image.
const attachment = new Discord.AttachmentBuilder(link);
*/
const Discord = require('discord.js')
module.exports.execute = async(client, interaction) => {

await interaction.deferReply()

const embed = new Discord.EmbedBuilder()
.setColor(process.env.MAINCOLOR)
.setAuthor({ name: `${process.env.NAME} Economy Command list`, iconURL: client.user.avatarURL() })
.setDescription(`◆ \`/inventory\`
◆ \`/daily\`
◆ \`/coin\`
◆ \`/shop\`
◆ \`/level\`
◆ \`/slot\``)
.setFooter({ text: `©️ ${interaction.client.user.username} ${new Date().getFullYear()}` })
.setTimestamp()
await interaction.followUp({ embeds: [embed], ephemeral: false })

},

module.exports.config = {
    name: "economy",
    description: "You look at the economy commands",
    options: []
}

/*
const image = require("../../../materials/image/image.json")
let link = image.
const attachment = new Discord.AttachmentBuilder(link);
*/
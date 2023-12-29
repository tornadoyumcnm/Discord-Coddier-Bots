const Discord = require('discord.js')
const { version: djsVersion } = require('discord.js');
const { version: botVersion } = require('../../../../package.json');
const image = require("../../../materials/image/image.json")
module.exports.execute = async(client, interaction) => {

await interaction.deferReply()

const start = Date.now();

const createdAt = client.user.createdAt;
const formattedDate = createdAt.toLocaleString('tr-TR', {
timeZone: 'Europe/Istanbul',
year: 'numeric',
month: 'numeric',
day: 'numeric',
hour: 'numeric',
minute: 'numeric',
second: 'numeric',
});

let days = Math.floor(client.uptime / 86400000);
let hours = Math.floor(client.uptime / 3600000) % 24;
let minutes = Math.floor(client.uptime / 60000) % 60;
let seconds = Math.floor(client.uptime / 1000) % 60;

const embed = new Discord.EmbedBuilder()
.setColor(process.env.MAINCOLOR)
.setThumbnail(image.BOT_İNFO_THUMBNAİL)
.setAuthor({ name: `${process.env.NAME} Information about`, iconURL: client.user.avatarURL() })
.setDescription(`> Updates happen all the time, don't be surprised if a few things change.`)
.addFields(
//{ name: ``, value: ``, inline: false },
{ name: `${process.env.NAME} Owner`, value: `\`${process.env.BOTOWNERNAME} | ${process.env.BOTOWNERID}\``, inline: false },
{ name: `${process.env.NAME} Release date`, value: `\`${formattedDate}\``, inline: false },
{ name: `${process.env.NAME} Uptime`, value: `\`${days} Day ${hours} Hour ${minutes} Minute ${seconds} Second\``, inline: false },
{ name: `Total server`, value: `\`${interaction.client.guilds.cache.size}\``, inline: false },
{ name: `Total member`, value: `\`${interaction.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\``, inline: false },
{ name: `Discord.js version`, value: `\`${djsVersion}\``, inline: false },
{ name: `${process.env.NAME} version`, value: `\`${botVersion}\``, inline: false },
{ name: `${process.env.NAME} ping`, value: `\`${interaction.client.ws.ping}\``, inline: false },
{ name: `Message ping`, value: `\`${Date.now() - start}\``, inline: false },
{ name: `Languages supported`, value: `🇹🇷, 🇬🇧, 🇫🇷, 🇨🇳, 🇷🇺`, inline: false },
)
.setFooter({ text: `©️ ${interaction.client.user.username} ${new Date().getFullYear()}` })
.setTimestamp()
await interaction.followUp({ embeds: [embed], content: ``, ephemeral: false })

},

module.exports.config = {
    name: "coddier-info",
    description: `You get information about ${process.env.NAME}.`,
    options: []
}

/*
const image = require("../../../materials/image/image.json")
let link = image.
const attachment = new Discord.AttachmentBuilder(link);
*/
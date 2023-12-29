const Discord = require("discord.js")

module.exports = (client) => {
let eklendimatildimkanalid = process.env.BOTLOG

client.on("guildCreate", async (guild) => {
    const embed = new Discord.EmbedBuilder()
        .setThumbnail(guild.iconURL({ size: 1024 }) || client.user.avatarURL({ size: 1024 }))
        .setDescription(`### I've Been Added to a Server!`)
        .addFields(
            { name: "● Server Name :", value: String(guild.name) },
            { name: "● Server ID :", value: String(guild.id) },
            { name: "● Server Owner :", value: `<@${guild.ownerId}>` },
            { name: "● Owner ID :", value: String(guild.ownerId) }
        )
        .setColor("Green")
        .setFooter({ text: `©️ ${client.user.username} ${new Date().getFullYear()}`, iconURL: client.user.displayAvatarURL() })
    const channel = client.channels.cache.get(eklendimatildimkanalid);
    await channel.send({ embeds: [embed] })
})

client.on("guildDelete", async (guild) => {
    const embed = new Discord.EmbedBuilder()
        .setThumbnail(guild.iconURL({ size: 1024 }) || client.user.avatarURL({ size: 1024 }))
        .setDescription(`### Bir Sunucudan Atıldım!`)
        .addFields(
            { name: "● Server Name :", value: String(guild.name) },
            { name: "● Sever ID :", value: String(guild.id) },
            { name: "● Server Owner :", value: `<@${guild.ownerId}>` },
            { name: "● Owner ID :", value: String(guild.ownerId) }
        )
        .setColor("Red")
        .setFooter({ text: `©️ ${client.user.username} ${new Date().getFullYear()}`, iconURL: client.user.displayAvatarURL() })
    const channel = client.channels.cache.get(eklendimatildimkanalid);
    await channel.send({ embeds: [embed] })
})
}
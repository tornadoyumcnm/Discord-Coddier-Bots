const Discord = require('discord.js')
module.exports.execute = async(client, interaction) => {

await interaction.reply({ content: `
### 👤 Your Rewards
\`\`\`
CCoin: 100
CBox: 2
\`\`\`` })

},

module.exports.config = {
    name: "daily",
    description: "You get your daily gift.",
    options: []
}
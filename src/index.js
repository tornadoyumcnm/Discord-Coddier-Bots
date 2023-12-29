// Copyright 2023 Goelisma | Hamza
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const Discord = require("discord.js")
const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMembers, Discord.GatewayIntentBits.MessageContent, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.GuildEmojisAndStickers, Discord.GatewayIntentBits.GuildMessageReactions], messages: { interval: 3600, lifetime: 1800, }, users: { interval: 3600, filter: () => user => user.bot && user.id !== client.user.id, } })
const fs = require("fs");
const path = require('path');

require('dotenv').config();
require("./events/Ready.js")(client);
require("./handlers/PrefixHandler.js")(client);
require("./handlers/LogHandler/login-leave.js")(client);
require("./handlers/ActivityHandler/offline.js")(client);
require("./handlers/ActivityHandler/online.js")(client);

client.slashCommands = new Discord.Collection();
client.registerdCommands = new Discord.Collection();

client.slashCommands = new Discord.Collection();
client.registeredCommands = new Discord.Collection();

const loadCommands = (folderPath) => {
    const commandFolders = fs.readdirSync(folderPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    for (const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`${folderPath}/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`${folderPath}/${folder}/${file}`)
            client.slashCommands.set(command.config.name, command);
            client.registeredCommands.set(command.config.name, command.config);
            console.log(`→ (${command.config.name}) command activated successfully.`);
        }
    }
}

const loadEvents = () => {
    const Eventsss = path.join(__dirname, '/functions/');
    for (const event of fs.readdirSync(Eventsss).filter(file => file.endsWith(".js"))) {
        const evt = require(`${Eventsss}${event}`);

        if (evt.config.once) {
            client.once(evt.config.name, (...args) => {
                evt.execute(client, ...args);
            });
        } else {
            client.on(evt.config.name, (...args) => {
                evt.execute(client, ...args);
            });
        }
    }
}

const slashCommandsRegister = () => {
    const { REST } = require("@discordjs/rest");
    const { Routes } = require("discord-api-types/v10");

    client.once("ready", async () => {
        const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
        try {
            await rest.put(Routes.applicationCommands(process.env.ID), {
                body: client.registeredCommands.toJSON(),
            }).then(() => {
                console.log(`[SLASH-COMMAND] ${process.env.NAME} Total commands: ${client.registeredCommands.size}`)
            });
        } catch (error) {
            throw error;
        }
    })
};
const commandFolderPath = path.join(__dirname, 'commands/SlashCommands');
loadCommands(commandFolderPath);
loadEvents();
slashCommandsRegister();

require('dotenv').config();
client.on("ready", () => {
require("./database/connect.js")(process.env.MONGODB)
console.log(`[DataBase] Databases Prepared Successfully!`)
})

client.login(process.env.TOKEN).then(() => {
    console.log(`[LOGIN] ${process.env.NAME} Successfully entered the discord universe!`);
}).catch((err) => {
    console.log(`[ERROR]  ${process.env.NAME} I think the entrance to the discord universe has been lost: ${err}`);
});

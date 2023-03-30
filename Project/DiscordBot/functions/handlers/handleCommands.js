const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const fs = require('fs')
module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync('./commands')
        for (const folder of commandFolders) {
            const commandFiles = fs.
                readdirSync(`./commands/${folder}`).
                filter(file => file.endsWith('.js'))
            const { commands, commandArray } = client
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`)
                commands.set(command.data.name, command)
                commandArray.push(command.data.toJSON())
                console.log(`command:${command.data.name} has been pas it`)
            } 

        }
        const clientId = '1069010627365965935' // right click on bot and copy id that is client id
        const guildId = '807960528474865675' // guild id is on the server right click and copy id 
        const rest = new REST({ version: "9" }).setToken(process.env.TOKEN)
        try {
            console.log('Started refreshing application (/) commands.');

            await rest.put(Routes.applicationGuildCommands(clientId, guildId),
                {
                    body: client.commandArray 
                }
            );

            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    }
} 
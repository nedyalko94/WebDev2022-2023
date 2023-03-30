const { joinVoiceChannel, getVoiceConnection } = require("@discordjs/voice")
module.exports = {
    name: 'interactionCreate',

    async execute(interaction, client) {

        if (interaction.isChatInputCommand()) {
            if(interaction.commandName==='join'){
                const voiceChanel = interaction.options.getChannel('channel')
              const voiceConnection =  joinVoiceChannel({
                    channelId:voiceChanel.id,
                    guildId:interaction.guildId,
                    adapterCreator:interaction.guild.voiceAdapterCreator
                })
            //   console.log(getVoiceConnection().get)  
            // voiceConnection.rejoin()

            }
            const { commands } = client
            const { commandName } = interaction
            const command = commands.get(commandName)
            if (!command) return
            try {
                await command.execute(interaction, client)

            } catch (error) {
                console.error(error)
                await interaction.reply({
                    content: `something went wrong`,
                    ephemeral: true
                })
            }
        }
    }
}
const {SlashCommandBuilder, ChannelType} =require('discord.js')
const { execute } = require('../../events/client/ready')
module.exports={
    data:new SlashCommandBuilder ()
    .setName('join')
    .setDescription('join chanel')
    .addChannelOption(
        (option)=>
        option.setName('channel')
        .setDescription('the channel to join')
        .setRequired(true)
        .addChannelTypes(ChannelType.GuildVoice)
    ),
    async execute(interaction,client){
        const message = await interaction.deferReply({
            fetchReply:true
        })
        const newMessage=`API Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`
        await interaction.editReply({
            content:newMessage
        })
    }
}
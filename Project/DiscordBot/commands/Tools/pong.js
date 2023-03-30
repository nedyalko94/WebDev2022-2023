const {SlashCommandBuilder} =require('discord.js')
const { execute } = require('../../events/client/ready')
module.exports={
    data:new SlashCommandBuilder ()
    .setName('pong')
    .setDescription('return my pong'),
    async execute(interaction,client){
        const message = await interaction.deferReply({
            fetchReply:true
        })
        const newMessage=`hi!`
        await interaction.editReply({
            content:newMessage
        })
    }
}
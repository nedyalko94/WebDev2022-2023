
require("dotenv").config()
const {TOKEN,PUBLICKEY} = process.env
const { Client,Collection, GatewayIntentBits } = require('discord.js');
const { Player } = require("discord-player")

const fs = require('fs')

 

 

const Discord = require('discord.js');
//   console.log("hi")
const client = new Client({ intents: 
    [GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,GatewayIntentBits.GuildMessages ]})
// Add the player on the client
client.player = new Player(client, {
    ytdlOptions: {
        quality: "highestaudio", 
        highWaterMark: 1 << 25
    } 
})
client.commands = new Collection()   
client.color ="" 
client.commandArray = []

const functionFolders= fs.readdirSync('./functions');
for(const folder of functionFolders){
const functionFiles = fs
.readdirSync(`./functions/${folder}`)
.filter(file=>file.endsWith(".js") )
for(const file of functionFiles )require(`./functions/${folder}/${file}`)(client)

}
// client.on('ready',()=>{
//     console.log(`login in as ${client.user.tag}!`)
//  })

    // client.on('interactionCreate', async interaction => {
    //     if (!interaction.isChatInputCommand()) return;
      
    //     if (interaction.commandName === 'ping') {
    //       await interaction.reply('Pong!');
    //     }
    //   })

    client.handleEvents()
    client.handleCommands()
 
    client.login(TOKEN)   
    

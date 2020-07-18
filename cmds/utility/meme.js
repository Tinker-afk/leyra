const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    try{
    let content = await require('node-fetch')('https://miss--perssbest.repl.co/api/v2/meme').then(r => r.json()).then(r => r.image);
    let embed = new Discord.RichEmbed()
    .setTitle("ТОП МЕМЧИК")
    .setColor('#2F3136')
    .setImage(content)
    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(err)
    }
};
module.exports.help = {
    name: "meme"
};
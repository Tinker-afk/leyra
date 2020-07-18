const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    let botmessage = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(botmessage)

    message.delete().catch();
    message.channel.send(embed)
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "rembed"
};

const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав");
    let user = message.mentions.users.first();
    let botmessage = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setColor('#2F3136')
    .setDescription(`${args.slice(1).join(' ')}`)

    message.delete().catch()
    user.send(embed)(args.slice(1).join(' '));
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "lsay"
};

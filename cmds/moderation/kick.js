const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    let user = message.mentions.users.first();
    if(!args[0]) return bot.send("Вы не указали пользователя");
    let embed = new Discord.RichEmbed()
    .setDescription("**__КИК__**")
    .setColor('#2F3136')
    .addField("Администратор",message.author.username)
    .addField("Кикнул",`${user.username}`)
    .addField("Причина",args.slice(1).join(' '))
	.setFooter("Кик")
	.setTimestamp();
    
	message.delete().catch();
    message.guild.member(user).kick(args.slice(1).join(' '));
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "kick"
};
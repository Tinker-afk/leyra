const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    let user = message.mentions.users.first();
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!profile[user.id])return bot.send("Пользователя нету в profile.json");
    if(profile[user.id]<=0) return bot.send("У пользователя 0 предупреждений");
    profile[user.id].warns--;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    let embed = new Discord.RichEmbed()
    .setDescription("Предупреждение")
    .setColor('#2F3136')
    .addField("Администратор",message.author.username)
    .addField("Снял предупреждение",`${user.username}`)
    .addField("Количество предупрежденией",`${profile[user.id].warns}/3`)
	.addField("Причина",args.slice(1).join(' '));

    message.delete().catch();
    message.channel.send(embed)(args.slice(1).join(' '));
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "unwarn"
};

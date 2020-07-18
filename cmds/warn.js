const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    let user = message.mentions.users.first();
    if(!args[0]) return bot.send("Вы не указали пользователя");
    profile[user.id].warns++;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    if(profile[user.id].warns >=3){
        message.guild.member(user).kick("3/3 Предупреждений");
    }
    let embed = new Discord.RichEmbed()
    .setDescription("**__ПРЕДУПРЕЖДЕНИЕ__**")
    .setColor('#2F3136')
    .addField("Администратор",message.author.username)
    .addField("Выдал предупреждение",`${user.username}`)
    .addField("Количество предупрежденией",`${profile[user.id].warns}/3`)
    .addField("Причина",args.slice(1).join(' '))
	.setFooter("Предупреждение")
	.setTimestamp();

    message.delete().catch();
    message.channel.send(embed)(args.slice(1).join(' '));
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "warn"
};
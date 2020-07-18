const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав");
    let user = message.mentions.users.first() || message.guild.members.get(args[0]);
    if(!args[0]) return bot.send("Вы не указали пользователя");
    
    let role = message.guild.roles.find(r => r.name === "Muted");
    if(!user.roles.has(role.id)) return bot.send("Этот пользователь уже может говорить");
    if(!role){
        role = await message.guild.createRole({
            name:"Muted",
            permissions:[]
        });
        message.guild.channels.forEach(async (channel,id) => {
            await channel.overwritePermissions(role,{
                SEND_MESSAGES:false,
                ADD_REACTIONS:false
            });
        });
    };
    delete bot.mutes[user.id];
    fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
        if(err) console.log(err);
    });

    message.delete().catch();
    user.removeRole(role);
};
module.exports.help = {
    name: "unmute"
};

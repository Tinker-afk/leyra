const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    let embed = new Discord.RichEmbed()
    .setTitle("**__🌸ИНФОРМАЦИЯ БОТА LEYRA🌸__**")
    .setColor('#2F3136')
    .setDescription(`
	**__📜ОСНОВНАЯ📜__**
    
    • Кол-во команд: ** ${bot.commands.size} **
    • Версия бота: ** v4.0+ **
    • Префикс бота: ** # **
    • Сервер создателя: ** [тык](https://discord.gg/a2hPrB6) **
	
    **__⚒ТЕХНОЛОГИЧЕСКАЯ⚒__**
	
• Память: ** 19.9 MB **
• Хостинг: ** Heroku **
• Версия discord.js: ** 11.4.2 **
• Онлайн бота: ** 24/7 **
`)
    .setFooter("INFORMATION|Leyra🌸")
    .setTimestamp()

    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "info"
};

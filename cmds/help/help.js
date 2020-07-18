const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    let embed = new Discord.RichEmbed()
    .setTitle("**__🌸КОМАНДЫ БОТА LEYRA🌸__**")
    .setColor('#2F3136')
    .setDescription(`
	**__🗂ВЫБОР ПОМОЩИ🗂__**
	
    • help-moderation - помощь по модерации.
    • help-fun - помощь по фан командам.
    • help-utility - помощь по утилите.
    • help-nsfw - помощь по nsfw.
    • help-animal - помощь по animal.
	
    **__📚ИНФОРМАЦИЯ📚__**
	
• Создатель: Димушка💕#6012
• Префикс бота: ** # **
• Версия бота: ** v5.0+ **
• Сервер создателя: ** [тык](https://discord.gg/a2hPrB6) **
`)
    .setFooter("HELP|Leyra🌸")
    .setTimestamp()

    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "help"
};

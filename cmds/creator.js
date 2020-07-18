const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    let embed = new Discord.RichEmbed()
    .setTitle("**__ИНФОРМАЦИЯ О СОЗДАТЕЛЕ БОТА LEYRA__**")
    .setColor('#2F3136')
    .setDescription(`**ИНФОРМАЦИЯ**
    Его профиль: Димушка💕#6012
    Имя: Дмитрий
    Фамилия: Полищук
    День рождение: 19.04.08
    Пол: Мужской
    **ССЫЛКИ**
    Twitch(не пользуеться): ** https://www.twitch.tv/dimapolishuck **
    YouTube: ** https://www.youtube.com/channel/UCOt0QXl-0AdcUw2OtM9GnWA?view_as=subscriber **
    Server Discord: ** https://discord.gg/a2hPrB6 **
`)

    message.delete().catch();
    message.member.send(embed).then(m => m.react('✅'));
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "creator-info"
};
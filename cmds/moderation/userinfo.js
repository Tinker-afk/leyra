const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о участнике")
    .setColor('#2F3136')
    .addField("Имя",user.username)
    .addField("Тэг",user.tag)
    .addField("Дискриминатор",user.discriminator)
    .addField("Создание аккаунта",user.createdAt)
    .addField("ID",user.id)
    .addField("Вы бот?",user.bot)
    .setThumbnail(user.avatarURL)

    message.delete().catch();
    bot.send(embed);

};
module.exports.help = {
    name: "userinfo"
};

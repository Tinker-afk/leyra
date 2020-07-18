const Discord = module.require("discord.js");
const queue = new Map()

module.exports.run = async (bot, message, args) => {
    let mess = await message.channel.send(`За кого ты проголосуешь?
Кто лучше?
💔 - **Редичка💔**  или  🍭 - **Тинкер**`)
    await mess.react('💔')
    await mess.react('🍭')
    const collector = mess.createReactionCollector((reaction, user) => reaction.emoji.name === '😀' || reaction.emoji.name === '😬' && user.id == message.author.id, {time: 60000})

    collector.on('collect', async r => {
        switch(r.emoji.name) {
            case '💔':
                await mess.edit('Редичка💔 топчик')
            break
            case '🍭':
                await mess.edit('Тинкер топчик')
            break
        }
    })

    collector.on('end', async () => {
        await mess.edit('Сборщик отключен')
    })
}

module.exports.help = {
    name: 'who'
}
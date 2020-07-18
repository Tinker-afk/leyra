const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const exp = require('./func/exp.js')
const wait = require('util').promisify(setTimeout);
//const r_colors = ["#DF5050","#5087DF","#313131","#FFFFFF"];
const guild = bot.guilds.first();
const fs = require('fs');
bot.mutes = require('./mutes.json');
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;
let profile = require('./profile.json');
fs.readdir('./cmds/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        bot.commands.set(props.help.name,props);
    });
});

bot.on('ready', () => {
    console.log(`Запустился бот ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
        console.log(link);
    });
    bot.setInterval(()=>{
        for(let i in bot.mutes){
            let time = bot.mutes[i].time;
            let guildid = bot.mutes[i].guild;
            let guild = bot.guilds.get(guildid);
            let member = guild.members.get(i);
            let muteRole = member.guild.roles.find(r => r.name === "Muted"); 
            if(!muteRole) continue;

            if(Date.now()>= time){
                member.removeRole(muteRole);
                delete bot.mutes[i];
                fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
                    if(err) console.log(err);
                });
            }
        }

    },5000)

});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!profile[uid]){
        profile[uid] ={
            coins:10,
            warns:0,
            xp:0,
            lvl:1,
        };
    };
    let u = profile[uid];

    u.coins++;
    u.xp++;

    if(u.xp>= (u.lvl * 5)){
        u.xp = 0;
        u.lvl += 1;
    };


    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });

    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return;
    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot,message,args);
    bot.rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    bot.uId = message.author.id;
});

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}

const size = config.colors;
const servers = config.servers;
const rainbow = new Array(size);
  
bot.on('ready', () => {

    let statuses = [
      `${bot.commands.size} commands!`,
      "#help",
      "Creator: Димушка#6012",
      "Update 5.0!",
      "۩𝐒𝐔𝐍𝐍𝐘 𝐕𝐀𝐋𝐋𝐄𝐘۩",
      "https://discord.gg/a2hPrB6",
      "игру Minecraft",
      "игру Terraria",
      "ТИНКЕР ТООП!!!",
      "игру Creative Destruction",
      "Prefix: #",
      "на YouTube",
      "Здесь может быть ваша реклама!",
	  "Bot online 24/7"
  ]
  
  setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)];
      bot.user.setActivity(status, {type: "STREAMING", url:"https://www.twitch.tv/dimapolishuck"})
  
  }, 7000)
    });

bot.login("NjY2OTg4NzA0MDk4ODExOTE2.XwVr_g.m3Wy4VJY_Y3M3ffSJiPiRHLS_t4");
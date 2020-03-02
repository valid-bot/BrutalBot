const { Client, Collection } = require("discord.js");
const { token } = require("./botconfig.json");
const botconfig = require("./botconfig.json");
const Discord = require("discord.js")
const { cyan } = require("./colours.json");
const bot = new Client();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));



bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}invite`){
     let Aembed = new Discord.RichEmbed()
    .setColor(cyan)
    .addField("**Invite**", "ENJOY THE BOT WHILE YOU CAN!")
    .setDescription("https://discordapp.com/oauth2/authorize?client_id=679544271560376371&scope=bot&permissions=2146958847")
    message.channel.send({embed: Aembed});
}

})


bot.login(token);
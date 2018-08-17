const Discord = require ("discord.js");

var bot = new Discord.Client();

const prefix = '.'

//Console/jeu auquel le bot joue dans discord
bot.on('ready' , function(){
    bot.user.setGame('se faire coder ^^');
    console.log('Prêt');
});

bot.login('NDc5OTU5OTQ2NDg2ODc0MTEy.Dlg1xA.x2ofbsoFKWQKytvEG2VDuXv-Mqc');

//Ping Pong
bot.on('message' , function (message){
    if(message.content === 'ping')
        message.reply('pong')
})

//Help du bot

bot.on('message' ,function (message){
    if(message.content === ".help")
    var help = new Discord.RichEmbed()
        .setTitle("Toutes les commandes du Bot")
        .setColor(0x1165e7 )
        .addField("-       .ip : Donne l'adresse ip du serveur Minecraft \n-       .règlement : Donne le règlement \n-       bonjour/hello : Le bot vous répond" , "Avec plaisir !")
       

    
    
    message.channel.sendEmbed(help)
})

//Ip du serveur

bot.on('message' , function (message){
    if(message.content === ".ip")
    message.channel.send("**play.goldencity.fr**")
})
//Règlement
bot.on('message' , function (message){
    if(message.content === ".règlement")
    message.channel.send("**Cher ami, le règlement est le suivant: pas d'insultes , ni de spams sont tolérés sur le serveur discord de la city Darkwater, le harcèlement est punissable par le ban ! Si vous avez besoin d'informations plus précises ne me demandez pas, mais demandez aux Fondateurs et co-fondateurs ! Merci a toi d'avoir pris le temps de lire le règlement même si il est petit :smiley:  Je suis Billi ! a votre service**")
})

//Bonjour

bot.on('message' , function (message){
    if(message.content === "bonjour")
    message.reply("Salut !")
})
bot.on('message' , function (message){
    if(message.content === "hello")
    message.reply("Salut !")
})
bot.on('message' , function (message){
    if(message.content === "Bonjour")
    message.reply("Salut !")
})
bot.on('message' , function (message){
    if(message.content === "Hello")
    message.reply("Salut !")
})
 //Billi ?
 bot.on('message' , function (message){
     if(message.content === "Billi ?" )
     message.channel.send('Oui ' + message.author.toString() + " ? Je suis le petit droïde du serveur, que veux-tu ?")
   
 })

 //Billi ?
 bot.on('message' ,function (message){
    if(message.content === "Billi ?")
    var help = new Discord.RichEmbed()
    .setTitle("Toutes mes commandes")
    .setColor(0x1165e7 )
    .addField("-       .ip : je vous donne l'adresse ip du serveur Minecraft \n-       .règlement : je vous donne le règlement \n-       bonjour/hello : je vous répond" , "Avec plaisir !")
   



message.channel.sendEmbed(help)
    
        
    })
    




 

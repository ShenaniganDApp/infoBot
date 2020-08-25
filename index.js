const Discord = require('discord.js');
const { fstat } = require('fs');
const bot = new Discord.Client();

const token = 'NzM1NTA2OTEyMDQwNDUyMjA2.XxhZGg.FyjcKag4TchbYzFhShaFCOr1FR8';
const PREFIX = "!";


bot.on('ready', () =>{
    console.log('this bot is online!');
}) 



bot.on('message', message=>{
   let args = message.content.substring(PREFIX.length).split(" ");
   
   switch(args[0]){

        
        case 'read':
        message.channel.send('https://sourcecred.io/')
        break;

        case 'listen':
           message.channel.send('https://anchor.fm/metagame/episodes/MetaView-E04---Defying-Status-Quo--Building-SourceCred-efc6gq')
        break;

        case 'watch':
            
           message.channel.send('https://www.youtube.com/watch?v=3ZBDiNvddG4')
        break;

        case 'clear':
            if (!args[1]) return message.channel.reply('please define 2nd arg')
            message.channel.bulkDelete(args[1]);
        break;

        case 'myCred':
        
        
        //JSON to string
            const ledger = require('./bdd/ledger.json')
            const objJSONtoString = JSON.stringify(ledger);
            
        // JSON to javascript
            const stringJSONtoJava = JSON.parse(objJSONtoString) 

        // set the user name as an input    
        const targetName = args[1];

         
        // Find the position in the ledger for the given targetName & send an error message if it doesn't exist
        
        try {
       
            let position = stringJSONtoJava.accounts.findIndex((a) => a.account.identity.name === targetName)
            
            let myTotalCred = stringJSONtoJava.accounts[position].totalCred
            
            var lengthArray = stringJSONtoJava.accounts[position].cred.length;  
            
            let myWeeklyCred = stringJSONtoJava.accounts[position].cred

           
            let embed = new Discord.MessageEmbed()
            .setColor("#ff3864")
            .addFields(
                        {
                            name: "Total Cred",
                            value: myTotalCred.toPrecision(7),
                        },
                        
                        {
                            name: "Last week",
                            value: myWeeklyCred[lengthArray-1].toPrecision(4),
                        },
                        {
                            name: "The week before",
                            value: myWeeklyCred[lengthArray-2].toPrecision(4),
                        },
              
                
                        );
                    message.channel.send(embed);
            }
        
        catch {
                    return message.channel.send('No entry found in the leger, can you please give me another name?');

                }

        break;

        case 'welcome':
           
            const welcome = `
            Welcome to the SourceCred Discord! I know bots aren’t advanced enough to have feelings (yet), but I’m still really glad you’re here. I’d love to give you some next steps to connect you with the community and to get you earning Cred! Here are some **commands** to get you started:
           
            - **!read** // Links to all our intro docs
                *includes individual links to all Beta docs*
            - **!listen** // Podcasts on SourceCred
                *includes podcasts on SourceCred (including Metagame one)*
                *will one day include link to calls*
            - **!watch** // Our introduction video explaining SourceCred
            - **!myCred** & *[your name]* // to know your balance and how much you got from the last two weeks
            - **!clear ##** // If this bot gets too noisy, you can erase some of its posts.
        
            
            `
            message.channel.send(welcome)
        break;

   }

})

bot.login(token);

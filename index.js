const Discord = require('discord.js');
const { fstat, linkSync } = require('fs');
const { relative } = require('path');
const bot = new Discord.Client();

const token = 'NzM1NTA2OTEyMDQwNDUyMjA2.XxhQMA.YonMWhstYo9ieJ9-I9jM1GLlfkA';
const PREFIX = "!";


bot.on('ready', () =>{
    console.log('this bot is online!');
}) 



bot.on('message', message=>{
   let args = message.content.substring(PREFIX.length).split(" ");
   //let args = argsCasesensitive.toLowerCase();

   
   switch(args[0]){

        
        case 'read':
            
        const embedREAD = new Discord.MessageEmbed()
                        .addField('Some treat-links for Faruk', '[Landing page](https://sourcecred.io/)')
        
        message.channel.send(embedREAD)


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

        
        case 'mycred':
           
            const Credaccount = require('./bdd/accounts.json')
            const objJSONtoString = JSON.stringify(Credaccount);
            
        // JSON to javascript
            const stringJSONtoJava = JSON.parse(objJSONtoString) 

            // const intro = math.random()*10

           // let welcomingbot = Array([a,b,c,d,e,f,g,hi,j,k]);


        if (args.length <2){
                
            try{            
                        
                const targetName = 'N\u0000sourcecred\u0000discord\u0000MEMBER\u0000user\u0000'+message.author.id+'\u0000';
    
    
                for (var i = 0; i < 3000; i++) {
                    
                        let idDiscord = stringJSONtoJava.accounts[i].account.identity
    
                                const handler = {
                                    get (target, property){
                                        return target[property];                
                                    }
                                }
                                const proxyUser = new Proxy(idDiscord, handler);
    
                                const noDiscordAdress = proxyUser.aliases.length  
    
                                console.log('bien lu');
    
                        if (noDiscordAdress < 3) continue; 
                            
                                const findAdress = proxyUser.aliases[2]
                                       
                            if (String(targetName) === String(findAdress.address))
                                {
    
                                    let myTotalCred = stringJSONtoJava.accounts[i].totalCred
    
                                    var lengthArray = stringJSONtoJava.accounts[i].cred.length;  
                        
                                    let myWeeklyCred = stringJSONtoJava.accounts[i].cred
    
                                    var variation = 100*(myWeeklyCred[lengthArray-1]-myWeeklyCred[lengthArray-2])/myWeeklyCred[lengthArray-2]
    
    
                                    let embed = new Discord.MessageEmbed()
                                        .setColor("#ff3864")
                                        .setDescription(" Hello "  + idDiscord.name + "! You look nice today") //```\
    
                                        .setThumbnail("https://raw.githubusercontent.com/sourcecred/sourcecred/master/src/assets/logo/rasterized/logo_64.png")
                            
    
                                        .addFields(                        
                                    
                                                    {
                                                        name: "Total",
                                                        value: Math.round(myTotalCred) +" Cred",
                                                        inline: true,                                                                                                      
                                                    },
                                                    
                                                    {
                                                        name: "Last week ",
                                                        value: myWeeklyCred[lengthArray-1].toPrecision(3)+" Cred",
                                                        inline:true
                                                    },
                                                    {
                                                        name: "Week before",
                                                        value: myWeeklyCred[lengthArray-2].toPrecision(4)+" Cred",
                                                        inline: true
                                                    },
                                                    {
                                                        name:  "Weekly Change",
                                                        value: variation.toPrecision(2)+"%",
                                                    
                                                    },                                              
                  
                  
                                                    );
                                                    
                                              
                                                    
    
                                 message.channel.send(embed);
    
    
                                    return console.log('il y a un match'+ i);
                    
                                }
                                  
                    } 
                }
    
                catch { 
                    
                    return message.channel.send("Please, write this : !mycred *[your discord name]*")
    
                }
            }
    
        else { 
           
            const Credaccount = require('./bdd/accounts.json')
            const objJSONtoString = JSON.stringify(Credaccount);
            
        // JSON to javascript
            const stringJSONtoJava = JSON.parse(objJSONtoString) 
            
            //en mode manuel 
            const targetNameManual = args[1];

            let position = stringJSONtoJava.accounts.findIndex((a) => a.account.identity.name === targetNameManual)
        
            let myTotalCred = stringJSONtoJava.accounts[position].totalCred
            
            var lengthArray = stringJSONtoJava.accounts[position].cred.length;  
            
            let myWeeklyCred = stringJSONtoJava.accounts[position].cred

            var variationManual = 100*(myWeeklyCred[lengthArray-1]-myWeeklyCred[lengthArray-2])/myWeeklyCred[lengthArray-2]


            let embed = new Discord.MessageEmbed()
            .setColor("#ff3864")
            .setDescription(" Hello "  + targetNameManual + "! You look nice today") //```\

            .setThumbnail("https://raw.githubusercontent.com/sourcecred/sourcecred/master/src/assets/logo/rasterized/logo_64.png")


            .addFields(                        
        
                        {
                            name: "Total",
                            value: Math.round(myTotalCred) +" Cred",
                            inline: true,                                                                                                      
                        },
                        
                        {
                            name: "Last week ",
                            value: myWeeklyCred[lengthArray-1].toPrecision(3)+" Cred",
                            inline:true
                        },
                        {
                            name: "Week before",
                            value: myWeeklyCred[lengthArray-2].toPrecision(4)+" Cred",
                            inline: true
                        },
                        {
                            name:  "Weekly Change",
                            value: variationManual.toPrecision(2)+"%",
                        
                        },                                              


                        );
                        
                                                
                                        
                                    
                            message.channel.send(embed);


                                return console.log('il y a un match'+ i);
//en mode automatique
                    
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

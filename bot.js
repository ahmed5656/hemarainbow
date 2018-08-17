const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
	client.user.setGame(`HEMA Rainbow  `,'https://www.twitch.tv/v5bz')
    setInterval(function(){
        client.guilds.get('463281138538905600').roles.find('name', '✱♑🙦⦕ ⚡HEMA⚡⦖🙤♑✱').edit({color: 'RANDOM'})
        client.guilds.get('463281138538905600').roles.find('name', '♚☭⦕𝕆ℕ𝕃𝕐-𝕀𝕀𝔸ℍ𝕄𝔼𝔻⦖☭♚').edit({color: 'RANDOM'})
        client.guilds.get('463281138538905600').roles.find('name', '✨✭⦕•Staff Rainbow •⦖✭✨').edit({color: 'RANDOM'})
		client.guilds.get('463281138538905600').roles.find('name', '╔⦅⧨⦆⦕ Hema Bot ⦖⦅⧨⦆╗').edit({color: 'RANDOM'})
		client.guilds.get('465547785018802177').roles.find('name', 'Rainbow').edit({color: 'RANDOM'})
		client.guilds.get('474222293992865793').roles.find('name', 'Rainbow').edit({color: 'RANDOM'})
      client.guilds.get('474579280626581505').roles.find('name', 'Rainbow').edit({color: 'RANDOM'})
      client.guilds.get('428228155309031424').roles.find('name', 'Rainbow').edit({color: 'RANDOM'})
	    client.guilds.get('450588636866412545').roles.find('name', 'Rainbow').edit({color: 'RANDOM'})
	    client.guilds.get('368360473873219585').roles.find('name', 'Rainbow').edit({color: 'RANDOM'})
        
    },5000);
	
	
	


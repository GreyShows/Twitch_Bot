exports.run = (client, message, args, user, channel, self) => {

   var noip = "Sorry no IP im not playing a game that im doing multiplayer with viewers"
   var ip = "The Server ip is "

   if (noip) {
   client.say(channel, `@${user.username}, ` + noip)
}
   if(ip) {
   client.say(channel, `@${user.username}, ` + ip) 
}

}
exports.run = (client, message, args, user, channel, self) => {
   var serverip = "54.219.242.215:12992"
   client.say(channel, `@${user.username}, The Server IP is ` + serverip)
}
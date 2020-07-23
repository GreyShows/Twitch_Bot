exports.run = (client, message, args, user, channel, self) => {
    var discord = "https://discord.gg/DWfAEG5"
    client.say(channel, `@${user.username} My Fan Discord Is: ` + discord)
}
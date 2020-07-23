var tmi = require("tmi.js")
// Put your Twitch account name of the account you want it to chat in
var channelName = "greyshows42"
// Change if you want
var prefix = "!"

var config = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        // Username of Account you want as bot
        username: "",
        //Go to https://twitchapps.com/tmi/ For password and be connected to the account you want the bot to be on
        password: ""
    },
    channels: [channelName]
}

var client = new tmi.client(config)
client.connect();

client.on("connected", (address, port) => {
    client.action(channelName, "The bot has connected on" + address + ":" + port)
})

client.on("chat", (channel, user, message, self) => {
    if (message == "hi") {
        client.say(channelName, "Hey")
    }

    const args = message.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    try {
        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(client, message, args, user, channel, self)
    }catch(err) {
        return;
    }
})

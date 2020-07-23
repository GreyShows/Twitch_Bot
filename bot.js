var tmi = require("tmi.js")
var channelName = "greyshows42"
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
        username: "greyshows42bot",
        password: "oauth:bh6ndw2of9hxde3bfw10uv8ejtkk4k"
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
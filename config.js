const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    token: String(process.env.DISCORD_TOKEN),
    clientId: String(process.env.APP_ID),
    guildId: String(process.env.SERVER_ID)
}
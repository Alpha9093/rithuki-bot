const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FYgkVSIC#tXDMCe72XjoDDaYOx7XmU1dFAwqpbWfMlWgsvEay1Vs",
MONGODB: process.env.MONGODB || "mongodb://mongo:tntShKwErgmSkbsmMdjHXgcIUOjkOKSU@viaduct.proxy.rlwy.net:53061",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/bbZdjkm/1778.jpg",
BOT_NAME: process.env.BOT_NAME || "QUEEN-MERI-MD",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
};

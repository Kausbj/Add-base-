const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "aMVX0STK#7ZV1sbRTjzf-Vzfgx6SuyXarnfVaGocOmj22wzp96eM", // session id
MONGODB: process.env.MONGODB || "mongodb://mongo:TdlccGBRitoynUsOmnyGJwfFwCVhdBbd@nozomi.proxy.rlwy.net:35163",
};
 

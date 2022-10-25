const pinger = require('./dist/index.js');
pinger.ping("discord.com", 2000, true);
pinger.webserver(8080)

// const {Group} = require('./dist/index.js');
// let g = new Group();
// ['wubzy.xyz', 'k1e.io'].forEach(u => g.add(u, 5000));
// g.startAll();

// const pinger = require('./dist/index.js')
// pinger.dping(webhooktoken='V8LP8mnbnCkJqdwWZrCs7ib9xVnihhiXheAWRPHnrkZt6', webhookid='109337362537264548', url='https://k1e.io', interval=10000, flipDM=true, noURLFix=false)
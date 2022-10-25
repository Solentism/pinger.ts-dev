# pinger.ts (a newer, better pinger)

A basic yet functional website pinger, you can use this to keep repl.it, Glitch or other similar project sites online 24/7!

[NPM](https://nodei.co/npm/pinger.ts)

# Example Code (Interval = 30000)

```js
const pinger = require('pinger.ts');
pinger.ping("https://k1e.io")
```
# Example Code (Interval = Custom)

```js
const pinger = require('pinger.ts');
pinger.ping("https://k1e.io", 10000)
```

# Example Code (With Logging)

```js
const pinger = require('pinger.ts');
pinger.ping("https://k1e.io", 30000, true)
```

# Example Code (Discord Logging)
```js
const pinger = require('pinger.ts');
pinger.dping(webhooktoken='V8LP8mnbnCkJqdwWZrCs7ib9xVnihhiXheAWRPHnrkZt6', webhookid='109337362537264548', url='https://k1e.io')
```
This method will not let you set an interval below 10000 due to Discord's rate limiting.

# Example Code (Pinger Group)
Pinger Group allows you to ping several domains at the same time!

```js
const { Group } = require('pinger.ts');
let groupPinger = new Group(); //You can pass a string to name the group if you have multiple groups

['wubzy.xyz', 'k1e.io'].forEach(u => groupPinger.add(u, 5000));
groupPinger.startAll();
```

## Group Pinger methods

```js
group.add();
//takes the same parameters as the standard pinger function
//returns an object {name: pingerGroupName, id, ping(), start(), stop(), started, interval, config: the settings passed in to group.add();}

group.addStart(); //add a pinger and start it
group.stop(id); //id is optional. if there is no id present, it will stop all pingers in the group
group.startAll(); //starts all unstarted pingers in the group

group.pingers //Map<number, pinger>
```

## Webserver

```js
const pinger = require('pinger.ts');
pinger.webserver(3000) // Replace 3000 with the port of your choice.
```

## Webserver (with Custom Splash)

```js
const pinger = require('pinger.ts');
pinger.webserver(3000, 'Welcome to my webserver!') // Replace 'Your content here with HTML code or general text.'
```

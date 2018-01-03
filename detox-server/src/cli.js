#! /usr/bin/env node
const log = require('npmlog');
const DetoxServer = require('./DetoxServer');
const program = require('commander');

program
  .option('-s, --server [host]',
    `The IP to bind detox-server. Defaults to localhost`, 'localhost')
  .option('-p, --port [value]',
    'The port to bind detox-server. Defaults to 8099', '8099')
  .parse(process.argv);

log.addLevel('wss', 999, {fg: 'blue', bg: 'black'}, 'wss');
log.level = 'wss';

const detoxServer = new DetoxServer(program.port, program.server);

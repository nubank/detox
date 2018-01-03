#!/usr/bin/env node

const program = require('commander');
const cp = require('child_process');
const fs = require('fs');
const path = require('path');

program
  .option('-s, --server [host]',
    `The IP to bind detox-server`)
  .option('-p, --port [value]',
    'The port to bind detox-server')
  .parse(process.argv);

const server = program.server ? `--server ${program.server}` : '';
const port = program.port ? `--port ${program.port}` : '';
const arguments = `${server} ${port}`;

if (fs.existsSync(path.join(process.cwd(), 'node_modules/.bin/detox-server'))) {
  cp.execSync(`node_modules/.bin/detox-server ${arguments}`, {stdio: 'inherit'});
} else {
  cp.execSync(`node_modules/detox/node_modules/.bin/detox-server ${arguments}`, {stdio: 'inherit'});
}


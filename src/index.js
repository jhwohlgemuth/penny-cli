#!/usr/bin/env node
import {join} from 'path';
import React from 'react';
import {cyan, dim} from 'chalk';
import {render} from 'ink';
import meow from 'meow';
import read from 'read-pkg';
import getStdin from 'get-stdin';
// import updateNotifier from 'update-notifier';
import UI from './main';

// Notify updater
// const pkg = require(`../package.json`);
// updateNotifier({pkg}).notify();

const showVersion = () => {
    const cwd = join(__dirname, '..');
    const {version} = read.sync({cwd});
    console.log(version); // eslint-disable-line no-console
    process.exit();
};
const help = `
    ${dim.bold('Usage')}

        ${cyan('>')} penny [commands] [terms] [options]
        
        ${cyan('>')} penny version


    ${dim.bold('Commands')}

        copy, enum, scan, ...


    ${dim.bold('Terms')}

        [???]
        ???, ...


    ${dim.bold('Options')}

        --version, -v           Print version
        --ignore-warnings,      Ignore warning messages [Default: false]
        --debug                 Show debug data [Default: false]
        --ip,               -i  IP address [Default: 127.0.0.1]
        --port,             -p  Port [Default: 80]
`;
const options = {
    help,
    flags: {
        version: {
            type: 'boolean',
            default: false,
            alias: 'v'
        },
        help: {
            type: 'boolean',
            default: false,
            alias: 'h'
        },
        ignoreWarnings: {
            type: 'boolean',
            default: false
        },
        debug: {
            type: 'boolean',
            default: false
        },
        ip: {
            type: 'string',
            default: '127.0.0.1',
            alias: 'i'
        },
        port: {
            type: 'number',
            default: 80,
            alias: 'p'
        }
    }
};

const {input, flags} = meow(options);
(input[0] === 'version' || flags.version) && showVersion();
(async () => {
    const stdin = await getStdin();
    render(<UI input={input} flags={flags} stdin={stdin}/>, {exitOnCtrlC: true});
})();
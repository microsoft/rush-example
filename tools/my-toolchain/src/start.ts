#!/usr/bin/env node

import * as colors from 'colors';
import * as child_process from 'child_process';

console.log('Invoking 1-1-my-toolchain...');

child_process.execSync('tsc', { stdio: 'inherit' });

console.log(colors.green('Success!'));

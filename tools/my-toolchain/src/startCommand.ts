// This script provides the implementation for the example custom command "my-bulk-command"
// that is defined in common/config/rush/command-line.json and launched via my-toolchain/bin/my-bulk-command.js

console.log('Invoking ' + __filename);

// The first two args will be node.exe and the script itself
let args = process.argv.slice(2);

console.log('\nScript args are: ' + JSON.stringify(args));

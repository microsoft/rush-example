// This script provides the implementation for an example custom command that is
// defined in common/config/rush/command-line.json.

console.log('Invoking ' + __filename);

// The first two args will be node.exe and the script itself
let args = process.argv.slice(2);

console.log('\nScript args are: ' + JSON.stringify(args));

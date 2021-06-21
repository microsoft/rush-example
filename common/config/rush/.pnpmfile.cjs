'use strict';

module.exports = {
  hooks: {
    readPackage
  }
};

function readPackage(packageJson, context) {

  context.log('Expect to see this for every package');

  return packageJson;
}

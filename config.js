module.exports = {
    "allowPostUpgradeCommandTemplating": true,
    "allowedPostUpgradeCommands": [
        "node common/scripts/install-run-rush.js update",
        "node common/scripts/install-run-rush.js change --bulk --message \"{{{prTitle}}}\" --bump-type patch"
    ]
};
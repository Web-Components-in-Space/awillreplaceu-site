var path = require("path");
module.exports = {
    // Specify the entry point for our app.
    entry: {
        'bundle': path.join(__dirname, "src/main.js"),
        'bundle-single': path.join(__dirname, "src/singlemain.js"),
    },
    // Specify the output file containing our bundled code.
    output: {
        path: __dirname,
        filename: '[name].js'
    }
}
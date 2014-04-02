var express = require('express'),
    // Import https, not http, and the fs module to be able to read the
    // certificate files!
    https = require('https'),
    fs = require('fs'),

    path = require('path'),
    app = express(),

    // set up SSL like this:
    options = {
        // These are the paths to the certificate and private key files.
        // the supplied ones are, obviously, selfsigned and fit the domain name
        // "localhost".
        key: fs.readFileSync(path.join(__dirname,
            "./ssl/certs/key/-private-key.pem")),
        cert: fs.readFileSync(path.join(__dirname,
            './ssl/certs/signed/-signed-cert.pem'))
    };

// ALL MIDDLEWARES STRIPPED FOR BREVITY.
app.use("/", express.static(path.join(__dirname, "public")));
app.use(app.router);

// here, the createServer method is called using the options object (see above)
// as the first argument. The port is hardcoded for brevity.
https.createServer(options, app).listen(8000, function () {
    console.log('Express server listening on port 8000');
});

const express = require('express');

function requestInterceptor(req, res, next) {
    console.log(req.originalUrl);
    return process.exit(0);
}

module.exports = function() {
    const app = express();

    app.use(
        '/graphql',
        requestInterceptor
    );

    app.listen(3000);
};
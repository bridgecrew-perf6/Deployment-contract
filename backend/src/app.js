const express = require('express');
const Web3Service = require('./services/web3.service');

class App {

    constructor() {
        this.app = express();
    }

    startServer = () => {
        this.app.listen(process.env.PORT, () => console.log('App is listening on port 3001.'));

    }
}

module.exports = App;
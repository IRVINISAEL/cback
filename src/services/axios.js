const axios = require('axios');

class Client {
    client;
    
    constructor() {
        this.client = axios.create({
            baseURL: 'https://api.cloudflare.com/client/v4',
            headers: {
                'Authorization': 'Bearer dOofiM9i6qYdfB_eRl3RH57O1UOzG05oSPH79eQM'
            }
        });
    }
}

module.exports = Client;

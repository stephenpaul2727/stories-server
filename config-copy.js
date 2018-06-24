/*
  FORMAT FOR CONFIGURATION FILE
  CONTACT ADMIN FOR CREDENTIALS
  RENAME TO CONFIG.JS IN DEVELOPMENT AND ADD CREDENTIALS IN RESPECTIVE PLACES
*/

var config = {
development: {
    url: 'http://my.site.com',
    database: {
        host:   '127.0.0.1',
        port:   '27017',
        db:     'db'
    },
    server: {
        host: '127.0.0.1',
        port: '4000'
    }
},
production: {
    url: 'http://my.site.com',
    database: {
        host: '127.0.0.1',
        port: '27017',
        db:     'db'
    },
    server: {
        host:   '127.0.0.1',
        port:   '3421'
    }
}
};
module.exports = config;

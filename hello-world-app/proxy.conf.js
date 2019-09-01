const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://localhost:8080/',
<<<<<<< HEAD
        // target: 'http://localhost:8000/poc-metrus-negativacao',
=======
>>>>>>> 965a44c471c95211a23cc940aad7120ea6a42fdd
        secure: false,
        logLevel: 'debug',
        pathRewrite: { '^/api': '' }
    }
];

<<<<<<< HEAD
module.exports = PROXY_CONFIG;

// const PROXY_CONFIG = [
//     {
//         context: ['/api'],
//         target: 'http://localhost:8080/',
//          secure: false,
//          logLevel: 'debug',
//          pathRewrite: { '^/api': '' }
//     }
// ];

// module.exports = PROXY_CONFIG;
=======
module.exports = PROXY_CONFIG;
>>>>>>> 965a44c471c95211a23cc940aad7120ea6a42fdd

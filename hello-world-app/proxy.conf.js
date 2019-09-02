const PROXY_CONFIG = [
    {
        context: ['/api'],
        // target: 'http://localhost:8080/',
        target: 'http://localhost:8000/poc-metrus-negativacao',
        secure: false,
        logLevel: 'debug',
        pathRewrite: { '^/api': '' }
    }
];

module.exports = PROXY_CONFIG;

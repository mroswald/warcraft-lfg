module.exports = {

    options: {
        algorithm: 'md5',
        length: 10,
        summary: 'filerev'
    },
    source: {
        files: [{
            src: [
                'www/assets/**/*.{jpg,png}',
                'www/app/**/*.html',
                'www/assets/css/warcraftlfg.min.css',
                'www/assets/css/warcraftlfg.vendor.min.css',
                'www/app/warcraftlfg.min.js',
                'www/app/warcraftlfg.vendor.min.js',
                'www/templates.js',
                'www/assets/**/*.json'
            ]
        }]
    }
};
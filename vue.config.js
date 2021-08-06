module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:8003/categories',
                pathRewrite: {
                    '^/api': '',
                },
                ws: true,
                changeOrigin: true
            },
        }
    },
    transpileDependencies: [
        'vuetify'
    ]
}

module.exports = {
    devServer: {
        proxy: {
            '^/api/products': {
                target: 'http://localhost:8003/page',
                pathRewrite: {
                    '^/api/products': '',
                },
                ws: true,
                changeOrigin: true,
            },
        },
    },
    transpileDependencies: [
        'vuetify'
    ]
}

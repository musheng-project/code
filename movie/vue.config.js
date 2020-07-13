module.exports = {
    publicPath: './',

    // 所有 webpack-dev-server 的选项都支持。
    devServer: {
        open: false, //是否自动弹出浏览器页面
        host: 'localhost',
        port: '8082',
        https: false,   //是否使用https协议
        hotOnly: true, //是否开启热更新
        proxy: {
            '/api': {
                target: 'https://api-m.mtime.cn', //API服务器的地址
                ws: true,  //代理websockets
                changeOrigin: true, // 虚拟的站点需要更管origin
                pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                    '^/api': ''
                }
            }

        }
    }
}
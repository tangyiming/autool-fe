module.exports = {
    configureWebpack: config => {
        config.module.rules.push({
            test: /\.md$/,
            use: [
                {
                    loader: 'html-loader'
                },
                {
                    loader: 'markdown-loader',
                    options: {}
                }
            ]
        })
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'searchform-bgcolor': '#fbfbfb',
                    'primary-color':'#16817a'
                },
                javascriptEnabled: true
            }
        }
    },
    devServer: {
        hot: true,
        port: 8080,
        //host: ''web.xxxx.com', //配置此host并求改本地hosts
        //disableHostCheck: true,
        open: false,
        https: true, //是否开启https
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8081/',//172.172.1.89
                ws: false, // 是否启用websockets
                changOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    '^/api/': ''
                }
            }
        }
    }
}
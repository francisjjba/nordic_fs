const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.export={
    entry:{
        index:path.resolve(__dirname, './src/index.js')
    },

    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'[name].bundle.js'
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./src/template.html')
        })
    ]


}
const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: {
        modules:[ // Librerias core del proyecto, ahora se generar un bunble con estas librerias que se llamara modules
            'react',
            'react-dom'
        ]
    },
    mode: 'production',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js', // exportar las librerias, este archivo se incluira en el html
        path: path.resolve( __dirname , "dist/" ),
        publicPath: "dist/",
        chunkFilename: "js/[id].[chunkhash].js ",
    },
    plugins:[
        new webpack.DllPlugin({
            name:'[name]', // Como se llamara el archivo dll, name toma el nombre de modules del entry point o se puede colocar un nombre distinto
            path:path.join(__dirname,'[name]-manifest.json'), //Archivo q exporta el dll son las referencias a las librerias y es lo q va a leer el otro webpack.config.js DllReferencePlugin
        })
    ],
}
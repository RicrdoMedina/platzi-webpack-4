const path = require('path')

module.exports = {
    entry: './index.js', //Archivo de entrada
    // mode: 'development',
    output:{
        path: path.resolve(__dirname,'dist'), //path archivo de salida
        filename: 'bundle.js', //Nombre archivo de salida
    }
}
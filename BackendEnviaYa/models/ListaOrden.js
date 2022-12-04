const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ordenSchema = new Schema({
    numOrden: {
        type: String,
        min: 20,
        required: true
    },
    inputFecha: {
        type: Date,
    },
    inputDirOrigen: {
        type: String,
        required: true
    },
    inputDirDestino: {
        type: String,
        required: true
    },
    inputTelefono: {
        type: Number,
        min: 868,
        required: true
    },
    selectEstado: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    }
}, {
    collection: 'Orden'
})

module.exports = mongoose.model('Orden', ordenSchema)
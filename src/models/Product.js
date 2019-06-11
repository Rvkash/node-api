const mongoose = require('mongoose');

//TABELA DOS PRODUTOS --------------------------------------->


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,

    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
    type: Date,
    default: Date.now,
 },
});

ProductSchema.plugin(mongoosePaginate);

//exportando product ------------------------------------------->


mongoose.model('Product', ProductSchema);
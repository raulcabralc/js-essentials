const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    anyString: String,
    importantNum: {
        type: Number,
        required: true
        // required diz se é necessário ou opcional
        // a existência do mesmo.
        // no caso, importantNum PRECISA ser enviado
    }
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;

const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
  // definindo o esquema a ser usado por mongoose
  title: {
    type: String,
    required: true,
    // required diz se é necessário ou opcional
    // a existência do mesmo.
    // no caso, title PRECISA ser enviado
  },
  description: String,
});

const HomeModel = mongoose.model("Home", HomeSchema);

class Home {}

module.exports = Home;

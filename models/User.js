const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://avacode:avacode@cluster0.xa6zp.mongodb.net/Cluster0?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var userSchema = mongoose.Schema({
    uid: String,
    email: String,
    name: String,
    gender: String,
    pic: String
});

module.exports = mongoose.model('User', userSchema);

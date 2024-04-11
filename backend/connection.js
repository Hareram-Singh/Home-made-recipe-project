const mongoose = require('mongoose');
const url = ('mongodb+srv://hareramsingh5510:Hare2181@cluster0.reymmhh.mongodb.net/Ankush?retryWrites=true&w=majority&appName=Cluster0')
mongoose.connect(url)
.then((result) => {
    console.log('database connected')
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;
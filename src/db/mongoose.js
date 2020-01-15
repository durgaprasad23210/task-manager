const mongoose = require('mongoose')
const config = require('config')

mongoose.connect(config.get('db'), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
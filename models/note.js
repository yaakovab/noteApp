const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connectint to MongoDB: ', error.massage)
    })

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minlength: 5,
    },
    date: {
        type: Date,
        required: true,
    },
    important: Boolean,

})

noteSchema.set('toJSON', {
    transform: (document, returndObject) => {
        returndObject.id = returndObject._id.toString()
        delete returndObject._id
        delete returndObject.__v
    }
})

module.exports = mongoose.model('Note', noteSchema)
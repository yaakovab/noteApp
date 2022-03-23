const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

// console.log(password)

const url =
    `mongodb+srv://yaakovab:${password}@cluster0.pb1rd.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})



// const notes = [
//     {
//         content: 'HTML is easy',
//         date: new Date(),
//         important: true,
//     },
//     {
//         content: 'Mongoose makes use of mongo easy',
//         date: new Date(),
//         important: true,
//     },
//     {
//         content: 'Callback-functions are great',
//         date: new Date(),
//         important: true,
//     },
// ]


// Note.insertMany(notes).then(result => {
//     console.log('notes saved!')
//     mongoose.connection.close()
// })
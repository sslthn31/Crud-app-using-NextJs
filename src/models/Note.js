const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please Add a Your First Name"]
    },
    lastName: {
        type: String,
        required: [true, "Please Add a Your Last Name"]
    },
    email: {
        type: String,
        required: [true, "Please Add a Your E-mail"]
    },
    phone: {
        type: String,
        required: [true, "Please Add a Your Phone Number"]
    },
    address: {
        type: String,
        required: [true, "Please Add a Your Address"]
    },
}) 

module.exports = mongoose.models.Note || mongoose.model('Note', noteSchema)
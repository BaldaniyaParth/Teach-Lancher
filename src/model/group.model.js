const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const groupSchema = mongoose.Schema({
    user_id: {
        type: objectId,
        required: true,
        ref: 'user'
    },
    course_id:{
        type: objectId,
        required: true,
        ref: 'courses'
    },
    group_img: {
        type: String,
        default: "https://res.cloudinary.com/dijig9zmr/image/upload/v1712581316/TeachLancher/hcbpr9jcxcpzcvzxecl9.png"
    },
    group_name: {
        type: String,
        required: true
    },
    group_desc: {
        type: String,
        required: true
    },
    group_member: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
}, {
    collection: 'group'
});

module.exports = mongoose.model('group', groupSchema);
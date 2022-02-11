const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const User = new Schema(
    {
        _id: { type: Number, },
        name: { type: String, required: true },
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        _id: false,
        timestamps: true,
    }
)



//Add plugins
User.plugin(AutoIncrement, {id: 'user_couter', inc_field: '_id'});
User.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('User', User);
  
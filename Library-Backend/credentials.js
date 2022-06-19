const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/librarydb')

const schema = mongoose.Schema

var CredentialSchema = new schema({
 username: String,
 email:String,
 regid : Number,
 password : String,
},{
 versionKey: false // You should be aware of the outcome after set to false
})

var credentialData = mongoose.model('credentials',CredentialSchema)
module.exports = credentialData
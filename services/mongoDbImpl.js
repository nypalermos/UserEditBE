const Db = require("./db");
const User = require("../models/User");
const mongoose = require('mongoose');
const {expect} = require("chai");

var userModel;

// Constructor
function MongoDbImpl(connectionString, userName, password)
{
    // always initialize all instance properties
    Db.call(this, connectionString, userName, password);
    //Get all of the default function implementations
    Object.setPrototypeOf(this, Db.prototype);
}


MongoDbImpl.prototype.initDatabase = async function()
{
    console.log(this.connectionString);
    await mongoose.connect(this.connectionString, { dbName: "demo" });

    if (userModel == undefined)
    {
        const userSchema = new mongoose.Schema(User.Schema);
        userModel = mongoose.model('User', userSchema);
    }
}

MongoDbImpl.prototype.closeDatabase = async function()
{
    return await mongoose.disconnect();
}

MongoDbImpl.prototype.getUser = async function(id)
{
    var result;

    // Find user by id
    await userModel.findOne({ 'Id': id }).clone().then((user) => {
        result = user;
    }).catch((err) => {
        console.log(err.Message);
    });

    return result;
}

MongoDbImpl.prototype.addUser = async function(user)
{
    await userModel.validate(user);

    var id = -1;

    // Add new user
    await userModel.create(user).then((ans) => {
        id = ans.Id;
    }).catch((err) => {
        console.log(err.Message);
    });

    return id;
}

// export the class
module.exports = MongoDbImpl;



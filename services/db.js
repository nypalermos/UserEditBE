// Constructor
const Console = require("console");

function Db(connectionString, userName, password)
{
    this.connectionString = connectionString;
    this.userName = userName;
    this.password = password;
}

Db.prototype.initDatabase = function(){ throw 'This method is not implemented!'; };
Db.prototype.closeDatabase = function(){ throw 'This method is not implemented!'; };

Db.prototype.get = function(id){ throw 'This method is not implemented!'; };
Db.prototype.store = function(item){ throw 'This method is not implemented!'; };
Db.prototype.logIt = function(it){ Console.log('I am logging this: ' + it); };

// export the class
module.exports = Db;